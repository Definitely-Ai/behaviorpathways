# Behavior Pathways

A production-ready marketing and information site for an independent Applied Behavior Analysis provider.

## Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Content Management**: MDX-based content system for easy editing
- **SEO Optimized**: Meta tags, structured data, sitemap, and robots.txt
- **Accessible**: WCAG AA compliant with keyboard navigation and screen reader support
- **Performance**: Optimized for Core Web Vitals with static generation
- **Contact Form**: Serverless API with email integration and fallback storage

## Quick Start

### Prerequisites

- Node.js 18+
- npm or pnpm

### Local Development

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000)

## Deployment

### Vercel (Recommended)

1. **Create GitHub Repository**
   - Push this code to a GitHub repository

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy" (no environment variables needed!)

3. **Custom Domain** (Optional)
   - Add your custom domain in Vercel dashboard
   - The site will automatically work with your custom domain

### Other Platforms

The site is built with standard Next.js and can be deployed to any platform that supports Node.js:

- Netlify
- Railway
- Render
- AWS Amplify

## Content Management

### Adding Pages

1. Create a new `.mdx` file in `content/pages/`
2. Add frontmatter:
   ```yaml
   ---
   title: 'Page Title'
   description: 'Page description for SEO'
   ogImage: '/og.jpg'
   ---
   ```
3. Add your content in Markdown
4. The page will be automatically available at `/page-name`

### Adding Blog Posts

1. Create a new `.mdx` file in `content/blog/`
2. Add frontmatter:
   ```yaml
   ---
   title: 'Post Title'
   description: 'Post description'
   date: '2024-01-15'
   published: true
   ---
   ```
3. Add your content in Markdown
4. The post will appear in the blog index

### Updating Site Configuration

Edit `src/lib/siteConfig.ts` to update:

- Site name and description
- Navigation menu
- Contact information
- Social media links
- Testimonials
- Services
- FAQs

## Customization

### Styling

- Colors and theme: `tailwind.config.ts`
- Global styles: `src/app/globals.css`
- Component styles: Individual component files

### Components

All components are in `src/components/`:

- `ui/` - Basic UI components (Button, Card, etc.)
- Main components (Header, Footer, Hero, etc.)

### Adding New Features

1. Create components in `src/components/`
2. Add pages in `src/app/`
3. Update navigation in `siteConfig.ts`
4. Add API routes in `src/app/api/`

## Performance

The site is optimized for performance:

- Static generation for all pages
- Image optimization with Next.js Image
- Minimal JavaScript bundle
- Optimized fonts and CSS

## SEO

- Automatic sitemap generation
- Meta tags and Open Graph
- Structured data (JSON-LD)
- Robots.txt
- Canonical URLs

## Accessibility

- WCAG AA compliant
- Keyboard navigation
- Screen reader support
- Focus management
- Color contrast compliance

## Support

For questions or issues:

- Email: hello@behaviorpathways.com
- Create an issue in the GitHub repository

## License

All rights reserved. This is a private project for Behavior Pathways.
