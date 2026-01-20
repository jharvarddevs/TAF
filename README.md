# The Acts Foundation - Visual Story Hub Website

A powerful, story-driven nonprofit website for The Acts Foundation, fighting food insecurity in Philadelphia.

## Project Overview

This is a production-ready Next.js 13 application with static export, designed for deployment to Hostinger with cPanel. The website features scroll-based storytelling, interactive Philadelphia neighborhood hub, donation journey, and Acts 20:35 Circle donor recognition.

### Key Features

- **Scroll-Based Story Homepage**: 7 immersive chapters that emotionally engage visitors
- **Philadelphia Hub**: Interactive neighborhood grid with story modals
- **Donation Journey**: Impact simulator showing real-time donation effects
- **Acts 20:35 Circle**: Public donor recognition wall with badge levels
- **Volunteer Portal**: Interactive quiz matching volunteers to opportunities
- **Complete SEO**: Metadata, Open Graph, Twitter Cards, JSON-LD Schema, Sitemap
- **Mobile Responsive**: Beautiful design on all devices
- **Static Export**: Fast, secure, and easy to deploy

## Tech Stack

- **Framework**: Next.js 13 with App Router
- **Styling**: Tailwind CSS + shadcn/ui components
- **Typography**: Sora (headings) + Inter (body)
- **Icons**: Lucide React
- **Backend**: PHP + MySQL (for cPanel deployment)
- **Deployment**: Static export to Hostinger

## Color Palette

- Primary Blue: `#1565C0`
- Soft Blue: `#E3F2FD`
- Hope Green: `#16A34A`
- Accent Red: `#DC2626` (CTAs only)
- Text: `#111827`

## Pages

1. **/** - Homepage (scroll-based story with 7 chapters)
2. **/about/** - Mission, Acts 20:35 inspiration, impact metrics
3. **/philadelphia/** - Interactive neighborhood hub
4. **/programs/** - Food distribution, emergency support, outreach
5. **/impact/** - Stories and metrics from served families
6. **/donate/** - Donation journey with impact simulator
7. **/acts-2035-circle/** - Donor recognition wall with filters
8. **/volunteer/** - Interactive quiz + volunteer form
9. **/faq/** - Frequently asked questions with accordion
10. **/contact/** - Contact form
11. **/thank-you/** - Post-donation recognition signup

## Components

### Core Components
- `StoryChapter` - Scroll-based story sections
- `SilhouetteScene` - SVG silhouette illustrations
- `ImpactStatCard` - Metric display cards
- `DonationSimulator` - Interactive donation impact slider
- `DonorWall` - Filterable donor recognition grid
- `PhillyHubGrid` - Interactive Philadelphia neighborhood grid
- `VolunteerQuiz` - Multi-step volunteer matching quiz
- `BadgeTag` - Donor level badges
- `CTASection` - Call-to-action sections
- `Navigation` - Responsive header with mobile menu
- `Footer` - Site footer with contact info

## Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000

### Build for Production

```bash
npm run build
```

Static files output to `/out` directory

### Type Check

```bash
npm run typecheck
```

## Backend API (PHP + MySQL)

### Database Setup

1. Import `schema.sql` into MySQL database
2. Configure `public/api/config.php` with database credentials

### API Endpoints

- `POST /api/contact.php` - Contact form submissions
- `POST /api/volunteer.php` - Volunteer applications
- `POST /api/donors/create.php` - Join Acts 20:35 Circle
- `GET /api/donors/list.php` - Retrieve donor list

### Security Features

- Honeypot anti-spam fields
- Input validation and sanitization
- Email validation
- SQL injection protection (prepared statements)
- CORS headers configured

## Deployment to Hostinger

See **README_DEPLOYMENT.md** for complete step-by-step deployment instructions.

### Quick Deploy Steps

1. Build: `npm run build`
2. Upload `/out` contents to `public_html` via cPanel File Manager or FTP
3. Import `schema.sql` to MySQL database via phpMyAdmin
4. Configure database credentials in `public/api/config.php`
5. Set up SSL certificate in cPanel
6. Test all forms and pages

## SEO Features

- **Metadata**: Title, description, keywords on every page
- **Open Graph**: Full OG tags for social sharing
- **Twitter Cards**: Twitter-specific metadata
- **JSON-LD Schema**: Organization, WebSite, FAQPage, BreadcrumbList
- **Sitemap**: XML sitemap at `/sitemap.xml`
- **Robots.txt**: Search engine directives

## Design Philosophy

- **Bold typography** for emotional impact
- **Clean white space** for readability
- **Story-driven** chapters instead of traditional sections
- **Visual hierarchy** guiding users toward donation
- **Silhouettes and illustrations** creating memorable scenes
- **Mobile-first** responsive design
- **Accessibility** semantic HTML and ARIA labels

## Directory Structure

```
project/
├── app/                    # Next.js pages (App Router)
│   ├── page.tsx           # Homepage
│   ├── about/
│   ├── philadelphia/
│   ├── programs/
│   ├── impact/
│   ├── donate/
│   ├── acts-2035-circle/
│   ├── volunteer/
│   ├── faq/
│   ├── contact/
│   └── thank-you/
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── StoryChapter.tsx
│   └── ...
├── lib/                  # Utilities
│   ├── utils.ts
│   └── schema.ts         # JSON-LD schemas
├── public/               # Static assets
│   ├── api/             # PHP API endpoints
│   ├── robots.txt
│   ├── sitemap.xml
│   └── taf_logo_transparent.png
├── schema.sql           # MySQL database schema
└── README_DEPLOYMENT.md # Deployment guide
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contact

**The Acts Foundation**
3599 Nottingham Lane Unit K
Philadelphia, PA 19114

Phone: 609-309-4280
Email: theactsfoundationtech@gmail.com
Website: https://theactsfoundation.org

---

Built with ❤️ for fighting food insecurity in Philadelphia

**Acts 20:35**: "It is more blessed to give than to receive."
