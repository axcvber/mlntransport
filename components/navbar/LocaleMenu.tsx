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
    icon: deIcon,
    label: 'Deutsch',
    locale: 'de',
  },
  {
    icon: enIcon,
    label: 'English',
    locale: 'en',
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
      <Menu autoSelect={false} placement='top-end'>
        {currentLocale && (
          <MenuButton
            transitionProperty={'background'}
            px={2}
            aria-label='Locales'
            as={Button}
            variant='ghost'
            color='inherit'
            colorScheme={withBorder ? 'brand' : 'gray'}
            rightIcon={<FiChevronDown />}
            _hover={{
              bg: withBorder ? 'brand.300' : 'gray.100',
            }}
            _active={{
              bg: withBorder ? 'brand.600' : 'gray.200',
            }}
          >
            <Stack direction='row' alignItems={'center'}>
              <Box
                width={'28px'}
                height={'28px'}
                sx={{ border: `2px solid  ${withBorder ? '#fff' : 'transparent'}`, borderRadius: '50%' }}
              >
                <Image priority width={26} height={26} src={currentLocale.icon} alt={'locale'} />
              </Box>
              <Text fontWeight={500} sx={{ ml: 2 }}>
                {currentLocale.locale.charAt(0).toUpperCase() + currentLocale.locale.slice(1)}
              </Text>
            </Stack>
          </MenuButton>
        )}

        <MenuList
          minW='auto'
          w='auto'
          bg='brand.50'
          padding={0}
          border='none'
          color={'gray.700'}
          boxShadow={'lg'}
          borderRadius={5}
          overflow='hidden'
        >
          {localeArr.map((item) => (
            <MenuItem
              key={item.label}
              sx={{
                bg: router.locale === item.locale ? 'brand.600' : 'inherit',
                color: router.locale === item.locale ? '#fff' : 'inherit',
              }}
              _hover={{
                bg: router.locale === item.locale ? 'brand.600' : 'rgba(0,0,0,0.1)',
              }}
              onClick={() => onSelectLocale(item)}
            >
              <Box
                sx={{
                  border: '2px solid transparent',
                  borderColor: router.locale === item.locale && '#fff',
                  display: 'flex',
                  borderRadius: '50%',
                }}
              >
                <Image priority width={26} height={26} src={item.icon} alt={item.locale} />
              </Box>
              <Text fontSize={'md'} fontWeight={500} sx={{ ml: 2 }}>
                {item.label}
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  )
}

export default LocaleMenu
