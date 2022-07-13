import {
  Box,
  chakra,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import BlockTitle from '../BlockTitle'

const ImagesGallery = ({ title, images }: any) => {
  console.log('images', images)
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomedId, setZoomedId] = useState()

  const handleImgLoad = useCallback(() => {
    setIsZoomed(true)
  }, [])

  const handleZoomChange = useCallback((shouldZoom: any, id: any) => {
    setZoomedId(id)
    setIsZoomed(shouldZoom)
  }, [])
  // const onFullImage = (item: any) => {
  //   setZoomedImg(item)
  //   onOpen()
  // }

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
                // background: 'red',
              }}
            >
              {/* <ControlledZoom
              overlayBgColorEnd={'rgba(0,0,0, 0.8)'}
              isZoomed={isZoomed}
              onZoomChange={handleZoomChange}
              wrapStyle={{
                position: 'relative',
                width: '100%',
                height: '100%',
                background: 'red',
              }}
            > */}
              <Image
                priority
                layout='fill'
                objectFit={isZoomed && item.id === zoomedId ? 'contain' : 'cover'}
                // blurDataURL={item.attributes.url}
                // placeholder='blur'
                src={item.attributes.url}
                alt={item.attributes.alternativeText}
              />
            </Zoom>
            {/* </ControlledZoom> */}
          </GridItem>
        ))}
      </Grid>

      {/* <Modal size='4xl' isCentered blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width={'100%'} h='100%' position={'relative'}>
          <ModalCloseButton />
          <ModalBody>
            <Image
              layout='fill'
              objectFit='contain'
              blurDataURL={zoomedImg?.attributes.url || ''}
              placeholder='blur'
              src={zoomedImg?.attributes.url || ''}
              alt={zoomedImg?.attributes.alternativeText || ''}
            />
          </ModalBody>
        </ModalContent>
      </Modal> */}
    </>
  )
}

export default ImagesGallery
