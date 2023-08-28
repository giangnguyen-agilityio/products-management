// Libraries
import { memo } from 'react'
import { Container, Flex, Spinner, Text } from '@chakra-ui/react'

const Loading = () => {
  return (
    <Container>
      <Flex
        justifyContent="center"
        flexDirection="column"
        margin="0 auto"
        height="100vh"
        borderRadius={10}
        fontFamily="Oswald-Regular"
        alignItems="center"
      >
        {/* Display a spinning loading indicator */}
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          size="xl"
        />
        {/* Display a text indicating the loading process */}
        <Text
          variant="fontSecondary"
          fontSize="lg"
          color="secondary"
          marginTop={2}
        >
          Loading....
        </Text>
      </Flex>
    </Container>
  )
}

export default memo(Loading)
