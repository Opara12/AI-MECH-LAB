# AI Mech Lab – AI, Robotics & Engineering Learning Platform

A modern, high-performance web learning platform designed specifically for students, engineers, and creators to master Artificial Intelligence, Machine Learning, Robotics, and Mechatronics through structured curriculums, interactive simulations, and AI-assisted tutoring.

---

## ⚡ Technology Stack

- **HTML5 & Modern Web Standards**
- **Tailwind CSS 3** (Engineering dark mode theme, cyber neon accents, responsive typography, custom animations)
- **JavaScript (ES Modules)** — *100% Pure JavaScript (.js / .jsx), Zero TypeScript*
- **React 18** (Context API for state management, modular components, responsive shell)
- **Lucide Icons** for modern engineering UI icons
- **Vite 6** for lightning-fast builds and HMR

---

## 🚀 Key Pages & Deliverables

1. **Landing Page**
   - Modern AI Mech Lab branding with live simulated hardware telemetry stream (RPM, vibration, temperature, health)
   - Engaging Hero section with gradient typography and action CTAs
   - Platform feature matrix, methodology showcase, and featured course catalog
   - Start Learning & syllabus navigation

2. **Dashboard**
   - Welcome banner with student profile, streak counters, and learning stats
   - 5 Key metrics: Course Completion %, Hours Learned, Quiz Accuracy %, Active Streak, Built Projects
   - "Continue Learning" active lesson card with direct jump
   - Recommended next engineering topics & recent laboratory activity

3. **Courses Catalog**
   - Course cards with difficulty badges, module counts, and progress tracking
   - Comprehensive track metadata (Beginner to Advanced)
   - Module roadmap overview

4. **Course Details**
   - Detailed course description, prerequisites, and skills gained
   - Expandable modules and lessons syllabus with completion indicators
   - Instructor bios and curriculum stats

5. **Interactive Lesson Page**
   - Full structured course content derived directly from the source curriculum:
     - *Module 1: Introduction to AI & Engineering Concepts* (Topics 1.1 - 1.3)
     - *Module 2: Programming Fundamentals for AI* (Topics 2.1 - 2.2)
     - *Module 3: Mathematics for AI* (Topics 3.1 - 3.2)
     - *Module 4: Applied Machine Learning* (Topics 4.1 - 4.4 Industrial Capstone)
   - Interactive SVG diagrams (Nested AI/ML/DL, Rule-based vs. ML, Predictive Maintenance vibration spectra, Generative Design, Vector spaces, Decision boundaries, End-to-end Capstone pipeline)
   - Copyable code blocks with syntax highlighting
   - Previous / Next navigation and "Mark as Complete" persistence
   - Embedded contextual AI Tutor panel with mechatronics-aware hints

6. **Quiz Centre**
   - Targeted assessments for every topic
   - Instant feedback, detailed explanations, and score tracking
   - Retake capability and mastery metrics

7. **Project Lab**
   - Filterable project cards (Beginner, Intermediate, Advanced)
   - Detailed project modal with step-by-step guides, code snippets, hardware BOM, and expected outcomes
   - Industrial Motor Predictive Maintenance Capstone project

8. **Additional Interactive Labs**
   - **Coding Lab**: In-browser Python simulation environment with starter code, test case validator, and instant execution
   - **Hardware Lab**: Verified component catalog (ESP32, MPU-6050, Jetson, Raspberry Pi) and interactive Custom Kit Builder with live BOM & pricing calculator
   - **AI Tutor Lab**: Fullscreen AI engineering tutor with suggested prompts, mechatronics reasoning, and API key settings
   - **Adaptive Learning**: Diagnostic skill radar and personalized pathway generator
   - **Achievements & Badges**: Gamified progress with unlockable engineering credentials

---

## 🛠️ Deployment (Vercel & Netlify)

This project is **100% frontend only** and configured for zero-configuration, production-ready deployments.

### Deploy to Vercel
1. Import this repository into Vercel.
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. `vercel.json` is pre-configured for SPA client-side routing.

### Deploy to Netlify
1. Import this repository into Netlify.
2. Build Command: `npm run build`
3. Publish Directory: `dist`
4. `netlify.toml` and `public/_redirects` are pre-configured to prevent 404s on page refresh.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🔌 Future Backend Integration

All client-side state and mock APIs are organized in `src/services/`:
- [`storageService.js`](src/services/storageService.js): User profile, progress, quiz results, and local persistence.
- [`aiTutorService.js`](src/services/aiTutorService.js): AI Tutor responses and LLM API placeholders.
- [`codeRunnerService.js`](src/services/codeRunnerService.js): Code evaluation and test runner engine placeholders.
