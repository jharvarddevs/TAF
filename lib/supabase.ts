import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uyetwlexqwabbxuttdrp.supabase.co';
const supabaseAnonKey = 'sb_publishable_2nK1C5S1bC_at_ROCTLnUQ_H1ZAtqLL';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type BlogPost = {
    id: string;
    title: string;
    content: string;
    image_url: string | null;
    social_link: string | null;
    created_at: string;
    updated_at: string;
};
