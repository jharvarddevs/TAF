'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, MapPin, X } from 'lucide-react';

const LOCATIONS = [
    { city: 'Philadelphia', state: 'PA' },
    { city: 'Cherry Hill', state: 'NJ' },
    { city: 'Wilmington', state: 'DE' },
    { city: 'Allentown', state: 'PA' },
    { city: 'Trenton', state: 'NJ' },
    { city: 'Bryn Mawr', state: 'PA' },
    { city: 'Camden', state: 'NJ' },
    { city: 'Norristown', state: 'PA' },
    { city: 'Upper Darby', state: 'PA' },
    { city: 'Reading', state: 'PA' },
    { city: 'Lancaster', state: 'PA' },
    { city: 'King of Prussia', state: 'PA' },
    { city: 'West Chester', state: 'PA' },
    { city: 'Media', state: 'PA' },
    { city: 'Princeton', state: 'NJ' },
];

export const LiveActivityToast: React.FC = () => {
    const [currentLocation, setCurrentLocation] = useState<{ city: string; state: string } | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const showToast = () => {
            const randomLocation = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
            setCurrentLocation(randomLocation);
            setIsVisible(true);

            // Hide after 6 seconds
            setTimeout(() => {
                setIsVisible(false);
            }, 6000);
        };

        // Initial delay
        const initialDelay = setTimeout(showToast, 5000);

        // Set interval for subsequent toasts (every 25-45 seconds)
        const interval = setInterval(() => {
            showToast();
        }, 35000);

        return () => {
            clearTimeout(initialDelay);
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="fixed bottom-6 left-6 z-[60] pointer-events-none">
            <AnimatePresence>
                {isVisible && currentLocation && (
                    <motion.div
                        initial={{ opacity: 0, x: -50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -20, scale: 0.95 }}
                        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                        className="pointer-events-auto bg-white/80 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-2xl flex items-start gap-3 max-w-xs group"
                    >
                        <div className="bg-primary-blue/10 p-2 rounded-lg text-primary-blue">
                            <Users size={20} />
                        </div>

                        <div className="flex-1">
                            <div className="flex items-center justify-between gap-2">
                                <span className="text-[10px] font-bold text-primary-blue/60 uppercase tracking-wider flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                    Live Activity
                                </span>
                                <button
                                    onClick={() => setIsVisible(false)}
                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <X size={14} />
                                </button>
                            </div>

                            <p className="text-sm text-gray-700 mt-1 leading-snug">
                                Someone from <span className="font-semibold text-gray-900">{currentLocation.city}, {currentLocation.state}</span> is visiting the site.
                            </p>

                            <div className="flex items-center gap-1 mt-2 text-[10px] text-gray-400">
                                <MapPin size={10} />
                                <span>Nearby Community Activity</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
