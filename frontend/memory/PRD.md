# Mentor Global Website - PRD

## Original Problem Statement
Build a premium, enterprise-grade, fully responsive website for Mentor Global - a Global Health Fintech Infrastructure Holding Company. Position as infrastructure company, not a healthcare/software/insurance vendor.

## Architecture
- **Frontend**: React + Tailwind CSS + Custom animations (IntersectionObserver)
- **Backend**: FastAPI (minimal, existing hello-world endpoint)
- **Database**: MongoDB (not used - frontend-only site)
- **Font**: Plus Jakarta Sans (Google Fonts, closest to Axiforma)
- **Brand**: White (#FFFFFF), Mentor Blue (#0048FF sparingly), Black (#11111F)

## User Personas
1. **Potential Partners**: Healthcare organizations, insurers, fintechs looking for infrastructure
2. **Investors**: Looking for enterprise-grade global holding company
3. **Technology Clients**: Seeking white-label infrastructure solutions
4. **Corporates**: Needing health/insurance/fintech platforms

## Core Requirements (Static)
- 12 page routes with full content
- Premium dark/light alternating sections
- Animated counters, scroll-triggered animations
- Solutions dropdown navigation
- Contact form with frontend validation
- Responsive design (desktop + mobile)

## What's Been Implemented (Jan 29, 2026)
- [x] All 12 routes: /, /solutions, /solutions/{5-slugs}, /dexa, /subsidiaries, /about, /team, /contact
- [x] Home page: 9 sections (Hero, Positioning, Problem, Pillars, DEXA, Innovation, Scale, Global, Final CTA)
- [x] Solutions landing with 5 solution cards
- [x] 5 solution detail pages with dynamic content (modules, insurance lines, service center, AI layers, agent pods, Growth OS)
- [x] DEXA page with what-is/is-not, domains, agent pods, governance
- [x] Subsidiaries page with 4 country sections
- [x] About page v1 — SUPERSEDED Feb 2026
- [x] **About page v2 (Feb 2026)** — 16 sections, full BRD compliance:
      Hero with infrastructure composition visual, Founder Thesis (founder quote 1),
      Who We Are (3-layer model), What We Build (5 pillar cards), Why Infrastructure
      Matters (product-vs-infrastructure comparison), Operating Model (4 layers),
      Global Presence (5 regions), UAE & US Chapters (expansion timeline), Mentor
      Innovation + DEXA Backbone diagram, Dual Philosophy (Value for Clients / Growth
      for Employees), Belief Manifesto, 7 Values cards, Built by Operators section,
      6 Differentiators, Future We Are Building (founder quote 2), Final CTA.
      Tested 100% (iteration_12) — founder-quote uniqueness and anti-"planned"
      language rules verified.
- [x] Team page v1: 6 leadership cards (expandable) — SUPERSEDED Feb 2026
- [x] **Leadership Architects page v2 (Feb 2026)** — 15 sections, full BRD compliance:
      Hero with architecture composition visual, Founder quote, 3 Philosophy cards,
      Architecture Map (8 architects around Mentor Global hub), Founder Feature (Dr. Ali),
      Board Leadership (3), Executive Leadership (5 incl. DEXA), DEXA Virtual Intelligence
      Officer section with abstract core visual + governance, 6 expandable leader profile
      cards (Navroz, Rafique, Jawwad, Khubaib, Sarmad, Ovais), Operating Model (9 stages),
      8×8 Infrastructure Ownership Matrix, 8 Builder Credibility cards, DEXA Governance
      Note disclaimer, 8 Future Advisor placeholders, Final CTA. Tested 100% (iteration_11).
- [x] Contact form with validation and success message
- [x] Fixed navbar with Solutions dropdown
- [x] Global footer with navigation, solutions, presence
- [x] Animated counters in Scale section
- [x] Scroll-triggered reveal animations
- [x] Background imagery (Unsplash) in hero/DEXA/global sections
- [x] Mobile responsive with hamburger menu

## Visual Update (Jan 29, 2026 - Iteration 2)
- [x] Split hero layouts (text left, visual right) on Home, Solutions, SolutionDetail, DEXA, Subsidiaries
- [x] Removed all background grid lines from all pages
- [x] Added subtle ambient blue glow to dark sections for depth
- [x] Added relevant stock images to sections (healthcare, insurance, fintech, AI, infrastructure)
- [x] Upgraded platform visuals section with interactive card design
- [x] Solution-specific images for each solution detail page
- [x] Updated page title and meta description for branding
- [x] Added preconnect for image CDN (Unsplash) for performance
- [x] Mobile responsive: heroes stack text first, image second

## BRD Compliance Update (Jan 29, 2026 - Iteration 3)
- [x] Positioning section: 3 cards (Holding, Technology, Intelligence) + closing line per BRD
- [x] Problem section: 8 problem items per BRD grid + closing statement
- [x] DEXA home section: 6 key capabilities per BRD (Context, Routing, Coordination, Operations, Monitoring, Governance)
- [x] Innovation section: BRD body text + 4-line closing quote
- [x] Scale section: BRD subtext + closing line "not theoretical infrastructure"
- [x] Global Presence: BRD headline "Built in Singapore. Validated in Pakistan..."
- [x] About values: 7 BRD values (Innovation, Scale, Integrity, Efficiency, Empowerment, Execution, Intelligence)
- [x] About vision/mission: Updated to match BRD word-for-word
- [x] DEXA page: Added HealthRails section (Studio, Compose, Runtime) and Mentor OS section (10 capabilities)
- [x] DEXA page CTA: "Partner With DEXA Infrastructure"
- [x] All solution whoServes lists updated per BRD
- [x] All solution dexaRole descriptions updated per BRD
- [x] 100% BRD content compliance verified via testing (50+ string checks)

## Prioritized Backlog
### P0 (Done)
- All page routes and content ✓
- Navigation and routing ✓
- Contact form ✓
- Responsive design ✓

### P1 (Next Phase)
- SEO meta tags and Open Graph for all pages
- Page transition animations (page-level fade/slide)
- Loading skeleton states
- 404 page

### P2 (Enhancement)
- Blog/insights section
- Case studies page
- Animated SVG infrastructure diagrams
- Video backgrounds in hero sections
- Cookie consent banner
- Analytics integration

## Next Tasks
1. Add SEO meta tags (title, description, OG) for all 12 pages
2. Create 404 not found page
3. Add page transition animations between routes
4. Create animated SVG diagrams for infrastructure visuals
5. Add loading skeleton states for better perceived performance

## Healthcare Infrastructure Dedicated Page (Jan 29, 2026 - Iteration 4)
- [x] Dedicated /solutions/healthcare-infrastructure page with 16 BRD sections
- [x] Hero, Problem (8 cards), Infrastructure Stack (6 rails with 10+ items), Connected Rails Visual
- [x] Who It Serves (6 stakeholders), User Journeys (5), Core Modules (12), DEXA Intelligence
- [x] DEXA Scenarios (3 real conversations), Architecture (7 layers), Deployment Models (6)
- [x] Use Cases (10), Outcomes (12), Final CTA - Testing: 100% (46/46 checks passed)

