export interface FooterButtonProps {
  icon: string
  href: string
}

export interface FooterLinkProps {
  href: string
  label: string
}

export interface FooterColumnProps {
  title: string
  links: { label: string; href: string }[]
}
