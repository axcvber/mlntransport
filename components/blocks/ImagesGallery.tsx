import { Grid, GridItem } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useState } from 'react'
import Zoom from 'react-medium-image-zoom'
import { ComponentBlocksImagesGallery, Maybe } from '../../generated'
import BlockTitle from '../BlockTitle'
import 'react-medium-image-zoom/dist/styles.css'

const ImagesGallery: React.FC<ComponentBlocksImagesGallery> = ({ title, images }) => {
  const [isZoomed, setIsZoomed] = useState<boolean>(false)
  const [zoomedId, setZoomedId] = useState<string>()

  const handleZoomChange = (shouldZoom: boolean, id?: Maybe<string>) => {
    if (id) {
      setZoomedId(id)
      setIsZoomed(shouldZoom)
    }
  }

  return (
    <>
      {title && <BlockTitle title={title} />}
      <Grid templateColumns='repeat(4, 1fr)' gridAutoRows={'200px'} gap={3}>
        {images.data.map((item) => (
          <GridItem
            onClick={() => handleZoomChange(!isZoomed, item.id)}
            key={item.id}
            colSpan={{ base: 2, sm: 2, md: 2, lg: 1 }}
            rowSpan={{ base: 1, sm: 1, md: 2, lg: 1 }}
            boxShadow='0px 0px 14px -3px rgba(0,0,0,0.43)'
            sx={{
              position: 'relative',
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
              <Image
                priority
                layout='fill'
                objectFit={isZoomed && item.id === zoomedId ? 'contain' : 'cover'}
                blurDataURL={item.attributes?.url || ''}
                placeholder='blur'
                src={item.attributes?.url || ''}
                alt={item.attributes?.alternativeText || ''}
              />
            </Zoom>
          </GridItem>
        ))}
      </Grid>
    </>
  )
}

export default ImagesGallery
