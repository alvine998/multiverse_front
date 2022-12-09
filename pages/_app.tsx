import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    require(`bootstrap/dist/js/bootstrap.bundle`)
  },[])
  return <>
    <Component {...pageProps} />
  </>
}
