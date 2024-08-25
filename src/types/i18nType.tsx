export type I18nType = {
  languageSelected: string;
  handleChangeLanguage: (data: string) => void;
  translator: (data: string) => string;
} 