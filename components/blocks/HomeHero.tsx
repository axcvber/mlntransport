import { Box, Button, Divider, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { FiArrowRight, FiBox, FiLayers, FiMaximize, FiMaximize2, FiTruck } from 'react-icons/fi'
import { motion } from 'framer-motion'
import useLocale from '../../hooks/useLocale'

const variants = {
  hidden: { opacity: 0, x: -200 },
  show: { opacity: 1, x: 0 },
}

const HomeHero: React.FC<any> = ({ heroTitle, heroDescription, dimensions, image }) => {
  const t = useLocale()

  return (
    <Box my={[0, 0, 0, 20]}>
      <Stack direction={{ base: 'column-reverse', lg: 'row' }} justifyContent={'space-between'} alignItems='center'>
        <Box w={{ base: '100%', lg: '500px' }}>
          <Stack spacing={3}>
            <Heading textTransform={'uppercase'} as='h1' size={{ base: '2xl', sm: '3xl' }} fontWeight={800}>
              {heroTitle}
            </Heading>
            <Text>{heroDescription}</Text>
            <Stack direction='row' spacing={4}>
              <Button colorScheme={'brand'}>{t.button.contactUs}</Button>
              <Button colorScheme={'brand'} variant='outline' rightIcon={<FiArrowRight />}>
                {t.button.seePrices}
              </Button>
            </Stack>
          </Stack>
          {dimensions && (
            <Box mt={8}>
              <Stack direction='row' alignItems='center' mb={1} color='gray.600'>
                <FiLayers fontSize={22} />
                <Text fontSize={'lg'} mb={1} fontWeight={700}>
                  {t.homeHero.dimensions.title}
                </Text>
              </Stack>

              <Stack
                spacing={4}
                h='60px'
                direction={'row'}
                alignItems='center'
                divider={<Divider h={'20px'} orientation='vertical' borderColor='gray' borderWidth={1} />}
              >
                <Stack alignItems={'center'} spacing={1}>
                  <Text color='brand.500' fontSize={'2xl'} fontWeight={700}>
                    {dimensions.height}
                  </Text>
                  <Text fontSize={'xs'} textTransform={'uppercase'} color='gray' fontWeight={700}>
                    {t.homeHero.dimensions.height}
                  </Text>
                </Stack>
                <Stack alignItems={'center'} spacing={1}>
                  <Text color='brand.500' fontSize={'2xl'} fontWeight={700}>
                    3.50m
                  </Text>
                  <Text fontSize={'xs'} textTransform={'uppercase'} color='gray' fontWeight={700}>
                    {t.homeHero.dimensions.length}
                  </Text>
                </Stack>
                <Stack alignItems={'center'} spacing={1}>
                  <Text color='brand.500' fontSize={'2xl'} fontWeight={700}>
                    1.80m
                  </Text>
                  <Text fontSize={'xs'} textTransform={'uppercase'} color='gray' fontWeight={700}>
                    {t.homeHero.dimensions.width}
                  </Text>
                </Stack>
              </Stack>
            </Box>
          )}
        </Box>

        <Box
          // w={'100%'}
          // bg='red'
          flex={1}
          sx={{
            position: 'relative',
          }}
          // _before={{
          //   bottom: -100,
          //   left: -50,
          //   zIndex: -1,
          //   position: 'absolute',
          //   content: '""',
          //   display: 'block',
          //   width: '500px',
          //   height: '500px',
          //   borderRadius: '50% 10% 50% 20%',
          //   filter: 'blur(50px)',
          //   background: 'radial-gradient(circle at 50% 50%,rgba(241,124,87, 1), rgba(241,124,87, 0))',
          //   opacity: 1,
          // }}
          // _after={{
          //   top: -100,
          //   right: -100,
          //   zIndex: -1,
          //   position: 'absolute',
          //   content: '""',
          //   display: 'block',
          //   width: '500px',
          //   height: '500px',
          //   borderRadius: '50% 10% 50% 20%',
          //   filter: 'blur(50px)',
          //   background: 'radial-gradient(circle at 50% 50%,rgba(241,124,87, 1), rgba(241,124,87, 0))',
          //   opacity: 1,
          // }}
        >
          <Image width={800} height={600} src={'/van2.png'} alt='van' />
        </Box>
      </Stack>
    </Box>
  )
}

export default HomeHero
