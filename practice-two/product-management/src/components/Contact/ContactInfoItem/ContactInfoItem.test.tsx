import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactInfoItem from '.'

describe('ContactInfoItem component', () => {
  const props = {
    icon: 'icon-url',
    title: 'Contact Title',
    content: 'Contact Content',
  }

  it('renders correctly', () => {
    const { container, getByAltText, getByText } = render(
      <ContactInfoItem {...props} />
    )

    const iconElement = getByAltText(`${props.title} icon`)
    const titleElement = getByText(props.title)
    const contentElement = getByText(props.content)

    expect(iconElement).toBeInTheDocument()
    expect(titleElement).toBeInTheDocument()
    expect(contentElement).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
