import { gql } from '@apollo/client'

export const PRICES_QUERY = gql`
  query Prices($locale: I18NLocaleCode) {
    prices(sort: "id:asc", locale: $locale) {
      data {
        id
        attributes {
          priceTitle
          subtitle
          description
          service {
            data {
              attributes {
                slug
                title
              }
            }
          }
        }
      }
    }
  }
`
