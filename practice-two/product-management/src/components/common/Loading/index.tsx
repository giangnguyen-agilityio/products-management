import { memo } from 'react'
import { Container, Flex, Spinner, Text } from '@chakra-ui/react'

const Loading = () => {
  return (
    <Container>
      <Flex
        justifyContent="center"
        flexDirection="column"
        margin="30px auto"
        minHeight="300px"
        borderRadius={10}
        fontFamily="Oswald-Regular"
        padding={4}
        alignItems="center"
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="secondary"
          size="xl"
        />
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
