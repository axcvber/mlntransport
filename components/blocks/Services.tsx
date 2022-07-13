import { Box, Grid, GridItem, Skeleton, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { useServicesQuery } from '../../generated'
import { useRouter } from 'next/router'
import Link from 'next/link'
import BlockTitle from '../BlockTitle'
import useLocale from '../../hooks/useLocale'
import ErrorAlert from '../ErrorAlert'

const Services = ({ title }: any) => {
  const router = useRouter()
  const t = useLocale()
  const { data, error } = useServicesQuery({
    variables: {
      locale: router.locale,
    },
    notifyOnNetworkStatusChange: true,
  })
  if (error) return <ErrorAlert />
  console.log('data services', data)

  return (
    <Box>
      {title && <BlockTitle title={title} />}

      <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} gap={6}>
        {!data
          ? Array(4)
              .fill(0)
              .map((_, inx: number) => (
                <GridItem key={inx}>
                  <Skeleton
                    startColor='gray.100'
                    endColor='gray.200'
                    h={'195px'}
                    borderRadius={10}
                    sx={{ boxShadow: '0 0 78px -13px #b7b7b7' }}
                  />
                </GridItem>
              ))
          : data.services?.data.map((item) => (
              <GridItem
                key={item.id}
                bg='white'
                borderRadius={10}
                sx={{
                  position: 'relative',
                  zIndex: 2,
                  transition: '.4s',
                  boxShadow: '0 0 78px -13px #b7b7b7',
                  overflow: 'hidden',
                }}
                _before={{
                  content: '""',
                  position: 'absolute',
                  zIndex: 1,
                  bottom: -10,
                  right: -10,
                  bg: 'brand.500',
                  height: '50px',
                  width: '50px',
                  borderRadius: '50px',
                  transform: 'scale(1)',
                  transformOrigin: '50% 50%',
                  transition: 'transform 0.40s ease-out',
                }}
                _hover={{
                  transform: 'translateY(-15px)',
                  cursor: 'pointer',
                  color: '#fff',
                  '&::before': {
                    transform: 'scale(22)',
                  },
                }}
              >
                <Link href={`/services/${item.attributes?.slug}`} passHref>
                  <a>
                    <Stack
                      sx={{ zIndex: 2, position: 'relative', p: 5 }}
                      alignItems={{ base: 'center', sm: 'flex-start' }}
                    >
                      <Box>
                        <Image
                          src={item.attributes?.icon.data?.attributes?.url || ''}
                          width={70}
                          height={70}
                          alt={item.attributes?.icon.data?.attributes?.alternativeText || ''}
                        />
                      </Box>
                      <Text fontSize={'2xl'} fontWeight={700}>
                        {item.attributes?.title}
                      </Text>
                      <Stack direction='row' alignItems={'center'}>
                        <Text fontSize={'lg'}>{t.link.readMore}</Text>
                        <FiArrowUpRight fontSize={18} />
                      </Stack>
                    </Stack>
                  </a>
                </Link>
              </GridItem>
            ))}
      </Grid>
    </Box>
  )
}

export default Services
