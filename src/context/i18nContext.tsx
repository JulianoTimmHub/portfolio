import { I18nType } from "@/types/i18nType";
import { createContext, useState } from "react";
import { useTranslation } from 'react-i18next';

export const I18nContext = createContext<I18nType>({} as I18nType);

export const I18nProvider = ({ children }: any) => {
  const { i18n, t } = useTranslation();
  const [languageSelected, setLanguageSelected] = useState<string>(i18n.language);

  const translator = (message: string): string => {
    return t(message);
  }

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setLanguageSelected(language);
  };

  const value = {
    languageSelected,
    handleChangeLanguage,
    translator
  }

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  )
}