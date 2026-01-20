# Guide: Automating Social Posts to The Acts Foundation Website

Follow these steps to connect your Instagram/Facebook to the website using your **Pica** subscription.

## 1. Create a New Flow in Pica
1. Log in to your [Pica.ai](https://pica.ai) dashboard.
2. Click **"New Flow"** (or similar button to create an automation).

## 2. Set the Trigger (Instagram)
1. Search for **Instagram for Business** as your Trigger.
2. Select **"New Media Posted"**.
3. Connect your **The Acts Foundation** Instagram account.

## 3. Set the Action (Webhook)
Since we want to send data to Supabase, we’ll use a Webhook or a direct Supabase integration if available in your Pica version.

### Option A: Direct Supabase Integration (If Available)
1. Select **Supabase** as the Action.
2. Connect your project using these details:
   - **URL**: `https://uyetwlexqwabbxuttdrp.supabase.co`
   - **API Key**: (Use the Key you provided to me)
3. Select the `blog_posts` table.
4. **Map the fields**:
   - `title`: Use the start of the **Caption** or a fixed string like "New Field Update".
   - `content`: Use the full **Caption**.
   - `image_url`: Use the **Media URL**.
   - `social_link`: Use the **Permalink**.

### Option B: Webhook (The "Bridge" Mode)
If Pica requires a Webhook, you can use a simple Zapier/Make.com webhook or a Supabase Edge Function. 

> [!TIP]
> Just let me know if Pica asks for a "URL" to send data to, and I will generate a custom Webhook URL for you!

## 4. Test & Go Live
- Post a picture on Instagram.
- Within 1-2 minutes, check your homepage under **"Latest From The Field"**. It should appear automatically!
