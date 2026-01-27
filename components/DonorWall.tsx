'use client';

import React, { useState, useEffect } from 'react';
import { BadgeTag, BadgeLevel } from './BadgeTag';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Donor {
  id: string;
  name: string;
  isAnonymous: boolean;
  city?: string;
  badgeLevel: BadgeLevel;
  message?: string;
  createdAt: string;
}

interface DonorWallProps {
  donors: Donor[];
  showFilters?: boolean;
}

export function DonorWall({ donors, showFilters = true }: DonorWallProps) {
  const [filter, setFilter] = useState<'all' | BadgeLevel>('all');

  const filteredDonors = filter === 'all'
    ? donors
    : donors.filter(donor => donor.badgeLevel === filter);

  return (
    <div className="space-y-8">
      {showFilters && (
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => setFilter('all')}
            className={cn(
              'px-4 py-2 rounded-full font-medium transition-all',
              filter === 'all'
                ? 'bg-primary-blue text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            )}
          >
            All Donors
          </button>
          <button
            onClick={() => setFilter('supporter')}
            className={cn(
              'px-4 py-2 rounded-full font-medium transition-all',
              filter === 'supporter'
                ? 'bg-primary-blue text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            )}
          >
            Supporters
          </button>
          <button
            onClick={() => setFilter('family-sponsor')}
            className={cn(
              'px-4 py-2 rounded-full font-medium transition-all',
              filter === 'family-sponsor'
                ? 'bg-primary-blue text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            )}
          >
            Family Sponsors
          </button>
          <button
            onClick={() => setFilter('community-builder')}
            className={cn(
              'px-4 py-2 rounded-full font-medium transition-all',
              filter === 'community-builder'
                ? 'bg-primary-blue text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            )}
          >
            Community Builders
          </button>
          <button
            onClick={() => setFilter('philadelphia-champion')}
            className={cn(
              'px-4 py-2 rounded-full font-medium transition-all',
              filter === 'philadelphia-champion'
                ? 'bg-primary-blue text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            )}
          >
            Champions
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDonors.map((donor) => (
          <DonorCard key={donor.id} donor={donor} />
        ))}
      </div>

      {filteredDonors.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg">No donors found in this category yet.</p>
          <p className="text-sm mt-2">Be the first to make a difference!</p>
        </div>
      )}
    </div>
  );
}

function DateDisplay({ date }: { date: string }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return <span className="opacity-0">Loading...</span>;

  return (
    <span>
      {new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
      })}
    </span>
  );
}

function DonorCard({ donor }: { donor: Donor }) {
  return (
    <div className="bg-white rounded-2xl border-2 border-gray-100 shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="flex items-start justify-between mb-3">
        <h4 className="text-xl font-heading font-bold text-gray-900">
          {donor.isAnonymous ? 'Anonymous' : donor.name}
        </h4>
        <BadgeTag level={donor.badgeLevel} />
      </div>

      {donor.city && (
        <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
          <MapPin size={14} />
          <span>{donor.city}</span>
        </div>
      )}

      {donor.message && (
        <p className="text-gray-700 text-sm leading-relaxed italic border-l-4 border-hope-green pl-3">
          &quot;{donor.message}&quot;
        </p>
      )}

      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500">
          Joined <DateDisplay date={donor.createdAt} />
        </p>
      </div>
    </div>
  );
}
