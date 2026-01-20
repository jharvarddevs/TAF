'use client';

import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StoryChapter, ChapterHeading, ChapterSubheading } from '@/components/StoryChapter';
import { VolunteerQuiz } from '@/components/VolunteerQuiz';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export default function VolunteerPage() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleQuizComplete = (answers: Record<string, string>) => {
    setQuizAnswers(answers);
    setQuizComplete(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

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
            Volunteer With Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
            Be the hands and feet that serve Philadelphia families. Your time and skills make a real difference.
          </p>
          {!showQuiz && (
            <Button
              size="lg"
              onClick={() => setShowQuiz(true)}
              className="bg-accent-red hover:bg-red-700 text-white font-semibold text-lg px-8 py-6 h-auto"
            >
              Get Started
            </Button>
          )}
        </div>
      </StoryChapter>

      {!showQuiz && (
        <>
          <StoryChapter bgColor="white">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <ChapterHeading>Volunteer Opportunities</ChapterHeading>
              <ChapterSubheading className="mx-auto text-gray-600">
                Whether you have an hour or ongoing availability, there&apos;s a way for you to serve
              </ChapterSubheading>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <Card className="p-6 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4">📦</div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                    Food Distribution
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Help pack and distribute groceries at weekly events. Perfect for teams and families.
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4">🚗</div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                    Delivery Support
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Deliver food packages to homebound seniors and families. Requires reliable transportation.
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                    Community Outreach
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Build relationships with families, connect them to resources, and provide ongoing support.
                  </p>
                </Card>
              </div>
            </div>
          </StoryChapter>

          <StoryChapter bgColor="soft-blue">
            <div className="max-w-4xl mx-auto text-center">
              <ChapterHeading className="text-primary-blue">Why Volunteer?</ChapterHeading>

              <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h4 className="text-2xl font-heading font-bold text-gray-900 mb-4">Make Real Impact</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Your time directly serves Philadelphia families. You&apos;ll see the tangible difference your service makes in people&apos;s lives.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h4 className="text-2xl font-heading font-bold text-gray-900 mb-4">Build Community</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Connect with like-minded people who share your passion for serving others. Many volunteers form lasting friendships.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h4 className="text-2xl font-heading font-bold text-gray-900 mb-4">Flexible Commitment</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Whether you can volunteer once or regularly, we&apos;ll find an opportunity that fits your schedule and skills.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h4 className="text-2xl font-heading font-bold text-gray-900 mb-4">Experience Joy</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Discover the blessing of giving—just as Acts 20:35 promises. Volunteers often say they receive more than they give.
                  </p>
                </div>
              </div>
            </div>
          </StoryChapter>
        </>
      )}

      {showQuiz && !quizComplete && (
        <StoryChapter bgColor="white">
          <VolunteerQuiz onComplete={handleQuizComplete} />
        </StoryChapter>
      )}

      {quizComplete && !isSubmitted && (
        <StoryChapter bgColor="white">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <ChapterHeading>Let&apos;s Connect!</ChapterHeading>
              <ChapterSubheading className="mx-auto text-gray-600">
                Fill out this form and we&apos;ll be in touch within 48 hours
              </ChapterSubheading>
            </div>

            <Card className="p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Tell us more about yourself (optional)</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-2"
                    placeholder="Share any relevant experience, availability, or questions..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary-blue hover:bg-blue-700 text-white font-semibold"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Volunteer Application'}
                </Button>
              </form>
            </Card>
          </div>
        </StoryChapter>
      )}

      {isSubmitted && (
        <StoryChapter bgColor="soft-blue">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <div className="w-20 h-20 bg-hope-green rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={48} className="text-white" />
              </div>
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
                Thank You!
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                We&apos;ve received your volunteer application and will be in touch within 48 hours to discuss next steps.
              </p>
              <p className="text-gray-600">
                Have questions in the meantime? Contact us at<br />
                <a href="tel:609-309-4280" className="text-primary-blue hover:underline">609-309-4280</a> or<br />
                <a href="mailto:theactsfoundationtech@gmail.com" className="text-primary-blue hover:underline">theactsfoundationtech@gmail.com</a>
              </p>
            </div>
          </div>
        </StoryChapter>
      )}

      <Footer />
    </main>
  );
}
