import React from 'react'
import {render, screen} from '@testing-library/react'
import Typography from '.'

describe('Typography component', () => {
  it('renders correctly with the provided props', () => {
    const {getByText} = render(
      <Typography variant="h1" color="primary">
        This is text!
      </Typography>
    )

    expect(getByText('This is text!')).toBeInTheDocument()
    expect(screen.getByRole('heading', {level: 1})).toBeInTheDocument()
    expect(getByText('This is text!')).toHaveClass('text-h1 text-primary')
    expect(getByText('This is text!')).toMatchSnapshot()
  })
})
