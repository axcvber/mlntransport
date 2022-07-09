import { gql } from '@apollo/client'

export const SERVICE_QUERY = gql`
  query Service($slug: String!, $locale: I18NLocaleCode) {
    services(filters: { slug: { eq: $slug } }, locale: $locale) {
      data {
        id
        attributes {
          blocks {
            __typename
            ... on ComponentBlocksHeading {
              id
              headingTitle
              headingDescription
              background {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              contactButton
            }
            ... on ComponentBlocksSection {
              title {
                title
                align
              }
              content
            }
          }
        }
      }
    }
  }
`
