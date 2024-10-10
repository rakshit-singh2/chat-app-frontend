// src/hooks/useLocales.js
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import useSettings from './useSettings';
import { allLangs, defaultLang } from '../config';

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome",
          
        },
      },
      fr: {
        translation: {
          welcome: "Bienvenue",
          
        },
      },
    },
    lng: localStorage.getItem('i18nextLng') || defaultLang.value,
    fallbackLng: defaultLang.value,
    interpolation: {
      escapeValue: false,
    },
  });

export default function useLocales() {
  const { t: translate } = useTranslation(); // Use the i18n instance here
  const { onChangeDirectionByLang } = useSettings();

  const langStorage = localStorage.getItem('i18nextLng');
  const currentLang = allLangs.find((_lang) => _lang.value === langStorage) || defaultLang;

  const handleChangeLanguage = (newlang) => {
    i18n.changeLanguage(newlang);
    onChangeDirectionByLang(newlang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    translate: (text, options) => translate(text, options),
    currentLang,
    allLangs,
  };
}
