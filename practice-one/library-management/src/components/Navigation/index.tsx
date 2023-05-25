import React from 'react'

// Importing the Link component from 'react-router-dom'
import { Link } from 'react-router-dom'

// Importing the CSS file for styling
import './navigation.css'

// Define the type for a single navigation link
interface NavLink {
  id: string
  label: string
  url: string
}

// Define the props for the Navigation component
interface NavigationProps {
  links: NavLink[] // An array of navigation links
}

const Navigation: React.FC<NavigationProps> = (props) => {
  const { links } = props

  return (
    <ul className="navigation">
      {/* Render each navigation link */}
      {links.map((link) => (
        <li key={link.id} id={`${link.id}-page`}>
          {/* Use React Router's Link component for navigation */}
          <Link to={link.url} className="link-label">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Navigation
