import './navigation.css'
import { Link } from 'react-router-dom'

interface NavLink {
  id: string
  label: string
  url: string
}

interface NavigationProps {
  links: NavLink[]
}

const Navigation = (props: NavigationProps) => {
  const { links } = props
  return (
    <ul className="navigation">
      {links.map((link) => (
        <li key={link.id} id={`${link.id}-page`}>
          <Link to={link.url} className="link-label">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Navigation
