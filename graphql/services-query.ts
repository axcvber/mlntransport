import { gql } from '@apollo/client'

export const SERVICES_QUERY = gql`
  query Services($locale: I18NLocaleCode) {
    services(sort: "id:asc", locale: $locale) {
      data {
        id
        attributes {
          title
          slug
          icon {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`
