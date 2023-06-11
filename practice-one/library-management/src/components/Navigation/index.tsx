import React from 'react'

// Importing the Link component from 'react-router-dom'
import {NavLink} from 'react-router-dom'

// Importing the helper functions
import {getItemInLocalStorage} from '@helpers'

// Importing the CSS file for styling
import './navigation.css'

// Define the type for a single navigation link
interface Link {
  id: string
  label: string
  url: string
}

// Define the props for the Navigation component
interface NavigationProps {
  links: Link[] // An array of navigation links
}

const Navigation: React.FC<NavigationProps> = props => {
  const {links} = props
  const isMember = getItemInLocalStorage('memberId')

  return (
    <ul className="navigation">
      {links.map(({id, label, url}) => (
        // Render a list item for each navigation link in `links` array
        <li key={id} id={`${id}-page`}>
          {/* Check if the user is a member */}
          {isMember ? (
            // Render a NavLink component with the navigation link data if user is a member
            <NavLink to={url} className="link-label">
              {label}
            </NavLink>
          ) : (
            // Render a span tag with the navigation link label if user is not a member
            <span className="link-label">{label}</span>
          )}
        </li>
      ))}
    </ul>
  )
}

export default Navigation
