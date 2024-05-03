import * as React from "react"
import type { AppProps } from "next/app"
import { Inter } from "next/font/google"
import { Toaster } from "sonner"

import classNames from "utils/classNames"
import FileContextProvider from "context/FileContext"

import "../styles/main.css"

const inter = Inter({
  variable: "--inter-font",
  subsets: ["latin"],
})

const App: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props

  return (
    <main className={classNames(inter.variable)}>
      <FileContextProvider>
        <Component {...pageProps} />
      </FileContextProvider>
      <Toaster />
    </main>
  )
}

export default App
