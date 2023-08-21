import { Suspense, memo } from 'react'
import Hero from '@components/common/Hero'
import { heroSectionContent } from '@constants'
import ProductList from '@components/ProductList'
import Contact from '@components/Contact'
import Loading from '@components/common/Loading'

const Homepage = () => {
  return (
    <>
      <Hero
        imageUrl={heroSectionContent.imageUrl}
        buttonHref={heroSectionContent.link}
        title={heroSectionContent.title}
        description={heroSectionContent.description}
      />
      <Suspense fallback={<Loading />}>
        <ProductList />
      </Suspense>
      <Contact />
    </>
  )
}

export default memo(Homepage)
