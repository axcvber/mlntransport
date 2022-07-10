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
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Progress from '../components/Progress'

function MyApp({ Component, pageProps }: AppProps) {
  const { initialData } = pageProps
  const router = useRouter()

  const [state, setState] = useState({
    isRouteChanging: false,
    loadingKey: 0,
  })

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1,
      }))
    }

    const handleRouteChangeEnd = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }))
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeEnd)
    router.events.on('routeChangeError', handleRouteChangeEnd)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeEnd)
      router.events.off('routeChangeError', handleRouteChangeEnd)
    }
  }, [router.events])

  return (
    <ApolloProvider client={client}>
      <GlobalContext.Provider value={{ initialData }}>
        <ChakraProvider theme={theme}>
          <Layout isRouteChanging={state.isRouteChanging} loadingKey={state.loadingKey}>
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
