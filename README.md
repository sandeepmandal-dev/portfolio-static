# Portfolio Website (Static, Open Contact Form, Free to Host)

A single-page React portfolio with **no backend, no database, no login, and no server to maintain** — just static files. Anyone can contact you for hiring or collaboration through a simple, spam-protected form.

---

## Features

- **Hero section** with a photo placeholder on the right — swap in your own picture in one step
- **Skills section** showing real technology logos (Java, Spring Boot, React, PostgreSQL, Docker, etc.) with labels, grouped by category
- **Projects section** — edit one array to add/update your work
- **Resume download** — serves a static PDF
- **Open contact form** — anyone can message you, no sign-in required, protected against spam by a honeypot field, a client-side rate limit, and Web3Forms' own spam filtering

---

## Add your own photo

1. Add your photo file to the `public/` folder — e.g. `public/profile.jpg`
2. Open `src/components/Hero.jsx`
3. Replace the placeholder block:
```jsx
<div className="hero-photo hero-photo-placeholder">
  <FaUser />
  <span>Add your photo:<br /><code>public/profile.jpg</code></span>
</div>
```
   with:
```jsx
<img src="/profile.jpg" alt="Your Name" className="hero-photo" />
```

---

## Add/edit your skills

Open `src/components/Skills.jsx` — each category is a plain array of `{ name, icon }` objects. To add a skill, import its icon from [`react-icons/si`](https://react-icons.github.io/react-icons/icons/si/) (Simple Icons) or `react-icons/fa` (Font Awesome) and add it to the relevant group.

---

## Contact form spam protection (no login required)

| Layer | What it does |
|---|---|
| **Honeypot field** | A hidden `company_website` field is invisible to real visitors. Bots that auto-fill every form field fill it in — the submission is silently dropped, no email sent. |
| **Client-side rate limit** | After a successful send, the browser remembers the timestamp. A second submission within 60 seconds is blocked before it reaches the network. |
| **Web3Forms spam filtering** | The form submits to [Web3Forms](https://web3forms.com) (free), which runs its own spam/bot filtering server-side before relaying the email to your inbox. Your real email address is never exposed in the page source. |

This keeps the barrier to contacting you at zero — anyone can reach out immediately — while still blocking the overwhelming majority of automated spam.

---

## Setup

### 1. Get a free Web3Forms access key
Go to [web3forms.com](https://web3forms.com) → **Create your form** → enter your email and a form name (use `localhost` as the Website URL while testing locally) → you'll get an access key.

### 2. Configure the project
```bash
cp .env.example .env
```
Edit `.env`:
```
VITE_WEB3FORMS_ACCESS_KEY=your-access-key-here
```

### 3. Replace placeholder content
- Add your real photo (see above)
- Swap `public/resume.pdf` with your real resume
- Edit `src/components/Projects.jsx` — update the `PROJECTS` array with your real projects
- Edit `src/components/About.jsx`, `Skills.jsx`, `Hero.jsx`, `Footer.jsx` — update your name, bio, links, and skills
- Update the page title and description in `index.html`

### 4. Run locally
```bash
npm install
npm run dev
```
Opens at `http://localhost:5173`.

---

## Free Hosting (pick one — all support custom domains for free)

### Option A: Vercel (recommended, easiest)
1. Push this project to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo
3. Framework preset: **Vite** (auto-detected)
4. Add environment variable `VITE_WEB3FORMS_ACCESS_KEY` in the project settings
5. Deploy — you get a live `.vercel.app` URL in ~1 minute, auto-redeploys on every git push
6. Once live, go back to your Web3Forms form settings and update the Website URL to your real domain

### Option B: Netlify
1. Push to GitHub
2. [netlify.com](https://netlify.com) → **Add new site** → import from Git
3. Build command: `npm run build`, publish directory: `dist`
4. Add the same environment variable under Site settings → Environment variables

### Option C: GitHub Pages
```bash
npm install --save-dev gh-pages
```
Add to `package.json` scripts: `"deploy": "npm run build && gh-pages -d dist"`
Then: `npm run deploy`

All three are genuinely free for a personal portfolio's traffic level — no credit card required.

---

## Folder structure

```
portfolio-static/
├── public/
│   ├── resume.pdf              # served at /resume.pdf
│   └── profile.jpg             # add your photo here (see above)
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── components/
│   │   ├── Navbar.jsx / Footer.jsx
│   │   ├── Hero.jsx            # photo placeholder on the right
│   │   ├── About.jsx
│   │   ├── Skills.jsx          # real tech logos + names, grouped by category
│   │   ├── Projects.jsx        # static PROJECTS array — edit directly
│   │   ├── ProjectCard.jsx
│   │   └── ContactForm.jsx     # open form: honeypot + rate limit + Web3Forms
│   ├── pages/Home.jsx
│   └── styles/index.css
├── index.html
├── vite.config.js
└── .env.example
```
