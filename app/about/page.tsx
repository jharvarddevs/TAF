import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StoryChapter, ChapterHeading, ChapterSubheading } from '@/components/StoryChapter';
import { SilhouetteScene } from '@/components/SilhouetteScene';
import { CTASection } from '@/components/CTASection';
import { Heart, BookOpen, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | The Acts Foundation',
  description: 'Learn about The Acts Foundation mission, inspired by Acts 20:35. We fight food insecurity in Philadelphia through faith-based community action.',
  openGraph: {
    title: 'About Us | The Acts Foundation',
    description: 'Learn about The Acts Foundation mission, inspired by Acts 20:35.',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <StoryChapter
        fullHeight
        bgColor="blue"
        className="flex items-center relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <SilhouetteScene scene="community" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6 text-white">
            It Is More Blessed to Give Than to Receive
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 italic mb-4">
            Acts 20:35
          </p>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
            This verse is the heartbeat of everything we do at The Acts Foundation
          </p>
        </div>
      </StoryChapter>

      <StoryChapter bgColor="white">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <ChapterHeading>Our Mission</ChapterHeading>
            <ChapterSubheading className="mx-auto text-gray-600">
              Fighting food insecurity through faith, action, and community
            </ChapterSubheading>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className="text-xl">
              The Acts Foundation was born from a simple yet powerful conviction: that we are called to serve &quot;the least of these&quot; with dignity, compassion, and practical support.
            </p>

            <p>
              In Philadelphia, food insecurity affects more than just empty stomachs—it impacts children&apos;s ability to learn, parents&apos; capacity to work, and seniors&apos; health and wellbeing. We believe that access to nutritious food is not a luxury but a basic human need.
            </p>

            <p>
              Our approach is rooted in relationship, not just relief. We don&apos;t simply hand out food—we walk alongside families, connecting them to resources, building community, and creating pathways to lasting stability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart size={40} className="text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Compassion</h3>
              <p className="text-gray-600 leading-relaxed">
                Every person deserves to be treated with dignity and respect
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-hope-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users size={40} className="text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe transformation happens through relationship
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen size={40} className="text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Faith in Action</h3>
              <p className="text-gray-600 leading-relaxed">
                Our faith compels us to serve with excellence and integrity
              </p>
            </div>
          </div>
        </div>
      </StoryChapter>

      <StoryChapter bgColor="soft-blue">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <ChapterHeading className="text-primary-blue">The Acts 20:35 Inspiration</ChapterHeading>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <blockquote className="text-2xl md:text-3xl font-heading text-center text-gray-800 leading-relaxed mb-8">
              &quot;In everything I did, I showed you that by this kind of hard work we must help the weak, remembering the words the Lord Jesus himself said: &apos;It is more blessed to give than to receive.&apos;&quot;
            </blockquote>
            <p className="text-center text-xl text-primary-blue font-semibold">
              — Acts 20:35 (NIV)
            </p>

            <div className="mt-12 prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                This verse captures the heart of our work. The Apostle Paul reminded the Ephesian elders that true blessing comes not from receiving, but from giving—from using our strength to help those who are weak, our abundance to support those in need.
              </p>

              <p>
                In a culture that often celebrates accumulation, Acts 20:35 calls us to a different way—the way of generosity, sacrifice, and selfless love. It reminds us that we experience God&apos;s blessing most fully when we become a blessing to others.
              </p>

              <p className="font-semibold text-primary-blue">
                This is why we invite our supporters to join the Acts 20:35 Circle—a community of people who have discovered the profound joy that comes from giving.
              </p>
            </div>
          </div>
        </div>
      </StoryChapter>

      <StoryChapter bgColor="white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <ChapterHeading>Our Impact</ChapterHeading>
            <ChapterSubheading className="mx-auto text-gray-600">
              What we&apos;ve accomplished together
            </ChapterSubheading>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary-blue text-white rounded-2xl p-8">
              <div className="text-5xl font-heading font-bold mb-2">1,000+</div>
              <div className="text-xl font-semibold mb-3">Families Served Monthly</div>
              <p className="opacity-90 leading-relaxed">
                Through regular food distributions, emergency support, and community outreach programs
              </p>
            </div>

            <div className="bg-hope-green text-white rounded-2xl p-8">
              <div className="text-5xl font-heading font-bold mb-2">24 Hours</div>
              <div className="text-xl font-semibold mb-3">Emergency Response Time</div>
              <p className="opacity-90 leading-relaxed">
                Rapid support for families facing sudden crises and urgent food needs
              </p>
            </div>

            <div className="bg-purple-500 text-white rounded-2xl p-8">
              <div className="text-5xl font-heading font-bold mb-2">15+</div>
              <div className="text-xl font-semibold mb-3">Neighborhoods Served</div>
              <p className="opacity-90 leading-relaxed">
                Reaching communities across Philadelphia with dignity and compassion
              </p>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <div className="text-5xl font-heading font-bold mb-2">100%</div>
              <div className="text-xl font-semibold mb-3">Community-Focused</div>
              <p className="opacity-90 leading-relaxed">
                Every donation directly supports Philadelphia families in need
              </p>
            </div>
          </div>
        </div>
      </StoryChapter>

      <StoryChapter bgColor="blue">
        <CTASection
          title="Join Us in This Mission"
          description="Together, we can ensure that no family in Philadelphia goes hungry."
          primaryButton={{ text: 'Donate Now', href: '/donate/' }}
          secondaryButton={{ text: 'Volunteer With Us', href: '/volunteer/' }}
          variant="blue"
        />
      </StoryChapter>

      <Footer />
    </main>
  );
}
