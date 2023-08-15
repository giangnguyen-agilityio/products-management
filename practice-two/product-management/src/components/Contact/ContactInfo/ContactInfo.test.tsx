import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ContactInfo from '.'

jest.mock('@assets/icons/Location_Icon.svg', () => ({
  default: 'locationIcon',
}))

jest.mock('@assets/icons/Telephone_Icon.svg', () => ({
  default: 'telephoneIcon',
}))

jest.mock('@assets/icons/Fax_Icon.svg', () => ({
  default: 'faxIcon',
}))

jest.mock('@assets/icons/Email_Icon.svg', () => ({
  default: 'emailIcon',
}))

describe('ContactInfo component', () => {
  it('renders contact information', () => {
    const { container, getByText } = render(
      <MemoryRouter>
        <ContactInfo />
      </MemoryRouter>
    )

    expect(getByText('our main office')).toBeInTheDocument()
    expect(getByText('phone number')).toBeInTheDocument()
    expect(getByText('fax')).toBeInTheDocument()
    expect(getByText('email')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
