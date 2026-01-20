import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StoryChapter, ChapterHeading, ChapterSubheading } from '@/components/StoryChapter';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CTASection } from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'FAQ | The Acts Foundation',
  description: 'Frequently asked questions about The Acts Foundation, our programs, and how to get involved.',
  openGraph: {
    title: 'FAQ | The Acts Foundation',
    description: 'Frequently asked questions about our mission and programs.',
  },
};

const faqs = [
  {
    question: 'How does The Acts Foundation help families?',
    answer: 'We provide three core services: regular food distributions to families in need, emergency food packages delivered within 24 hours for families in crisis, and community outreach that connects families to long-term resources and support. Every service is delivered with dignity and respect.'
  },
  {
    question: 'Who can receive help from The Acts Foundation?',
    answer: 'Any Philadelphia-area family experiencing food insecurity can receive assistance. We don\'t require income verification or lengthy applications. If you need food support, we\'re here to help—no barriers, no shame, just compassionate assistance.'
  },
  {
    question: 'How do I donate?',
    answer: 'You can donate online via PayPal (one-time or monthly), send a check to our Philadelphia office, or use Zelle. Visit our Donate page for all options. Monthly donors are recognized in our Acts 20:35 Circle.'
  },
  {
    question: 'Is my donation tax-deductible?',
    answer: 'Yes. The Acts Foundation is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the full extent allowed by law. You\'ll receive a receipt for your records.'
  },
  {
    question: 'What percentage of my donation goes directly to programs?',
    answer: 'Approximately 85% of donations fund direct programs (food, emergency support, outreach), 10% covers operations (storage, transport, coordination), and 5% goes to minimal administrative costs. We\'re committed to maximizing every dollar\'s impact.'
  },
  {
    question: 'How can I volunteer?',
    answer: 'We welcome volunteers for food distribution events, delivery support, community outreach, and administrative tasks. Visit our Volunteer page to complete a quick quiz that helps us match you with the right opportunities based on your availability and interests.'
  },
  {
    question: 'What is the Acts 20:35 Circle?',
    answer: 'The Acts 20:35 Circle recognizes monthly donors and major supporters who embody the spirit of Acts 20:35—"It is more blessed to give than to receive." Members receive recognition on our donor wall, quarterly impact reports, and the joy of sustained giving.'
  },
  {
    question: 'What neighborhoods do you serve?',
    answer: 'We serve 15+ neighborhoods across Philadelphia, with a focus on areas experiencing high rates of food insecurity. Our community outreach team continuously identifies underserved communities and expands our reach to meet the need.'
  },
  {
    question: 'How do families access emergency food support?',
    answer: 'Families can contact us directly by phone (609-309-4280) or email. We respond to emergency requests within 24 hours, providing comprehensive food packages that include 7-14 days of groceries plus connections to additional resources.'
  },
  {
    question: 'Can churches or community groups partner with you?',
    answer: 'Yes! We welcome partnerships with churches, community organizations, and businesses. Contact us to discuss how we can work together to serve Philadelphia families.'
  },
  {
    question: 'What makes The Acts Foundation different?',
    answer: 'We combine immediate relief with relationship-based support. We don\'t just hand out food—we walk alongside families, building community and connecting people to resources that create lasting stability. Our faith-based approach means we serve with excellence, compassion, and dignity.'
  },
  {
    question: 'How can I request help for myself or someone I know?',
    answer: 'Call us at 609-309-4280 or email theactsfoundationtech@gmail.com. We\'ll respond quickly and compassionately to assess needs and provide appropriate support. All requests are handled confidentially.'
  },
];

export default function FAQPage() {
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
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Everything you need to know about The Acts Foundation
          </p>
        </div>
      </StoryChapter>

      <StoryChapter bgColor="white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <ChapterHeading>Your Questions Answered</ChapterHeading>
            <ChapterSubheading className="mx-auto text-gray-600">
              Find answers to common questions about our mission, programs, and how to get involved
            </ChapterSubheading>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-soft-blue rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left text-lg font-heading font-semibold text-gray-900 hover:text-primary-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </StoryChapter>

      <StoryChapter bgColor="soft-blue">
        <div className="max-w-4xl mx-auto text-center">
          <ChapterHeading className="text-primary-blue">Still Have Questions?</ChapterHeading>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            We&apos;re here to help. Reach out anytime.
          </p>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Phone:</strong>{' '}
                <a href="tel:609-309-4280" className="text-primary-blue hover:underline">
                  609-309-4280
                </a>
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:theactsfoundationtech@gmail.com"
                  className="text-primary-blue hover:underline"
                >
                  theactsfoundationtech@gmail.com
                </a>
              </p>
              <p>
                <strong>Address:</strong><br />
                3599 Nottingham Lane Unit K<br />
                Philadelphia, PA 19114
              </p>
            </div>
          </div>
        </div>
      </StoryChapter>

      <StoryChapter bgColor="blue">
        <CTASection
          title="Ready to Get Involved?"
          description="Whether you want to donate, volunteer, or receive support, we're here for you."
          primaryButton={{ text: 'Donate Now', href: '/donate/' }}
          secondaryButton={{ text: 'Contact Us', href: '/contact/' }}
          variant="blue"
        />
      </StoryChapter>

      <Footer />
    </main>
  );
}
