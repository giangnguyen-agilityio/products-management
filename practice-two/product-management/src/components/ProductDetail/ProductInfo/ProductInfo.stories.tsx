import ProductContext from '@stores/products/ProductContext'
import { MemoryRouter } from 'react-router-dom'
import { Story, Meta } from '@storybook/react'
import ProductInfo from './index'

export default {
  title: 'Practice Two/ProductInfo Component',
  component: ProductInfo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    mutate: { action: 'This is mutate function' },
  },
} as Meta<typeof ProductInfo>

const mockProductData = {
  productData: [
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
}

const Template: Story<typeof ProductInfo> = () => {
  return (
    <MemoryRouter>
      <ProductContext.Provider value={mockProductData}>
        <ProductInfo productData={[mockProductData] as any} />
      </ProductContext.Provider>
    </MemoryRouter>
  )
}

export const Default = Template.bind({})
