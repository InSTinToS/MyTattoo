import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalProvider from 'pages/_provider'

import 'styles/bootstrap.scss'

import favicon from '@public/favicon.ico'

import 'bootstrap/dist/css/bootstrap.css'

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
