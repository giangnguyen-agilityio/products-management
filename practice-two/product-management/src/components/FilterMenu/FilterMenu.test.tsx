import { render } from '@testing-library/react'
import FilterMenu from '.'

jest.mock('@assets/icons/TV_Icon.svg', () => ({
  default: 'tvIcon',
}))

jest.mock('@assets/icons/Phone_Icon.svg', () => ({
  default: 'phoneIcon',
}))

jest.mock('@assets/icons/Laptop_Icon.svg', () => ({
  default: 'laptopIcon',
}))

jest.mock('@assets/icons/Refrigerator_Icon.svg', () => ({
  default: 'refregeratorIcon',
}))

jest.mock('@assets/icons/Air_Conditioner_Icon.svg', () => ({
  default: 'airConditionerIcon',
}))

describe('FilterMenu Component', () => {
  it('renders with the correct number of FilterLink items', () => {
    const { container } = render(<FilterMenu isOpen={true} customRef={null} />)
    const filterLinks = container.querySelectorAll('.filter-item')
    expect(filterLinks.length).toBe(5)
  })

  it('renders the ChevronDownIcon', () => {
    const { container } = render(<FilterMenu isOpen={true} customRef={null} />)
    const chevronIcon = container.querySelector('.arrow-filter')
    expect(chevronIcon).toBeInTheDocument()
  })

  it('renders FilterLink items with correct labels', () => {
    const { getByText } = render(<FilterMenu isOpen={true} customRef={null} />)
    expect(getByText('TV')).toBeInTheDocument()
    expect(getByText('Laptop')).toBeInTheDocument()
    expect(getByText('Phone')).toBeInTheDocument()
    expect(getByText('Refrigerator')).toBeInTheDocument()
    expect(getByText('Air Conditioner')).toBeInTheDocument()
  })

  it('matches snapshot when open', () => {
    const { container } = render(<FilterMenu isOpen={true} customRef={null} />)
    expect(container).toMatchSnapshot()
  })

  it('matches snapshot when closed', () => {
    const { container } = render(<FilterMenu isOpen={false} customRef={null} />)
    expect(container).toMatchSnapshot()
  })
})
