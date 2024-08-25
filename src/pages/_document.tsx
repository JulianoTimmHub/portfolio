import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body className="bg-[#efedea] dark:bg-[#303446]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
