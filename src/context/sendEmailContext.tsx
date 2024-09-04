import { createContext, useState } from "react";
import emailjs from '@emailjs/browser';
import nextConfig from '../../next.config.mjs';
import { ContactFormType, sendEmailType } from "@/types/types";
import { EStatusEmail } from '../enum/e-status-email';

export const SendEmailContext = createContext<sendEmailType>({} as sendEmailType);

export const SendEmailProvider = ({ children }: any) => {
  const [openSnackbarEmail, setOpenSnackbarEmail] = useState(false);
  const [statusEmail, setStatusEmail] = useState({ message: '', color: '' });

  const {
    serviceId,
    templateId,
    accountPublicKey
  } = nextConfig.env || {};

  const closeSnackbarEmail = () => setOpenSnackbarEmail(false);

  const sendEmail = ({ fromEmail, message, subject }: ContactFormType) => {
    emailjs.send(
      `${serviceId}`,
      `${templateId}`,
      { fromEmail, message, subject },
      `${accountPublicKey}`
    ).then(() => {
      setOpenSnackbarEmail(true);
      setStatusEmail({ message: EStatusEmail.SUCCESS, color: 'success' })
    }, () => {
      setOpenSnackbarEmail(true);
      setStatusEmail({ message: EStatusEmail.ERROR, color: 'error' })
    })
  }

  const value = {
    sendEmail,
    openSnackbarEmail,
    closeSnackbarEmail,
    statusEmail
  }

  return (
    <SendEmailContext.Provider value={value}>
      {children}
    </SendEmailContext.Provider>
  )
}