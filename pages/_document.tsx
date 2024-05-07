import * as React from "react"

import { Html, Head, Main, NextScript } from "next/document"

const MyDocument: React.FC = () => {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <body className="overflow-x-hidden bg-zinc-900 font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
