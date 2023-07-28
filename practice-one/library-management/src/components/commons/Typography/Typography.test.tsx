// Typography.test.tsx
import React from 'react'
import {render} from '@testing-library/react'
import Typography, {TypographyProps} from '.'

describe('Typography component', () => {
  const mockTypographyProps: TypographyProps = {
    variant: 'p',
    children: 'Test Typography',
  }

  it('should renders a paragraph with default styles when variant is not specified', () => {
    const {container, getByText} = render(
      <Typography {...mockTypographyProps} />
    )
    const textContent = getByText('Test Typography')
    expect(textContent.tagName.toLowerCase()).toBe('p')
    expect(textContent).toHaveClass('text-p')
    expect(container).toMatchSnapshot()
  })

  it('should renders different heading elements when variant is specified', () => {
    const variants: TypographyProps['variant'][] = [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
    ]

    variants.forEach(variant => {
      const {container} = render(
        <Typography {...mockTypographyProps} variant={variant} />
      )
      const headingElement = container.querySelector(variant)

      expect(headingElement?.tagName).toBe(variant.toUpperCase())
      expect(container).toMatchSnapshot()
    })
  })

  it('should applies specified color class when color prop is provided', () => {
    const {getByText} = render(
      <Typography {...mockTypographyProps} color="primary" />
    )
    const textContent = getByText('Test Typography')
    expect(textContent).toHaveClass('text-primary')
  })

  it('should applies additional className when className prop is provided', () => {
    const {getByText} = render(
      <Typography {...mockTypographyProps} className="test-typography-class" />
    )
    const textContent = getByText('Test Typography')
    expect(textContent).toHaveClass('test-typography-class')
  })

  it('should applies both color and additional className when both props are provided', () => {
    const {getByText} = render(
      <Typography
        {...mockTypographyProps}
        color="primary"
        className="test-typography-class"
      />
    )
    const textContent = getByText('Test Typography')
    expect(textContent).toHaveClass('text-primary')
    expect(textContent).toHaveClass('test-typography-class')
  })
})
