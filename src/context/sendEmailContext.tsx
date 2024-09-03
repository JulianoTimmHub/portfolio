import { createContext, useState } from "react";
import emailjs from '@emailjs/browser';
import nextConfig from '../../next.config.mjs';
import { ContactFormType, sendEmailType } from "@/types/types";
import { EStatusEmail } from '../enum/e-status-email';
 
export const SendEmailContext = createContext<sendEmailType>({} as sendEmailType);

export const SendEmailProvider = ({ children }: any) => {
  const [openSnackbarEmail, setOpenSnackbarEmail] = useState(false);
  const [statusEmail, setStatusEmail] = useState({message: '', color: ''}); 

  const { 
    serviceId,
    templateId,
    accountPublicKey
  } = nextConfig.env || {};

  const sendEmail = ({fromEmail, message, subject}: ContactFormType) => {
    console.log({fromEmail, message, subject})
    emailjs.send(
      `${serviceId}`,
      `${templateId}`,
      {fromEmail, message, subject},
      `${accountPublicKey}`
    ).then((response) => {
      setOpenSnackbarEmail(true);
      setStatusEmail({message: EStatusEmail.SUCCESS, color: 'success'})
      console.log("EMAIL ENVIADO: ", response.status, response.text)
    }, (error) => {
      setOpenSnackbarEmail(true);
      setStatusEmail({message: EStatusEmail.ERROR, color: 'error'})
      console.log("ERRO AO ENVIAR: ", error)
    })
  }

  const closeSnackbarEmail = () => {
    setOpenSnackbarEmail(false);
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