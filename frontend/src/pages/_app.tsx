import { AppProps } from 'next/app'
import Head from 'next/head'

import favicon from '../../public/favicon.ico'
import 'bootstrap/dist/css/bootstrap.css'

import GlobalProvider from 'components/GlobalProvider'
import 'styles/bootstrap.scss'

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
