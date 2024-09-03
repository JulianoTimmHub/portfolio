import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import { I18nProvider } from "../context/i18nContext";
import { Layout } from "@/components/Layout";
import "@/styles/globals.css";
import '../i18n'
import { SendEmailProvider } from "@/context/sendEmailContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class">
        <I18nProvider>
          <SendEmailProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SendEmailProvider>
        </I18nProvider>
      </ThemeProvider>
    </NextUIProvider>
  )
}