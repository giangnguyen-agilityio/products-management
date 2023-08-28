import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import MainLayout from '.'
describe('MainLayout component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <ChakraProvider>
        <MemoryRouter>
          <MainLayout />
        </MemoryRouter>
      </ChakraProvider>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
