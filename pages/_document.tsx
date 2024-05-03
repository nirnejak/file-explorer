import * as React from "react"

import { Html, Head, Main, NextScript } from "next/document"

const MyDocument: React.FC = () => {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        {/* Plausible Analytics */}
        <script
          defer
          data-domain="file-explorer"
          src="https://plausible.io/js/script.js"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
