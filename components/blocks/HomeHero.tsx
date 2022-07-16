import { Box, Button, Divider, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { FiArrowRight, FiLayers } from 'react-icons/fi'
import { motion } from 'framer-motion'
import useLocale from '../../hooks/useLocale'
import Link from 'next/link'
import RSLink from '../RSLink.tsx'
import { ComponentBlocksHomeHero } from '../../generated'

const HomeHero: React.FC<ComponentBlocksHomeHero> = ({ heroTitle, heroDescription, dimensions, image }) => {
  const t = useLocale()

  return (
    <Box my={[0, 0, 0, 20]}>
      <Stack direction={{ base: 'column-reverse', lg: 'row' }} alignItems='center' spacing={5}>
        <Box w={{ base: '100%', lg: '450px', xl: '600px' }}>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.2,
                },
              },
            }}
          >
            <Stack spacing={3}>
              <Heading
                wordBreak={'break-word'}
                textTransform={'uppercase'}
                whiteSpace='pre-line'
                as='h1'
                size={{ base: '2xl', sm: '2xl', xl: '3xl' }}
                fontWeight={800}
              >
                {heroTitle}
              </Heading>
              <Text>{heroDescription}</Text>
              <Stack direction='row' spacing={4}>
                <RSLink to='form'>
                  <Button colorScheme={'brand'}>{t.button.contactUs}</Button>
                </RSLink>

                <Link href={'/prices'}>
                  <Button colorScheme={'brand'} variant='outline' rightIcon={<FiArrowRight />}>
                    {t.button.seePrices}
                  </Button>
                </Link>
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
          </motion.div>
        </Box>

        <Box
          w={{ base: '100%', lg: '900px' }}
          sx={{
            position: 'relative',
            '&:before, &:after': {
              zIndex: -1,
              position: 'absolute',
              content: '""',
              display: 'block',
              width: '500px',
              height: '500px',
              borderRadius: '50% 10% 50% 20%',
              filter: 'blur(50px)',
              background: 'radial-gradient(circle at 50% 50%,rgba(255,155,125, 1), rgba(255,155,125, 0))',
              opacity: { base: 0, md: 0.9 },
            },
          }}
          _before={{
            bottom: -100,
            left: -50,
          }}
          _after={{
            top: -100,
            right: -100,
          }}
        >
          <motion.div
            initial='hidden'
            animate='visible'
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
                x: 200,
              },
              visible: {
                scale: 1,
                opacity: 1,
                x: 0,

                transition: {
                  delay: 0.2,
                },
              },
            }}
          >
            <Image
              layout='responsive'
              objectFit='contain'
              width={900}
              height={600}
              src={image.data?.attributes?.url || ''}
              alt={image.data?.attributes?.alternativeText || ''}
              priority
            />
          </motion.div>
        </Box>
      </Stack>
    </Box>
  )
}

export default HomeHero
