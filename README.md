# Allan Rufus - Performance Marketing Portfolio

A premium, high-conversion portfolio website showcasing performance marketing expertise with a focus on measurable business outcomes.

## 🎯 Overview

This is a single-page portfolio website designed for a Performance Marketing Specialist with 4+ years of experience. The site emphasizes:

- **Data-driven results** over vanity metrics
- **Business outcomes** with real campaign performance
- **Professional storytelling** through case studies
- **Founder & recruiter friendly** design

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React
- **Fonts**: Inter & Plus Jakarta Sans (Google Fonts)
- **Theme**: Dark mode by default with toggle (next-themes)

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles and custom CSS
├── components/
│   ├── about-section.tsx         # About/Summary section
│   ├── case-studies-section.tsx  # Case studies with modal
│   ├── experience-section.tsx    # Experience timeline
│   ├── footer.tsx                # Footer with CTA
│   ├── hero-section.tsx          # Hero section with stats
│   ├── navigation.tsx            # Navigation with dark mode toggle
│   ├── portfolio-section.tsx     # Portfolio tabs (creatives, landing pages, etc.)
│   ├── skills-section.tsx        # Skills grid
│   └── theme-provider.tsx        # Theme provider wrapper
├── public/
│   ├── cv/                 # Place CV PDF here
│   └── screenshots/        # Campaign screenshots & images
├── tailwind.config.ts      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json           # Dependencies

```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Allan-Rufus-performance-marketing-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📝 Customization Guide

### 1. Personal Information

Update the following files with your actual information:

**`app/layout.tsx`** - SEO metadata:
```typescript
export const metadata: Metadata = {
  title: "Your Name - Performance Marketing Specialist",
  description: "Your description here",
  // ...
};
```

**`components/hero-section.tsx`** - Hero stats and info
**`components/about-section.tsx`** - About text and philosophy
**`components/experience-section.tsx`** - Work experience
**`components/footer.tsx`** - Contact information

### 2. Case Studies

Edit `components/case-studies-section.tsx`:

- Add/modify case studies in the `caseStudies` array
- Include real metrics, strategies, and learnings
- Update placeholder content with actual campaign data

### 3. Portfolio Items

Edit `components/portfolio-section.tsx`:

- Update `portfolioData` object with your actual campaigns
- Add real performance metrics
- Include authentic strategy descriptions

### 4. Skills & Expertise

Edit `components/skills-section.tsx`:

- Modify `skillCategories` to match your expertise
- Add or remove skill categories as needed

### 5. Add Screenshots

Place your images in the `public/screenshots/` folder:

```bash
public/screenshots/
  ├── case-study-1.png
  ├── case-study-2.png
  ├── google-ads-performance.png
  ├── landing-page-1.png
  └── ...
```

Then update image paths in components:
```tsx
thumbnail: "/screenshots/case-study-1.png"
```

### 6. Add Your CV

Place your CV PDF in `public/cv/`:

```bash
public/cv/allan-rufus-cv.pdf
```

The download button will automatically link to this file.

## 🎨 Design Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  background: "hsl(var(--background))",
  foreground: "hsl(var(--foreground))",
  // Customize these values
}
```

Or edit CSS variables in `app/globals.css`:

```css
.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  /* ... */
}
```

### Fonts

Change fonts in `app/layout.tsx`:

```typescript
import { Inter, Your_Font } from "next/font/google";
```

### Animations

All animations use Framer Motion. Customize in individual components or add global animations in `tailwind.config.ts`.

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Done!** Your site will be live at `your-project.vercel.app`

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder
   - Or connect your GitHub repo

3. **Build settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

### Custom Domain

After deployment, add your custom domain in Vercel/Netlify settings.

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📊 Performance Optimization

This site is built with performance in mind:

- ✅ Static generation for fast loading
- ✅ Optimized images with Next.js Image
- ✅ Lazy loading components
- ✅ Minimal JavaScript bundle
- ✅ Tailwind CSS purging unused styles

## 🎯 Key Features

- ✨ Glassmorphism design with dark theme
- 🎨 Smooth animations with Framer Motion
- 📱 Fully responsive on all devices
- ⚡ Fast page loads with Next.js
- 🔍 SEO optimized
- ♿ Accessibility features
- 🌙 Dark/Light mode toggle
- 📊 Case study modals with detailed metrics
- 🎨 Portfolio tabs for different work types
- 📧 Contact section with CTA

## 📝 Content Guidelines

When adding your content:

1. **Be specific**: Use real numbers and metrics
2. **Show impact**: Focus on business outcomes, not activities
3. **Use proof**: Screenshots, reports, and data visualizations
4. **Keep it scannable**: Bullet points and clear sections
5. **Be authentic**: Only include real work and results

## 🐛 Troubleshooting

### Dark mode not working
- Clear browser cache
- Check if JavaScript is enabled
- Verify `next-themes` is installed

### Images not loading
- Ensure images are in the `public/` folder
- Check file paths start with `/`
- Verify image file extensions match

### Build errors
- Delete `node_modules` and `.next`
- Run `npm install` again
- Check Node.js version (18+)

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Support

For questions or issues, please contact:
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile]

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**
