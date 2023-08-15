import React, { memo } from 'react'
import { Box, Flex, Image, Text, Button, Heading } from '@chakra-ui/react'
import { HeroImageProps, HeroDetailProps, HeroProps } from '@types'
import { Link } from 'react-router-dom'

const HeroImage: React.FC<HeroImageProps> = ({ imageUrl }) => {
  return (
    <Box
      className="hero-image-wrapper"
      paddingTop={{ base: '60px', xl: '0' }}
      height={{ base: '436px', md: '915px', xl: '600px' }}
    >
      <Image
        src={imageUrl}
        alt="This is the image of hero section"
        className="hero-image"
        width={{ xl: '410px' }}
        height={{ base: '452px', md: '931px', xl: '606px' }}
        objectFit="cover"
        boxShadow="5px -6px 20px 0 rgba(0,0,0,0.25)"
      />
    </Box>
  )
}

const HeroDetail: React.FC<HeroDetailProps> = ({
  title,
  description,
  buttonHref,
}) => {
  return (
    <Box
      className="hero-detail"
      color="textPrimary"
      width={{ xl: '470px' }}
      padding={{ xl: '0 50px' }}
    >
      <Heading
        as="h2"
        className="hero-title"
        fontFamily="Oswald-Regular"
        fontWeight="600"
        fontSize={{ base: '34px', md: '60px' }}
      >
        {title}
      </Heading>
      <Text
        className="hero-description"
        margin="30px 0"
        fontSize="17px"
        fontStyle="italic"
        lineHeight="1.8"
      >
        {description}
      </Text>
      <Button
        as={Link}
        to={buttonHref}
        className="hero-button"
        letterSpacing={1}
        padding={{ base: '18px 57px 19px', md: '21px 55px 21px' }}
        borderRadius="10px"
        backgroundColor="secondary"
        color="textSecondary"
        fontFamily="OpenSans-Semibold"
        height={{ base: 'full', xl: '62px' }}
        transition="all 0.3s ease-in-out"
        _hover={{
          backgroundColor: 'primary',
        }}
      >
        Learn more
      </Button>
    </Box>
  )
}

const Hero: React.FC<HeroProps> = ({
  imageUrl,
  title,
  description,
  buttonHref,
}) => {
  return (
    <Flex
      as="section"
      className="hero-section"
      flexDirection="column"
      position="relative"
      paddingTop="68px"
      minHeight={{ base: '1120px', md: '1568px', xl: '834px' }}
      marginBottom="20px"
    >
      <Flex
        justifyContent="flex-end"
        marginBottom="185px"
        marginRight={{ base: '-10px', md: '-50px' }}
      >
        {/* Background element */}
        <Box
          backgroundColor="secondary"
          height={{ base: '197px', md: '220px' }}
          width={{
            base: 'calc(((100% - 340px) / 2) + 318px)',
            md: 'calc(((100% - 720px) / 2) + 520px)',
            xl: 'calc(((100% - 940px) / 2) + 520px)',
          }}
        />
      </Flex>
      <Flex
        justifyContent="flex-start"
        marginLeft={{ base: '-10px', md: '-50px' }}
      >
        {/* Background element */}
        <Box
          backgroundColor="secondary"
          height="197px"
          width={{
            base: 'calc(((100% - 340px) / 2) + 318px)',
            md: 'calc(((100% - 720px) / 2) + 520px)',
            xl: 'calc(((100% - 940px) / 2) + 520px)',
          }}
        />
      </Flex>
      <Flex
        className="hero-content"
        width={{ base: '340px', md: '720px', xl: '940px' }}
        height={{ xl: '600px' }}
        position="absolute"
        left={{
          base: 'calc(((100% - 340px) / 2))',
          md: 'calc(((100% - 720px) / 2))',
          xl: 'calc(((100% - 940px) / 2))',
        }}
        flexDirection={{ base: 'column-reverse', xl: 'row' }}
        padding="30px"
        borderWidth="1px"
        backgroundColor="textSecondary"
        marginTop="48px"
      >
        <HeroImage imageUrl={imageUrl} />
        <HeroDetail
          title={title}
          description={description}
          buttonHref={buttonHref}
        />
      </Flex>
    </Flex>
  )
}

export default memo(Hero)
