import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CTASectionProps {
  title: string;
  description?: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  variant?: 'blue' | 'white' | 'green';
  className?: string;
}

export function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
  variant = 'blue',
  className,
}: CTASectionProps) {
  const variantClasses = {
    blue: 'bg-primary-blue text-white',
    white: 'bg-white text-gray-900',
    green: 'bg-hope-green text-white',
  };

  return (
    <div
      className={cn(
        'rounded-3xl p-8 md:p-12 lg:p-16 text-center',
        variantClasses[variant],
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight text-balance mb-4">
        {title}
      </h2>

      {description && (
        <p className={cn(
          'text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8',
          variant === 'white' ? 'text-gray-600' : 'opacity-90'
        )}>
          {description}
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button
          asChild
          size="lg"
          className={cn(
            'text-lg px-8 py-6 h-auto font-semibold',
            variant === 'blue' && 'bg-white text-primary-blue hover:bg-gray-100 hover:scale-105',
            variant === 'white' && 'bg-primary-blue text-white hover:bg-blue-700 hover:scale-105 shadow-xl shadow-blue-500/20',
            variant === 'green' && 'bg-white text-hope-green hover:bg-gray-100 hover:scale-105'
          )}
        >
          <Link href={primaryButton.href} className="flex items-center gap-2">
            {primaryButton.text}
            <ArrowRight size={22} />
          </Link>
        </Button>

        {secondaryButton && (
          <Button
            asChild
            variant="outline"
            size="lg"
            className={cn(
              'px-8 py-6 h-auto font-semibold transition-all active:scale-95',
              variant === 'blue' && 'border-white text-white hover:bg-white hover:text-primary-blue',
              variant === 'white' && 'border-gray-300 text-gray-700 hover:bg-gray-100',
              variant === 'green' && 'border-white text-white hover:bg-white hover:text-hope-green'
            )}
          >
            <Link href={secondaryButton.href}>
              {secondaryButton.text}
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
