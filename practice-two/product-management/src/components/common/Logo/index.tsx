import React from 'react'
import { Flex, Heading, Image, Link } from '@chakra-ui/react'

interface LogoProps {
  text?: string
  textColor?: string
  textSize?: string
  imageSrc?: string
  widthSize?: string | number
  heightSize?: string | number
}

const Logo: React.FC<LogoProps> = ({
  text,
  textColor = 'black',
  textSize = 'md',
  imageSrc,
  widthSize = '120px',
  heightSize = '40px',
}) => {
  return (
    <Link href="/">
      <Flex align="center" className="logo" cursor="pointer">
        {/* Render the text if provided */}
        {text && (
          <Heading as="h1" size={textSize} color={textColor}>
            {text}
          </Heading>
        )}
        {/* Render the image if provided */}
        {imageSrc && (
          <Image
            className="logo-image"
            loading="eager"
            srcSet={imageSrc}
            src={imageSrc}
            alt="The logo website"
            width={widthSize}
            height={heightSize}
            objectFit="contain"
          />
        )}
      </Flex>
    </Link>
  )
}

export default Logo
