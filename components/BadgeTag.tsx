import { cn } from '@/lib/utils';
import { Award, Heart, Home, Star } from 'lucide-react';

export type BadgeLevel = 'supporter' | 'family-sponsor' | 'community-builder' | 'philadelphia-champion';

interface BadgeTagProps {
  level: BadgeLevel;
  className?: string;
  showIcon?: boolean;
}

const badgeConfig = {
  'supporter': {
    label: 'Supporter',
    color: 'bg-blue-100 text-blue-700 border-blue-300',
    icon: Heart,
  },
  'family-sponsor': {
    label: 'Family Sponsor',
    color: 'bg-green-100 text-green-700 border-green-300',
    icon: Home,
  },
  'community-builder': {
    label: 'Community Builder',
    color: 'bg-purple-100 text-purple-700 border-purple-300',
    icon: Star,
  },
  'philadelphia-champion': {
    label: 'Philadelphia Champion',
    color: 'bg-amber-100 text-amber-700 border-amber-300',
    icon: Award,
  },
};

export function BadgeTag({ level, className, showIcon = true }: BadgeTagProps) {
  const config = badgeConfig[level];
  const Icon = config.icon;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border',
        config.color,
        className
      )}
    >
      {showIcon && <Icon size={12} />}
      {config.label}
    </span>
  );
}
