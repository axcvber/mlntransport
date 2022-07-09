import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../theme'

class MyDocument extends Document {
  // static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
  //   const initialProps = await Document.getInitialProps(ctx)

  //   return initialProps
  // }
  render() {
    return (
      <Html>
        <Head>
          {/* <link href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap' rel='stylesheet' /> */}
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
