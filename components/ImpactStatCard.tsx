import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ImpactStatCardProps {
  stat: string;
  label: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
  variant?: 'default' | 'highlight';
}

export function ImpactStatCard({
  stat,
  label,
  description,
  icon: Icon,
  className,
  variant = 'default',
}: ImpactStatCardProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:scale-105',
        variant === 'default' && 'bg-white border-2 border-gray-100 shadow-lg',
        variant === 'highlight' && 'bg-primary-blue text-white shadow-2xl',
        className
      )}
    >
      {Icon && (
        <div className={cn(
          'mb-4',
          variant === 'default' ? 'text-primary-blue' : 'text-white opacity-90'
        )}>
          <Icon size={48} strokeWidth={1.5} />
        </div>
      )}

      <div className="space-y-2">
        <div className={cn(
          'text-5xl md:text-6xl font-heading font-bold tracking-tight',
          variant === 'default' && 'text-primary-blue',
          variant === 'highlight' && 'text-white'
        )}>
          {stat}
        </div>

        <div className={cn(
          'text-xl md:text-2xl font-semibold',
          variant === 'default' && 'text-gray-900',
          variant === 'highlight' && 'text-white'
        )}>
          {label}
        </div>

        {description && (
          <p className={cn(
            'text-base leading-relaxed mt-3',
            variant === 'default' && 'text-gray-600',
            variant === 'highlight' && 'text-white opacity-90'
          )}>
            {description}
          </p>
        )}
      </div>

      <div
        className={cn(
          'absolute -right-8 -bottom-8 w-32 h-32 rounded-full opacity-10',
          variant === 'default' && 'bg-primary-blue',
          variant === 'highlight' && 'bg-white'
        )}
      />
    </div>
  );
}
