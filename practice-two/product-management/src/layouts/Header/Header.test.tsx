import { render } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import Header from '.'

describe('Header component', () => {
  it('renders without crashing', () => {
    render(
      <ChakraProvider>
        <Header />
      </ChakraProvider>
    )
  })

  it('renders logo', () => {
    const { getByAltText } = render(
      <ChakraProvider>
        <Header />
      </ChakraProvider>
    )

    const logo = getByAltText(/Website Logo/i)
    expect(logo).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { container } = render(
      <ChakraProvider>
        <Header />
      </ChakraProvider>
    )

    expect(container).toMatchSnapshot()
  })
})
