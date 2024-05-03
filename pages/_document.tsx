import * as React from "react"

import { Inter } from "next/font/google"

import classNames from "utils/classNames"

import "../styles/main.css"

const inter = Inter({
  variable: "--inter-font",
  subsets: ["latin"],
})

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
      <body
        className={classNames(
          inter.variable,
          "overflow-x-hidden bg-zinc-900 font-sans"
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
