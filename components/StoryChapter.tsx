'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface StoryChapterProps {
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
  bgColor?: 'white' | 'blue' | 'soft-blue';
  id?: string;
}

export function StoryChapter({
  children,
  className,
  fullHeight = false,
  bgColor = 'white',
  id,
}: StoryChapterProps) {
  const bgClasses = {
    white: 'bg-white',
    blue: 'bg-primary-blue text-white',
    'soft-blue': 'bg-soft-blue',
  };

  return (
    <section
      id={id}
      className={cn(
        'w-full relative',
        fullHeight ? 'min-h-screen flex items-center' : 'py-20 md:py-32',
        bgClasses[bgColor],
        className
      )}
    >
      <motion.div
        className="container mx-auto px-4 md:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}

interface ChapterHeadingProps {
  children: ReactNode;
  className?: string;
}

export function ChapterHeading({ children, className }: ChapterHeadingProps) {
  return (
    <motion.h2
      className={cn(
        'text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight tracking-tight text-balance mb-6',
        className
      )}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {children}
    </motion.h2>
  );
}

interface ChapterSubheadingProps {
  children: ReactNode;
  className?: string;
}

export function ChapterSubheading({ children, className }: ChapterSubheadingProps) {
  return (
    <motion.p
      className={cn(
        'text-lg md:text-xl lg:text-2xl leading-relaxed text-balance max-w-3xl',
        className
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      {children}
    </motion.p>
  );
}

