import { gql } from '@apollo/client'

export const PAGE_QUERY = gql`
  query Page($slug: String!, $locale: I18NLocaleCode) {
    pages(filters: { slug: { eq: $slug } }, locale: $locale) {
      data {
        attributes {
          blocks {
            __typename
            ... on ComponentBlocksHomeHero {
              heroTitle
              heroDescription
              dimensions {
                height
                length
                width
              }
              image {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
            }
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
            ... on ComponentBlocksServices {
              title {
                title
                description
                align
              }
            }
            ... on ComponentBlocksSection {
              title {
                title
                description
                align
              }
              content
            }
            ... on ComponentBlocksImagesGallery {
              title {
                title
                description
                align
              }
              images {
                data {
                  id
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
            }
            ... on ComponentBlocksAccordion {
              title {
                title
                description
                align
              }
              accordion {
                id
                title
                content
              }
            }
            ... on ComponentBlocksDoubleSection {
              title {
                title
                description
                align
              }
              leftSection
              rightSection
            }
            ... on ComponentBlocksPrices {
              title {
                title
                align
                description
              }
            }
          }
        }
      }
    }
  }
`
