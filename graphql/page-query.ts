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
                decoration
              }
            }
            ... on ComponentBlocksSection {
              title {
                title
                description
                align
                decoration
              }
              content
            }
            ... on ComponentBlocksImagesGallery {
              title {
                title
                description
                align
                decoration
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
                decoration
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
                decoration
              }
              leftSection
              rightSection
            }
            ... on ComponentBlocksPrices {
              title {
                title
                align
                description
                decoration
              }
            }
            ... on ComponentBlocksContacts {
              title {
                title
                description
                align
                decoration
              }
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
