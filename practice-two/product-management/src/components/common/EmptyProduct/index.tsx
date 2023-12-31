// Libraries
import React, { memo } from 'react'
import { Flex, Text, Box, Image, Container } from '@chakra-ui/react'

// Assets
import errorImage from '@assets/images/error-image.webp'

// Define the props interface for the EmptyProduct component
interface EmptyProductProps {
  errorMessage?: string
}

const EmptyProduct: React.FC<EmptyProductProps> = props => {
  const { errorMessage } = props

  return (
    // Container for the empty product message
    <Container as="section" className="empty-product">
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        background="background"
        margin="40px auto 150px"
        borderRadius="small"
        height="100vh"
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
          size="quinary"
          fontFamily="fontSecondary"
          paddingBottom={{ base: 2, md: 4, lg: 6 }}
          textAlign="center"
        >
          {/* Display the error message passed as prop */}
          {errorMessage}
        </Text>
      </Flex>
    </Container>
  )
}

export default memo(EmptyProduct)
