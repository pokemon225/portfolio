<h1 align='center'>Daiki Yamamoto · Portfolio</h1>

<div align="center">
  Portfolio of Daiki Yamamoto, Senior Machine Learning Engineer in Tokyo.
  English / Japanese, light / dark theme.
</div>
<br/>

## Running locally

```bash
npm install
npm run dev      # dev server
npm run build    # production build in dist/
```

## Editing content

| What | Where |
| --- | --- |
| Hero, about, timeline, project titles and descriptions (EN) | `public/locales/en/translation.json` |
| Same, Japanese (plus Japanese skill/tag names under `tech-names`) | `public/locales/ja/translation.json` |
| Project tech tags, optional images/links | `src/data/projectData.js` |
| Skill groups | `src/data/skillData.js` |
| Number of featured projects | `src/constants.js` |
| Resume PDF | `public/Daiki-Yamamoto-Resume.pdf` |

Entries in the `projects` array of each translation file must stay in the same order as `src/data/projectData.js`.
Projects without an `imageUrl` get a generated tile; GitHub / live-site icons only appear when `repository` / `livelink` are set.

## Visitor log

`worker/index.js` runs in front of the site on Cloudflare and sends each page visit
(IP, approximate city/region/country from Cloudflare, network, page, referrer,
user agent, bot flag) to a Google Sheet. Asset requests aren't logged, and the
site works normally if logging isn't set up.

1. In the Google Sheet: **Extensions → Apps Script**, replace the code with
   `google-apps-script/visitor-log.gs`, and change `TOKEN` to a long random string.
2. **Deploy → New deployment → Web app**, Execute as **Me**, Who has access
   **Anyone**. Authorize, then copy the web app URL (ends in `/exec`).
3. In Cloudflare: **Workers & Pages → portfolio → Settings → Variables and Secrets**,
   add two **Secrets**: `VISITOR_LOG_URL` (the web app URL) and
   `VISITOR_LOG_TOKEN` (the same string as `TOKEN`).
4. Redeploy (push a commit). Visits appear in the sheet's `Visitors` tab.

After editing the Apps Script, use **Deploy → Manage deployments → Edit → New version**
so the same URL keeps working.

## Built with

React, styled-components, Framer Motion, i18next, and Vite.
