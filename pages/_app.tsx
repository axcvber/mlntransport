import type { AppContext, AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import Layout from '../components/Layout'

import '@fontsource/ubuntu/400.css'
import '@fontsource/ubuntu/500.css'
import '@fontsource/ubuntu/700.css'

import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/500.css'
import '@fontsource/open-sans/700.css'
import { ApolloProvider } from '@apollo/client'
import client from '../graphql'
import { InitialDataQuery } from '../generated'
import App from 'next/app'
import GlobalContext from '../context/global-context'
import { INITIAL_QUERY } from '../graphql/initial-query'

function MyApp({ Component, pageProps }: AppProps) {
  const { initialData } = pageProps
  return (
    <ApolloProvider client={client}>
      <GlobalContext.Provider value={{ initialData }}>
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </GlobalContext.Provider>
    </ApolloProvider>
  )
}

MyApp.getInitialProps = async (ctx: AppContext) => {
  const appProps = await App.getInitialProps(ctx)
  const { data } = await client.query<InitialDataQuery>({
    query: INITIAL_QUERY,
    variables: { locale: ctx.router.locale },
  })
  return { ...appProps, pageProps: { initialData: data } }
}

export default MyApp
