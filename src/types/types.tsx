export type I18nType = {
  languageSelected: string;
  handleChangeLanguage: (data: string) => void;
  translator: (data: string) => string;
} 

export type sendEmailType = {
  sendEmail: (data: ContactFormType) => void;
  openSnackbarEmail: boolean;
  closeSnackbarEmail: () => void;
  statusEmail: StatusEmailType;
} 

export type ContactFormType = {
  fromEmail: string;
  subject: string;
  message: string;
}

export type StatusEmailType = {
  message: string | null;
  color: string;
}