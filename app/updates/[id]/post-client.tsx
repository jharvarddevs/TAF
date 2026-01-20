'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { supabase, BlogPost } from '@/lib/supabase';
import { ArrowLeft, Calendar, ExternalLink, Share2, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PostClient() {
    const { id } = useParams();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            if (!id) return;
            try {
                const { data, error } = await supabase
                    .from('blog_posts')
                    .select('*')
                    .eq('id', id)
                    .single();

                if (error) throw error;
                setPost(data);
            } catch (err) {
                console.error('Error fetching post:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-white animate-pulse">
                <Navigation />
                <div className="pt-32 container mx-auto px-4">
                    <div className="h-10 w-32 bg-gray-100 rounded mb-8" />
                    <div className="h-64 w-full bg-gray-100 rounded-3xl mb-12" />
                    <div className="max-w-3xl mx-auto space-y-4">
                        <div className="h-12 w-3/4 bg-gray-100 rounded" />
                        <div className="h-6 w-1/4 bg-gray-100 rounded" />
                        <div className="h-24 w-full bg-gray-100 rounded" />
                    </div>
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <h1 className="text-2xl font-bold mb-4">Story Not Found</h1>
                <Button asChild>
                    <Link href="/updates">Return to Updates</Link>
                </Button>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            <Navigation />

            <div className="pt-24 pb-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <Link
                        href="/updates"
                        className="inline-flex items-center gap-2 text-primary-blue hover:text-blue-700 font-bold transition-all mb-12 group"
                    >
                        <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                        Back to All Stories
                    </Link>

                    <article className="max-w-4xl mx-auto">
                        {post.image_url && (
                            <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl mb-12">
                                <Image
                                    src={post.image_url}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-8 border-b border-gray-100">
                            <div>
                                <div className="flex items-center gap-2 text-primary-blue/60 text-sm font-bold uppercase tracking-wider mb-3">
                                    <Calendar size={16} />
                                    {new Date(post.created_at).toLocaleDateString('en-US', {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric',
                                    })}
                                </div>
                                <h1 className="font-heading font-bold text-4xl md:text-5xl text-gray-900">
                                    {post.title}
                                </h1>
                            </div>

                            <div className="flex gap-2">
                                {post.social_link && (
                                    <Button asChild variant="outline" className="rounded-full">
                                        <a href={post.social_link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                            <ExternalLink size={18} /> View Social
                                        </a>
                                    </Button>
                                )}
                                <Button variant="ghost" className="rounded-full w-12 h-12 p-0">
                                    <Share2 size={18} />
                                </Button>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
                            {post.content}
                        </div>

                        <div className="mt-20 p-8 md:p-12 bg-soft-blue rounded-[32px] text-center">
                            <div className="inline-flex p-3 bg-white rounded-2xl text-primary-blue mb-6">
                                <MessageSquare size={32} />
                            </div>
                            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4 text-primary-blue">
                                Want to help create more stories like this?
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                                Your donation provides the groceries, fuel, and resources needed to reach families in every zip code across Philadelphia.
                            </p>
                            <Button asChild size="xl" className="bg-accent-red hover:bg-red-700 text-white px-12">
                                <Link href="/donate">Donate Now</Link>
                            </Button>
                        </div>
                    </article>
                </div>
            </div>

            <Footer />
        </main>
    );
}
