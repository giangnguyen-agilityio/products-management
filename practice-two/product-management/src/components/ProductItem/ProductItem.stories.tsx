import type { Meta, Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import ProductItem from './index'
import { ProductsItemProps } from '@constants'

const meta = {
  title: 'Practice Two/ProductItem Component',
  component: ProductItem,
  decorators: [
    Story => (
      <BrowserRouter>
        <div
          style={{
            backgroundColor: '#532EE7',
            padding: '20px',
          }}
        >
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

export default meta

const Template: Story<{ product: ProductsItemProps }> = args => (
  <ProductItem {...args} />
)

const exampleProduct: ProductsItemProps = {
  id: 'ID01',
  name: 'iPhone 14 Pro Max',
  image: 'https://assets.nicepagecdn.com/d2cc3eaa/3159880/images/yttyy.jpg',
}

export const Primary = Template.bind({})
Primary.args = {
  product: exampleProduct,
}

const exampleProductWithoutImage: ProductsItemProps = {
  id: 'ID01',
  name: 'iPhone 14 Pro Max',
  image: '',
}

export const ProductItemWithoutImage = Template.bind({})
ProductItemWithoutImage.args = {
  product: exampleProductWithoutImage,
}
