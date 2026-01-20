import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StoryChapter, ChapterHeading, ChapterSubheading } from '@/components/StoryChapter';
import { PhillyHubGrid } from '@/components/PhillyHubGrid';
import { CTASection } from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Philadelphia: One City, Many Stories | The Acts Foundation',
  description: 'Explore the neighborhoods and communities of Philadelphia facing food insecurity. Learn how The Acts Foundation serves families across the city.',
  openGraph: {
    title: 'Philadelphia: One City, Many Stories | The Acts Foundation',
    description: 'Explore the neighborhoods and communities of Philadelphia facing food insecurity.',
  },
};

export default function PhiladelphiaPage() {
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
            Philadelphia: One City. Many Stories.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Behind every statistic is a person. Behind every neighborhood is a community. Behind every challenge is an opportunity for hope.
          </p>
        </div>
      </StoryChapter>

      <StoryChapter bgColor="white">
        <div className="text-center mb-12">
          <ChapterHeading>The Stories Behind the Need</ChapterHeading>
          <ChapterSubheading className="mx-auto text-gray-600">
            Click on each area to learn more about the specific challenges and how you can help
          </ChapterSubheading>
        </div>

        <PhillyHubGrid />
      </StoryChapter>

      <StoryChapter bgColor="soft-blue">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <ChapterHeading className="text-primary-blue">Understanding Food Insecurity in Philadelphia</ChapterHeading>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                What Is Food Insecurity?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Food insecurity means lacking consistent access to enough nutritious food for an active, healthy life. It&apos;s not just about hunger—it&apos;s about the uncertainty of not knowing where your next meal will come from.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In Philadelphia, this affects working families, seniors on fixed incomes, and children who depend on school meals. The crisis is real, immediate, and solvable.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                The Philadelphia Challenge
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Philadelphia has one of the highest poverty rates among major U.S. cities. Many neighborhoods lack access to fresh, affordable food—creating food deserts where corner stores replace supermarkets.
              </p>
              <p className="text-gray-700 leading-relaxed">
                But this is also a city of resilience, community, and hope. When neighbors help neighbors, transformation happens.
              </p>
            </div>
          </div>

          <div className="bg-primary-blue text-white rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-heading font-bold mb-4">
              Every neighborhood deserves access to nutritious food.
            </h3>
            <p className="text-xl opacity-90">
              Your support makes that possible.
            </p>
          </div>
        </div>
      </StoryChapter>

      <StoryChapter bgColor="white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <ChapterHeading>Research & Sources</ChapterHeading>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Our work is informed by credible research and data from leading organizations in food security and community development.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary-blue">
              <h4 className="font-heading font-semibold text-lg text-gray-900 mb-2">
                Feeding America
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                National hunger-relief organization providing comprehensive data on food insecurity rates, demographics, and community impact across the United States.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary-blue">
              <h4 className="font-heading font-semibold text-lg text-gray-900 mb-2">
                USDA Food Security Reports
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Annual reports from the U.S. Department of Agriculture documenting household food security status, trends, and regional variations.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary-blue">
              <h4 className="font-heading font-semibold text-lg text-gray-900 mb-2">
                Greater Philadelphia Coalition Against Hunger
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Local research on Philadelphia-specific food access challenges, neighborhood-level data, and community-based solutions.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary-blue">
              <h4 className="font-heading font-semibold text-lg text-gray-900 mb-2">
                Philadelphia Department of Public Health
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Data on food deserts, health outcomes related to food access, and community health initiatives across Philadelphia neighborhoods.
              </p>
            </div>
          </div>
        </div>
      </StoryChapter>

      <StoryChapter bgColor="blue">
        <CTASection
          title="Be Part of Philadelphia's Story"
          description="Your donation directly supports families in the neighborhoods you just explored."
          primaryButton={{ text: 'Donate Now', href: '/donate/' }}
          secondaryButton={{ text: 'Learn About Our Programs', href: '/programs/' }}
          variant="blue"
        />
      </StoryChapter>

      <Footer />
    </main>
  );
}
