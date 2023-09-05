import ProductContext from '@context/ProductContext/ProductContext'
import { MemoryRouter } from 'react-router-dom'
import { Story, Meta } from '@storybook/react'
import ConfirmDialog from './index'

export default {
  title: 'Practice Two/ConfirmDialog Component',
  component: ConfirmDialog,
  decorators: [
    Story => (
      <div
        style={{
          backgroundColor: '#ECB203',
          width: '100vw',
          height: '100%',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    closeConfirmDialog: { action: 'The close confirm dialog button clicked' },
  },
} as Meta<typeof ConfirmDialog>

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
  handleLoadMore: () => {
    console.log('Load more product')
  },
}

const Template: Story<typeof ConfirmDialog> = args => {
  return (
    <MemoryRouter>
      <ProductContext.Provider value={mockProductData}>
        <ConfirmDialog {...args} />
      </ProductContext.Provider>
    </MemoryRouter>
  )
}

export const TheConfirmDialog = Template.bind({})
TheConfirmDialog.args = {
  id: 'id_123',
  isConfirmDialogOpen: false,
}
