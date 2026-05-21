# Hassan Ahmed — Portfolio V3

Modern, editorial dark-theme portfolio with acid-lime accent.

## Stack
HTML · CSS (custom, zero frameworks) · Vanilla JS · GitHub REST API · Formspree · Vercel

## Setup (5 minutes)
1. Open `js/main.js` and update the `CFG` block at the top:
   - `github`     → your GitHub username (already set)
   - `formspree`  → get a free ID at formspree.io
   - `cvLink`     → Google Drive PDF link (uc?export=download&id=FILE_ID)
   - `whatsapp`   → your number with country code

2. Replace `images/about-me-dark.jpg` with your photo (400×500px)

3. Update contact email/phone in `index.html` (search: `your.email@gmail.com`)

## Deploy to Vercel
```bash
git init
git add .
git commit -m "Portfolio v3 launch"
git remote add origin https://github.com/Hassan141998/Hassan-Ahmed-Portfolio-Website.git
git push -u origin main --force
```
Then: vercel.com → import repo → Deploy (no build settings needed).

## What's different from V2
- Complete visual redesign: Bebas Neue display font, acid-lime (#C8F135) accent
- Marquee ticker in hero
- Proper counter fix (fires even when hero is above fold)
- vercel.json has NO `builds` block (was breaking JS in v2)
- `no-cache` on JS/CSS so updates always apply immediately
