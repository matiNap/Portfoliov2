import i18n from "i18next";
import translationPL from "./public/locales/translation-pl.json";

const resources = {
  pl: {
    translation: translationPL,
  },
};

i18n.init({
  resources,
  lng: "pl",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
export const { t } = i18n;
