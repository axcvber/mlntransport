import { Box, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import BlockTitle from '../BlockTitle'
import Markdown from '../Markdown'

const DoubleSection = ({ title, leftSection, rightSection }: any) => {
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
