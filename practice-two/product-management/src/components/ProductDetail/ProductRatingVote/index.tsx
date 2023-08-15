import React, { memo, useMemo } from 'react'
import { Flex, Box, Image } from '@chakra-ui/react'
import fullStarIcon from '@assets/icons/full_star_icon.svg'
import halfStarIcon from '@assets/icons/half_star_icon.svg'
import emptyStarIcon from '@assets/icons/empty_star_icon.svg'

// Define the interface for the props
interface ProductRatingProps {
  ratingVote: number
}

// Define the functional component that displays the product rating stars.
const ProductRatingVote: React.FC<ProductRatingProps> = ({ ratingVote }) => {
  // Ensure the rating is between 0 and 5.
  const normalizedRating = Math.min(5, ratingVote)

  // Determine the number of full stars and whether there's a half star.
  const fullStars = Math.floor(normalizedRating)
  const hasHalfStar = normalizedRating - fullStars >= 0.5

  // Total number of stars in the rating.
  const totalStars = 5

  // Function to generate an array of JSX elements representing stars.
  const renderStars = () => {
    const stars = Array.from({ length: totalStars }, (_, index) => {
      // Determine the type of star for the current index.
      const isFullStar = index < fullStars
      const isHalfStar = index === fullStars && hasHalfStar
      const starType = isFullStar ? 'Full' : isHalfStar ? 'Half' : 'Empty'

      // Generate the appropriate star icon based on the star type.
      return (
        <Box
          key={`star-${index}`}
          className="star"
          aria-label={`${starType} star`}
        >
          {isFullStar ? (
            <Image
              src={fullStarIcon}
              alt="The full star icon"
              width="15px"
              height="15px"
            />
          ) : isHalfStar ? (
            <Image
              src={halfStarIcon}
              alt="The half star icon"
              width="15px"
              height="15px"
            />
          ) : (
            <Image
              src={emptyStarIcon}
              alt="The empty star icon"
              width="15px"
              height="15px"
            />
          )}
        </Box>
      )
    })

    return stars
  }

  // Memoize the generated stars to prevent unnecessary re-rendering.
  const memoizedStars = useMemo(renderStars, [normalizedRating])

  return (
    <Flex className="rating-vote" marginTop={1} color="secondary" gap={1}>
      {memoizedStars}
    </Flex>
  )
}

export default memo(ProductRatingVote)
