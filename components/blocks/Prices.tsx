import React from 'react'
import BlockTitle from '../BlockTitle'

const Prices = ({ title }: any) => {
  return <>{title && <BlockTitle title={title} />}</>
}

export default Prices
