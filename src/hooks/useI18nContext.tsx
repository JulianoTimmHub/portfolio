import { useContext } from "react";
import { I18nContext } from "../context/i18nContext";

export const useI18nContext = () => {
  const {
    languageSelected,
    handleChangeLanguage,
    translator
  } = useContext(I18nContext);

  return {
    languageSelected,
    handleChangeLanguage,
    translator
  }
}