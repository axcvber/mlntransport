import { Box, chakra, Grid, GridItem } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import BlockTitle from '../BlockTitle'

const ImagesGallery = ({ title, images }: any) => {
  console.log('images', images)

  return (
    <>
      {title && <BlockTitle title={title} />}
      <Grid
        // templateRows='repeat(2, 1fr)'
        // bg={'brand.500'}
        // p={3}
        templateColumns='repeat(4, 1fr)'
        gridAutoRows={'200px'}
        gap={3}
        // borderRadius='5px'
        // sx={{
        //   width: '100%',
        //   display: 'grid',
        //   gridTemplateColumns: 'repeat(4, 1fr)',
        //   gridAutoRows: '200px',
        //   gridGap: '10px',
        // }}
      >
        {images.data.map((item: any) => (
          <GridItem
            key={item.id}
            colSpan={{ base: 2, sm: 2, md: 2, lg: 1 }}
            rowSpan={{ base: 1, sm: 1, md: 2, lg: 1 }}
            sx={{
              overflow: 'hidden',
              borderRadius: '5px',
              '&:nth-of-type(1)': {
                gridColumn: { base: 'span 4', md: 'span 4', lg: 'span 2' },
                gridRow: { base: 'span 1', sm: 'span 2' },
              },
            }}
          >
            <Zoom
              overlayBgColorEnd={'rgba(0,0,0, 0.8)'}
              zoomMargin={100}
              wrapStyle={{
                position: 'relative',
                width: '100%',
                height: '100%',
              }}
            >
              <Image layout='fill' objectFit='cover' src={item.attributes.url} alt={item.attributes.alternativeText} />
            </Zoom>
          </GridItem>
        ))}
      </Grid>
    </>
  )
}

export default ImagesGallery
