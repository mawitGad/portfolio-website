# Product Requirements Document (PRD)
## Mawit Bikom Gad - Personal Portfolio Website

---

## 1. Project Overview

### 1.1 Project Name
Mawit Bikom Gad Portfolio Website

### 1.2 Project Goals
1. Attract freelance clients for web development projects
2. Showcase technical skills and expertise to potential employers
3. Establish professional presence and expertise in Cameroon tech space
4. Create a modern, performant, and maintainable personal brand platform

### 1.3 Target Audience
- **Primary:** Potential freelance clients (individuals, small-to-large businesses)
- **Secondary:** Recruiters and hiring managers (local and international)
- **Tertiary:** Tech community in Cameroon and abroad

---

## 2. Core Requirements

### 2.1 Functional Requirements

#### FR-1: Dynamic Content Management
- **Projects:** Must pull directly from a Notion database
  - Real-time or cached synchronization
  - Structured project data (title, description, tech stack, URL, images, status)
  - Ability to add/edit/remove projects without code deployment

- **Testimonials/Reviews:** Must pull directly from LinkedIn
  - Automated or manual sync of LinkedIn recommendations
  - Display reviewer name, title, relationship, and recommendation text
  - LinkedIn profile link for each reviewer
  - Fallback to placeholder structure if LinkedIn API unavailable

#### FR-2: Page Sections (Single Page Application)
The website must include the following sections in order:

1. **Hero Section**
   - Interactive 3D pixelated computer setup
   - Name: "Mawit Bikom Gad"
   - Title: "Full-Stack Web Developer"
   - Brief compelling tagline/introduction
   - Primary CTA buttons: "View Projects", "Hire Me", "Contact"
   - Smooth scroll navigation

2. **Featured Projects Section**
   - Display projects from Notion database
   - Project cards with:
     - Project thumbnail/preview image
     - Project title
     - Brief description
     - Tech stack tags
     - Live demo link (if available)
     - Case study link/modal (optional)
   - Filter/sort functionality (optional)
   - Minimum 3-4 featured projects visible

3. **Services Section**
   - Service offerings clearly listed
   - Service cards/blocks for:
     - Full-stack web development
     - UI/UX design
     - Database schema design
     - Software architecture consultation
   - Each service with icon and brief description
   - CTA: "Get in Touch" or "Discuss Your Project"

4. **Skills & Technologies Section**
   - Visual display of tech stack
   - Categorized by:
     - Languages (HTML5, CSS3, JavaScript)
     - Frameworks (Next.js, Express.js, Node.js)
     - Libraries (React.js, Axios, Redux, Socket.io)
     - Database (MongoDB)
     - ORM (Mongoose, Prisma)
     - Version Control (Git, GitHub)
     - Styling (SCSS, Tailwind CSS)
     - Deployment (Heroku, Vercel)
   - Optional: "Currently Learning" section (AI/ML)
   - Icons/logos for each technology

5. **About Section**
   - Professional photo (optional)
   - "About Me" narrative including:
     - Self-taught journey (started 2020)
     - Artistic background (instrumentalist)
     - Problem-solving approach
     - Future interests (AI development)
   - Age calculation from DOB: May 3, 2000
   - Experience calculation from start year: 2020
   - Location: Buea, Cameroon

6. **Blog/Articles Section**
   - Integration with Hashnode blog
   - Display latest 3-6 blog posts
   - Post cards with:
     - Title
     - Excerpt
     - Published date
     - Read time
     - Featured image
     - Link to full article
   - "View All Articles" CTA linking to https://mawit.hashnode.dev

7. **Testimonials Section**
   - Pull recommendations from LinkedIn
   - Testimonial cards with:
     - Reviewer photo
     - Reviewer name
     - Reviewer title/company
     - Relationship to Mawit
     - Recommendation text
     - LinkedIn profile link
   - Carousel/grid layout
   - Placeholder structure if no testimonials available yet

8. **Contact Section**
   - Contact form with fields:
     - Name (required)
     - Email (required)
     - Subject/Project Type (optional)
     - Message (required)
   - Form validation
   - Email submission (to: mawitgaddev@gmail.com)
   - Success/error feedback messages
   - Direct contact information:
     - Email: mawitgaddev@gmail.com
     - Phone: +237688870196
     - Location: Buea, Cameroon
     - Time Zone: WAT
   - Social links:
     - LinkedIn: https://www.linkedin.com/in/mawit-bikom-754558224
     - GitHub: (if available)
     - Hashnode Blog: https://mawit.hashnode.dev
   - Availability status indicator

#### FR-3: Interactive Elements
- **3D Pixelated Computer Setup**
  - Interactive (mouse movement/scroll responsive)
  - Lightweight and performant
  - Positioned in hero section
  - Retro-modern aesthetic
  - Should not block content or CTAs

- **Light/Dark Mode Toggle**
  - System preference detection (default)
  - Manual toggle switch
  - Persistent user preference (localStorage)
  - Smooth transition between modes
  - All sections must support both modes

#### FR-4: Navigation
- Sticky/fixed navigation bar
- Smooth scroll to sections
- Active section highlighting
- Mobile-responsive hamburger menu
- Logo/name linking to top

#### FR-5: Responsiveness
- Fully responsive design for:
  - Mobile (320px - 768px)
  - Tablet (768px - 1024px)
  - Desktop (1024px+)
  - Large screens (1440px+)
- Touch-friendly interactions on mobile
- Optimized layouts for each breakpoint

### 2.2 Non-Functional Requirements

#### NFR-1: Performance
- Page load time: < 3 seconds (first contentful paint)
- Lighthouse score: 90+ across all metrics
- Optimized images (WebP, lazy loading)
- Code splitting and lazy loading for sections
- Minimal bundle size
- CDN for static assets

#### NFR-2: SEO
- Semantic HTML
- Meta tags (title, description, Open Graph, Twitter Cards)
- Structured data (JSON-LD)
- Sitemap.xml
- robots.txt
- Optimized for search engines
- Social media preview cards

#### NFR-3: Accessibility
- WCAG 2.1 Level AA compliance
- Keyboard navigation support
- Screen reader compatibility
- ARIA labels where appropriate
- Sufficient color contrast ratios (both light/dark modes)
- Focus indicators
- Alt text for all images

#### NFR-4: Browser Compatibility
- Latest 2 versions of:
  - Chrome
  - Firefox
  - Safari
  - Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

#### NFR-5: Security
- HTTPS only
- Input sanitization (contact form)
- CSRF protection
- Rate limiting on form submissions
- Secure API keys (Notion, LinkedIn)
- Environment variables for sensitive data

---

## 3. Technical Specifications

### 3.1 Tech Stack

**Frontend Framework:** Next.js (latest stable version)
- Reasoning: Already in Mawit's stack, excellent for SEO, performance, and developer experience

**Styling:** Tailwind CSS
- Reasoning: Utility-first, highly customizable, matches design preference for clean/minimal

**3D Graphics:** Three.js or React Three Fiber
- For the pixelated 3D computer setup
- Lightweight implementation

**Deployment:** Vercel
- Native Next.js hosting
- Automatic deployments
- Global CDN
- Edge functions support

**Additional Libraries:**
- `framer-motion` - for smooth animations
- `react-icons` - for technology logos and UI icons
- `next-themes` - for dark mode implementation
- `react-intersection-observer` - for scroll animations

### 3.2 Third-Party Integrations

#### Notion API Integration
**Purpose:** Fetch projects dynamically

**Requirements:**
- Notion database structure:
  - Title (text)
  - Description (rich text)
  - Tech Stack (multi-select)
  - Live URL (url)
  - Status (select: Completed, In Progress, No Longer Accessible)
  - Featured Image (files)
  - Project Type (select: Client Project, Personal, Proprietary)
  - Order/Priority (number)
  - Date Completed (date)

**Implementation:**
- Server-side data fetching (Next.js API routes)
- Caching strategy (ISR - Incremental Static Regeneration)
- Revalidation interval: 3600 seconds (1 hour) or on-demand
- Error handling for API failures
- Fallback to static data if Notion unavailable

**API Details:**
- Notion API v1
- Authentication via Integration Token
- Read-only access required

#### LinkedIn API Integration
**Purpose:** Fetch recommendations/testimonials

**Requirements:**
- LinkedIn profile recommendations
- Display publicly available recommendations
- Fallback to manual testimonials if API unavailable

**Implementation:**
- Server-side fetching
- Caching strategy (cached for 24 hours)
- Manual override option (JSON file fallback)
- Placeholder structure for future testimonials

**Challenges/Notes:**
- LinkedIn API has restrictions on public data access
- May require LinkedIn OAuth for authenticated requests
- Alternative: Manual scraping (with rate limiting) or manual JSON file
- **Recommended Approach:** Start with placeholder structure, implement LinkedIn integration if API access granted

#### Hashnode API Integration
**Purpose:** Fetch blog posts

**Requirements:**
- Latest blog posts from https://mawit.hashnode.dev
- Post metadata (title, excerpt, date, URL, featured image)

**Implementation:**
- Hashnode GraphQL API
- Server-side fetching
- ISR with revalidation
- Display 3-6 latest posts

### 3.3 Content Management

**Dynamic Content (from APIs):**
- Projects (Notion)
- Testimonials (LinkedIn or fallback)
- Blog posts (Hashnode)

**Static Content (hardcoded or CMS):**
- Personal information
- Services
- About section narrative
- Skills/technologies list
- Contact information

**Update Strategy:**
- Dynamic content: Automatic via API sync
- Static content: Code updates and redeployment
- Future consideration: Headless CMS (Sanity, Contentful) for static content

### 3.4 Hosting & Deployment

**Platform:** Vercel

**Domain:** TBD (suggest: mawitgad.com or mawit.dev)

**Deployment Strategy:**
- Git-based workflow (GitHub/GitLab)
- Automatic deployments on main branch push
- Preview deployments for pull requests
- Environment variables for API keys

**Environment Variables Required:**
- `NOTION_API_KEY`
- `NOTION_DATABASE_ID`
- `LINKEDIN_API_KEY` (if applicable)
- `HASHNODE_API_URL`
- `CONTACT_FORM_EMAIL` (or email service API key)

### 3.5 Analytics & Monitoring

**Analytics:**
- Vercel Analytics (built-in)
- Google Analytics 4 (optional)
- Track: page views, section interactions, CTA clicks, form submissions

**Monitoring:**
- Vercel monitoring
- Error tracking: Sentry (optional)
- Uptime monitoring: UptimeRobot (optional)

---

## 4. Design Specifications

### 4.1 Visual Design

**Design System:**
- Clean and minimal aesthetic
- Modern, professional
- Inspired by: https://rakeshkarmaker.com (reference provided)

**Typography:**
- Primary font: Inter, SF Pro, or similar modern sans-serif
- Headings: Bold, larger sizes
- Body: Regular weight, readable sizes (16px base)
- Code/tech: Monospace font (Fira Code, JetBrains Mono)

**Spacing:**
- Consistent spacing scale (Tailwind default: 4px base)
- Generous whitespace
- Breathing room between sections

**Layout:**
- Single-page application with smooth scrolling
- Section-based layout
- Maximum content width: 1280px
- Centered content with padding

### 4.2 Color Scheme

**Dark Mode (Default):**
```
Background Primary: #0A0A0A - #121212
Background Secondary: #1A1A1A - #1E1E1E
Text Primary: #FFFFFF
Text Secondary: #A0A0A0 - #B0B0B0
Accent/Primary: #3B82F6 - #4A90FF (Bright Blue)
Borders/Dividers: #2A2A2A - #333333
```

**Light Mode:**
```
Background Primary: #FFFFFF
Background Secondary: #F5F5F5 - #F8F8F8
Text Primary: #0A0A0A - #171717
Text Secondary: #666666 - #737373
Accent/Primary: #3B82F6 - #4A90FF (Bright Blue)
Borders/Dividers: #E5E5E5 - #EBEBEB
```

**Accent Variations:**
```
Hover State: #60A5FA (Sky Blue)
Subtle Backgrounds: #DBEAFE (Light Blue)
Success: #10B981 (Green)
Error: #EF4444 (Red)
Warning: #F59E0B (Amber)
```

### 4.3 Animations & Interactions

**Micro-interactions:**
- Button hover effects
- Link underline animations
- Card hover lift/shadow
- Smooth color transitions

**Scroll Animations:**
- Fade in on scroll (Intersection Observer)
- Parallax effects (subtle)
- Progress indicators

**Page Transitions:**
- Smooth section scrolling
- Theme toggle animation
- Modal/overlay animations

**Performance Considerations:**
- Use `transform` and `opacity` for animations
- Avoid layout thrashing
- Respect `prefers-reduced-motion`

---

## 5. User Stories

### US-1: As a potential client
**I want to** quickly understand what services Mawit offers and see examples of his work  
**So that** I can decide if I want to hire him for my project

**Acceptance Criteria:**
- Services clearly listed above the fold or in early sections
- Featured projects visible with live demos
- Contact CTA easily accessible
- Professional presentation builds trust

### US-2: As a recruiter
**I want to** see Mawit's technical skills and professional experience  
**So that** I can evaluate if he's a good fit for open positions

**Acceptance Criteria:**
- Skills section with comprehensive tech stack
- Years of experience dynamically calculated
- Projects demonstrate technical capabilities
- Contact information readily available

### US-3: As a visitor
**I want to** read the site comfortably in my preferred color mode  
**So that** I have a pleasant browsing experience

**Acceptance Criteria:**
- System preference detection works
- Manual toggle is easily accessible
- Both modes are readable and aesthetic
- Preference persists across sessions

### US-4: As Mawit (site owner)
**I want to** update my projects without touching code  
**So that** I can keep my portfolio current without redeployment

**Acceptance Criteria:**
- Projects sync from Notion database
- Changes reflect within 1 hour (or on-demand revalidation)
- No code changes needed for content updates
- Fallback if API fails

### US-5: As a mobile user
**I want to** navigate and interact with the site on my phone  
**So that** I can learn about Mawit's services on the go

**Acceptance Criteria:**
- Fully responsive on mobile devices
- Touch-friendly interactions
- Readable text sizes
- Fast loading on mobile networks

---

## 6. Success Metrics

### 6.1 Performance Metrics
- Lighthouse Performance Score: ≥ 90
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Cumulative Layout Shift: < 0.1

### 6.2 User Engagement Metrics
- Average session duration: > 2 minutes
- Bounce rate: < 50%
- Contact form submission rate: Track conversions
- CTA click-through rate: Track engagement

### 6.3 Business Metrics
- Client inquiries via contact form (target: 5+ per month)
- LinkedIn profile visits increase
- GitHub profile visits increase
- Blog traffic referrals from portfolio

---

## 7. Development Phases

### Phase 1: Foundation (Week 1-2)
- Project setup (Next.js, Tailwind, dependencies)
- Basic layout and navigation
- Color scheme and theme toggle implementation
- Responsive grid system

### Phase 2: Static Sections (Week 2-3)
- Hero section with 3D element
- About section
- Services section
- Skills section
- Contact section

### Phase 3: Dynamic Content (Week 3-4)
- Notion API integration (Projects)
- Hashnode API integration (Blog)
- LinkedIn integration (Testimonials) or placeholder structure
- Content caching and revalidation

### Phase 4: Polish & Optimization (Week 4-5)
- Animations and interactions
- Performance optimization
- SEO implementation
- Accessibility audit
- Cross-browser testing

### Phase 5: Deployment & Launch (Week 5-6)
- Vercel deployment
- Domain setup
- Analytics integration
- Final testing
- Launch

---

## 8. Future Enhancements (Post-Launch)

### P1 (High Priority)
- Contact form email service integration (SendGrid, Resend)
- Blog search and filter
- Project case studies (detailed pages)
- Resume/CV download

### P2 (Medium Priority)
- Multi-language support (English/French)
- Advanced animations (GSAP)
- Blog integration (write directly on site)
- Admin panel for content management

### P3 (Low Priority)
- Newsletter subscription
- Portfolio analytics dashboard
- Client testimonial submission form
- Speaking engagements/events section

---

## 9. Constraints & Assumptions

### Constraints
- Budget: Minimal (using free tiers of services)
- Timeline: Target 5-6 weeks for MVP
- Resources: Solo development
- API Limitations: Notion/LinkedIn rate limits

### Assumptions
- Notion database will be created with proper structure
- LinkedIn API access may be limited (fallback to manual)
- Hashnode blog is active and will remain on Hashnode
- Domain purchase will be handled separately
- Content (bio, project descriptions) will be provided

---

## 10. Open Questions

1. **Domain Name:** What domain should be used? (Suggestions: mawitgad.com, mawit.dev, mawitbikom.com)
2. **LinkedIn API:** Can we get access to LinkedIn API for recommendations, or should we use manual JSON fallback?
3. **Contact Form:** Which email service should be used for form submissions? (Resend, SendGrid, EmailJS)
4. **Analytics:** Google Analytics or stick with Vercel Analytics only?
5. **Resume:** Should we include a downloadable resume/CV section?
6. **Notion Database:** Has the Notion database been created yet? If not, we can create template.

---

## 11. Risks & Mitigation

### Risk 1: API Rate Limits
**Impact:** High  
**Probability:** Medium  
**Mitigation:** Implement caching, ISR, fallback to static data

### Risk 2: LinkedIn API Access
**Impact:** Medium  
**Probability:** High  
**Mitigation:** Prepare manual JSON fallback, use placeholder structure

### Risk 3: Performance with 3D Element
**Impact:** Medium  
**Probability:** Low  
**Mitigation:** Lazy load, optimize model, provide disable option

### Risk 4: Content Updates Delay
**Impact:** Low  
**Probability:** Low  
**Mitigation:** On-demand revalidation, reasonable cache times

---

## 12. Acceptance Criteria

The portfolio website will be considered complete when:

✅ All 8 sections are implemented and functional  
✅ Projects sync from Notion database  
✅ Light/Dark mode works with system preference  
✅ 3D pixelated computer setup is interactive and performant  
✅ Fully responsive across all device sizes  
✅ Lighthouse score ≥ 90 across all metrics  
✅ Contact form successfully sends emails  
✅ Blog posts display from Hashnode  
✅ SEO meta tags and structured data implemented  
✅ Accessibility standards met (WCAG AA)  
✅ Deployed to Vercel with custom domain  
✅ All links functional and tested  

---

## 13. Reference Materials

**Design Inspiration:**
- https://rakeshkarmaker.com (provided by client)
- https://www.craftz.dog/ (3D element inspiration)

**Current Portfolio:**
- https://mawit-com.vercel.app

**Existing Projects:**
- Litumba: https://litumba-client.vercel.app
- Ndolo: (no longer accessible)

**Blog:**
- https://mawit.hashnode.dev

**Data Reference:**
- mawit_portfolio_data_v2.md

---

## 14. Sign-off

**Document Version:** 1.0  
**Created:** February 3, 2026  
**Client:** Mawit Bikom Gad  
**Status:** Ready for Development

This PRD serves as the single source of truth for developing Mawit Bikom Gad's personal portfolio website. Any changes to requirements must be documented as version updates to this document.

---

**Next Steps:**
1. Review and approve PRD
2. Set up Notion database structure
3. Create development environment
4. Begin Phase 1 development
