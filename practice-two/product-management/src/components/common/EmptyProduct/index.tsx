import React, { memo } from 'react'
import errorImage from '@assets/images/error-image.webp'
import { Flex, Text, Box, Image } from '@chakra-ui/react'

// Define the props interface for the EmptyProduct component
interface EmptyProductProps {
  errorMessage?: string
}

const EmptyProduct: React.FC<EmptyProductProps> = props => {
  const { errorMessage } = props

  return (
    // Container for the empty product message
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
      borderRadius={6}
    >
      {/* Box containing the error image */}
      <Box className="error-image">
        {/* Display the error image */}
        <Image width="full" src={errorImage} alt="This is the error image" />
      </Box>
      {/* Text displaying the error message */}
      <Text
        className="error-title"
        color="secondary"
        fontSize={{ base: '16px', md: '20px', lg: '24px', xl: '30px' }}
        fontFamily="Oswald-Regular"
        paddingBottom={{ base: 2, md: 4, lg: 6 }}
      >
        {/* Display the error message passed as prop */}
        {errorMessage}
      </Text>
    </Flex>
  )
}

export default memo(EmptyProduct)
