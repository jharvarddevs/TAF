'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Calendar, Package, Users, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuizStep {
  question: string;
  options: {
    label: string;
    value: string;
    icon?: typeof Calendar;
  }[];
}

const quizSteps: QuizStep[] = [
  {
    question: 'How much time can you commit?',
    options: [
      { label: 'A few hours once', value: 'once', icon: Calendar },
      { label: 'Regular weekly commitment', value: 'weekly', icon: Calendar },
      { label: 'Monthly events', value: 'monthly', icon: Calendar },
      { label: 'Flexible as needed', value: 'flexible', icon: Calendar },
    ],
  },
  {
    question: 'What type of work interests you?',
    options: [
      { label: 'Food distribution', value: 'distribution', icon: Package },
      { label: 'Community outreach', value: 'outreach', icon: Users },
      { label: 'Event planning', value: 'events', icon: Heart },
      { label: 'Administrative support', value: 'admin', icon: Heart },
    ],
  },
  {
    question: 'Do you have any special skills?',
    options: [
      { label: 'Transportation/driving', value: 'driving' },
      { label: 'Languages (Spanish, etc.)', value: 'languages' },
      { label: 'Social media/marketing', value: 'marketing' },
      { label: 'General helping hands', value: 'general' },
    ],
  },
];

interface VolunteerQuizProps {
  onComplete: (answers: Record<string, string>) => void;
}

export function VolunteerQuiz({ onComplete }: VolunteerQuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentStep]: value };
    setAnswers(newAnswers);

    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const currentQuiz = quizSteps[currentStep];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {quizSteps.map((_, index) => (
            <div
              key={index}
              className={cn(
                'h-2 flex-1 rounded-full mx-1 transition-all',
                index <= currentStep ? 'bg-primary-blue' : 'bg-gray-200'
              )}
            />
          ))}
        </div>
        <p className="text-sm text-gray-600 text-center">
          Question {currentStep + 1} of {quizSteps.length}
        </p>
      </div>

      <Card className="p-8 md:p-12 border-2 border-gray-100 shadow-xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8 text-gray-900">
          {currentQuiz.question}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentQuiz.options.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-6 text-left transition-all duration-300 hover:border-primary-blue hover:shadow-xl hover:scale-105"
              >
                {Icon && (
                  <div className="mb-3 text-primary-blue">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900 group-hover:text-primary-blue transition-colors">
                    {option.label}
                  </span>
                  <ArrowRight
                    size={20}
                    className="text-gray-400 group-hover:text-primary-blue group-hover:translate-x-1 transition-all"
                  />
                </div>
              </button>
            );
          })}
        </div>

        {currentStep > 0 && (
          <div className="mt-6 text-center">
            <Button
              variant="ghost"
              onClick={() => setCurrentStep(currentStep - 1)}
              className="text-gray-600 hover:text-gray-900"
            >
              Go Back
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
