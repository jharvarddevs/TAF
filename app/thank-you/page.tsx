'use client';

import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StoryChapter, ChapterHeading } from '@/components/StoryChapter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Heart, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function ThankYouPage() {
  const [formData, setFormData] = useState({
    name: '',
    isAnonymous: false,
    city: '',
    badgeLevel: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        fullHeight={!isSubmitted}
        bgColor="blue"
        className="flex items-center"
      >
        <div className="text-center max-w-4xl mx-auto">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8">
            <Heart size={48} className="text-accent-red" fill="currentColor" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6 text-white">
            Thank You for Your Gift
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6">
            Your generosity is transforming lives across Philadelphia
          </p>
          <p className="text-lg text-white/80 italic">
            &quot;It is more blessed to give than to receive.&quot; — Acts 20:35
          </p>
        </div>
      </StoryChapter>

      {!isSubmitted ? (
        <StoryChapter bgColor="white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <ChapterHeading>Join the Acts 20:35 Circle</ChapterHeading>
              <p className="text-xl text-gray-600 leading-relaxed">
                Be recognized on our donor wall and inspire others to give. It&apos;s completely optional.
              </p>
            </div>

            <Card className="p-8 md:p-12 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    className="mt-2"
                    disabled={formData.isAnonymous}
                  />
                  <div className="flex items-center gap-2 mt-3">
                    <Checkbox
                      id="anonymous"
                      checked={formData.isAnonymous}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, isAnonymous: checked as boolean, name: checked ? 'Anonymous' : '' })
                      }
                    />
                    <Label htmlFor="anonymous" className="font-normal text-gray-600 cursor-pointer">
                      List me as &quot;Anonymous&quot;
                    </Label>
                  </div>
                </div>

                <div>
                  <Label htmlFor="city">City, State (optional)</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Philadelphia, PA"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="badgeLevel">Donation Level</Label>
                  <Select
                    value={formData.badgeLevel}
                    onValueChange={(value) => setFormData({ ...formData, badgeLevel: value })}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your donation level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="supporter">Supporter ($25-49 monthly or $300-599 annually)</SelectItem>
                      <SelectItem value="family-sponsor">Family Sponsor ($50-99 monthly or $600-1,199 annually)</SelectItem>
                      <SelectItem value="community-builder">Community Builder ($100-249 monthly or $1,200-2,999 annually)</SelectItem>
                      <SelectItem value="philadelphia-champion">Philadelphia Champion ($250+ monthly or $3,000+ annually)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message of Encouragement (optional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share a brief message to encourage others..."
                    rows={4}
                    className="mt-2"
                    maxLength={150}
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    {formData.message.length}/150 characters
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="flex-1 bg-primary-blue hover:bg-blue-700 text-white font-semibold"
                  >
                    {isSubmitting ? 'Submitting...' : 'Join the Acts 20:35 Circle'}
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="flex-1"
                  >
                    <Link href="/">No Thanks, Return Home</Link>
                  </Button>
                </div>

                <p className="text-sm text-gray-500 text-center">
                  By submitting, you consent to having your name (or &quot;Anonymous&quot;) and message displayed on our public donor recognition wall.
                </p>
              </form>
            </Card>
          </div>
        </StoryChapter>
      ) : (
        <StoryChapter bgColor="soft-blue">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <div className="w-20 h-20 bg-hope-green rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={48} className="text-white" />
              </div>
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
                Welcome to the Acts 20:35 Circle!
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Your name will appear on our donor recognition wall within 24 hours. Thank you for inspiring others through your generosity.
              </p>

              <div className="space-y-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-primary-blue hover:bg-blue-700 text-white font-semibold"
                >
                  <Link href="/acts-2035-circle/">
                    View the Acts 20:35 Circle
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
                  <Link href="/">Return Home</Link>
                </Button>
              </div>
            </div>
          </div>
        </StoryChapter>
      )}

      <StoryChapter bgColor={isSubmitted ? 'white' : 'soft-blue'}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            What Happens Next?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-5xl mb-3">📧</div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                Confirmation Email
              </h3>
              <p className="text-gray-600 leading-relaxed">
                You&apos;ll receive a donation receipt and tax documentation within 24 hours
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-5xl mb-3">📊</div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                Impact Updates
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Regular stories and metrics showing how your gift is transforming lives
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-5xl mb-3">🤝</div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                Get Involved
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Opportunities to volunteer and see your impact firsthand
              </p>
            </div>
          </div>
        </div>
      </StoryChapter>

      <Footer />
    </main>
  );
}
