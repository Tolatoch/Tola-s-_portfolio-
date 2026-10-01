# Tola Toch – Frontend Developer Portfolio

A responsive, single-page portfolio web application crafted for **Tola Toch**, Year 3 Computer Science / Information Technology student at **University of Phayao, Thailand**, seeking frontend engineering internships and junior roles.

Built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Lucide Icons**.

---

## 🎨 Design System & Visual Style
- **Primary Color:** Deep Forest Green (`#1F4D3A`)
- **Accent Color:** Warm Amber/Orange (`#F5A623`)
- **Background:** Crisp Off-White (`#F5F5F5`)
- **Cards:** Rounded white cards (`16px–24px` radius) with soft shadows and hover elevation
- **Typography:** Rounded geometric sans-serif (Plus Jakarta Sans + Outfit)
- **Section Headings:** Section label with orange dash (`— Services`), leading to title with orange italic phrase (`Services *I Provide*`)

---

## 📂 Project Structure

```
├── index.html                   # HTML entry with SEO, OpenGraph & Schema.org JSON-LD
├── metadata.json                # AI Studio application metadata
├── package.json                 # Dependencies and build scripts
├── vite.config.ts               # Vite configuration
├── src/
│   ├── main.tsx                 # React DOM mount point
│   ├── App.tsx                  # Main layout orchestrator
│   ├── index.css                # Tailwind CSS v4, font variables, marquee & spin keyframes
│   ├── data/
│   │   └── portfolioData.ts     # Single source of truth for all portfolio content
│   ├── assets/
│   │   └── images/              # High-fidelity developer portrait and project screenshots
│   └── components/
│       ├── Navbar.tsx           # Pill-shaped sticky navigation with mobile drawer & theme toggle
│       ├── Hero.tsx             # "Hello There!" tag, headline, blob portrait, rotating "HIRE ME" badge
│       ├── MarqueeStrip.tsx     # Endless tilted scrolling ribbon
│       ├── ServicesSection.tsx  # 3 Services cards with "Learn more →" interactive modal
│       ├── ServiceModal.tsx     # Detailed deliverables and focus areas modal
│       ├── AboutSection.tsx     # Dark green bio, stats, and resume download
│       ├── SkillsSection.tsx    # Circular percentage rings with category filter
│       ├── ProjectsSection.tsx  # Filterable grid (Web Flood, Kwan Phayao, UI kit) + modal
│       ├── ProjectModal.tsx     # Full project case study and architecture breakdown
│       ├── EducationExperienceSection.tsx # Two-column timeline (Univ of Phayao & experience)
│       ├── TestimonialsSection.tsx # Authenticated recommendations with star ratings
│       ├── ContactSection.tsx   # Validated contact form, direct email & copy button
│       └── Footer.tsx           # Quick navigation, social links, and copyright
```

---

## ✏️ How to Edit Content
All portfolio content is centralized in a single file:
👉 **`src/data/portfolioData.ts`**

You can easily update:
- Personal details (name, bio, contact email, social links)
- Projects (add new projects, screenshots, live links, GitHub links, and tags)
- Skills and percentages
- Education and experience timeline entries
- Testimonials and recommendations

---

## 💻 Running Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- `npm` or `yarn`

### Steps
1. **Clone or download this repository**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Open in browser:**
   Visit `http://localhost:3000` (or `http://localhost:5173` depending on port availability).

5. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready static assets will be output to the `dist/` directory.

---

## 🚀 Free Deployment Guide

### Deploying to Vercel (Recommended)
1. Push your repository to **GitHub**.
2. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
3. Click **"Add New"** > **"Project"** and import your portfolio repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Deploy"**. Your portfolio will be live with free global CDN and HTTPS in under 1 minute.

### Deploying to Netlify
1. Go to [netlify.com](https://netlify.com) and sign in with GitHub.
2. Click **"Add new site"** > **"Import an existing project"**.
3. Select your portfolio GitHub repository.
4. Set the build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **"Deploy site"**. Your site is now live with custom domain support and SSL.
