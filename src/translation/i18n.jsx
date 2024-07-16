import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./en/golbal.json";
import arTranslation from "./ar/golbal.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    ar: {
      translation: arTranslation,
    },
  },
  lng: "en", // اللغة الافتراضية
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React بالفعل يقوم بالتطهير
  },
});

export default i18n;
