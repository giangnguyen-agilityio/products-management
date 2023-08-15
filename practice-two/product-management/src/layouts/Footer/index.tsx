import React from 'react'
import { Flex, Text, Image, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import Logo from '@components/common/Logo'
import logoWebsite from '@assets/images/logo_website.webp'
import { aboutUsLinks, footerLinks, helpLinks, socialLinks } from '@constants'
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
        fontSize={{ base: 'sm', md: 'md' }}
        className="footer-link"
        fontFamily="OpenSans-Medium"
        color="textSecondary"
        opacity="0.5"
        _hover={{
          opacity: '1',
        }}
      >
        {label}
      </Text>
    </Link>
  </Flex>
)

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <Flex className="footer-column" flexDirection="column">
    <Text
      as="span"
      fontSize={{ base: 'xs', md: 'xl' }}
      mb={2}
      color="textSecondary"
      textTransform="uppercase"
      fontFamily="OpenSans-Medium"
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
    <Flex
      as="footer"
      className="footer"
      maxWidth={{
        sm: '340px',
        md: '720px',
        lg: '940px',
        xl: '1140px',
      }}
      margin="0 auto"
      flexDirection={{ base: 'column-reverse', lg: 'row' }}
      justifyContent="space-between"
      alignItems="flex-start"
      gap={{ base: 2, sm: 8 }}
    >
      {/* Footer left */}
      <Flex className="footer-left" flexDirection="column">
        <Logo imageSrc={logoWebsite} />
        <Text
          as="span"
          pt={2}
          pl={4}
          color="textSecondary"
          fontSize={{ base: 'sm', md: 'md' }}
        >
          Copyright &copy; 2023, Giang Nguyen
          <br />
          All rights reserved.
        </Text>
        {/* Social media links */}
        <Flex className="link-social" pt={1} pl={2.5}>
          {socialLinks.map((link, index) => (
            <FooterButton key={index} icon={link.icon} href={link.href} />
          ))}
        </Flex>
      </Flex>

      {/* Footer right */}
      <Flex
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
  )
}

export default Footer
