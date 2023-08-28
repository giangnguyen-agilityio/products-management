import { Meta, StoryFn } from '@storybook/react'
import ProductContext from '@context/ProductContext/ProductContext'
import { MemoryRouter } from 'react-router-dom'
import FilterMenu from './index'

const meta: Meta = {
  title: 'Practice Two/FilterMenu Component',
  component: FilterMenu,
  decorators: [
    Story => (
      <div
        style={{
          backgroundColor: '#532EE7',
          padding: '20px',
          height: '200px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
}

export default meta

const mockProductData = {
  listProduct: [
    {
      id: 'P01',
      name: 'iPhone 14 Pro Max',
      image: 'https://assets.nicepagecdn.com/d2cc3eaa/3159880/images/yttyy.jpg',
      discount: 11,
      oldPrice: 1263.8,
      newPrice: 1116.31,
      rate: 4.5,
      description:
        "The iPhone 14 Pro Max is Apple's flagship smartphone, featuring a Super Retina XDR display, A16 Bionic chip for powerful performance, and an advanced triple-camera system for exceptional photography. With premium design, Face ID, and MagSafe technology, it offers a top-tier user experience.",
    },
  ],
  isLoading: false,
  isLoadingMore: false,
  isReachingEnd: false,
  isError: false,
  addNewProduct: async () => {
    console.log('Add new product')
  },
  editProduct: async () => {
    console.log('Add new product')
  },
  deleteProduct: async () => {
    console.log('Add new product')
  },
  handleLoadMore: () => {
    console.log('Add new product')
  },
}

const Template: StoryFn<any> = args => (
  <MemoryRouter>
    <ProductContext.Provider value={mockProductData}>
      <FilterMenu {...args} />
    </ProductContext.Provider>
  </MemoryRouter>
)

export const Primary = Template.bind({})
Primary.args = {
  isOpen: true,
  customRef: null,
}
