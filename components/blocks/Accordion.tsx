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

const Accordion = ({ accordion, title }: any) => {
  return (
    <>
      {title && <BlockTitle title={title} />}
      <ChakraAccordion allowMultiple>
        {accordion &&
          accordion.map((item: any) => (
            <AccordionItem key={item.id}>
              <AccordionButton borderRadius={5}>
                <Text as='h6' flex='1' textAlign='left' color='gray.600' fontWeight={500}>
                  {item.title}
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color='gray.500'>{item.content}</Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
      </ChakraAccordion>
    </>
  )
}

export default Accordion
