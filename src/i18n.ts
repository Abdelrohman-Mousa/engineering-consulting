import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import ar from './locales/ar/translation.json';
import fr from './locales/fr/translation.json';

const savedLang =
    typeof window !== 'undefined'
        ? localStorage.getItem('i18nextLng') || 'en'
        : 'en';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            ar: { translation: ar },
            fr: { translation: fr },
        },
        lng: savedLang, // استخدم اللغة المحفوظة أو الإنجليزية كافتراضية
        fallbackLng: 'en',
        interpolation: { escapeValue: false },
    });

export default i18n;
