import React from 'react'
import {NavLink} from 'react-router-dom'
import {getItemInLocalStorage} from '@helpers'
import './navigation.css'

interface Link {
  id: string
  label: string
  url: string
}

interface NavigationProps {
  links: Link[]
}

const Navigation: React.FC<NavigationProps> = props => {
  const {links} = props
  const isMember: string = getItemInLocalStorage('memberId')

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
