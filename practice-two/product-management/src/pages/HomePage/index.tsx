import { memo } from 'react'
import Hero from '@components/common/Hero'
import { heroSectionContent } from '@constants'
import ProductList from '@components/ProductList'
import Contact from '@components/Contact'

const Homepage = () => {
  return (
    <>
      <Hero
        imageUrl={heroSectionContent.imageUrl}
        buttonHref={heroSectionContent.link}
        title={heroSectionContent.title}
        description={heroSectionContent.description}
      />
      <ProductList />
      <Contact />
    </>
  )
}

export default memo(Homepage)
