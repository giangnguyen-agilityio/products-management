import React from 'react'
import {render} from '@testing-library/react'
import Pagination from '.'

it('should renders correct number of pagination items', () => {
  const length = 5
  const activeIndex = 2
  const {container} = render(
    <Pagination length={length} activeIndex={activeIndex} />
  )

  // Check if the correct number of pagination items is rendered
  const paginationItems = container.querySelectorAll('.pagination-item-border')
  expect(paginationItems.length).toBe(length)
  expect(container).toMatchSnapshot()
})

it('should marks the active item correctly', () => {
  const length = 5
  const activeIndex = 2
  const {container} = render(
    <Pagination length={length} activeIndex={activeIndex} />
  )

  // Check if the active item has the 'active' class
  const activeItem = container.querySelector('.pagination-item-border.active')
  expect(activeItem).not.toBeNull()

  // Check if the active item's nested div also has the 'active' class
  const activeInnerItem = container.querySelector('.pagination-item.active')
  expect(activeInnerItem).not.toBeNull()

  expect(container).toMatchSnapshot()
})

it('should does not mark any item as active when activeIndex is out of range', () => {
  const length = 5
  const activeIndex = 10
  const {container} = render(
    <Pagination length={length} activeIndex={activeIndex} />
  )

  // Check if no item has the 'active' class
  const activeItem = container.querySelector('.pagination-item-border.active')
  expect(activeItem).toBeNull()

  // Check if no item's nested div has the 'active' class
  const activeInnerItem = container.querySelector('.pagination-item.active')
  expect(activeInnerItem).toBeNull()

  expect(container).toMatchSnapshot()
})
