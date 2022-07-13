import React, { ReactChild } from 'react'
import { Link } from 'react-scroll'

interface IRSLink {
  to: string
  children: ReactChild
}

const RSLink: React.FC<IRSLink> = ({ to, children }) => {
  return (
    <Link to={to} href='#' spy={true} ignoreCancelEvents smooth={true} offset={-70} duration={600}>
      {children}
    </Link>
  )
}

export default RSLink
