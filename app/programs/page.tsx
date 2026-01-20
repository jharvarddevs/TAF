import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StoryChapter, ChapterHeading, ChapterSubheading } from '@/components/StoryChapter';
import { CTASection } from '@/components/CTASection';
import { Package, Heart, Users, Clock, MapPin, Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Programs | The Acts Foundation',
  description: 'Learn about our food distribution, emergency support, and community outreach programs serving Philadelphia families.',
  openGraph: {
    title: 'Programs | The Acts Foundation',
    description: 'Learn about our food distribution, emergency support, and community outreach programs.',
  },
};

export default function ProgramsPage() {
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
            Programs That Transform Lives
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            From emergency relief to lasting community support, every program is designed with dignity and impact in mind
          </p>
        </div>
      </StoryChapter>

      <StoryChapter bgColor="white">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-20 h-20 bg-primary-blue rounded-2xl flex items-center justify-center mb-6">
                <Package size={40} className="text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
                Food Distribution Program
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our core program provides regular food distributions to families across Philadelphia. Fresh groceries, nutritious meals, and essential supplies—delivered with dignity and without barriers.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock size={24} className="text-primary-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Weekly Distributions</h4>
                    <p className="text-gray-600">Regular food access for families enrolled in our program</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={24} className="text-primary-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">15+ Locations</h4>
                    <p className="text-gray-600">Serving neighborhoods across Philadelphia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users size={24} className="text-primary-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">No Barriers</h4>
                    <p className="text-gray-600">Simple enrollment, no income verification required</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-soft-blue rounded-3xl p-8 h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-heading font-bold text-primary-blue mb-4">
                  1,000+
                </div>
                <p className="text-2xl text-gray-700 font-semibold">
                  Families Fed Monthly
                </p>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-gray-100 pt-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-soft-blue rounded-3xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-heading font-bold text-hope-green mb-4">
                    24 Hours
                  </div>
                  <p className="text-2xl text-gray-700 font-semibold">
                    Response Time
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-20 h-20 bg-hope-green rounded-2xl flex items-center justify-center mb-6">
                  <Heart size={40} className="text-white" strokeWidth={1.5} />
                </div>
                <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
                  Emergency Family Support
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  When crisis strikes, families need immediate help. Our emergency support program provides rapid response food packages and connects families to critical resources.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock size={24} className="text-hope-green flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Rapid Response</h4>
                      <p className="text-gray-600">Emergency food packages delivered within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Package size={24} className="text-hope-green flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Comprehensive Support</h4>
                      <p className="text-gray-600">7-14 days of groceries plus resource connections</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users size={24} className="text-hope-green flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Follow-Up Care</h4>
                      <p className="text-gray-600">Continued support and connection to long-term resources</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-gray-100 pt-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-20 h-20 bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
                  <Users size={40} className="text-white" strokeWidth={1.5} />
                </div>
                <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
                  Community Outreach
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Sustainable change requires more than emergency relief. Our community outreach program builds relationships, connects families to resources, and creates pathways to stability.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Heart size={24} className="text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Relationship-Based</h4>
                      <p className="text-gray-600">We walk alongside families, not just hand out food</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Home size={24} className="text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Resource Connection</h4>
                      <p className="text-gray-600">Linking families to housing, employment, and support services</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={24} className="text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Neighborhood Focus</h4>
                      <p className="text-gray-600">Building community networks and local support systems</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-soft-blue rounded-3xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-heading font-bold text-purple-500 mb-4">
                    15+
                  </div>
                  <p className="text-2xl text-gray-700 font-semibold">
                    Neighborhoods Served
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StoryChapter>

      <StoryChapter bgColor="soft-blue">
        <div className="max-w-4xl mx-auto text-center">
          <ChapterHeading className="text-primary-blue mb-6">How Programs Work Together</ChapterHeading>
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            Our integrated approach ensures families receive not just immediate relief, but pathways to lasting stability and community support.
          </p>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-left">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-blue text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-heading font-bold text-gray-900 mb-2">Immediate Relief</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Emergency food packages provide rapid response when families face crisis
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-hope-green text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-heading font-bold text-gray-900 mb-2">Consistent Support</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Regular food distributions ensure families have ongoing access to nutritious food
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-heading font-bold text-gray-900 mb-2">Lasting Change</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Community outreach builds relationships and connects families to resources that create stability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StoryChapter>

      <StoryChapter bgColor="blue">
        <CTASection
          title="Support Our Programs"
          description="Your donation directly funds the programs that are transforming Philadelphia families' lives."
          primaryButton={{ text: 'Donate Now', href: '/donate/' }}
          secondaryButton={{ text: 'See Our Impact', href: '/impact/' }}
          variant="blue"
        />
      </StoryChapter>

      <Footer />
    </main>
  );
}
