import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StoryChapter, ChapterHeading, ChapterSubheading } from '@/components/StoryChapter';
import { ImpactStatCard } from '@/components/ImpactStatCard';
import { CTASection } from '@/components/CTASection';
import { Heart, Users, Home, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Impact Stories | The Acts Foundation',
  description: 'See the real impact of your donations. Stories and metrics from families we serve across Philadelphia.',
  openGraph: {
    title: 'Impact Stories | The Acts Foundation',
    description: 'See the real impact of your donations through stories and metrics.',
  },
};

export default function ImpactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <StoryChapter
        fullHeight
        bgColor="blue"
        className="flex items-center"
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6 text-white">
            Your Impact in Action
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Real stories. Real metrics. Real transformation happening across Philadelphia.
          </p>
        </div>
      </StoryChapter>

      <StoryChapter bgColor="white">
        <div className="text-center mb-12">
          <ChapterHeading>By the Numbers</ChapterHeading>
          <ChapterSubheading className="mx-auto text-gray-600">
            The measurable impact of your generosity
          </ChapterSubheading>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <ImpactStatCard
            stat="1,000+"
            label="Families Served"
            description="Every month across Philadelphia"
            icon={Users}
            variant="highlight"
          />
          <ImpactStatCard
            stat="15+"
            label="Neighborhoods"
            description="Reached with food and support"
            icon={Home}
          />
          <ImpactStatCard
            stat="24hrs"
            label="Response Time"
            description="For emergency family support"
            icon={TrendingUp}
          />
          <ImpactStatCard
            stat="100%"
            label="Direct Impact"
            description="Donations support Philadelphia families"
            icon={Heart}
          />
        </div>
      </StoryChapter>

      <StoryChapter bgColor="soft-blue">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center mb-12">
            <ChapterHeading className="text-primary-blue">Impact Stories</ChapterHeading>
            <ChapterSubheading className="mx-auto text-gray-700">
              Behind every number is a person, a family, a story of hope
            </ChapterSubheading>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-hope-green/10 text-hope-green font-semibold rounded-full text-sm mb-4">
                Family Story
              </span>
            </div>
            <h3 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Maria&apos;s Story: From Crisis to Stability
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                When Maria lost her job due to unexpected health issues, she faced an impossible choice: pay rent or buy groceries. With two young children depending on her, the stress was overwhelming.
              </p>
              <p>
                Through The Acts Foundation&apos;s emergency support program, Maria received immediate food assistance within 24 hours. But more importantly, she was connected to a case worker who helped her navigate SNAP benefits, find job training resources, and access healthcare support.
              </p>
              <p className="font-semibold text-primary-blue">
                Today, Maria has stable employment and regularly volunteers at our food distributions, giving back to the community that supported her family in crisis.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-blue/10 text-primary-blue font-semibold rounded-full text-sm mb-4">
                Senior Story
              </span>
            </div>
            <h3 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Mr. Johnson: Dignity in the Golden Years
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                At 78, Mr. Johnson lived alone on a fixed income. After paying for medication and utilities, he often had less than $50 a month for groceries. He was too proud to ask for help and too weak to travel far for food assistance.
              </p>
              <p>
                Our community outreach team learned about Mr. Johnson through a concerned neighbor. We began delivering fresh groceries to his door every week—not just dropping off food, but checking in, building relationship, and ensuring he had what he needed.
              </p>
              <p className="font-semibold text-primary-blue">
                Mr. Johnson now looks forward to his weekly visits, and he&apos;s gained weight and improved health. More importantly, he no longer feels alone or forgotten.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-purple-500/10 text-purple-500 font-semibold rounded-full text-sm mb-4">
                Community Impact
              </span>
            </div>
            <h3 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              North Philadelphia: Building Community Networks
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                In one North Philadelphia neighborhood, we started with a single weekly food distribution. Over time, something remarkable happened: neighbors began looking out for each other.
              </p>
              <p>
                Families who received support began volunteering. Seniors started a community garden. Parents formed a mutual aid network to share childcare and resources. What began as food assistance became a movement of neighbors caring for neighbors.
              </p>
              <p className="font-semibold text-primary-blue">
                This is the power of community-focused support—it doesn&apos;t just meet immediate needs; it builds lasting networks of care and resilience.
              </p>
            </div>
          </div>
        </div>
      </StoryChapter>

      <StoryChapter bgColor="white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <ChapterHeading>Where Your Donation Goes</ChapterHeading>
            <ChapterSubheading className="mx-auto text-gray-600">
              Transparency matters. Here&apos;s exactly how we use your gifts.
            </ChapterSubheading>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-primary-blue text-white rounded-2xl p-8 text-center">
              <div className="text-5xl font-heading font-bold mb-3">85%</div>
              <h4 className="text-xl font-semibold mb-3">Direct Programs</h4>
              <p className="opacity-90 leading-relaxed text-sm">
                Food, emergency support, outreach
              </p>
            </div>

            <div className="bg-hope-green text-white rounded-2xl p-8 text-center">
              <div className="text-5xl font-heading font-bold mb-3">10%</div>
              <h4 className="text-xl font-semibold mb-3">Operations</h4>
              <p className="opacity-90 leading-relaxed text-sm">
                Storage, transport, coordination
              </p>
            </div>

            <div className="bg-purple-500 text-white rounded-2xl p-8 text-center">
              <div className="text-5xl font-heading font-bold mb-3">5%</div>
              <h4 className="text-xl font-semibold mb-3">Administration</h4>
              <p className="opacity-90 leading-relaxed text-sm">
                Minimal overhead, maximum impact
              </p>
            </div>
          </div>

          <div className="mt-12 bg-soft-blue rounded-2xl p-8 text-center">
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              Your $50 donation = 2 families fed = 8-10 people with groceries for a week
            </p>
          </div>
        </div>
      </StoryChapter>

      <StoryChapter bgColor="blue">
        <CTASection
          title="Be Part of These Stories"
          description="Your donation creates more stories of hope, stability, and community transformation."
          primaryButton={{ text: 'Donate Now', href: '/donate/' }}
          secondaryButton={{ text: 'Join Acts 20:35 Circle', href: '/acts-2035-circle/' }}
          variant="blue"
        />
      </StoryChapter>

      <Footer />
    </main>
  );
}
