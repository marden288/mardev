# Marden — Portfolio Website

A stunning, dark-mode portfolio website for a versatile developer specializing in Web Development, Software Engineering, Electronics, and Hardware-Software Integration.

---

## 📁 Folder Structure

```
marden-portfolio/
├── index.html              ← Main HTML (all sections)
├── css/
│   ├── reset.css           ← CSS reset & base
│   ├── variables.css       ← Design tokens (colors, fonts, spacing)
│   ├── main.css            ← Core layout, navbar, buttons, typography
│   ├── sections.css        ← Hero, About, Skills, Projects, Timeline, Contact, Footer
│   ├── animations.css      ← Keyframes & scroll reveal classes
│   └── responsive.css      ← Mobile & tablet breakpoints
└── js/
    ├── cursor.js           ← Custom cursor with magnetic effect
    ├── navbar.js           ← Sticky nav, mobile toggle, active link highlight
    ├── hero-canvas.js      ← Particle network animation on hero
    ├── animations.js       ← Intersection Observer scroll reveals
    ├── projects-filter.js  ← Category filter buttons
    ├── contact-form.js     ← Form validation & submit simulation
    └── main.js             ← Parallax, counter animation, smooth scroll
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background Primary | `#06060c` |
| Background Secondary | `#0d0d1a` |
| Accent Green | `#00ff88` |
| Accent Blue | `#0088ff` |
| Display Font | Syne |
| Body Font | DM Sans |
| Mono Font | JetBrains Mono |

---

## 🚀 Getting Started

1. **Open locally** — Just open `index.html` in any browser. No build tools needed.
2. **Live Server** — For best results, use VS Code Live Server extension.
3. **Deploy** — Upload entire `marden-portfolio/` folder to any static host:
   - GitHub Pages
   - Netlify (drag & drop)
   - Vercel
   - Hostinger / cPanel

---

## ✏️ Customization Guide

### Replace Placeholder Content

**Your Name / Tagline** → `index.html` Hero section
**About Me text** → `index.html` `<section class="about">`
**Profile Photo** → Replace `.about-img-placeholder` div with `<img src="assets/photo.jpg" alt="Marden">`
**Project details** → Each `.project-card` in the Projects section
**Experience timeline** → Each `.timeline-item` in the Experience section
**Email / Social links** → Contact section & footer

### Add a Real Photo

```html
<!-- Replace this block in index.html: -->
<div class="about-img-placeholder">
  <div class="avatar-icon"><i class="fa-solid fa-user-astronaut"></i></div>
</div>

<!-- With: -->
<img src="assets/your-photo.jpg" alt="Marden - Developer" 
     style="width:380px;height:420px;object-fit:cover;border-radius:24px;border:1px solid rgba(255,255,255,0.07);" />
```

### Connect Contact Form

Replace the `setTimeout` in `js/contact-form.js` with a real service:

**Option 1 — Formspree (free):**
```javascript
const response = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, message })
});
```

**Option 2 — EmailJS:**
See https://www.emailjs.com/

### Modify Colors

Edit `css/variables.css`:
```css
--accent-green:  #00ff88;  /* Change to your preferred accent */
--accent-blue:   #0088ff;
```

---

## 📱 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Dark mode design with green/blue tech accents
- ✅ Custom animated cursor (desktop only)
- ✅ Particle network hero animation (canvas)
- ✅ Smooth scroll reveal animations
- ✅ Project category filter
- ✅ Mobile hamburger nav
- ✅ Parallax hero orbs
- ✅ Timeline experience section
- ✅ Contact form with validation
- ✅ Accessible (semantic HTML, alt attributes, aria labels)
- ✅ SEO meta tags included
- ✅ No dependencies — pure HTML/CSS/JS

---

## 🌐 Sections

1. **Hero** — Full-screen with name, tagline, CTA, particle animation
2. **About** — Bio, avatar, tags, badge card
3. **Skills** — 4 category cards (Web, Software, Electronics, Integration)
4. **Projects** — 8 project cards with filter (Web, Software, Hardware, IoT)
5. **Experience** — Timeline with 5 milestones
6. **Contact** — Form + social links + location
7. **Footer** — Navigation + copyright

---

Built with ❤️ by Marden from Baliuag, Philippines.
