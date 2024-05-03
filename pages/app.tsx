import * as React from "react"
import type { AppProps } from "next/app"
import { Inter } from "next/font/google"

import classNames from "utils/classNames"

import { Toaster } from "sonner"

import "../styles/main.css"

const inter = Inter({
  variable: "--inter-font",
  subsets: ["latin"],
})

const App: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props

  return (
    <main
      className={classNames(
        inter.variable,
        "overflow-x-hidden bg-zinc-900 font-sans"
      )}
    >
      <Component {...pageProps} />
      <Toaster />
    </main>
  )
}

export default App
