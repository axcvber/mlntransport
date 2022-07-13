import React from 'react'
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
