import GlobalProvider from 'components/templates/GlobalProvider'

import 'styles/bootstrap.scss'

import favicon from '@public/favicon.ico'

import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link rel='icon' href={favicon} />
    </Head>

    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  </>
)

export default MyApp
