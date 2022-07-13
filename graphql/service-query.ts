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
                description
                decoration
              }
              content
            }
          }
          seo {
            metaTitle
            metaDescription
            metaImage {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            keywords
            canonicalURL
          }
        }
      }
    }
  }
`
