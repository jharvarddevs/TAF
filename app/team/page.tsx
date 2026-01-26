import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StoryChapter, ChapterHeading, ChapterSubheading } from '@/components/StoryChapter';
import { SilhouetteScene } from '@/components/SilhouetteScene';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Heart, Users, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Our Team | The Acts Foundation',
    description: 'Meet the leadership team behind The Acts Foundation—serving Philadelphia families and fighting food insecurity through compassion, faith, and action.',
    openGraph: {
        title: 'Our Team | The Acts Foundation',
        description: 'Meet the leadership team behind The Acts Foundation.',
    },
};

const leadershipTeam = [
    {
        name: 'Juan C. Colamarco-Negrete',
        title: 'Founder & President',
        bio: 'Leads The Acts Foundation with a mission-first vision rooted in compassion, consistency, and community impact.',
    },
    {
        name: 'Juan J. Gabriel',
        title: 'Vice President',
        bio: 'Supports growth, operations, and execution—helping the foundation serve more families while staying grounded in purpose.',
    },
    {
        name: 'Stephanie M. Piris',
        title: 'Secretary',
        bio: 'Provides structure, coordination, and organizational support to help the foundation operate with excellence and accountability.',
    },
];

export default function TeamPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "NonprofitOrganization",
        "name": "The Acts Foundation",
        "url": "https://theactsfoundation.org",
        "logo": "https://theactsfoundation.org/taf_logo_transparent.png",
        "description": "Fighting food insecurity in Philadelphia through faith, action, and community support.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Philadelphia",
            "addressRegion": "PA",
            "postalCode": "19114",
            "addressCountry": "US"
        }
    };

    return (
        <main className="min-h-screen bg-white">
            <Navigation variant="dark" />

            {/* Hero Section */}
            <StoryChapter bgColor="white" className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <SilhouetteScene scene="city" />
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <ChapterHeading className="mb-4">Our Team</ChapterHeading>
                    <ChapterSubheading className="text-primary-blue font-semibold mb-8 mx-auto">
                        A team built on service, guided by faith, and committed to impact in Philadelphia.
                    </ChapterSubheading>
                    <div className="bg-soft-blue/30 p-8 rounded-3xl border border-primary-blue/10">
                        <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                            The Acts Foundation is led by servant-minded individuals who believe in <strong>Acts 20:35</strong>:
                            <span className="block mt-2 italic text-primary-blue font-serif">"Because giving is better than receiving."</span>
                        </p>
                        <p className="text-lg text-gray-600 mt-6 leading-relaxed">
                            Together, we work to fight food insecurity and support families across Philadelphia with dignity and consistency.
                        </p>
                    </div>
                </div>
            </StoryChapter>

            {/* Leadership Section */}
            <StoryChapter bgColor="soft-blue" className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Leadership Team</h2>
                        <div className="w-24 h-1 bg-primary-blue mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {leadershipTeam.map((member) => (
                            <Card key={member.name} className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 group bg-white rounded-3xl overflow-hidden">
                                <CardHeader className="pb-4">
                                    <div className="flex justify-between items-start mb-4">
                                        <Badge variant="secondary" className="bg-primary-blue/10 text-primary-blue hover:bg-primary-blue/20 px-3 py-1">
                                            Leadership
                                        </Badge>
                                        <div className="p-2 bg-soft-blue rounded-xl text-primary-blue group-hover:scale-110 transition-transform">
                                            <Shield size={20} />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-heading font-bold text-gray-900">{member.name}</h3>
                                    <p className="text-primary-blue font-semibold">{member.title}</p>
                                </CardHeader>
                                <CardContent>
                                    <Separator className="mb-6 opacity-50" />
                                    <p className="text-gray-600 leading-relaxed italic">
                                        "{member.bio}"
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </StoryChapter>

            {/* Board Section */}
            <StoryChapter bgColor="white" className="py-24 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none rotate-12">
                    <SilhouetteScene scene="city" />
                </div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <div className="bg-gradient-to-br from-primary-blue to-blue-900 text-white rounded-[3rem] p-12 md:p-16 shadow-2xl">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                                <Users size={32} className="text-white" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold">Board of Directors</h2>
                        </div>

                        <div className="space-y-6 text-lg text-blue-50/90 leading-relaxed">
                            <p>
                                Our Board provides oversight and guidance to ensure long-term sustainability and strong stewardship of the foundation's resources.
                            </p>
                            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-md inline-block">
                                <p className="font-semibold text-white flex items-center gap-3">
                                    <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                                    Directors serve 3-year terms with re-election benefits.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </StoryChapter>

            {/* CTA Section */}
            <StoryChapter bgColor="soft-blue" className="py-24 border-t border-gray-100">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                            Want to be part of the mission?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Every volunteer, donor, and supporter helps us serve Philadelphia families in real and lasting ways.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch">
                        <Button asChild size="xl" className="bg-primary-blue hover:bg-blue-700 text-white font-bold h-16 px-8 text-lg rounded-2xl">
                            <Link href="/volunteer/" className="flex items-center gap-2">
                                Volunteer
                                <Users size={20} />
                            </Link>
                        </Button>

                        <Button asChild size="xl" variant="cta-red" className="h-16 px-8 text-lg rounded-2xl">
                            <a href="https://www.paypal.com/US/fundraiser/charity/4621992" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                Donate
                                <Heart size={20} fill="currentColor" />
                            </a>
                        </Button>

                        <Button asChild size="xl" variant="outline" className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white h-16 px-8 text-lg rounded-2xl font-bold">
                            <Link href="/donate/#acts-circle" className="flex items-center gap-2">
                                Join the Acts 20:35 Circle
                                <ArrowRight size={20} />
                            </Link>
                        </Button>
                    </div>
                </div>
            </StoryChapter>

            <Footer />

            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </main>
    );
}
