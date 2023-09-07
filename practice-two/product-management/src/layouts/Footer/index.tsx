// Libraries
import React from 'react'
import { Flex, Text, Image, Box, Container } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

// Components
import Logo from '@components/common/Logo'

// Assets
import logoWebsite from '@assets/images/logo_website.webp'

// Constants
import { aboutUsLinks, footerLinks, helpLinks, socialLinks } from '@constants'

// Types
import { FooterButtonProps, FooterLinkProps, FooterColumnProps } from '@types'

const FooterButton: React.FC<FooterButtonProps> = ({ icon, href }) => (
  <Link to={href}>
    <Box
      marginRight={1}
      opacity={0.5}
      _hover={{
        opacity: '1',
      }}
    >
      <Image src={icon} alt="The social icon" width={8} height={8} />
    </Box>
  </Link>
)

const FooterLink: React.FC<FooterLinkProps> = ({ href, label }) => (
  <Flex as="li" my={1}>
    <Link to={href}>
      <Text
        as="span"
        size="secondary"
        className="footer-link"
        variant="fontPrimaryMedium"
        color="textSecondary"
        _hover={{
          opacity: '0.5',
        }}
      >
        {label}
      </Text>
    </Link>
  </Flex>
)

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <Flex as="li" className="footer-column" flexDirection="column">
    <Text
      as="span"
      size="primary"
      marginBottom={2}
      color="textSecondary"
      textTransform="uppercase"
      variant="fontPrimaryBold"
    >
      {title}
    </Text>
    <Flex as="ul" className="footer-column-items" direction="column">
      {links.map((link, index) => (
        <FooterLink key={index} href={link.href} label={link.label} />
      ))}
    </Flex>
  </Flex>
)

const Footer: React.FC = () => {
  return (
    <Container as="footer" className="footer">
      <Flex
        flexDirection={{ base: 'column-reverse', lg: 'row' }}
        justifyContent="space-between"
        alignItems="flex-start"
        gap={{ base: 2, sm: 8 }}
      >
        {/* Footer left */}
        <Flex as="ul" className="footer-left" flexDirection="column">
          <Flex as="li">
            <Logo imageSrc={logoWebsite} />
          </Flex>
          <Flex as="li">
            <Text
              as="span"
              pt={2}
              pl={4}
              color="textSecondary"
              size="secondary"
            >
              Copyright &copy; 2023, Giang Nguyen
              <br />
              All rights reserved.
            </Text>
          </Flex>
          {/* Social media links */}
          <Flex as="li" className="link-social" pt={1} pl={2.5}>
            {socialLinks.map((link, index) => (
              <FooterButton key={index} icon={link.icon} href={link.href} />
            ))}
          </Flex>
        </Flex>

        {/* Footer right */}
        <Flex
          as="ul"
          className="footer-right"
          marginLeft={{ base: 4, xl: 0 }}
          gap={{ base: 8, xl: 16 }}
        >
          {/* Column 1 */}
          <FooterColumn title="Discover" links={footerLinks} />

          {/* Column 2 */}
          <FooterColumn title="About Us" links={aboutUsLinks} />

          {/* Column 3 */}
          <FooterColumn title="Help" links={helpLinks} />
        </Flex>
      </Flex>
    </Container>
  )
}

export default Footer
