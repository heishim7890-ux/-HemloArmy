# 🏆 HEMLO ARMY — Esports Crew Website

> **"Dominate. Compete. Conquer."**

A production-ready esports crew website built with pure HTML, CSS, and Vanilla JavaScript — no frameworks, no dependencies.

---

## 📁 Folder Structure

```
hemlo-army/
├── index.html          ← Main website (entry point)
├── styles.css          ← All CSS (variables, animations, responsive)
├── script.js           ← All JavaScript functionality
├── AI_IMAGE_PROMPTS.md ← 24 AI image prompts (one per achievement)
└── README.md           ← This file
```

---

## 🚀 Running Locally

### Option 1 — Direct Open (Quickest)
```bash
# Simply open index.html in your browser
open index.html           # macOS
start index.html          # Windows
xdg-open index.html       # Linux
```

### Option 2 — Live Server (Recommended for dev)
```bash
# If you have Node.js installed:
npx serve .               # Serves on http://localhost:3000

# Or with Python:
python -m http.server 8080   # Python 3 → http://localhost:8080
python -m SimpleHTTPServer   # Python 2
```

### Option 3 — VS Code Live Server Extension
1. Install the "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select **"Open with Live Server"**

---

## ✅ Features Implemented

### UX / Interactions
- [x] Loading screen with progress bar & status messages
- [x] Toast notification system (appears on load)
- [x] Smooth scroll behavior (custom, offset for navbar)
- [x] Ripple effect on buttons and cards
- [x] Back-to-top button (appears after scroll)
- [x] Sticky navbar with scroll detection
- [x] Mobile hamburger menu with animation

### Hero Section
- [x] Animated particle canvas background (yellow + white particles)
- [x] Particle connection lines (subtle network effect)
- [x] Animated stat counters (0 → target)
- [x] Reveal animations (staggered on load)
- [x] Scroll indicator animation

### Achievements
- [x] 24 achievement cards rendered from data array
- [x] Filter system (All / Champions / Runners Up / Top 4)
- [x] "Show All" / "Show Less" progressive disclosure
- [x] Click-to-open modal popup with full details
- [x] AI image prompt per achievement (copy to clipboard)
- [x] Champion cards highlighted with yellow glow border

### Managers
- [x] Current managers displayed prominently
- [x] Former managers in collapsible section
- [x] Avatar cards with initials + hover glow effect

### Lineups
- [x] Tab switching (Oathkeepers / Outlanders)
- [x] Football pitch visual (CSS-drawn, colored by position)
- [x] Squad roster with role badges
- [x] Formation display (4-4-2 and 4-3-3)

### Contact
- [x] Instagram link button (@hemloarmy)
- [x] Owner attribution (Wolf Gaming)
- [x] Recruitment info

### Technical
- [x] CSS Variables for full design consistency
- [x] Intersection Observer scroll reveal animations
- [x] Mobile-first responsive design
- [x] iOS Safari & Android Chrome optimized
- [x] Dark mode by default (no light mode needed)
- [x] Noise texture overlay for depth
- [x] Custom scrollbar styling
- [x] Text selection styling (yellow)

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Yellow | `#FFD700` |
| Black Background | `#0A0A0A` |
| Dark Card | `#111111` |
| Heading Font | Bebas Neue |
| UI Font | Barlow Condensed |
| Body Font | Rajdhani |
| Border Radius | 10px / 18px |
| Transition Speed | 250ms ease |

---

## 📱 Browser Support
- ✅ iOS Safari 14+
- ✅ Android Chrome 90+
- ✅ Windows Chrome 90+
- ✅ Windows Edge 90+
- ✅ Firefox 88+

---

## 🖼️ Adding Real Images

To replace the CSS pitch / avatar initials with real images:

1. Add player/team images to a `/images` folder
2. Replace `.mgr-avatar` content with `<img>` tags
3. Add a background hero image:
```css
.hero { background-image: url('./images/hero-bg.jpg'); }
```

---

## 🌐 Deploying Online (Free)

### Netlify (Easiest — Drag & Drop)
1. Go to [netlify.com](https://netlify.com)
2. Drag your `hemlo-army/` folder to the Netlify drop zone
3. Done — live URL in 30 seconds!

### GitHub Pages
```bash
git init
git add .
git commit -m "HEMLO ARMY website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/hemlo-army.git
git push -u origin main
# Then enable GitHub Pages in repo Settings
```

### Vercel
```bash
npx vercel --prod
```

---

## 🔧 Customization Guide

### Update Achievement Data
Edit the `ACHIEVEMENTS` array in `script.js`:
```js
{ id:1, title:'Tournament Name', result:'CHAMPIONS', rank:1, cat:'champion', year:'2024', type:'Cup', emoji:'🏆', team:null }
```
- `cat` values: `'champion'` | `'runner'` | `'top4'`
- `rank`: 1, 2, 3, or 4
- `team`: null or `'TEAM NAME'`

### Update Managers
Edit `CURRENT_MANAGERS` and `EX_MANAGERS` arrays in `script.js`.

### Update Colors
Edit CSS variables at the top of `styles.css`:
```css
:root {
  --y: #FFD700;   /* Primary yellow */
  --bg: #0A0A0A;  /* Background black */
}
```

---

## 📋 Credits
- **Crew:** HEMLO ARMY
- **Owner:** Wolf Gaming
- **Built with:** HTML + CSS + Vanilla JS only
- **Fonts:** Google Fonts (Bebas Neue, Rajdhani, Barlow Condensed)

---

*Built for elite players. Run by Wolf Gaming.*
