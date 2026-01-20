import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StoryChapter, ChapterHeading, ChapterSubheading } from '@/components/StoryChapter';
import { DonorWall, Donor } from '@/components/DonorWall';
import { CTASection } from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Acts 20:35 Circle | The Acts Foundation',
  description: 'Join the Acts 20:35 Circle and be recognized for believing that giving is better than receiving.',
  openGraph: {
    title: 'Acts 20:35 Circle | The Acts Foundation',
    description: 'Join the Acts 20:35 Circle - a community of generous givers.',
  },
};

const donors: Donor[] = [
  { id: '1', name: 'Sarah M.', isAnonymous: false, city: 'Philadelphia, PA', badgeLevel: 'family-sponsor', message: 'So grateful to be part of this mission.', createdAt: '2024-01-15' },
  { id: '2', name: 'Anonymous', isAnonymous: true, city: 'New York, NY', badgeLevel: 'community-builder', message: 'Every family deserves dignity and hope.', createdAt: '2024-02-20' },
  { id: '3', name: 'Michael T.', isAnonymous: false, city: 'Camden, NJ', badgeLevel: 'philadelphia-champion', message: 'Proud to support Philadelphia families.', createdAt: '2023-12-10' },
  { id: '4', name: 'Jennifer L.', isAnonymous: false, city: 'Philadelphia, PA', badgeLevel: 'supporter', message: 'Thank you for being a blessing.', createdAt: '2024-03-05' },
  { id: '5', name: 'Anonymous', isAnonymous: true, city: 'Wilmington, DE', badgeLevel: 'family-sponsor', message: 'It is more blessed to give than to receive.', createdAt: '2024-01-28' },
  { id: '6', name: 'David K.', isAnonymous: false, city: 'Philadelphia, PA', badgeLevel: 'supporter', createdAt: '2024-02-14' },
  { id: '7', name: 'Rebecca S.', isAnonymous: false, city: 'Trenton, NJ', badgeLevel: 'community-builder', message: 'Honored to help Philadelphia families.', createdAt: '2024-03-12' },
  { id: '8', name: 'James P.', isAnonymous: false, city: 'Philadelphia, PA', badgeLevel: 'philadelphia-champion', message: 'Our city deserves better. Happy to contribute.', createdAt: '2023-11-20' },
  { id: '9', name: 'Anonymous', isAnonymous: true, badgeLevel: 'family-sponsor', createdAt: '2024-02-05' },
];

export default function Acts2035CirclePage() {
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
            Acts 20:35 Circle
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 italic mb-6">
            &quot;It is more blessed to give than to receive.&quot;
          </p>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
            Honoring those who believe in the transformative power of generosity
          </p>
        </div>
      </StoryChapter>

      <StoryChapter bgColor="white">
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
          <ChapterHeading>What Is the Acts 20:35 Circle?</ChapterHeading>
          <div className="text-lg text-gray-700 leading-relaxed space-y-4 text-left">
            <p>
              The Acts 20:35 Circle is our community of monthly donors and major supporters who have discovered the profound truth of Acts 20:35—that true blessing comes through giving, not receiving.
            </p>
            <p>
              When you join the Acts 20:35 Circle, you&apos;re not just making a donation—you&apos;re becoming part of a movement of people who are actively transforming Philadelphia through sustained generosity.
            </p>
            <p className="font-semibold text-primary-blue text-xl">
              Your consistent support provides the foundation families need to move from crisis to stability.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">💙</div>
            <h3 className="text-xl font-heading font-bold mb-2">Supporter</h3>
            <p className="text-sm opacity-90 mb-3">$25+ monthly or $300+ annually</p>
            <p className="text-xs opacity-75 leading-relaxed">
              Feed 1 family every month
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">🏡</div>
            <h3 className="text-xl font-heading font-bold mb-2">Family Sponsor</h3>
            <p className="text-sm opacity-90 mb-3">$50+ monthly or $600+ annually</p>
            <p className="text-xs opacity-75 leading-relaxed">
              Support 2 families consistently
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">⭐</div>
            <h3 className="text-xl font-heading font-bold mb-2">Community Builder</h3>
            <p className="text-sm opacity-90 mb-3">$100+ monthly or $1,200+ annually</p>
            <p className="text-xs opacity-75 leading-relaxed">
              Enable emergency response programs
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="text-xl font-heading font-bold mb-2">Philadelphia Champion</h3>
            <p className="text-sm opacity-90 mb-3">$250+ monthly or $3,000+ annually</p>
            <p className="text-xs opacity-75 leading-relaxed">
              Sponsor distribution events
            </p>
          </div>
        </div>
      </StoryChapter>

      <StoryChapter bgColor="soft-blue">
        <div className="text-center mb-12">
          <ChapterHeading className="text-primary-blue">Our Circle of Givers</ChapterHeading>
          <ChapterSubheading className="mx-auto text-gray-700">
            Thank you to these incredible supporters who make our work possible
          </ChapterSubheading>
        </div>

        <DonorWall donors={donors} showFilters={true} />
      </StoryChapter>

      <StoryChapter bgColor="white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <ChapterHeading>Benefits of Joining</ChapterHeading>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-soft-blue rounded-2xl p-8 border-2 border-primary-blue/20">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Recognition</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue mt-1">✓</span>
                  <span>Listed on our donor recognition wall</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue mt-1">✓</span>
                  <span>Badge level recognition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue mt-1">✓</span>
                  <span>Option to include personal message</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-blue mt-1">✓</span>
                  <span>Anonymous giving option available</span>
                </li>
              </ul>
            </div>

            <div className="bg-soft-blue rounded-2xl p-8 border-2 border-primary-blue/20">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Impact</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-hope-green mt-1">✓</span>
                  <span>Quarterly impact reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-hope-green mt-1">✓</span>
                  <span>Stories from families you&apos;ve helped</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-hope-green mt-1">✓</span>
                  <span>Volunteer opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-hope-green mt-1">✓</span>
                  <span>Tax receipts for all donations</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-primary-blue text-white rounded-3xl p-8 text-center">
            <h3 className="text-3xl font-heading font-bold mb-4">
              The Best Part?
            </h3>
            <p className="text-xl leading-relaxed opacity-90">
              You&apos;ll experience the joy and blessing that comes from consistent, generous giving—just as Acts 20:35 promises.
            </p>
          </div>
        </div>
      </StoryChapter>

      <StoryChapter bgColor="blue">
        <CTASection
          title="Join the Acts 20:35 Circle Today"
          description="Become part of a community committed to transforming Philadelphia through sustained generosity."
          primaryButton={{ text: 'Give Monthly', href: '/donate/' }}
          secondaryButton={{ text: 'Make One-Time Gift', href: '/donate/' }}
          variant="blue"
        />
      </StoryChapter>

      <Footer />
    </main>
  );
}
