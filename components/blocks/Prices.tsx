import { Button, Grid, GridItem, Skeleton, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { usePricesQuery } from '../../generated'
import useLocale from '../../hooks/useLocale'
import BlockTitle from '../BlockTitle'
import ErrorAlert from '../ErrorAlert'

const Prices = ({ title }: any) => {
  const { locale } = useRouter()
  const t = useLocale()
  const { data, error } = usePricesQuery({
    variables: {
      locale: locale,
    },
    notifyOnNetworkStatusChange: true,
  })
  if (error) return <ErrorAlert />
  return (
    <>
      {title && <BlockTitle title={title} />}
      <Grid
        templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }}
        gap={6}
        alignItems='flex-start'
      >
        {!data
          ? Array(4)
              .fill(0)
              .map((_, inx: number) => (
                <GridItem key={inx}>
                  <Skeleton
                    startColor='gray.100'
                    endColor='gray.200'
                    h={'400px'}
                    borderRadius={10}
                    boxShadow='0 0 78px -13px #b7b7b7'
                  />
                </GridItem>
              ))
          : data.prices?.data.map((item) => (
              <GridItem
                key={item.id}
                bg='#fff'
                boxShadow={'0px 0px 13px 4px rgba(0,0,0,0.12)'}
                borderRadius={10}
                overflow='hidden'
              >
                <VStack py={10} px={5} spacing={3}>
                  <Text textAlign='center' fontSize={'xl'}>
                    {item.attributes?.service?.data?.attributes?.title}
                  </Text>
                  <Text textAlign='center' fontSize={'2xl'} fontWeight={700}>
                    {item.attributes?.priceTitle}
                  </Text>
                  <Text textAlign='center'>{item.attributes?.subtitle}</Text>
                  <Link href={`services/${item.attributes?.service?.data?.attributes?.slug}`} passHref>
                    <Button colorScheme={'brand'} as='a' variant={'outline'}>
                      {t.button.aboutService}
                    </Button>
                  </Link>
                </VStack>
                <VStack p={5} bg='brand.400'>
                  <Text textAlign='center' color={'#fff'}>
                    {item.attributes?.description}
                  </Text>
                </VStack>
              </GridItem>
            ))}
      </Grid>
    </>
  )
}

export default Prices
