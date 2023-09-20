/* eslint-disable @typescript-eslint/ban-types */
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'

import { globalStyles } from '@/styles/globals'

globalStyles()

const nunito = Nunito({ subsets: ['latin'] })

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <div className={`${nunito.className}`}>
      {getLayout(<Component {...pageProps} />)}
    </div>
  )
}
