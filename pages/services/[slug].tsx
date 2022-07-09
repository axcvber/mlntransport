import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import React from 'react'
import BlockManager from '../../components/BlockManager'
import { ServiceQuery, ServiceQueryVariables } from '../../generated'
import client from '../../graphql'
import { SERVICE_QUERY } from '../../graphql/service-query'

const ServiceItem = ({ serviceData }: any) => {
  console.log('serviceData', serviceData)
  return (
    <BlockManager blocks={serviceData.blocks} />
    // <Box my={20}>
    //   <Heading>{serviceData.title}</Heading>
    //   <Text>{serviceData.title}</Text>
    //   <Button colorScheme={'brand'}>Submit a request</Button>
    // </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const { slug } = context.params as any
  console.log('context.params', context.params)
  console.log('context.query', context.query)

  const { data } = await client.query<ServiceQuery, ServiceQueryVariables>({
    query: SERVICE_QUERY,
    variables: {
      slug,
      locale,
    },
  })

  return {
    props: {
      serviceData: data.services?.data[0].attributes,
    },
  }
}

export default ServiceItem
