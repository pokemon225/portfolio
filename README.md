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
| Hero, about, timeline, project descriptions (EN) | `public/locales/en/translation.json` |
| Same, Japanese | `public/locales/ja/translation.json` |
| Project titles, companies, tech tags, optional images/links | `src/data/projectData.js` |
| Skill groups | `src/data/skillData.js` |
| Number of featured projects | `src/constants.js` |
| Resume PDF | `public/Daiki-Yamamoto-Resume.pdf` |

Entries in the `projects` array of each translation file must stay in the same order as `src/data/projectData.js`.
Projects without an `imageUrl` get a generated tile; GitHub / live-site icons only appear when `repository` / `livelink` are set.

## Built with

React, styled-components, Framer Motion, i18next, and Vite.
