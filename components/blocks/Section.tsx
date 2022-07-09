import { Box, chakra, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import BlockTitle from '../BlockTitle'
import Markdown from '../Markdown'

const Section = ({ title, content }: any) => {
  return (
    <>
      {title && <BlockTitle title={title} />}
      <Markdown content={content} />
    </>
  )
}

export default Section
