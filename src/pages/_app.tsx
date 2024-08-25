import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { I18nProvider } from "../context/i18nContext";
import { Layout } from "@/components/Layout";
import "@/styles/globals.css";
import '../i18n'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <I18nProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </I18nProvider>
    </ThemeProvider>
  )
}