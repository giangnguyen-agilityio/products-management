import React, { memo } from 'react'
import { Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

interface SocialLinkProps {
  href: string
  icon: string
  alt: string
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, alt }) => (
  <Link to={href}>
    <Image src={icon} alt={alt} width="41px" height="41px" />
  </Link>
)

export default memo(SocialLink)
