# Development Plan - Mawit Portfolio Website

**Version:** 1.0  
**Timeline:** 5-6 weeks  
**Reference:** mawit_portfolio_prd.md

---

## Overview

This plan breaks down the portfolio development into clear, testable milestones. Each milestone has specific deliverables and acceptance criteria.

---

## Stage 0: Setup (1-2 days)

### Tasks:
1. **Initialize Next.js project** with TypeScript, Tailwind, App Router
2. **Install dependencies:** framer-motion, react-icons, next-themes, @react-three/fiber, @react-three/drei, three, react-intersection-observer, axios, @notionhq/client
3. **Configure Tailwind** with custom color scheme from PRD
4. **Create folder structure:** src/app, components/sections, components/ui, components/3d, lib, types, data
5. **Setup Git repository** and create .gitignore

### Deliverables:
- [ ] Project runs on localhost
- [ ] Tailwind colors configured (light/dark mode)
- [ ] Folder structure in place
- [ ] Git repository initialized

### Acceptance:
✓ `npm run dev` works without errors
✓ Custom color classes available
✓ .env.local in .gitignore

---

## Stage 1: Core Layout (2-3 days)

### Milestone 1.1: Navigation & Theme Toggle

**File: `src/components/Navigation.tsx`**
- Sticky navigation bar
- Logo/name on left
- Menu links: Home, Projects, Services, Skills, About, Blog, Testimonials, Contact
- Theme toggle button on right
- Mobile hamburger menu
- Smooth scroll functionality
- Active section highlighting

**File: `src/components/ui/ThemeToggle.tsx`**
- System preference detection
- Manual toggle (sun/moon icon)
- Persistent localStorage

**File: `src/app/layout.tsx`**
- ThemeProvider wrapper
- Font configuration (Inter)
- Basic metadata

**File: `src/app/page.tsx`**
- Import all section components
- Section IDs for navigation

### Deliverables:
- [ ] Navigation functional on desktop/mobile
- [ ] Theme toggle works
- [ ] Smooth scrolling to sections
- [ ] Active section highlighted

### Acceptance:
✓ Navigation sticks on scroll
✓ Theme persists on reload
✓ Mobile menu toggles
✓ All sections have correct IDs

---

## Stage 2: Static Sections (7-10 days)

### Milestone 2.1: Hero Section (2-3 days)

**File: `src/components/sections/Hero.tsx`**
- Full viewport height section
- Grid layout: text left, 3D right
- Name: "Mawit Bikom Gad"
- Title: "Full-Stack Web Developer"
- Tagline
- CTA buttons: "View Projects", "Hire Me"
- Framer Motion animations

**File: `src/components/3d/PixelatedComputer.tsx`**
- Three.js/React Three Fiber
- Pixelated/voxel computer model
- Mouse interaction (rotation/parallax)
- Lazy loaded (dynamic import)
- Performance optimized

### Deliverables:
- [ ] Hero section responsive
- [ ] 3D element interactive
- [ ] CTAs link to sections
- [ ] Animations smooth

### Acceptance:
✓ 3D maintains 60fps
✓ Mobile shows 3D or fallback
✓ Text readable in both themes

---

### Milestone 2.2: Services Section (1 day)

**File: `src/components/sections/Services.tsx`**
- Section heading: "Services"
- 4 service cards with icons (from react-icons):
  - Full-Stack Development (FiCode)
  - UI/UX Design (FiLayout)
  - Database Design (FiDatabase)
  - Software Architecture (FiLayers)
- Hover effects
- CTA: "Get in Touch" → links to contact
- Scroll animations

### Deliverables:
- [ ] 4 service cards displayed
- [ ] Grid responsive (1/2/4 columns)
- [ ] Hover animations
- [ ] CTA functional

### Acceptance:
✓ Cards animate on scroll
✓ Icons visible
✓ Responsive layout

---

### Milestone 2.3: Skills Section (1-2 days)

**File: `src/components/sections/Skills.tsx`**
- Section heading: "Skills & Technologies"
- Categorized display:
  - Languages: HTML5, CSS3, JavaScript
  - Frameworks: Next.js, Express.js, Node.js
  - Libraries: React, Axios, Redux, Socket.io
  - Database: MongoDB
  - ORM: Mongoose, Prisma
  - Version Control: Git, GitHub
  - Styling: SCSS, Tailwind
  - Deployment: Heroku, Vercel
- Technology icons (react-icons/si)
- "Currently Learning" section: AI/ML

### Deliverables:
- [ ] All technologies listed
- [ ] Icons for each tech
- [ ] Organized by category
- [ ] Currently learning visible

### Acceptance:
✓ All 16+ technologies shown
✓ Grid responsive
✓ Icons load correctly

---

### Milestone 2.4: About Section (1-2 days)

**File: `src/components/sections/About.tsx`**
- Section heading: "About Me"
- Two-column layout: photo left, text right
- Photo placeholder (can be updated)
- Dynamic calculations:
  - Age from DOB: May 3, 2000
  - Years of experience from: 2020
- Narrative including:
  - Self-taught journey
  - Artistic background (instrumentalist)
  - Problem-solving approach
  - Future interests (AI)
- Location: Buea, Cameroon

### Deliverables:
- [ ] Photo placeholder
- [ ] Age calculates dynamically
- [ ] Experience calculates dynamically
- [ ] Content engaging
- [ ] Responsive layout

### Acceptance:
✓ Calculations correct
✓ Layout switches to single column on mobile
✓ Photo aspect ratio maintained

---

### Milestone 2.5: Contact Section (2 days)

**File: `src/components/sections/Contact.tsx`**
- Section heading: "Get in Touch"
- Contact form (left):
  - Name (required)
  - Email (required, validated)
  - Subject (optional)
  - Message (required)
  - Submit button with loading state
  - Success/error messages
- Contact info (right):
  - Email: mawitgaddev@gmail.com
  - Phone: +237688870196
  - Location: Buea, Cameroon (WAT)
- Social links:
  - LinkedIn, GitHub, Hashnode
- Availability status

### Deliverables:
- [ ] Form with validation
- [ ] Contact info displayed
- [ ] Social links functional
- [ ] Responsive layout

### Acceptance:
✓ Form validates before submit
✓ Email format validated
✓ Links open in new tabs
✓ Form submits (connects in Stage 5)

---

## Stage 3: Dynamic Content (5-7 days)

### Milestone 3.1: Notion Integration - Projects (3-4 days)

**Prerequisites:**
- Create Notion database with structure:
  - Title (title)
  - Description (text)
  - Tech Stack (multi-select)
  - Live URL (url)
  - Status (select: Completed/In Progress/No Longer Accessible)
  - Featured Image (files)
  - Project Type (select: Client/Personal/Proprietary)
  - Order (number)
  - Date Completed (date)
- Get Notion Integration Token
- Share database with integration

**File: `.env.local`**
```
NOTION_API_KEY=your_token
NOTION_DATABASE_ID=your_db_id
```

**File: `src/lib/notion.ts`**
- Install @notionhq/client
- Create getProjects() function
- Map Notion response to Project interface
- Error handling

**File: `src/app/api/projects/route.ts`**
- API route with ISR (revalidate: 3600)
- Calls getProjects()
- Returns JSON

**File: `src/data/fallback.json`**
- Static fallback data with 4 projects:
  - Litumba
  - Ndolo (no longer accessible)
  - MustardSeed Project Tracker
  - Personal Website

**File: `src/components/sections/Projects.tsx`**
- Fetch from /api/projects
- Loading state
- Fallback to static data on error
- Project cards with:
  - Featured image or placeholder
  - Title
  - Status badge
  - Description
  - Tech stack tags
  - "View Project" link (if available)
- Grid layout (1/2/3 columns)

### Deliverables:
- [ ] Notion integration working
- [ ] API route functional
- [ ] Fallback data ready
- [ ] Projects section displays data
- [ ] ISR caching works

### Acceptance:
✓ Projects load from Notion
✓ Falls back gracefully on error
✓ Cache revalidates every hour
✓ All project fields display correctly

---

### Milestone 3.2: Hashnode Integration - Blog (2 days)

**File: `src/lib/hashnode.ts`**
- GraphQL query for user's posts
- getBlogPosts() function (limit: 6)
- Map to BlogPost interface
- Error handling

**File: `src/app/api/blog/route.ts`**
- API route with ISR
- Returns latest posts

**File: `src/components/sections/Blog.tsx`**
- Fetch from /api/blog
- Loading state
- Empty state if no posts
- Blog cards with:
  - Cover image
  - Title
  - Brief excerpt
  - Published date
  - Read time
  - "Read More" link
- "View All Articles" button → https://mawit.hashnode.dev

### Deliverables:
- [ ] Hashnode API working
- [ ] Blog posts fetched
- [ ] Cards display correctly
- [ ] Links to Hashnode

### Acceptance:
✓ Latest 6 posts shown
✓ Links open in new tab
✓ Empty state handled
✓ Images lazy loaded

---

### Milestone 3.3: Testimonials Section (1-2 days)

**File: `src/data/testimonials.json`**
- Array of placeholder testimonials
- Structure:
  - id, name, title, company
  - relationship, text
  - photo (null for now), linkedInUrl
  - date

**File: `src/types/index.ts`**
- Testimonial interface

**File: `src/components/sections/Testimonials.tsx`**
- Load from testimonials.json
- Empty state if none
- Testimonial cards with:
  - Photo or initial
  - Name, title, company
  - Relationship
  - Testimonial text
  - LinkedIn icon link
  - Date
- Note about placeholders
- Grid layout (1/2/3 columns)

### Deliverables:
- [ ] Testimonials section complete
- [ ] Placeholder structure
- [ ] Easy to update JSON

### Acceptance:
✓ At least 1 placeholder testimonial
✓ Ready for real testimonials
✓ LinkedIn links work

---

## Stage 4: Polish & Optimization (4-5 days)

### Milestone 4.1: Performance Optimization (2-3 days)

**Tasks:**
1. **Image Optimization**
   - Configure next.config.js image domains
   - Use Next Image everywhere
   - Enable WebP/AVIF formats
   - Lazy loading

2. **Code Splitting**
   - Dynamic import for 3D component
   - Lazy load heavy components

3. **Lighthouse Audit**
   - Run audit (target: 90+ all metrics)
   - Fix issues
   - Optimize bundle size

4. **Reduced Motion**
   - Add CSS for prefers-reduced-motion
   - Update framer-motion components

### Deliverables:
- [ ] All images optimized
- [ ] Code split appropriately
- [ ] Lighthouse scores ≥ 90
- [ ] Reduced motion support

### Acceptance:
✓ Performance: ≥90
✓ FCP < 1.5s
✓ No layout shift
✓ Animations respect reduced-motion

---

### Milestone 4.2: SEO Implementation (1-2 days)

**File: `src/app/layout.tsx` - Metadata**
- Complete metadata object
- Open Graph tags
- Twitter Card tags
- Keywords, description
- Canonical URL

**JSON-LD Structured Data**
- Person schema
- Contact info
- Social profiles

**File: `src/app/sitemap.ts`**
- Generate sitemap.xml
- All sections included

**File: `src/app/robots.ts`**
- Generate robots.txt
- Allow all, reference sitemap

**Create OG Image**
- 1200x630px image
- Name and title
- Save as public/og-image.jpg

### Deliverables:
- [ ] Metadata complete
- [ ] Structured data added
- [ ] Sitemap generated
- [ ] Robots.txt created
- [ ] OG image created

### Acceptance:
✓ Meta tags in <head>
✓ Rich Results Test passes
✓ Social preview looks good
✓ /sitemap.xml accessible

---

### Milestone 4.3: Accessibility Audit (1-2 days)

**Tasks:**
1. **Keyboard Navigation**
   - Tab through entire site
   - Add skip link
   - Ensure focus visible
   - No keyboard traps

2. **Screen Reader**
   - Test with NVDA/VoiceOver
   - Alt text for all images
   - Proper heading hierarchy
   - ARIA labels where needed

3. **Color Contrast**
   - Check all text (4.5:1 ratio)
   - Both themes
   - WebAIM Contrast Checker

4. **ARIA Implementation**
   - aria-label for interactive elements
   - aria-live for dynamic content
   - Proper roles

### Deliverables:
- [ ] Keyboard navigation perfect
- [ ] Screen reader friendly
- [ ] Color contrast passes
- [ ] ARIA properly used

### Acceptance:
✓ Lighthouse Accessibility ≥ 95
✓ All interactive elements keyboard accessible
✓ WCAG AA compliant

---

## Stage 5: Email & Deployment (2-3 days)

### Milestone 5.1: Email Service Integration (1-2 days)

**Setup Resend:**
1. Sign up at resend.com
2. Get API key
3. Add to .env.local

**File: `.env.local`**
```
RESEND_API_KEY=your_key
RESEND_TO_EMAIL=mawitgaddev@gmail.com
```

**Install:**
```bash
npm install resend
```

**File: `src/app/api/contact/route.ts`**
- POST endpoint
- Validate input
- Send email via Resend
- Return success/error

**Update: `src/components/sections/Contact.tsx`**
- Connect form to API
- Handle responses
- Show success/error messages
- Reset form on success

### Deliverables:
- [ ] Resend configured
- [ ] API route functional
- [ ] Form sends emails
- [ ] Error handling

### Acceptance:
✓ Emails received at mawitgaddev@gmail.com
✓ Form resets on success
✓ Error messages clear

---

### Milestone 5.2: Final Testing (1 day)

**Cross-Browser Testing:**
- Chrome
- Firefox
- Safari
- Edge

**Device Testing:**
- Mobile (320px - 768px)
- Tablet (768px - 1024px)
- Desktop (1024px+)
- Large screens (1440px+)

**Functionality Checklist:**
- [ ] Navigation works everywhere
- [ ] Theme toggle persists
- [ ] All links functional
- [ ] Projects load from Notion
- [ ] Blog loads from Hashnode
- [ ] Contact form sends emails
- [ ] Testimonials display
- [ ] 3D element performs well
- [ ] All animations smooth
- [ ] No console errors

### Deliverables:
- [ ] All browsers tested
- [ ] All devices tested
- [ ] Bugs fixed
- [ ] Final QA passed

---

### Milestone 5.3: Deployment (1 day)

**Vercel Deployment:**

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Sign up at vercel.com
   - Import GitHub repository
   - Configure environment variables:
     - NOTION_API_KEY
     - NOTION_DATABASE_ID
     - RESEND_API_KEY
     - RESEND_TO_EMAIL

3. **Domain Setup** (if available)
   - Add custom domain
   - Update DNS records
   - Configure SSL

4. **Final Checks**
   - Test production build
   - Verify environment variables
   - Check all API routes
   - Test contact form

### Deliverables:
- [ ] Deployed to Vercel
- [ ] Environment variables set
- [ ] Custom domain (optional)
- [ ] Production site working

### Acceptance:
✓ Site accessible at production URL
✓ All features working in production
✓ No deployment errors
✓ SSL certificate active

---

## Post-Launch Tasks

### Optional Enhancements:
1. **Analytics**
   - Add Vercel Analytics
   - Or Google Analytics 4

2. **Monitoring**
   - Setup error tracking (Sentry)
   - Uptime monitoring

3. **Content Updates**
   - Add real testimonials
   - Update Notion with new projects
   - Write blog posts

4. **Future Features** (from PRD):
   - Resume/CV download
   - Case study pages for projects
   - Newsletter subscription
   - Multi-language support

---

## Success Metrics

**Performance:**
- ✓ Lighthouse Performance ≥ 90
- ✓ FCP < 1.5s
- ✓ TTI < 3s

**SEO:**
- ✓ All meta tags present
- ✓ Structured data validates
- ✓ Sitemap indexed

**Accessibility:**
- ✓ WCAG AA compliant
- ✓ Keyboard accessible
- ✓ Screen reader friendly

**Functionality:**
- ✓ All sections working
- ✓ Dynamic content loading
- ✓ Forms functional
- ✓ Responsive design

---

## Quick Reference: File Checklist

### Core Files:
- [ ] src/app/layout.tsx
- [ ] src/app/page.tsx
- [ ] src/app/globals.css
- [ ] tailwind.config.js
- [ ] next.config.js
- [ ] .env.local (not committed)

### Components:
- [ ] src/components/Navigation.tsx
- [ ] src/components/ui/ThemeToggle.tsx
- [ ] src/components/3d/PixelatedComputer.tsx
- [ ] src/components/sections/Hero.tsx
- [ ] src/components/sections/Projects.tsx
- [ ] src/components/sections/Services.tsx
- [ ] src/components/sections/Skills.tsx
- [ ] src/components/sections/About.tsx
- [ ] src/components/sections/Blog.tsx
- [ ] src/components/sections/Testimonials.tsx
- [ ] src/components/sections/Contact.tsx

### API Routes:
- [ ] src/app/api/projects/route.ts
- [ ] src/app/api/blog/route.ts
- [ ] src/app/api/contact/route.ts

### Libraries:
- [ ] src/lib/notion.ts
- [ ] src/lib/hashnode.ts

### Data:
- [ ] src/data/fallback.json
- [ ] src/data/testimonials.json

### Types:
- [ ] src/types/index.ts

### SEO:
- [ ] src/app/sitemap.ts
- [ ] src/app/robots.ts
- [ ] public/og-image.jpg

---

## Git Commit Strategy

Suggested commits for each milestone:
1. "Initial setup and dependencies"
2. "Add navigation and theme toggle"
3. "Complete hero section with 3D element"
4. "Add services section"
5. "Add skills section"
6. "Add about section"
7. "Add contact section"
8. "Integrate Notion API for projects"
9. "Integrate Hashnode API for blog"
10. "Add testimonials section"
11. "Performance optimizations"
12. "SEO implementation"
13. "Accessibility improvements"
14. "Email service integration"
15. "Final testing and bug fixes"
16. "Ready for deployment"

---

**Document End**

*This plan is designed to be followed sequentially. Each milestone builds on the previous ones. Test thoroughly at each checkpoint before proceeding.*
