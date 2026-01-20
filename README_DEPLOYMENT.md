# The Acts Foundation - Deployment Guide

This guide provides step-by-step instructions for deploying The Acts Foundation website to Hostinger with cPanel.

## Overview

- **Framework**: Next.js 13 with static export
- **Hosting**: Hostinger + cPanel
- **Backend**: PHP + MySQL
- **Domain**: TheActsFoundation.org

## Prerequisites

1. Hostinger hosting account with cPanel access
2. Domain configured and pointing to Hostinger
3. MySQL database access
4. Node.js 18+ installed locally (for building)

## Step 1: Build the Static Site Locally

```bash
# Install dependencies
npm install

# Build the static export
npm run build
```

This creates an `/out` directory with all static files.

## Step 2: Set Up MySQL Database in cPanel

1. Log in to cPanel
2. Navigate to **MySQL Databases**
3. Create a new database: `acts_foundation`
4. Create a new MySQL user with a strong password
5. Add the user to the database with ALL PRIVILEGES
6. Note your credentials:
   - Database name
   - Database user
   - Database password
   - Database host (usually `localhost`)

## Step 3: Import Database Schema

1. In cPanel, go to **phpMyAdmin**
2. Select your `acts_foundation` database
3. Click **Import** tab
4. Upload the `schema.sql` file from the project root
5. Click **Go** to execute

The schema will create three tables:
- `messages` - Contact form submissions
- `volunteers` - Volunteer applications
- `donors` - Acts 20:35 Circle members

## Step 4: Configure PHP API

1. In your project's `public/api` directory, edit `config.php`
2. Update database credentials (or set as environment variables in cPanel):

```php
$db_host = 'localhost';  // Usually localhost
$db_name = 'your_database_name';
$db_user = 'your_database_user';
$db_pass = 'your_database_password';
```

**IMPORTANT**: For production, use cPanel's environment variables feature instead of hardcoding credentials.

## Step 5: Upload Files to Hostinger

### Option A: File Manager (Recommended for first-time)

1. In cPanel, open **File Manager**
2. Navigate to `public_html` directory
3. Delete default index files (keep `.htaccess` if present)
4. Upload the entire contents of the `/out` directory
5. Ensure the `api` folder is at `public_html/api`

### Option B: FTP

1. Connect via FTP (credentials in Hostinger dashboard)
2. Navigate to `public_html`
3. Upload all files from `/out` directory
4. Upload `api` folder to `public_html/api`

## Step 6: Configure .htaccess (If Needed)

Create or edit `.htaccess` in `public_html`:

```apache
# Enable HTTPS redirect
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle trailing slashes
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_URI} !(.*)/$
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1/ [L,R=301]

# PHP configuration
<IfModule mod_php7.c>
php_value upload_max_filesize 20M
php_value post_max_size 20M
php_value memory_limit 256M
</IfModule>
```

## Step 7: Set File Permissions

In cPanel File Manager:
- Set directories to `755`
- Set files to `644`
- Set PHP files to `644`
- Ensure `api/config.php` is NOT publicly readable (use proper cPanel security)

## Step 8: Test the Deployment

Visit these URLs to test:

1. **Homepage**: https://theactsfoundation.org/
2. **Contact Form**: https://theactsfoundation.org/contact/
3. **Donate Page**: https://theactsfoundation.org/donate/
4. **API Health**:
   - Test contact form submission
   - Test volunteer form submission
   - Test donor recognition submission

## Step 9: Configure Email (Optional)

To receive form submissions via email:

1. In cPanel, create email account: `noreply@theactsfoundation.org`
2. Verify PHP `mail()` function works on your server
3. Test by submitting a contact form

## Step 10: SSL Certificate

1. In cPanel, navigate to **SSL/TLS Status**
2. Enable **AutoSSL** for your domain
3. Or install a Let's Encrypt certificate
4. Verify HTTPS works: https://theactsfoundation.org/

## Directory Structure (After Upload)

```
public_html/
├── api/
│   ├── config.php
│   ├── contact.php
│   ├── volunteer.php
│   └── donors/
│       ├── create.php
│       └── list.php
├── _next/
│   └── (Next.js static assets)
├── about/
│   └── index.html
├── philadelphia/
│   └── index.html
├── (all other route folders)
├── taf_logo_transparent.png
├── robots.txt
├── sitemap.xml
└── index.html
```

## Troubleshooting

### PHP Errors
- Check cPanel **Error Log** for PHP errors
- Verify database credentials in `config.php`
- Ensure PHP version is 7.4+ (preferably 8.0+)

### Database Connection Issues
- Verify database user has proper privileges
- Check database host (might be specific hostname instead of `localhost`)
- Test connection using phpMyAdmin

### API 404 Errors
- Ensure `api` folder is in correct location
- Check `.htaccess` rules aren't blocking API requests
- Verify PHP files have correct permissions

### Missing Assets
- Clear browser cache
- Verify all files from `/out` were uploaded
- Check file paths are correct (case-sensitive)

## Maintenance

### Updating the Site

1. Make changes locally
2. Run `npm run build`
3. Upload new files from `/out` to `public_html`
4. Clear any caching (in cPanel or CDN if used)

### Database Backups

1. In cPanel, use **Backup Wizard**
2. Schedule automatic backups
3. Download database backups regularly

### Monitoring

- Check cPanel error logs weekly
- Monitor form submissions in database
- Review email notifications for form submissions

## Alternative: Supabase Integration

If you prefer using Supabase instead of PHP + MySQL:

1. The codebase includes `.env` with Supabase credentials
2. You can create Supabase Edge Functions for API endpoints
3. Replace PHP calls with Supabase client calls
4. Follow Supabase documentation for setup

Contact: theactsfoundationtech@gmail.com
