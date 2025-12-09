import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            testMessage: 'Welcome to React and react-i18next',
        },
    },
    pl: {
        translation: {
            testMessage: 'Witaj w React and react-i18next',
        },
    },
};

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        detection: {
            order: ['querystring', 'localStorage', 'navigator'],
            caches: ['localStorage'],
            lookupQuerystring: 'lng',
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
