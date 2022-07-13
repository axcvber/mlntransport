import { GetServerSideProps } from 'next'
import React from 'react'
import BlockManager from '../../components/BlockManager'
import Seo from '../../components/Seo'
import { Service, ServiceQuery, ServiceQueryVariables } from '../../generated'
import client from '../../graphql'
import { SERVICE_QUERY } from '../../graphql/service-query'

interface IServicePage {
  serviceData: Service
}

const ServicePage: React.FC<IServicePage> = ({ serviceData }) => {
  return (
    <>
      <Seo seo={serviceData.seo} />
      <BlockManager blocks={serviceData.blocks} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const { slug } = context.params as any

  try {
    const { data } = await client.query<ServiceQuery, ServiceQueryVariables>({
      query: SERVICE_QUERY,
      variables: {
        slug,
        locale,
      },
    })
    if (!data) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        serviceData: data.services?.data[0].attributes,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

export default ServicePage
