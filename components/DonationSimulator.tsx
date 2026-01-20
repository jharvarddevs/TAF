'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Heart, Users, Package, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

const donationTiers = [
  { amount: 25, label: 'Feed 1 family', icon: Heart, description: 'Provide a week of groceries for a family in need' },
  { amount: 50, label: 'Feed 2 families', icon: Users, description: 'Help two families put food on the table' },
  { amount: 100, label: 'Emergency support package', icon: Package, description: 'Deliver comprehensive food assistance to those facing crisis' },
  { amount: 250, label: 'Sponsor a distribution day', icon: Home, description: 'Fund an entire community distribution event' },
];

export function DonationSimulator() {
  const [selectedAmount, setSelectedAmount] = useState(50);

  const getCurrentTier = () => {
    if (selectedAmount >= 250) return donationTiers[3];
    if (selectedAmount >= 100) return donationTiers[2];
    if (selectedAmount >= 50) return donationTiers[1];
    if (selectedAmount >= 25) return donationTiers[0];
    return {
      amount: selectedAmount,
      label: 'Every dollar counts',
      icon: Heart,
      description: `Your $${selectedAmount} gift helps provide essential food items and support to families in need.`
    };
  };

  const currentTier = getCurrentTier();
  const Icon = currentTier.icon;

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-3xl mx-auto">
      <h3 className="text-3xl md:text-4xl font-heading font-bold text-center mb-3 text-gray-900">
        See Your Impact
      </h3>
      <p className="text-center text-gray-600 mb-8">
        Move the slider to see how your gift transforms lives
      </p>

      <div className="mb-8">
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center justify-center mb-4">
            <span className="text-3xl font-semibold text-gray-600 mr-2">$</span>
            <Input
              type="number"
              value={selectedAmount}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                if (!isNaN(val)) setSelectedAmount(val);
                else if (e.target.value === '') setSelectedAmount(0);
              }}
              className="text-5xl md:text-6xl font-heading font-bold text-primary-blue w-40 text-center border-none focus-visible:ring-0 h-auto p-0 bg-transparent appearance-none"
              min={1}
            />
          </div>
          <p className="text-sm text-gray-500 italic">Enter any amount or use the slider below</p>
        </div>

        <Slider
          value={[selectedAmount]}
          onValueChange={(value) => setSelectedAmount(value[0])}
          min={1}
          max={500}
          step={1}
          className="mb-4"
        />

        <div className="flex justify-between text-sm text-gray-500">
          <span>$1</span>
          <span>$500+</span>
        </div>
      </div>

      <div className="bg-soft-blue rounded-2xl p-6 mb-6 min-h-[200px] flex flex-col items-center justify-center text-center transition-all duration-300">
        <div className="mb-4 text-primary-blue">
          <Icon size={64} strokeWidth={1.5} />
        </div>
        <h4 className="text-2xl font-heading font-bold text-primary-blue mb-2">
          {currentTier.label}
        </h4>
        <p className="text-gray-700 leading-relaxed">
          {currentTier.description}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {donationTiers.map((tier) => (
          <button
            key={tier.amount}
            onClick={() => setSelectedAmount(tier.amount)}
            className={cn(
              'p-3 rounded-xl border-2 transition-all duration-200 hover:scale-105',
              selectedAmount === tier.amount
                ? 'border-primary-blue bg-primary-blue text-white shadow-lg'
                : 'border-gray-200 bg-white text-gray-700 hover:border-primary-blue'
            )}
          >
            <div className="text-xl font-bold">${tier.amount}</div>
          </button>
        ))}
      </div>

      <Button
        asChild
        size="xl"
        variant="cta-red"
        className="w-full"
      >
        <a href="https://www.paypal.com/US/fundraiser/charity/4621992" target="_blank" rel="noopener noreferrer">
          Donate ${selectedAmount} Now
        </a>
      </Button>

      <p className="text-center text-sm text-gray-500 mt-4">
        Your gift becomes groceries. Your gift becomes dignity. Your gift becomes hope.
      </p>
    </div>
  );
}
