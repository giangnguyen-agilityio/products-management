import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Header from '.'

describe('Header component', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <ChakraProvider>
          <Header />
        </ChakraProvider>
      </BrowserRouter>
    )
  })

  it('matches snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <ChakraProvider>
          <Header />
        </ChakraProvider>
      </BrowserRouter>
    )

    expect(container).toMatchSnapshot()
  })
})
