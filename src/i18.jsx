import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationPT from './locales/pt/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      pt: { translation: translationPT },
    },
    lng: 'pt', // Define o idioma inicial
    fallbackLng: 'pt', // Define o idioma de fallback
    interpolation: { escapeValue: false },
  });

export default i18n;
