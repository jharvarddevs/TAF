'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useTransform, animate } from 'framer-motion';
import { Box, Users, Zap } from 'lucide-react';

export function LiveImpactCounter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const calculateImpact = () => {
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth();
            const day = now.getDate();
            const hour = now.getHours();
            const minute = now.getMinutes();
            const second = now.getSeconds();

            // Total days in current month
            const daysInMonth = new Date(year, month + 1, 0).getDate();

            // Target: 1000 boxes by end of month
            const monthlyTarget = 1000;

            // Progress calculation
            // 1. Progress from completed days
            const daysProgress = (day - 1) / daysInMonth;

            // 2. Progress within the current day (smooth growth)
            const daySeconds = 24 * 60 * 60;
            const currentDaySeconds = (hour * 3600) + (minute * 60) + second;
            const intraDayProgress = (currentDaySeconds / daySeconds) * (1 / daysInMonth);

            const totalProgress = daysProgress + intraDayProgress;

            // Final simulated count
            return Math.max(12, Math.floor(totalProgress * monthlyTarget));
        };

        // Initial set
        setCount(calculateImpact());

        // Update every few seconds for "live" feel
        const timer = setInterval(() => {
            setCount(calculateImpact());
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-12 bg-white/12 backdrop-blur-xl border border-white/20 p-6 sm:p-8 rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.6)]">
            <div className="flex items-center gap-5 sm:border-r border-white/10 sm:pr-12 pb-6 sm:pb-0">
                <div className="relative">
                    <div className="w-16 h-16 bg-hope-green/20 rounded-2xl flex items-center justify-center text-hope-green shadow-inner">
                        <Box size={32} strokeWidth={1.5} />
                    </div>
                    <motion.div
                        className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-hope-green rounded-full border-[3px] border-[#0F172A]"
                        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                    />
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="w-1.5 h-1.5 bg-hope-green rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#4ade80] font-bold">Live Impact</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Counter value={count} />
                        <span className="text-white/90 text-sm font-heading font-bold uppercase tracking-widest mt-1.5">Boxes</span>
                    </div>
                    <p className="text-white/60 text-[10px] font-medium tracking-wide">Delivered this month</p>
                </div>
            </div>

            <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-accent-red/20 rounded-2xl flex items-center justify-center text-accent-red shadow-inner">
                    <Users size={32} strokeWidth={1.5} />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <Counter value={Math.floor(count * 0.85)} />
                        <span className="text-white/90 text-sm font-heading font-bold uppercase tracking-widest mt-1.5">Families</span>
                    </div>
                    <p className="text-white/60 text-[10px] font-medium tracking-wide">Reached & Supported</p>
                </div>
            </div>
        </div>
    );
}

function Counter({ value }: { value: number }) {
    const [displayValue, setDisplayValue] = useState(value);

    useEffect(() => {
        const controls = animate(displayValue, value, {
            duration: 2,
            onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
            ease: "easeOut"
        });
        return () => controls.stop();
    }, [value]);

    return (
        <span className="text-4xl sm:text-5xl font-heading font-black text-white tabular-nums tracking-tighter drop-shadow-lg">
            {displayValue.toLocaleString()}
        </span>
    );
}
