import React from 'react'
import { ComponentBlocksSection } from '../../generated'
import BlockTitle from '../BlockTitle'
import Markdown from '../Markdown'

const Section: React.FC<ComponentBlocksSection> = ({ title, content }) => {
  return (
    <>
      {title && <BlockTitle title={title} />}
      <Markdown content={content} />
    </>
  )
}

export default Section
