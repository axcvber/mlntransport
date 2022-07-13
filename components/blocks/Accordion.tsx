import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Accordion as ChakraAccordion,
  Heading,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import BlockTitle from '../BlockTitle'
import Markdown from '../Markdown'

const Accordion = ({ accordion, title }: any) => {
  return (
    <>
      {title && <BlockTitle title={title} />}
      <ChakraAccordion allowMultiple>
        {accordion &&
          accordion.map((item: any) => (
            <AccordionItem
              // my={5}
              key={item.id}
              // border='none'
              // bg='#fff'
              // borderRadius={5}
              // boxShadow={'0px 0px 17px -2px rgba(0,0,0,0.3)'}
            >
              <AccordionButton
                // color='gray.600'
                // borderTopLeftRadius={5}
                // borderTopRightRadius={5}
                _expanded={{ bg: 'brand.400', color: '#fff' }}
              >
                <Text as='h6' flex='1' textAlign='left' fontWeight={500}>
                  {item.title}
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={2}>
                <Markdown content={item.content} />
              </AccordionPanel>
            </AccordionItem>
          ))}
      </ChakraAccordion>
    </>
  )
}

export default Accordion
