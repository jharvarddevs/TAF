import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StoryChapter, ChapterHeading, ChapterSubheading } from '@/components/StoryChapter';
import { SilhouetteScene } from '@/components/SilhouetteScene';
import { ImpactStatCard } from '@/components/ImpactStatCard';
import { DonationSimulator } from '@/components/DonationSimulator';
import { DonorWall, Donor } from '@/components/DonorWall';
import { LiveImpactCounter } from '@/components/LiveImpactCounter';
import { LiveActivityToast } from '@/components/LiveActivityToast';
import { LatestUpdates } from '@/components/LatestUpdates';
import { ArrowRight, Heart, Users, Package, MapPin, Sparkles } from 'lucide-react';

const sampleDonors: Donor[] = [
  {
    id: '1',
    name: 'Sarah M.',
    isAnonymous: false,
    city: 'Philadelphia, PA',
    badgeLevel: 'family-sponsor',
    message: 'So grateful to be part of this mission.',
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    name: 'Anonymous',
    isAnonymous: true,
    city: 'New York, NY',
    badgeLevel: 'community-builder',
    message: 'Every family deserves dignity and hope.',
    createdAt: '2024-02-20'
  },
  {
    id: '3',
    name: 'Michael T.',
    isAnonymous: false,
    city: 'Camden, NJ',
    badgeLevel: 'philadelphia-champion',
    message: 'Proud to support Philadelphia families.',
    createdAt: '2023-12-10'
  },
  {
    id: '4',
    name: 'Jennifer L.',
    isAnonymous: false,
    city: 'Philadelphia, PA',
    badgeLevel: 'supporter',
    message: 'Thank you for being a blessing to our community.',
    createdAt: '2024-03-05'
  },
  {
    id: '5',
    name: 'Anonymous',
    isAnonymous: true,
    city: 'Wilmington, DE',
    badgeLevel: 'family-sponsor',
    message: 'It is more blessed to give than to receive.',
    createdAt: '2024-01-28'
  },
  {
    id: '6',
    name: 'David K.',
    isAnonymous: false,
    city: 'Philadelphia, PA',
    badgeLevel: 'supporter',
    createdAt: '2024-02-14'
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <StoryChapter
        id="hero"
        fullHeight
        bgColor="blue"
        className="flex items-center relative overflow-hidden pt-28 md:pt-0"
      >
        <div className="absolute inset-0 opacity-10">
          <SilhouetteScene scene="city" />
        </div>
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6 text-white">
              Fighting Food Insecurity in Philadelphia
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              The Acts Foundation serves <strong>1,000+ families monthly</strong> through food support, outreach, and faith in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="xl"
                variant="cta-red"
              >
                <a href="https://www.paypal.com/US/fundraiser/charity/4621992" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Donate Now
                  <Heart size={20} fill="currentColor" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white hover:text-primary-blue font-semibold"
              >
                <Link href="#need">Explore the Story</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center lg:items-end">
            <div className="lg:mr-12 xl:mr-24 z-20">
              <LiveImpactCounter />
            </div>
            {/* Repositioned family silhouette to prevent pushing counter down */}
            <div className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
              <SilhouetteScene scene="family" className="h-[500px]" />
            </div>
          </div>
        </div>
      </StoryChapter>

      <StoryChapter id="need" bgColor="white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <ChapterHeading>The Need Has a Face</ChapterHeading>

          <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-gray-700">
            <p className="font-semibold text-primary-blue">
              Hunger doesn&apos;t always look like hunger.
            </p>
            <p>
              Sometimes it looks like a parent skipping meals so their children can eat.
            </p>
            <p>
              Sometimes it looks like a child going to school without breakfast, unable to focus on learning.
            </p>
            <p>
              Sometimes it looks like a senior choosing between medication and groceries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <ImpactStatCard
              stat="1 in 8"
              label="Philadelphia households"
              description="Experience food insecurity regularly"
              variant="highlight"
            />
            <ImpactStatCard
              stat="1 in 4"
              label="Children affected"
              description="Don't know where their next meal will come from"
            />
            <ImpactStatCard
              stat="40%"
              label="Families in poverty"
              description="Face impossible choices between rent and food"
            />
          </div>

          <p className="text-sm text-gray-500 italic mt-8">
            Sources: Feeding America, USDA Food Security Reports
          </p>
        </div>
      </StoryChapter>

      <StoryChapter id="philadelphia" bgColor="soft-blue">
        <div className="text-center mb-12">
          <ChapterHeading className="text-primary-blue">
            A Walk Through Philadelphia
          </ChapterHeading>
          <ChapterSubheading className="text-gray-700 mx-auto">
            Every neighborhood has a story. Every story needs your help.
          </ChapterSubheading>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: '🍎', title: 'Food Access', stat: '10:1 ratio', desc: 'Corner stores vs supermarkets' },
            { icon: '👨‍👩‍👧', title: 'Families', stat: '30% struggle', desc: 'Working families in need' },
            { icon: '👵', title: 'Seniors', stat: '40% skip meals', desc: 'To afford medication' },
            { icon: '🚨', title: 'Emergency', stat: '24 hours', desc: 'Crisis response time' },
            { icon: '🤝', title: 'Outreach', stat: '1,000+', desc: 'Families served monthly' },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-primary-blue"
            >
              <div className="text-5xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <div className="text-2xl font-bold text-primary-blue mb-1">
                {item.stat}
              </div>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="xl"
            variant="default"
          >
            <Link href="/philadelphia/" className="flex items-center gap-2">
              Explore the City Hub
              <MapPin size={22} />
            </Link>
          </Button>
        </div>
      </StoryChapter>

      <StoryChapter id="how-we-help" bgColor="white">
        <div className="text-center mb-12">
          <ChapterHeading>This Is How We Help</ChapterHeading>
          <ChapterSubheading className="mx-auto text-gray-600">
            Direct action. Real impact. Lasting change.
          </ChapterSubheading>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-primary-blue to-blue-600 text-white rounded-3xl p-8 shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="mb-4">
              <Package size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-heading font-bold mb-4">
              Food Distribution
            </h3>
            <p className="leading-relaxed opacity-90">
              Fresh groceries delivered directly to families. No barriers. No shame. Just dignified support when it&apos;s needed most.
            </p>
          </div>

          <div className="bg-gradient-to-br from-hope-green to-green-600 text-white rounded-3xl p-8 shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="mb-4">
              <Heart size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-heading font-bold mb-4">
              Emergency Family Support
            </h3>
            <p className="leading-relaxed opacity-90">
              Rapid response for families in crisis. Within 24 hours, we provide emergency food packages and connect families to resources.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-3xl p-8 shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="mb-4">
              <Users size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-heading font-bold mb-4">
              Community Outreach
            </h3>
            <p className="leading-relaxed opacity-90">
              Building relationships that transform communities. We don&apos;t just give food—we walk alongside families toward lasting stability.
            </p>
          </div>
        </div>
      </StoryChapter>

      <StoryChapter id="impact-simulator" bgColor="soft-blue">
        <div className="text-center mb-12">
          <ChapterHeading className="text-primary-blue">
            Your Gift Transforms Lives
          </ChapterHeading>
          <ChapterSubheading className="mx-auto text-gray-700">
            See exactly how your donation creates real, measurable impact
          </ChapterSubheading>
        </div>

        <DonationSimulator />
      </StoryChapter>

      <StoryChapter id="latest-updates" bgColor="soft-blue">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl px-4 md:px-0">
            <div className="flex items-center gap-2 text-primary-blue font-bold text-sm uppercase tracking-wider mb-3">
              <Sparkles size={18} />
              <span>Community Stories</span>
            </div>
            <ChapterHeading className="text-left text-gray-900">
              Latest From The Field
            </ChapterHeading>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Real-time updates of our mission in action across Philadelphia.
              See how your support transforms lives every single day.
            </p>
          </div>
          <Button asChild variant="outline" size="lg" className="md:mb-2 border-primary-blue text-primary-blue hover:bg-primary-blue/5">
            <Link href="/updates/" className="flex items-center gap-2">
              View All Stories <ArrowRight size={18} />
            </Link>
          </Button>
        </div>

        <LatestUpdates />
      </StoryChapter>

      <StoryChapter id="acts-circle-preview" bgColor="white">
        <div className="text-center mb-12">
          <ChapterHeading>Acts 20:35 Circle</ChapterHeading>
          <ChapterSubheading className="mx-auto text-gray-600">
            Honoring those who believe giving is better than receiving
          </ChapterSubheading>
        </div>

        <DonorWall donors={sampleDonors.slice(0, 6)} showFilters={false} />

        <div className="text-center mt-12">
          <Button
            asChild
            size="xl"
            variant="default"
          >
            <Link href="/acts-2035-circle/" className="flex items-center gap-2">
              Join the Acts 20:35 Circle
              <ArrowRight size={22} />
            </Link>
          </Button>
        </div>
      </StoryChapter>

      <StoryChapter
        id="final-cta"
        bgColor="blue"
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <SilhouetteScene scene="hope" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Meet the need of the least of these.
          </h2>
          <p className="text-2xl md:text-3xl text-white/90 mb-4">
            Because giving is better than receiving.
          </p>
          <p className="text-xl text-white/80 italic mb-12">
            Acts 20:35
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="xl"
              variant="cta-red"
            >
              <Link href="/donate/" className="flex items-center gap-2">
                Donate Now
                <Heart size={20} fill="currentColor" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="border-white text-white hover:bg-white hover:text-primary-blue font-semibold"
            >
              <Link href="/volunteer/">Volunteer</Link>
            </Button>
          </div>
        </div>
      </StoryChapter>

      <Footer />
      <LiveActivityToast />
    </main>
  );
}
