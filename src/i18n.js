import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// ✅ الطريقة الصحيحة في Vite لاستيراد ملفات JSON
import en from './locales/en/translation.json?raw';
import ar from './locales/ar/translation.json?raw';
import fr from './locales/fr/translation.json?raw';

// ✅ نحول النص إلى JSON قبل الاستخدام
const resources = {
  en: { translation: JSON.parse(en) },
  ar: { translation: JSON.parse(ar) },
  fr: { translation: JSON.parse(fr) },
};

// ✅ استرجاع اللغة المحفوظة من localStorage
const savedLang = localStorage.getItem('lang') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang, // ✅ هنا التعديل المهم
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
