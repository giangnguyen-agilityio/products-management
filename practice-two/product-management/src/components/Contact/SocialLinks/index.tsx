import React, { memo } from 'react'
import { Link, Image } from '@chakra-ui/react'

interface SocialLinkProps {
  href: string
  icon: string
  alt: string
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, alt }) => (
  <Link href={href} isExternal width="41px" height="41px">
    <Image src={icon} alt={alt} width="38px" height="38px" />
  </Link>
)

export default memo(SocialLink)
