import { gql } from '@apollo/client'

export const INITIAL_QUERY = gql`
  query InitialData($locale: I18NLocaleCode) {
    navbar(locale: $locale) {
      data {
        attributes {
          navLinks {
            __typename
            ... on ComponentMenuLink {
              id
              title
              page {
                data {
                  attributes {
                    slug
                  }
                }
              }
            }
            ... on ComponentMenuDropdown {
              id
              label
              Link {
                id
                title
                page {
                  data {
                    attributes {
                      slug
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    contact {
      data {
        attributes {
          email
          phoneNumbers {
            id
            phone
          }
          address {
            address
            googleMapLink
          }
          workTime
          socialNetworks {
            id
            link
            icon
          }
        }
      }
    }
    global {
      data {
        attributes {
          lightLogo {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
          darkLogo {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
          googleAnalyticsTag
        }
      }
    }
    services {
      data {
        id
        attributes {
          title
        }
      }
    }
  }
`
