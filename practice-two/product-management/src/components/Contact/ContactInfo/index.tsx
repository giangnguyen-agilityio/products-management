import { memo } from 'react'
import { Grid, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ContactInfoItem from '../ContactInfoItem'

// Import icons and assets
import locationIcon from '@assets/icons/Location_Icon.svg'
import telephoneIcon from '@assets/icons/Telephone_Icon.svg'
import faxIcon from '@assets/icons/Fax_Icon.svg'
import emailIcon from '@assets/icons/Email_Icon.svg'

const ContactInfo = () => {
  return (
    <Grid
      className="contact-information"
      gap="20px"
      margin="-150px auto 0"
      gridTemplateColumns={{
        base: '1fr',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(4, 1fr)',
      }}
      maxWidth={{
        sm: '340px',
        md: '720px',
        lg: '940px',
        xl: '1140px',
      }}
    >
      <ContactInfoItem
        icon={locationIcon}
        title="our main office"
        content="SoHo 94 Broadway St New York, NY 1001"
      />
      <ContactInfoItem
        icon={telephoneIcon}
        title="phone number"
        content={
          <>
            <Text>234-9876-5400</Text>
            <Text marginTop="20px">888-0123-4567 (Toll Free)</Text>
          </>
        }
      />
      <ContactInfoItem icon={faxIcon} title="fax" content="1-234-567-8900" />
      <ContactInfoItem
        icon={emailIcon}
        title="email"
        content={
          <Link to="/">
            <Text
              as="span"
              color="primary"
              fontFamily="OpenSans-Bold"
              textDecoration="unset"
              _hover={{
                textDecoration: 'underline',
              }}
            >
              hello@theme.com
            </Text>
          </Link>
        }
      />
    </Grid>
  )
}

export default memo(ContactInfo)
