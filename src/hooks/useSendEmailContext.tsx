import { useContext } from "react";
import { SendEmailContext } from "../context/sendEmailContext";

export const useSendEmailContext = () => {
  const {
    sendEmail,
    openSnackbarEmail,
    closeSnackbarEmail,
    statusEmail
  } = useContext(SendEmailContext);

  return {
    sendEmail,
    openSnackbarEmail,
    closeSnackbarEmail,
    statusEmail
  }
}