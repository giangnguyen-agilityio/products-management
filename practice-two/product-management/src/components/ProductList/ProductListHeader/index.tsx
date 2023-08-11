import { memo } from 'react'
import { Box, Heading, Grid, Text } from '@chakra-ui/react'

const ProductListHeader = () => (
  <Box
    textAlign="center"
    fontFamily="Oswald-Regular"
    color="textSecondary"
    margin={{ base: '0 -50px 16px' }}
  >
    <Heading
      as="h2"
      className="product-list-title"
      fontSize={{ base: '30px', md: '48px', lg: '60px' }}
    >
      All Products
    </Heading>
    <Grid gridTemplateColumns={'1fr auto 1fr'} alignItems="center">
      <Text as="span" height={1} backgroundColor="secondary" />
      <Text
        as="span"
        className="maxim"
        width="block"
        px={{ base: 1, md: 6 }}
        my={{ base: 4, lg: 6 }}
        fontSize={{ base: '16px', lg: '24px' }}
      >
        Complete range of products for all your needs
      </Text>
      <Text as="span" height={1} backgroundColor="secondary" />
    </Grid>
  </Box>
)

export default memo(ProductListHeader)
