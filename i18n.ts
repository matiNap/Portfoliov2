import i18n from "i18next";
import translationPL from "./public/locales/translation-pl.json";

export const LANG_PL = "pl";
export const LANG_EN = "en";

const resources = {
  pl: {
    translation: translationPL,
  },
};

i18n.init({
  resources,
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
export const { t, changeLanguage } = i18n;
