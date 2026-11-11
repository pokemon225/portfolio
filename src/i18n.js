import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(LanguageDetector)
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ja'],
    fallbackLng: 'en',
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      // Project data and the "projects" array must match, so always fetch the
      // translations that shipped with this build
      loadPath: `/locales/{{lng}}/translation.json?v=${__BUILD_ID__}`,
    },
    debug: import.meta.env.DEV,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
