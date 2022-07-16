import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.SERVER_API + '/graphql',
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
})

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   uri: `https://mlntransport-admin.herokuapp.com/graphql`,
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

export default client
