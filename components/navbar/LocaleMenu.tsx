import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
import enIcon from '../../public/uk.png'
import deIcon from '../../public/de.png'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/router'

interface LocaleProps {
  icon: StaticImageData
  label: string
  locale: string
}

const localeArr = [
  {
    icon: enIcon,
    label: 'English',
    locale: 'en',
  },
  {
    icon: deIcon,
    label: 'Deutsch',
    locale: 'de',
  },
]

const LocaleMenu: React.FC<{ withBorder?: boolean }> = ({ withBorder }) => {
  const router = useRouter()
  const [currentLocale, setCurrentLocale] = React.useState<LocaleProps | undefined>()

  React.useEffect(() => {
    const currentLocale = localeArr.find((item) => item.locale === router.locale)
    if (currentLocale) {
      setCurrentLocale(currentLocale)
    }
  }, [])

  const onSelectLocale = (item: LocaleProps) => {
    if (router.locale !== item.locale) {
      router.push(router.asPath, undefined, { locale: item.locale })
      setCurrentLocale(item)
    }
  }

  return (
    <>
      <Menu autoSelect={false} placement='top-end' isLazy>
        {currentLocale && (
          <MenuButton
            // padding={0}
            transition={'none'}
            px={0}
            // py={5}
            aria-label='Locales'
            as={Button}
            variant='ghost'
            color='inherit'
            colorScheme={'brand'}
            // colorScheme={'brand'}
            // size='sm'
            // color='#fff'
            // variant='ghost'
            rightIcon={<FiChevronDown />}
            _hover={{
              bg: 'transparent',
            }}
            _active={{
              bg: 'transparent',
            }}
          >
            <Stack direction='row' alignItems={'center'}>
              <Box
                borderColor={'red.300'}
                width={'28px'}
                height={'28px'}
                sx={{ border: `2px solid  ${withBorder ? '#fff' : 'transparent'}`, borderRadius: '50%' }}
              >
                <Image priority width={26} height={26} src={currentLocale.icon} alt={'locale'} />
              </Box>
              {/* <Text fontWeight={500} sx={{ ml: 2 }}>
                {currentLocale.locale.charAt(0).toUpperCase() + currentLocale.locale.slice(1)}
              </Text> */}
            </Stack>
          </MenuButton>
        )}

        <MenuList
          minW='auto'
          w='auto'
          // bg='brand.500'
          // color='#fff'
          // padding={0}
          // border='none'
          color={'gray.700'}
          boxShadow={'lg'}
          borderRadius={5}
          overflow='hidden'
        >
          {localeArr.map((item) => (
            <MenuItem
              key={item.label}
              // bg={router.locale === item.locale ? 'gray.300' : 'inherit'}
              sx={{
                bg: router.locale === item.locale ? 'brand.500' : 'inherit',
                color: router.locale === item.locale ? '#fff' : 'inherit',
              }}
              _hover={{
                bg: router.locale === item.locale ? 'brand.500' : 'rgba(0,0,0,0.1)',
              }}
              // minH='48px'
              onClick={() => onSelectLocale(item)}
            >
              <Box
                sx={{
                  border: '2px solid #fff',
                  display: 'flex',
                  borderRadius: '50%',
                }}
              >
                <Image priority width={26} height={26} src={item.icon} alt={item.locale} />
              </Box>
              <Text fontSize={'md'} sx={{ ml: 2 }}>
                {item.label}
              </Text>
            </MenuItem>
          ))}
          {/* <MenuItem minH='48px'>
      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://placekitten.com/100/100'
        alt='Fluffybuns the destroyer'
        mr='12px'
      />
      <span>Fluffybuns the Destroyer</span>
    </MenuItem>
    <MenuItem minH='40px'>
      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://placekitten.com/120/120'
        alt='Simon the pensive'
        mr='12px'
      />
      <span>Simon the pensive</span>
    </MenuItem> */}
        </MenuList>
      </Menu>
    </>
  )
}

export default LocaleMenu
