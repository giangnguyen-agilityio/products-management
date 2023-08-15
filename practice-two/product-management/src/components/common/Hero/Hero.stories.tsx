import type { Meta } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import Hero from './index'

const meta: Meta = {
  title: 'Practice Two/Hero Component',
  component: Hero,
  decorators: [
    Story => (
      <MemoryRouter>
        <div
          style={{
            backgroundColor: '#532EE7',
          }}
        >
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: 'top',
  },
  tags: ['autodocs'],
}

const heroSectionContentSample = {
  imageUrl: 'https://assets.nicepagecdn.com/d2cc3eaa/3159880/images/yttyy.jpg',
  link: '#',
  title: 'We help businesses and brands grow',
  description:
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
}

const Template = () => (
  <Hero
    imageUrl={heroSectionContentSample.imageUrl}
    buttonHref={heroSectionContentSample.link}
    title={heroSectionContentSample.title}
    description={heroSectionContentSample.description}
  />
)

export const Primary = Template.bind({})

export default meta
