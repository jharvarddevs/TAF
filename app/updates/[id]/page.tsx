import PostClient from './post-client';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-static';

export async function generateStaticParams() {
    const supabaseUrl = 'https://uyetwlexqwabbxuttdrp.supabase.co';
    const supabaseAnonKey = 'sb_publishable_2nK1C5S1bC_at_ROCTLnUQ_H1ZAtqLL';
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const { data: posts } = await supabase
        .from('blog_posts')
        .select('id');

    const params = (posts || []).map((post: any) => ({
        id: post.id,
    }));

    // Ensure there is at least one param for static export build to succeed
    if (params.length === 0) {
        return [{ id: 'latest' }];
    }

    return params;
}

export default function BlogPostPage() {
    return <PostClient />;
}
