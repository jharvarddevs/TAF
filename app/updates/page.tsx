'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StoryChapter, ChapterHeading, ChapterSubheading } from '@/components/StoryChapter';
import { LatestUpdates } from '@/components/LatestUpdates';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function UpdatesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navigation />

            <div className="pt-24 pb-12 bg-gray-900 text-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-soft-blue hover:text-white transition-colors mb-8 group"
                    >
                        <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                        Back to Home
                    </Link>

                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-hope-green font-bold text-sm uppercase tracking-wider mb-4">
                            <Sparkles size={20} />
                            <span>Real-Time Impact</span>
                        </div>
                        <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                            Our Community <span className="text-hope-green italic">Stories</span>
                        </h1>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Follow our daily journey across Philadelphia as we fight food insecurity,
                            one family at a time. Automated updates directly from our field activities.
                        </p>
                    </div>
                </div>
            </div>

            <StoryChapter id="all-stories" bgColor="white">
                <LatestUpdates />
            </StoryChapter>

            <div className="bg-soft-blue/20 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-heading font-bold text-3xl mb-6 text-gray-900">
                        Want to see these stories in your feed?
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button asChild size="xl" className="bg-[#1877F2] hover:bg-[#1877F2]/90">
                            <a href="https://www.facebook.com/TheActsFoundation.org" target="_blank" rel="noopener noreferrer">
                                Follow on Facebook
                            </a>
                        </Button>
                        <Button asChild size="xl" className="bg-[#E4405F] hover:bg-[#E4405F]/90">
                            <a href="https://www.instagram.com/theactsfoundation_2035" target="_blank" rel="noopener noreferrer">
                                Follow on Instagram
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
