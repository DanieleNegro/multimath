import i18n from "i18next";
import { en } from "./translations/en/translation";
import { it } from "./translations/it/translation";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  resources: {
    en: en,
    it: it,
  },
});

export default i18n;
