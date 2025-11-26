import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import en from './locales/en.json';
import ja from './locales/ja.json';

const resources = {
  en: { translation: en },
  ja: { translation: ja },
};

const getLocales = () => {
  // If the new Expo 50+ API is available, use it
  if (Localization.getLocales) {
    return Localization.getLocales();
  }
  // Fallback for older versions or if getLocales is missing (though it shouldn't be in recent versions)
  return [{ languageCode: 'en' }];
};

const locales = getLocales();
const deviceLanguage = locales[0]?.languageCode ?? 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: deviceLanguage, // Default to device language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    compatibilityJSON: 'v4', // For Android compatibility
  });

export default i18n;
