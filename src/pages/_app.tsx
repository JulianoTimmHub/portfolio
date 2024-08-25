import { Layout } from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import '../i18n'
import { I18nProvider } from "../context/i18nContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nProvider >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </I18nProvider>
  )
}
