'use client';

import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function WhatsAppWidget() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    const whatsappNumber = "16093094280";
    const message = "Hi! I'd like to learn more about The Acts Foundation.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-6 active:scale-95 group",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
            )}
            aria-label="Chat on WhatsApp"
        >
            <div className="absolute -top-12 right-0 bg-white text-gray-900 px-4 py-2 rounded-xl text-sm font-semibold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
                Chat with us!
                <div className="absolute -bottom-1 right-6 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45" />
            </div>
            <MessageCircle size={32} fill="currentColor" className="relative z-10" />
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        </a>
    );
}
