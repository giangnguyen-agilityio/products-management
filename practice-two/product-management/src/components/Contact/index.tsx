import React, { memo } from 'react'
import {
  Box,
  Flex,
  Input,
  Textarea,
  Button,
  Text,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'

import ContactInfo from './ContactInfo'
import SocialLink from './SocialLinks'
import { content } from '@constants'

// Import icons and assets
import facebookLink from '@assets/icons/facebook_link_icon.svg'
import twitterLink from '@assets/icons/twitter_link_icon.svg'
import instagramLink from '@assets/icons/instagram_link_icon.svg'
import linkedinLink from '@assets/icons/linkedin_link_icon.svg'

const Contact: React.FC = () => (
  <Box
    as="section"
    className="contact-section"
    backgroundColor="secondary"
    color="textPrimary"
    padding="30px 0"
    margin={{ base: '0 -10px 30px', md: '0 -50px 30px' }}
  >
    {/* Contact information */}
    <ContactInfo />

    {/* Contact content */}
    <Flex
      className="contact-content"
      flexDirection={{ base: 'column', lg: 'row' }}
      gap={{ base: 0, lg: '60px' }}
      margin={{ base: '0 auto', lg: '20px auto' }}
      width={{ base: '300px', sm: '340px', md: '720px', lg: '940px' }}
    >
      <Box className="content-left" width={{ lg: '470px', xl: '570px' }}>
        <Flex
          as="form"
          flexDirection="column"
          gap="30px"
          margin={{ base: '30px 0', lg: '0' }}
          padding="0 10px"
        >
          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            fontFamily="OpenSans-Regular"
            gap="30px"
          >
            {/* Email input */}
            <FormControl>
              <FormLabel className="input-label" />
              <Input
                placeholder="Enter a valid email address"
                height="47px"
                border="none"
                borderBottom="2px solid"
                borderColor="textPrimary"
                padding="10px 12px"
                outline="none"
                backgroundColor="background"
                borderRadius="none"
                _hover={{
                  borderBottomColor: 'textPrimary',
                }}
              />
            </FormControl>

            {/* Name input */}
            <FormControl>
              <FormLabel className="input-label" />
              <Input
                placeholder="Enter your name"
                height="47px"
                border="none"
                borderBottom="2px solid"
                borderColor="textPrimary"
                padding="10px 12px"
                outline="none"
                backgroundColor="background"
                borderRadius="none"
                _hover={{
                  borderBottomColor: 'textPrimary',
                }}
              />
            </FormControl>
          </Flex>

          {/* Message textarea */}
          <FormControl>
            <FormLabel className="input-label" />
            <Textarea
              placeholder="Enter your message"
              height="124px"
              border="none"
              borderBottom="2px solid"
              borderColor="textPrimary"
              padding="10px 12px"
              outline="none"
              backgroundColor="background"
              borderRadius="none"
              _hover={{
                borderBottomColor: 'textPrimary',
              }}
            />
          </FormControl>

          {/* Submit button */}
          <Button
            colorScheme="primary"
            color="textSecondary"
            backgroundColor="primary"
            padding="15px 30px"
            height="56px"
            borderRadius="10px"
            _hover={{
              backgroundColor: 'background',
              textColor: 'primary',
            }}
          >
            Submit
          </Button>
        </Flex>
      </Box>

      <Box className="content-right" width={{ lg: '470px', xl: '570px' }}>
        {/* The content title */}
        <Text
          className="content-title"
          color="primary"
          fontFamily="Oswald-Regular"
          fontWeight="600"
          fontSize="24px"
        >
          {content.contentTitle}
        </Text>

        {/* The content maxim */}
        <Text
          className="maxim"
          fontFamily="OpenSans-Bold"
          fontSize="18px"
          lineHeight="1.8"
          fontStyle="italic"
          margin="20px 0 0"
        >
          {content.contentMaxim}
        </Text>

        {/* The content description */}
        <Text
          className="content-description"
          fontSize="16px"
          lineHeight="2"
          margin="20px 0 0"
          width={{ base: '100%', sm: '330px', md: '100%' }}
        >
          {content.contentDescription}
        </Text>

        {/* Social link */}
        <Flex
          as="ul"
          className="social-link"
          mt="40px"
          alignItems="center"
          gap="20px"
        >
          <SocialLink href="/" icon={facebookLink} alt="The facebook icon" />
          <SocialLink href="/" icon={twitterLink} alt="The twitter icon" />
          <SocialLink href="/" icon={instagramLink} alt="The instagram icon" />
          <SocialLink href="/" icon={linkedinLink} alt="The linkedin icon" />
        </Flex>
      </Box>
    </Flex>
  </Box>
)

export default memo(Contact)
