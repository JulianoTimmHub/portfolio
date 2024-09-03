import { useEffect, useState } from "react"
import { Alert, Snackbar } from "@mui/material"
import { useSendEmailContext } from "@/hooks/useSendEmailContext";

export const SnackbarMessage = ({statusEmail}: any) => {
  const [open, setOpen] = useState<boolean>(true);
  const { closeSnackbarEmail } = useSendEmailContext();

  // useEffect(() => {
  //   if (status.message) 
  //     setOpen(true);
  // }, [status.message, setOpen])

  const closeSnackbar = (): void => {
    setOpen(false);
    closeSnackbarEmail();
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
      closeSnackbar();
      closeSnackbarEmail();
    }, 4000);

    return () => clearTimeout(timer);
  }, [closeSnackbarEmail, closeSnackbar, setOpen]);

  return (
    <Snackbar
      open={open}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      onClose={() => closeSnackbar()}
      autoHideDuration={4000}
    >
      <Alert
        severity={statusEmail.color}
        variant="filled"
        onClose={() => closeSnackbar()}
      >
        {statusEmail.message}
      </Alert>
    </Snackbar>
  )
}