import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   uri: 'http://localhost:1337/graphql',
//   defaultOptions: {
//     watchQuery: {
//       fetchPolicy: 'no-cache',
//       errorPolicy: 'ignore',
//     },
//     query: {
//       fetchPolicy: 'no-cache',
//       errorPolicy: 'all',
//     },
//   },
// })

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: `https://mlntransport-admin.com/graphql`,
})
const client = new ApolloClient({
  cache,
  link,
})

export default client
