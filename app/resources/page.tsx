import { Metadata } from 'next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ResourceCategory } from '@/components/resources/ResourceCategory';
import { LeadMagnet } from '@/components/resources/LeadMagnet';
import { DownloadCard } from '@/components/resources/DownloadCard';
import { ShareMission } from '@/components/resources/ShareMission';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import {
    Apple,
    CreditCard,
    Baby,
    AlertCircle,
    Search,
    Heart,
    Users,
    ArrowRight,
    ClipboardList,
    Clock,
    Sparkles,
    Megaphone,
    Handshake
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Free Resources | The Acts Foundation — Philadelphia Food Help & Support',
    description: 'Find free food assistance resources in Philadelphia, volunteer opportunities, and ways to support families in need. Inspired by Acts 20:35 because giving is better than receiving.',
    openGraph: {
        title: 'Free Resources | The Acts Foundation',
        description: 'Find free food assistance resources in Philadelphia, volunteer opportunities, and ways to support families in need.',
        url: 'https://theactsfoundation.org/resources',
        type: 'website',
    }
};

export default function ResourcesPage() {
    const familyResources = [
        {
            title: 'Food Help (Start Here)',
            icon: <Apple size={24} />,
            links: [
                { label: 'City of Philadelphia — Find Free Food', href: 'https://www.phila.gov/services/mental-physical-health/find-free-food-or-meals/' },
                { label: 'PA 211 Food Resources', href: 'https://www.pa211.org/food-resources/' },
                { label: 'Philabundance (Find Food)', href: 'https://www.philabundance.org/' },
                { label: 'Share Food Program', href: 'https://www.sharefoodprogram.org/' },
                { label: 'Healthy Minds Philly — Hunger Resources', href: 'https://healthymindsphilly.org/hunger-resources/' },
            ],
            description: 'The most direct and immediate resources for finding free meals and groceries in Philadelphia.'
        },
        {
            title: 'SNAP / EBT (Food Stamps)',
            icon: <CreditCard size={24} />,
            links: [
                { label: 'PA SNAP Info (Official)', href: 'https://www.pa.gov/services/dhs/apply-for-the-supplemental-nutrition-assistance-program-snap' },
                { label: 'COMPASS (Manage Benefits)', href: 'https://www.compass.state.pa.us' },
                { label: 'BenePhilly (Free Help Applying)', href: 'https://www.phila.gov/services/payments-assistance-taxes/financial-services-for-residents/get-free-help-applying-for-public-benefits/' },
            ],
            description: 'Long-term nutritional assistance programs for low-income individuals and families.'
        },
        {
            title: 'WIC (Women, Infants, Children)',
            icon: <Baby size={24} />,
            links: [
                { label: 'USDA WIC — Pennsylvania Contact', href: 'https://www.fns.usda.gov/contact/wic/pennsylvania' },
            ],
            description: 'Supplemental nutrition, healthcare referrals, and nutrition education for mothers and children.'
        },
        {
            title: 'Emergency Assistance',
            icon: <AlertCircle size={24} />,
            links: [
                { label: 'USDA TEFAP Program', href: 'https://www.fns.usda.gov/tefap' },
            ],
            description: 'Federal emergency food assistance program for those in immediate crisis.'
        },
        {
            title: 'Pantry Locator Tools',
            icon: <Search size={24} />,
            links: [
                { label: 'Plentiful Pantry Finder', href: 'https://plentiful.org' },
            ],
            description: 'Digital tools to find the closest food pantries operating in your zip code.'
        }
    ];

    return (
        <main className="min-h-screen">
            <Navigation variant="dark" />
            <div className="pt-24 min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="bg-primary-blue text-white py-16 md:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Free Resources</h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                            Finding help shouldn't be hard. Helping others should be simple.
                            Everything you need to get support or give back in Philadelphia.
                        </p>
                    </div>
                </section>

                {/* Main Content with Tabs */}
                <section className="py-12 md:py-20">
                    <div className="container mx-auto px-4">
                        <Tabs defaultValue="need-help" className="max-w-6xl mx-auto">
                            <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-12 p-1 bg-gray-100/80 rounded-2xl h-14">
                                <TabsTrigger
                                    value="need-help"
                                    className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-primary-blue data-[state=active]:shadow-sm font-semibold text-lg"
                                >
                                    I Need Help
                                </TabsTrigger>
                                <TabsTrigger
                                    value="want-help"
                                    className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-primary-blue data-[state=active]:shadow-sm font-semibold text-lg"
                                >
                                    I Want to Help
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="need-help" className="animate-in fade-in duration-500 space-y-16">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {familyResources.map((resource, i) => (
                                        <ResourceCategory key={i} {...resource} />
                                    ))}
                                </div>

                                {/* Downloads for Families */}
                                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                                        <div>
                                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2">Essential Guides</h2>
                                            <p className="text-gray-600">Download and print these resources for offline use.</p>
                                        </div>
                                        <div className="px-4 py-2 bg-soft-blue text-primary-blue rounded-full text-sm font-semibold">
                                            Free PDF Downloads
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                        <DownloadCard
                                            title="Philly Food Help Pack"
                                            description="Our comprehensive starter pack for families."
                                            filename="philly-food-help.pdf"
                                        />
                                        <DownloadCard
                                            title="7-Day Meal Plan"
                                            description="Simple, affordable meals for families of four."
                                            filename="meal-plan.pdf"
                                        />
                                        <DownloadCard
                                            title="SNAP/WIC Checklist"
                                            description="Everything you need to apply for benefits."
                                            filename="benefits-checklist.pdf"
                                        />
                                        <DownloadCard
                                            title="Emergency Grocery List"
                                            description="Vital items to have in your pantry."
                                            filename="emergency-list.pdf"
                                        />
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="want-help" className="animate-in fade-in duration-500 space-y-16">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                    {/* Volunteer Starter Kit */}
                                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-3 bg-red-50 text-accent-red rounded-xl">
                                                <ClipboardList size={28} />
                                            </div>
                                            <h2 className="text-3xl font-heading font-bold text-gray-900">Volunteer Starter Kit</h2>
                                        </div>
                                        <div className="space-y-6 mb-8">
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">Volunteer Roles</h4>
                                                <p className="text-gray-600">Food distribution, packing boxes, or administrative support.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">What to Expect</h4>
                                                <p className="text-gray-600">A high-energy, community-focused environment where every hand counts.</p>
                                            </div>
                                            <div className="flex items-center gap-2 text-primary-blue font-semibold">
                                                <Clock size={18} />
                                                <span>Flexible 2-4 hour shifts weekly or monthly.</span>
                                            </div>
                                        </div>
                                        <Button asChild size="xl" variant="cta-red" className="w-full">
                                            <Link href="/volunteer/">Volunteer Now</Link>
                                        </Button>
                                    </div>

                                    {/* Donate Smarter */}
                                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-3 bg-blue-50 text-primary-blue rounded-xl">
                                                <Heart size={28} />
                                            </div>
                                            <h2 className="text-3xl font-heading font-bold text-gray-900">Donate Smarter</h2>
                                        </div>
                                        <div className="space-y-4 mb-8 flex-grow">
                                            <div className="p-4 rounded-xl bg-gray-50 flex items-center justify-between">
                                                <span className="font-bold">$25</span>
                                                <span className="text-gray-600">Provide groceries for 1 family</span>
                                            </div>
                                            <div className="p-4 rounded-xl bg-gray-50 flex items-center justify-between">
                                                <span className="font-bold">$50</span>
                                                <span className="text-gray-600">Critical support for 2 families</span>
                                            </div>
                                            <div className="p-4 rounded-xl bg-gray-50 flex items-center justify-between">
                                                <span className="font-bold">$100</span>
                                                <span className="text-gray-600">Community distribution fund</span>
                                            </div>
                                            <p className="text-sm italic text-gray-500 mt-4 text-center">
                                                Monthly giving allows us to plan ahead and serve more consistently.
                                            </p>
                                        </div>
                                        <Button asChild size="xl" variant="default" className="w-full">
                                            <Link href="/donate/">Donate Now</Link>
                                        </Button>
                                    </div>
                                </div>

                                {/* Share the Mission */}
                                <ShareMission />

                                {/* Downloads for Supporters */}
                                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                                        <div>
                                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2">Supporter Resources</h2>
                                            <p className="text-gray-600">Share these guides with your friends, family, and colleagues.</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        <DownloadCard
                                            title="Sponsor a Family Guide"
                                            description="Learn how your recurring gift changes lives."
                                            filename="sponsor-guide.pdf"
                                        />
                                        <DownloadCard
                                            title="Volunteer Quick Start"
                                            description="Everything you need for your first day."
                                            filename="volunteer-start.pdf"
                                        />
                                        <DownloadCard
                                            title="Acts 20:35 Circle Guide"
                                            description="Our blueprint for high-impact giving."
                                            filename="giving-guide.pdf"
                                        />
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>

                        {/* Persistent Lead Magnet */}
                        <div className="mt-20 md:mt-32 max-w-6xl mx-auto">
                            <LeadMagnet />
                            <p className="text-center text-sm text-gray-500 mt-8">
                                More resources coming soon — check back monthly.
                            </p>
                        </div>
                    </div>
                </section>

                {/* JSON-LD for Search Engines */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Where can I find free food in Philadelphia?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "You can find free food through the City of Philadelphia's official locator, Philabundance, or the Share Food Program. We provide direct links to these services on our resources page."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How can I volunteer with The Acts Foundation?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Visit our volunteer section to see roles, what to expect, and sign up for shifts. We welcome all who want to serve the community."
                                    }
                                }
                            ]
                        })
                    }}
                />
            </div>
            <Footer />
        </main>
    );
}
