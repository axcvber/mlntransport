import { Box } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import React from 'react'
import { Maybe, PageBlocksDynamicZone } from '../generated'
// import Accordion from './blocks/Accordion'
// import Contacts from './blocks/Contacts'
// import DoubleSection from './blocks/DoubleSection'
// import Prices from './blocks/Prices'
// import Heading from './blocks/Heading'
// import HomeHero from './blocks/HomeHero'
// import ImagesGallery from './blocks/ImagesGallery'
// import Section from './blocks/Section'
// import Services from './blocks/Services'

const HomeHero = dynamic(() => import('./blocks/HomeHero'))
const Section = dynamic(() => import('./blocks/Section'))
const Heading = dynamic(() => import('./blocks/Heading'))
const Accordion = dynamic(() => import('./blocks/Accordion'))
const ImagesGallery = dynamic(() => import('./blocks/ImagesGallery'))
const Services = dynamic(() => import('./blocks/Services'))
const Prices = dynamic(() => import('./blocks/Prices'))
const DoubleSection = dynamic(() => import('./blocks/DoubleSection'))
const Contacts = dynamic(() => import('./blocks/Contacts'))

const getBlockComponent = ({ __typename, ...rest }: any, index: any) => {
  let Block

  switch (__typename) {
    case 'ComponentBlocksHomeHero':
      Block = HomeHero
      break
    case 'ComponentBlocksHeading':
      Block = Heading
      break
    case 'ComponentBlocksServices':
      Block = Services
      break
    case 'ComponentBlocksSection':
      Block = Section
      break
    case 'ComponentBlocksImagesGallery':
      Block = ImagesGallery
      break
    case 'ComponentBlocksAccordion':
      Block = Accordion
      break

    case 'ComponentBlocksDoubleSection':
      Block = DoubleSection
      break

    case 'ComponentBlocksPrices':
      Block = Prices
      break
    case 'ComponentBlocksContacts':
      Block = Contacts
      break
  }

  return Block ? (
    <Box as='section' mb={10} key={`${__typename}-${index}`}>
      <Block {...rest} />
    </Box>
  ) : null
}

const BlockManager: React.FC<{ blocks?: Maybe<Maybe<PageBlocksDynamicZone>[]> }> = ({ blocks }) => {
  return <>{blocks && blocks.map(getBlockComponent)}</>
}

export default BlockManager
