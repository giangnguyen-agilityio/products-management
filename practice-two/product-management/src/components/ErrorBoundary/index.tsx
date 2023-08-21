import { Component, ErrorInfo } from 'react'
import { Box, Flex, Text, Image, Link } from '@chakra-ui/react'
import { NOTIFICATIONS } from '@constants/messages'
import errorImage from '@assets/images/error-image.webp'

interface State {
  error: Error | null
  errorInfo: ErrorInfo | null
}

interface Props {
  children: JSX.Element[] | JSX.Element
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null, errorInfo: null }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    })
  }

  render() {
    if (this.state.error) {
      return (
        <Box
          minH="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          px="10px"
          bgColor="background"
        >
          <Flex flexDir="column" justifyContent="center" alignItems="center">
            {/* Box containing the error image */}
            <Box className="error-image">
              {/* Display the error image */}
              <Image
                width="full"
                src={errorImage}
                alt="This is the error image"
              />
            </Box>
            <Text
              as="h2"
              variant="fontPrimaryBold"
              fontSize="lg"
              color="primary"
              textAlign="center"
            >
              {NOTIFICATIONS.API_ERROR}
            </Text>
            <br />
            <Link href="/">{NOTIFICATIONS.BACK_TO_HOMEPAGE}</Link>
          </Flex>
        </Box>
      )
    }

    return this.props.children
  }
}
