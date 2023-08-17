import React from 'react'
import errorImage from '@assets/images/error-image.webp'
import { Flex, Text, Box, Image } from '@chakra-ui/react'

interface EmptyProductProps {
  errorMessage?: string
}

const EmptyProduct: React.FC<EmptyProductProps> = props => {
  const { errorMessage } = props
  return (
    <Flex
      className="empty-product"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      background="background"
      maxWidth={{
        sm: '340px',
        md: '720px',
        lg: '940px',
        xl: '1140px',
      }}
      margin="40px auto"
    >
      <Box className="error-image">
        <Image width="full" src={errorImage} alt="This is the error image" />
      </Box>
      <Text
        className="error-title"
        color="secondary"
        fontSize={{ base: '16px', md: '20px', lg: '24px', xl: '30px' }}
        fontFamily="Oswald-Regular"
        paddingBottom={{ base: 2, md: 4, lg: 6 }}
      >
        {errorMessage}
      </Text>
    </Flex>
  )
}

export default EmptyProduct
