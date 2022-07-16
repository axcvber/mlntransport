import { Box } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import React from 'react'
import { Maybe, PageBlocksDynamicZone } from '../generated'
const HomeHero = dynamic(() => import('./blocks/HomeHero'))
const Section = dynamic(() => import('./blocks/Section'))
const Heading = dynamic(() => import('./blocks/Heading'))
const Accordion = dynamic(() => import('./blocks/Accordion'))
const ImagesGallery = dynamic(() => import('./blocks/ImagesGallery'))
const Services = dynamic(() => import('./blocks/Services'))
const Prices = dynamic(() => import('./blocks/Prices'))
const DoubleSection = dynamic(() => import('./blocks/DoubleSection'))
const Contacts = dynamic(() => import('./blocks/Contacts'))

const getBlockComponent = (item: Maybe<PageBlocksDynamicZone>, index: number) => {
  let Block: any

  switch (item?.__typename) {
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
    <Box as='section' mb={10} key={`${item?.__typename}-${index}`}>
      <Block {...item} />
    </Box>
  ) : null
}

const BlockManager: React.FC<{ blocks?: Maybe<Maybe<PageBlocksDynamicZone>[]> }> = ({ blocks }) => {
  return <>{blocks && blocks.map(getBlockComponent)}</>
}

export default BlockManager
