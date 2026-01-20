'use client';

import { Megaphone, Sparkles, Share2, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ShareMission() {
    const shareText = "Philadelphia families are facing food insecurity. The Acts Foundation is serving 1,000+ families monthly. Join the mission: TheActsFoundation.org";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shareText);
        alert("Text copied!");
    };

    return (
        <div className="bg-soft-blue/30 rounded-3xl p-8 md:p-12 border border-blue-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <Megaphone size={24} className="text-primary-blue" />
                        <h3 className="text-2xl font-bold text-gray-900">Share the Mission</h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                        Raising awareness is just as powerful as donating. Use the template below to share our mission with your circle.
                    </p>
                    <div className="p-4 bg-white rounded-xl border-2 border-dashed border-blue-200 text-gray-700 italic relative group">
                        "{shareText}"
                        <button
                            className="absolute top-2 right-2 p-1 text-primary-blue opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={copyToClipboard}
                            aria-label="Copy to clipboard"
                        >
                            <Sparkles size={16} />
                        </button>
                    </div>
                    <div className="flex gap-4 mt-6">
                        <Button variant="outline" size="icon" className="rounded-full h-12 w-12 border-blue-200">
                            <Share2 size={20} />
                        </Button>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Handshake size={24} className="text-hope-green" />
                        <h3 className="text-2xl font-bold text-gray-900">Partner With Us</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {['Churches', 'Businesses', 'Schools', 'Groups'].map(p => (
                            <div key={p} className="p-3 bg-white rounded-lg border border-gray-100 text-center font-semibold text-gray-700">
                                {p}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild variant="default" className="flex-1">
                            <Link href="/contact/">Partner With Us</Link>
                        </Button>
                        <Button asChild variant="outline" className="flex-1">
                            <Link href="/acts-2035-circle/">Join Acts 20:35 Circle</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
