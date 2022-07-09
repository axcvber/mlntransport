import { Box, Button, Grid, GridItem, Heading, Img, Skeleton, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import truckImg from '../../public/truck2.png'
import exchangeImg from '../../public/exchange.png'
import settingsImg from '../../public/settings.png'
import trashImg from '../../public/trash.png'
import { FiArrowUpRight, FiCornerDownRight } from 'react-icons/fi'
import { useServicesQuery } from '../../generated'
import { useRouter } from 'next/router'
import Link from 'next/link'
import BlockTitle from '../BlockTitle'

export const servicesArr = [
  {
    title: 'Transportation',
    icon: truckImg,
  },
  {
    title: 'Relocation',
    icon: exchangeImg,
  },
  {
    title: 'Furniture assembly',
    icon: settingsImg,
  },
  {
    title: 'Waste hauler',
    icon: trashImg,
  },
]

const Services = ({ title }: any) => {
  const router = useRouter()
  const { loading, data, error, refetch } = useServicesQuery({
    variables: {
      locale: router.locale,
    },
    notifyOnNetworkStatusChange: true,
  })
  if (error) return <Box>Error</Box>
  return (
    <Box>
      {title && <BlockTitle title={title} />}

      <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} gap={6}>
        {!data
          ? Array(4)
              .fill(0)
              .map((_, inx: number) => (
                <GridItem key={inx}>
                  <Skeleton h={'195px'} borderRadius={'2xl'} sx={{ boxShadow: '0 0 78px -13px #b7b7b7' }} />
                </GridItem>
              ))
          : data.services?.data.map((item) => (
              <GridItem
                key={item.id}
                bg='white'
                borderRadius={'2xl'}
                p={5}
                sx={{
                  position: 'relative',
                  zIndex: 2,
                  transition: '.4s',
                  boxShadow: '0 0 78px -13px #b7b7b7',
                  overflow: 'hidden',
                  // border: '1px solid #F17C57',
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
                    <Stack sx={{ zIndex: 2, position: 'relative' }} alignItems={{ base: 'center', sm: 'flex-start' }}>
                      <Box>
                        <Image
                          src={item.attributes?.icon.data?.attributes?.url || ''}
                          width={70}
                          height={70}
                          alt='truck'
                        />
                      </Box>
                      <Text fontSize={'2xl'} fontWeight={700}>
                        {item.attributes?.title}
                      </Text>
                      <Stack direction='row' alignItems={'center'}>
                        <Text fontSize={'lg'}>Read more</Text>
                        <FiArrowUpRight fontSize={18} />
                      </Stack>
                    </Stack>
                  </a>
                </Link>
              </GridItem>
            ))}
      </Grid>

      {/* <Stack
          w={300}
          bg='gray'
          borderRadius={10}
          boxShadow='xl'
          p={5}
          _hover={{
            bg: 'red',
            cursor: 'pointer',
          }}
        >
          
        </Stack> */}
    </Box>
  )
}

export default Services
