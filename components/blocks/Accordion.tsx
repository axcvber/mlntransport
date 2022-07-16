import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Accordion as ChakraAccordion,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { ComponentBlocksAccordion } from '../../generated'
import BlockTitle from '../BlockTitle'
import Markdown from '../Markdown'

const Accordion: React.FC<ComponentBlocksAccordion> = ({ accordion, title }) => {
  return (
    <>
      {title && <BlockTitle title={title} />}
      <ChakraAccordion allowMultiple>
        {accordion &&
          accordion.map((item) => (
            <AccordionItem key={item?.id}>
              <AccordionButton _expanded={{ bg: 'brand.400', color: '#fff' }}>
                <Text as='h6' flex='1' textAlign='left' fontWeight={500}>
                  {item?.title}
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={2}>
                <Markdown content={item?.content} />
              </AccordionPanel>
            </AccordionItem>
          ))}
      </ChakraAccordion>
    </>
  )
}

export default Accordion
