// eslint-disable-next-line @next/next/no-document-import-in-page
import { Html, Main, NextScript } from 'next/document'
import Head from 'next/head'

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
