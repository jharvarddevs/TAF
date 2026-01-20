# Hostinger / cPanel Deployment Guide

Follow these steps to deploy The Acts Foundation website and its PHP backend.

## 1. Local Build
Export the static Next.js application:
```bash
npm run build
```
This generates an `out` folder.

## 2. Server Setup (cPanel)
1. **Upload Files**: Upload the contents of the `out` folder to your `public_html` directory.
2. **PHP API**: Ensure the `api/` and `forms/` folders from the `public/` directory are also in `public_html`.
   - `public_html/api/email-signup.php`
   - `public_html/api/admin/export-email-signups.php`
   - `public_html/forms/contact.php`
   - `public_html/forms/volunteer.php`

## 3. Database Configuration
1. Login to cPanel -> **MySQL® Databases**.
2. Create a database named `taf_db`.
3. Create a user named `taf_user` and assign it to the database with **All Privileges**.
4. Run this SQL in **phpMyAdmin**:
```sql
CREATE TABLE email_signups (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  opted_in_updates TINYINT(1) DEFAULT 0,
  source_page VARCHAR(100) NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 4. Finalizing PHP Files
Open the following files on the server and update the database credentials:
- `api/email-signup.php`
- `api/admin/export-email-signups.php`

Update these variables:
```php
$host = 'localhost';
$db   = 'taf_db';
$user = 'taf_user';
$pass = 'YOUR_ACTUAL_PASSWORD';
```

## 5. Security Note
Update the `$secretKey` in `api/admin/export-email-signups.php` to a random long string to protect your email list downloads.
You can then export your list at:
`https://yourdomain.com/api/admin/export-email-signups.php?key=YOUR_SECRET_KEY`
