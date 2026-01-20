'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, ExternalLink, MessageSquare } from 'lucide-react';
import { supabase, BlogPost } from '@/lib/supabase';

export const LatestUpdates: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data, error } = await supabase
                    .from('blog_posts')
                    .select('*')
                    .order('created_at', { ascending: false })
                    .limit(3);

                if (error) throw error;
                setPosts(data || []);
            } catch (err) {
                console.error('Error fetching posts:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="animate-pulse bg-gray-100 rounded-2xl h-[400px]" />
                ))}
            </div>
        );
    }

    if (posts.length === 0) return null;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
                <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
                >
                    {post.image_url ? (
                        <div className="relative h-56 w-full overflow-hidden">
                            <Image
                                src={post.image_url}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                <span className="text-white text-xs font-semibold flex items-center gap-1">
                                    View on Social Media <ExternalLink size={12} />
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div className="h-56 w-full bg-primary-blue/5 flex items-center justify-center">
                            <MessageSquare size={48} className="text-primary-blue/20" />
                        </div>
                    )}

                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 text-primary-blue/60 text-xs font-bold uppercase tracking-wider mb-3">
                            <Calendar size={14} />
                            {new Date(post.created_at).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                            })}
                        </div>

                        <h3 className="font-heading font-bold text-xl mb-3 text-gray-900 group-hover:text-primary-blue transition-colors line-clamp-2">
                            {post.title}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                            {post.content}
                        </p>

                        <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                            <Link
                                href={`/updates/${post.id}`}
                                className="text-primary-blue font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                            >
                                Read Full Story <ArrowRight size={16} />
                            </Link>

                            {post.social_link && (
                                <a
                                    href={post.social_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-primary-blue transition-colors p-2"
                                >
                                    <ExternalLink size={18} />
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};
