'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Apple, Users, HandHeart, Home, Leaf, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NeighborhoodStory {
  id: string;
  title: string;
  icon: typeof Apple;
  color: string;
  story: string;
  howToHelp: string;
  stat: string;
}

const neighborhoods: NeighborhoodStory[] = [
  {
    id: 'food-access',
    title: 'Food Access',
    icon: Apple,
    color: 'bg-red-500',
    story: 'In North Philadelphia, corner stores outnumber supermarkets 10 to 1. Families travel miles to find fresh produce. Many rely on processed foods because they have no other choice.',
    howToHelp: 'Your donation helps us bring fresh food directly to neighborhoods lacking grocery stores.',
    stat: '1 in 4 children'
  },
  {
    id: 'families',
    title: 'Families in Need',
    icon: Users,
    color: 'bg-blue-500',
    story: 'Single parents working two jobs still struggle to put meals on the table. Rent increases faster than wages. The choice between paying bills and buying groceries is real.',
    howToHelp: 'Sponsor a family to receive consistent food support and emergency assistance.',
    stat: '30% of households'
  },
  {
    id: 'seniors',
    title: 'Senior Citizens',
    icon: HandHeart,
    color: 'bg-purple-500',
    story: 'Many seniors live alone on fixed incomes. They face mobility challenges and can\'t easily access food banks. Some skip meals to afford medication.',
    howToHelp: 'Support home delivery programs that bring dignity and nutrition to homebound seniors.',
    stat: '40% of seniors'
  },
  {
    id: 'emergency',
    title: 'Emergency Support',
    icon: Home,
    color: 'bg-orange-500',
    story: 'Unexpected job loss, medical emergencies, or sudden crises can push any family into food insecurity overnight. The need is immediate and urgent.',
    howToHelp: 'Fund emergency food packages that respond to families in crisis within 24 hours.',
    stat: 'Within 24 hours'
  },
  {
    id: 'outreach',
    title: 'Community Outreach',
    icon: Leaf,
    color: 'bg-green-500',
    story: 'Breaking the cycle of food insecurity requires more than emergency relief. It requires building lasting relationships, connecting families to resources, and creating hope.',
    howToHelp: 'Support outreach programs that empower communities and create sustainable change.',
    stat: '1,000+ families monthly'
  },
];

export function PhillyHubGrid() {
  const [selectedStory, setSelectedStory] = useState<NeighborhoodStory | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {neighborhoods.map((neighborhood) => {
          const Icon = neighborhood.icon;
          return (
            <Card
              key={neighborhood.id}
              className="group cursor-pointer overflow-hidden border-2 border-gray-100 hover:border-primary-blue transition-all duration-300 hover:shadow-2xl hover:scale-105"
              onClick={() => setSelectedStory(neighborhood)}
            >
              <div className={cn('h-32 flex items-center justify-center transition-all', neighborhood.color)}>
                <Icon size={64} className="text-white" strokeWidth={1.5} />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                  {neighborhood.title}
                </h3>
                <p className="text-primary-blue font-semibold text-lg mb-3">
                  {neighborhood.stat}
                </p>
                <Button
                  variant="default"
                  className="w-full"
                >
                  Read Story
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {selectedStory && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedStory(null)}
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <div className={cn('w-20 h-20 rounded-2xl flex items-center justify-center mb-6', selectedStory.color)}>
              {(() => {
                const Icon = selectedStory.icon;
                return <Icon size={40} className="text-white" strokeWidth={1.5} />;
              })()}
            </div>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              {selectedStory.title}
            </h2>

            <div className="mb-6">
              <div className="text-2xl font-bold text-primary-blue mb-2">
                {selectedStory.stat}
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                  The Story
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedStory.story}
                </p>
              </div>

              <div className="bg-hope-green/10 border-l-4 border-hope-green p-4 rounded-r-lg">
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                  How You Can Help
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedStory.howToHelp}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                asChild
                size="xl"
                variant="cta-red"
                className="flex-1"
              >
                <a href="/donate/">Donate Now</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setSelectedStory(null)}
                className="flex-1"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
