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
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 rounded-3xl shadow-2xl">
            <div className="flex items-center gap-4 border-b sm:border-b-0 sm:border-r border-white/10 pb-4 sm:pb-0 sm:pr-8">
                <div className="relative">
                    <div className="w-12 h-12 bg-hope-green/20 rounded-2xl flex items-center justify-center text-hope-green">
                        <Box size={24} />
                    </div>
                    <motion.div
                        className="absolute -top-1 -right-1 w-3 h-3 bg-hope-green rounded-full border-2 border-primary-blue"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
                <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="w-1.5 h-1.5 bg-hope-green rounded-full animate-pulse" />
                        <span className="text-[10px] uppercase tracking-widest text-hope-green font-bold">Live Impact</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                        <Counter value={count} />
                        <span className="text-white/60 text-xs font-medium uppercase tracking-tighter">Boxes</span>
                    </div>
                    <p className="text-white/40 text-[10px] font-medium leading-none">Delivered this month</p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-red/20 rounded-2xl flex items-center justify-center text-accent-red">
                    <Users size={24} />
                </div>
                <div>
                    <div className="flex items-baseline gap-1 mb-0.5">
                        <Counter value={Math.floor(count * 0.85)} />
                        <span className="text-white/60 text-xs font-medium uppercase tracking-tighter">Families</span>
                    </div>
                    <p className="text-white/40 text-[10px] font-medium leading-none">Reached & Supported</p>
                </div>
            </div>
        </div>
    );
}

function Counter({ value }: { value: number }) {
    const [displayValue, setDisplayValue] = useState(value);

    useEffect(() => {
        const controls = animate(displayValue, value, {
            duration: 1.5,
            onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
            ease: "easeOut"
        });
        return () => controls.stop();
    }, [value]);

    return (
        <span className="text-2xl font-heading font-black text-white tabular-nums tracking-tighter">
            {displayValue}
        </span>
    );
}
