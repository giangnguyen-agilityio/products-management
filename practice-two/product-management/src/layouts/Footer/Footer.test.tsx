import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Footer from '.'

describe('Footer component', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <ChakraProvider>
        <Router>
          <Footer />
        </Router>
      </ChakraProvider>
    )
    expect(container).toMatchSnapshot()
  })
})
