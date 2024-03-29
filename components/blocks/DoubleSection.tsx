import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { ComponentBlocksDoubleSection } from '../../generated'
import BlockTitle from '../BlockTitle'
import Markdown from '../Markdown'

const DoubleSection: React.FC<ComponentBlocksDoubleSection> = ({ title, leftSection, rightSection }) => {
  return (
    <>
      {title && <BlockTitle title={title} />}
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
        <GridItem>
          <Markdown content={leftSection} />
        </GridItem>
        <GridItem>
          <Markdown content={rightSection} />
        </GridItem>
      </Grid>
    </>
  )
}

export default DoubleSection
