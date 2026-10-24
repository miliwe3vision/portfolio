# Professional AI/ML Portfolio

A responsive dark portfolio built with React, Vite, Framer Motion, and Lucide icons.

## 1. Run locally

Install Node.js (LTS), then open this project folder in Terminal:

```bash
npm install
npm run dev
```

Vite prints a local URL, usually `http://localhost:5173`.

Check the production build before deploying:

```bash
npm run build
npm run preview
```

## 2. Personalize before publishing

Update `src/main.jsx`:
- Replace the email `your.email@example.com`.
- Replace the GitHub and LinkedIn links with your profile URLs.
- Review each project description and ensure it accurately represents your work.
- Add GitHub/demo links for projects you can publicly share.
- Update the browser title and description in `index.html`.

The current project cards are starter content based on AI/ML project areas. Do not present any project as completed or deployed unless that is accurate.

## 3. Deploy on Render (Static Site)

1. Push this project folder to a GitHub repository.
2. Sign in to Render and select **New + → Static Site**.
3. Connect the GitHub repository.
4. Use these settings:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
5. Click **Create Static Site** and wait for the build to finish.
6. Open the Render URL and test the site on desktop and mobile.

No backend is required for this portfolio as currently written. If you later add a contact form that sends messages, it will need a backend or a form service; a plain `mailto:` link opens the visitor's email application.

## Stack

- React + Vite
- Framer Motion for smooth reveal and entrance animations
- Lucide React icons
- Responsive CSS with reduced-motion support
