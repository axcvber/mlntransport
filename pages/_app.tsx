import type { AppContext, AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import Layout from '../components/Layout'
import { ApolloProvider } from '@apollo/client'
import client from '../graphql'
import { InitialDataQuery } from '../generated'
import App from 'next/app'
import GlobalContext from '../context/global-context'
import { INITIAL_QUERY } from '../graphql/initial-query'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import '@fontsource/ubuntu/400.css'
import '@fontsource/ubuntu/500.css'
import '@fontsource/ubuntu/700.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/500.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/open-sans/800.css'
import { DefaultSeo } from 'next-seo'
import Script from 'next/script'
function MyApp({ Component, pageProps }: AppProps) {
  const { initialData } = pageProps
  const router = useRouter()
  console.log('render')

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
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${initialData.global.data.attributes.googleAnalyticsTag}`}
        strategy='lazyOnload'
      />
      <Script id='google-analytics' strategy='lazyOnload'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${initialData.global.data.attributes.googleAnalyticsTag}');
        `}
      </Script>
      <DefaultSeo
        titleTemplate={`%s | ${initialData.global.data.attributes.siteName}`}
        defaultTitle={initialData.global.data.attributes.siteName}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'initial-scale=1, width=device-width',
          },
          {
            property: 'google',
            content: 'notranslate',
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'shortcut icon',
            href: initialData.global.data.attributes.favicon.data.attributes.url,
          },
        ]}
        openGraph={{
          type: 'website',
          locale: router.locale,
          url: initialData.global.data.attributes.siteUrl,
          site_name: initialData.global.data.attributes.siteName,
          images: [
            {
              url: initialData.global.data.attributes.darkLogo.data.attributes.url || '',
              width: 400,
              height: 400,
              alt: 'logo',
            },
          ],
        }}
        twitter={{
          handle: '@handle',
          site: '@site', //?
          cardType: 'summary_large_image',
        }}
      />
      <ApolloProvider client={client}>
        <GlobalContext.Provider value={{ initialData }}>
          <ChakraProvider theme={theme}>
            <Layout isRouteChanging={state.isRouteChanging} loadingKey={state.loadingKey}>
              <Component {...pageProps} />
            </Layout>
          </ChakraProvider>
        </GlobalContext.Provider>
      </ApolloProvider>
    </>
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
