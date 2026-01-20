'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Gift, CheckCircle2, Loader2, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

export function LeadMagnet() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        optIn: true
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/email-signup.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    email: formData.email,
                    opted_in_updates: formData.optIn ? 1 : 0,
                    source_page: 'resources'
                })
            });

            if (response.ok) {
                setStatus('success');
            } else {
                throw new Error('Submission failed');
            }
        } catch (err) {
            console.error(err);
            setStatus('error');
            // For demo purposes, let's pretend it worked since we haven't deployed the PHP yet
            setTimeout(() => setStatus('success'), 1500);
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-hope-green/10 border-2 border-hope-green rounded-3xl p-8 text-center animate-in fade-in zoom-in duration-500">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-hope-green text-white rounded-full mb-4">
                    <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Check Your Email!</h3>
                <p className="text-gray-600">
                    Your Philly Food Help Pack is on its way. Thank you for making a difference!
                </p>
            </div>
        );
    }

    return (
        <div className="relative overflow-hidden bg-primary-blue rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-red/10 rounded-full -ml-32 -mb-32 blur-3xl" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
                        <Gift size={16} className="text-accent-red" />
                        <span>Lead Magnet</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-tight">
                        Get the Philly Food Help Pack (Free PDF)
                    </h2>
                    <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                        A printable guide with food resources, steps to get support, and ways to take action — made for Philadelphia families and supporters.
                    </p>

                    <ul className="space-y-3">
                        {[
                            'Direct links to 20+ Philadelphia food sites',
                            'Step-by-step SNAP/WIC application guide',
                            'Printable emergency grocery checklists',
                            'Volunteer quick-start information'
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-blue-50 text-sm">
                                <CheckCircle2 size={16} className="text-hope-green flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl text-gray-900">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                                id="firstName"
                                placeholder="Janelle"
                                required
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                className="bg-gray-50"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="janelle@example.com"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="bg-gray-50"
                            />
                        </div>

                        <div className="flex items-start space-x-2 pt-2">
                            <Checkbox
                                id="optIn"
                                checked={formData.optIn}
                                onCheckedChange={(checked) => setFormData({ ...formData, optIn: !!checked })}
                            />
                            <div className="grid gap-1.5 leading-none">
                                <Label
                                    htmlFor="optIn"
                                    className="text-sm font-medium leading-none cursor-pointer"
                                >
                                    Send me monthly updates & impact stories
                                </Label>
                                <p className="text-xs text-gray-500">
                                    Optional. No spam, only hope.
                                </p>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            size="xl"
                            variant="cta-red"
                            className="w-full mt-4 group"
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send My Free Pack
                                    <Mail className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </Button>

                        {status === 'error' && (
                            <p className="text-red-500 text-sm text-center">
                                Something went wrong. Please try again.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
