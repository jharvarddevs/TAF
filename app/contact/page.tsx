'use client';

import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StoryChapter, ChapterHeading, ChapterSubheading } from '@/components/StoryChapter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Phone, Mail, MapPin, CheckCircle2, MessageCircle, Instagram } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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

  if (isSubmitted) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <StoryChapter
          fullHeight
          bgColor="soft-blue"
          className="flex items-center"
        >
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <div className="w-20 h-20 bg-hope-green rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={48} className="text-white" />
              </div>
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
                Message Received!
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Thank you for contacting The Acts Foundation. We&apos;ll respond to your message within 24-48 hours.
              </p>
              <p className="text-gray-600">
                Need immediate assistance? Call us at<br />
                <a href="tel:609-309-4280" className="text-primary-blue hover:underline">609-309-4280</a>
              </p>
            </div>
          </div>
        </StoryChapter>
        <Footer />
      </main>
    );
  }

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
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Whether you need help, want to volunteer, or have questions, we&apos;re here for you
          </p>
        </div>
      </StoryChapter>

      <StoryChapter bgColor="white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="space-y-8">
              <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-[#25D366]/5 border-[#25D366]/20 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900 mb-2">WhatsApp Chat</h3>
                    <a
                      href="https://wa.me/16093094280"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] font-bold hover:underline"
                    >
                      Instant Message
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Chat directly with our team</p>
                  </div>
                </div>
              </Card>

              <div>
                <ChapterHeading className="text-3xl mb-8">Contact Information</ChapterHeading>
              </div>

              <Card className="p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900 mb-2">Phone</h3>
                    <a
                      href="tel:609-309-4280"
                      className="text-primary-blue hover:underline"
                    >
                      609-309-4280
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Mon-Fri, 9am-5pm</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-hope-green rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900 mb-2">Email</h3>
                    <a
                      href="mailto:theactsfoundationtech@gmail.com"
                      className="text-primary-blue hover:underline break-all"
                    >
                      theactsfoundationtech@gmail.com
                    </a>
                    <p className="text-sm text-gray-600 mt-1">We respond within 24-48 hours</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-700">
                      3599 Nottingham Lane Unit K<br />
                      Philadelphia, PA 19114
                    </p>
                  </div>
                </div>
              </Card>

              <div className="pt-6">
                <h3 className="font-heading font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Instagram size={20} className="text-[#E4405F]" />
                  Follow Our Journey
                </h3>
                <div className="relative aspect-square w-full max-w-[200px] mx-auto bg-white p-4 rounded-2xl shadow-lg border border-gray-100 group overflow-hidden">
                  <Image
                    src="/images/instagram-qr.png"
                    alt="Instagram QR Code"
                    fill
                    className="object-contain p-2"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-xs font-bold px-2 py-1 bg-[#E4405F] rounded-full">Scan to Follow</span>
                  </div>
                </div>
                <p className="text-center text-xs text-gray-500 mt-3 font-medium">@theactsfoundation_2035</p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card className="p-8 shadow-2xl">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
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
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-2"
                      placeholder="Tell us how we can help or what you'd like to know..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary-blue hover:bg-blue-700 text-white font-semibold"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </StoryChapter>

      <StoryChapter bgColor="soft-blue">
        <div className="max-w-4xl mx-auto text-center">
          <ChapterHeading className="text-primary-blue">Need Immediate Food Assistance?</ChapterHeading>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            If you or someone you know needs emergency food support, please call us right away. We respond within 24 hours.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent-red hover:bg-red-700 text-white font-semibold text-lg px-8 py-6 h-auto"
          >
            <a href="tel:609-309-4280" className="flex items-center gap-2">
              <Phone size={20} />
              Call 609-309-4280
            </a>
          </Button>
        </div>
      </StoryChapter>

      <Footer />
    </main>
  );
}
