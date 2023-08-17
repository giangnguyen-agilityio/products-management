import { memo } from 'react'
import { Flex, Spinner, Text } from '@chakra-ui/react'

const Loading = () => {
  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      maxWidth={{ sm: '340px', md: '720px', lg: '940px', xl: '1140px' }}
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
        fontFamily="Oswald-Regular"
        fontSize="lg"
        color="secondary"
        marginTop={2}
      >
        Loading....
      </Text>
    </Flex>
  )
}

export default memo(Loading)
