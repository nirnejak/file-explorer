import * as React from "react"
import type { AppProps } from "next/app"
import { Toaster } from "sonner"

const App: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props

  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  )
}

export default App
