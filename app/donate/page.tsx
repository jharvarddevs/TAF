import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StoryChapter, ChapterHeading, ChapterSubheading } from '@/components/StoryChapter';
import { DonationSimulator } from '@/components/DonationSimulator';
import { Button } from '@/components/ui/button';
import { Heart, CreditCard, CircleDollarSign, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Donate | The Acts Foundation',
  description: 'Make a difference today. Your donation provides food, dignity, and hope to Philadelphia families in need.',
  openGraph: {
    title: 'Donate | The Acts Foundation',
    description: 'Make a difference today. Your donation provides food, dignity, and hope.',
  },
};

export default function DonatePage() {
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
            Your Gift Becomes Hope
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
            Every donation directly supports Philadelphia families facing food insecurity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent-red hover:bg-red-700 text-white font-semibold text-lg px-8 py-6 h-auto"
            >
              <a href="#give" className="flex items-center gap-2">
                Give Now
                <Heart size={20} fill="currentColor" />
              </a>
            </Button>
          </div>
        </div>
      </StoryChapter>

      <StoryChapter id="give" bgColor="soft-blue">
        <div className="text-center mb-12">
          <ChapterHeading className="text-primary-blue">Choose Your Impact</ChapterHeading>
          <ChapterSubheading className="mx-auto text-gray-700">
            See how your gift transforms lives
          </ChapterSubheading>
        </div>

        <DonationSimulator />
      </StoryChapter>

      <StoryChapter bgColor="white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <ChapterHeading>Donation Options</ChapterHeading>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-primary-blue to-blue-600 text-white rounded-3xl p-8 shadow-2xl">
              <div className="mb-4">
                <CreditCard size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-heading font-bold mb-4">One-Time Gift</h3>
              <p className="mb-6 leading-relaxed opacity-90">
                Make an immediate impact with a one-time donation. Every dollar goes directly to serving Philadelphia families.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check size={20} strokeWidth={2.5} />
                  <span>Immediate impact</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={20} strokeWidth={2.5} />
                  <span>Tax-deductible</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={20} strokeWidth={2.5} />
                  <span>Secure processing</span>
                </li>
              </ul>
              <Button
                asChild
                size="lg"
                className="w-full bg-white text-primary-blue hover:bg-gray-100 font-semibold"
              >
                <a href="https://www.paypal.com/US/fundraiser/charity/4621992" target="_blank" rel="noopener noreferrer">
                  Give One-Time via PayPal
                </a>
              </Button>
            </div>

            <div className="bg-gradient-to-br from-hope-green to-green-600 text-white rounded-3xl p-8 shadow-2xl border-4 border-amber-400">
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <CircleDollarSign size={40} strokeWidth={1.5} />
                  <span className="bg-amber-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                    RECOMMENDED
                  </span>
                </div>
              </div>
              <h3 className="text-3xl font-heading font-bold mb-4">Monthly Partnership</h3>
              <p className="mb-6 leading-relaxed opacity-90">
                Become a sustaining partner with a monthly gift. Provide consistent support that families can depend on.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check size={20} strokeWidth={2.5} />
                  <span>Sustained impact</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={20} strokeWidth={2.5} />
                  <span>Acts 20:35 Circle recognition</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={20} strokeWidth={2.5} />
                  <span>Cancel anytime</span>
                </li>
              </ul>
              <Button
                asChild
                size="lg"
                className="w-full bg-white text-hope-green hover:bg-gray-100 font-semibold"
              >
                <a href="https://www.paypal.com/US/fundraiser/charity/4621992" target="_blank" rel="noopener noreferrer">
                  Give Monthly via PayPal
                </a>
              </Button>
            </div>
          </div>

          <div className="bg-primary-blue/10 border-2 border-primary-blue rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left space-y-4">
                <h4 className="text-2xl font-heading font-bold text-gray-900">
                  Other Ways to Give
                </h4>
                <div className="text-gray-700 space-y-3">
                  <p>
                    <strong>Checks payable to:</strong><br />
                    The Acts Foundation<br />
                    3599 Nottingham Lane Unit K, Philadelphia, PA 19114
                  </p>
                  <p className="pt-2">
                    <strong>Zelle:</strong><br />
                    theactsfoundationtech@gmail.com
                  </p>
                  <p className="pt-2">
                    <strong>Questions?</strong><br />
                    Contact us at 609-309-4280
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-inner border border-primary-blue/20">
                <h5 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CreditCard size={18} className="text-primary-blue" />
                  Scan to Give (PayPal)
                </h5>
                <div className="relative w-48 h-48 group">
                  <Image
                    src="/images/paypal-qr.png"
                    alt="PayPal QR Code"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute inset-0 bg-primary-blue/5 group-hover:bg-transparent transition-colors rounded-xl" />
                </div>
                <p className="text-xs text-gray-500 mt-4 italic">Quick & Secure One-Time Gift</p>
              </div>
            </div>
          </div>
        </div>
      </StoryChapter>

      <StoryChapter bgColor="soft-blue">
        <div className="max-w-4xl mx-auto text-center">
          <ChapterHeading className="text-primary-blue mb-6">Where Your Gift Goes</ChapterHeading>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-heading font-bold text-primary-blue mb-2">$25</div>
              <h4 className="font-semibold text-gray-900 mb-2">Feed 1 Family</h4>
              <p className="text-gray-600 text-sm">
                Provides a week of groceries for a family in need
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-heading font-bold text-hope-green mb-2">$50</div>
              <h4 className="font-semibold text-gray-900 mb-2">Feed 2 Families</h4>
              <p className="text-gray-600 text-sm">
                Help two families put food on the table
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-heading font-bold text-purple-500 mb-2">$100</div>
              <h4 className="font-semibold text-gray-900 mb-2">Emergency Package</h4>
              <p className="text-gray-600 text-sm">
                Comprehensive food assistance for families in crisis
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">
              Your Gift Becomes...
            </h3>
            <div className="space-y-4 text-left text-gray-700 leading-relaxed">
              <p className="flex items-center gap-3">
                <span className="text-2xl">🛒</span>
                <span><strong>Groceries</strong> — Fresh produce, proteins, and essentials</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-2xl">💪</span>
                <span><strong>Dignity</strong> — Respect and compassion for every family</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-2xl">✨</span>
                <span><strong>Hope</strong> — A pathway from crisis to stability</span>
              </p>
            </div>
          </div>
        </div>
      </StoryChapter>

      <StoryChapter bgColor="blue">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Join the Acts 20:35 Circle
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Monthly donors are recognized in our Acts 20:35 Circle—a community of people who believe giving is better than receiving.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6 h-auto"
          >
            <Link href="/acts-2035-circle/">
              Learn About Acts 20:35 Circle
            </Link>
          </Button>
        </div>
      </StoryChapter>

      <Footer />
    </main>
  );
}
