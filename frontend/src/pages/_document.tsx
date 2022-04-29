import favicon from '@public/favicon.ico'

import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ) as any
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang='pt-br'>
        <Head>
          <base href={process.env.NEXT_PUBLIC_WEB_URL} target='_blank' />

          <link rel='icon' href={favicon} />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400&display=swap'
          />

          <meta charSet='utf-8' />
          <meta name='application-name' content='MyTattoo' />
          <meta charSet='UTF-8' />
          <meta name='author' content='Miguel Andrade Barreto' />
          <meta
            name='keywords'
            content='MyTattoo, Tatuagens, Tatuadores, Rede social'
          />
          <meta
            name='description'
            content='Rede social para tatuadores e pessoas que gostam de tatuagens'
          />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
