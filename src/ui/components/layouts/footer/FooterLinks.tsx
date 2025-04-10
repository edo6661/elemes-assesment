import Link from 'next/link'
import React from 'react'
interface FooterLinksProps {
  items: string[]
  title: string
}
const FooterLinks = (
  { items, title }: FooterLinksProps
) => {
  return (
    <div className='footer-links'>
      <h6 className='footer-title'>
        {title}
      </h6>
      <div className='footer-links__list'>
        {items.map((cat) =>
          <Link href="#" key={cat} className='footer-links__item'>
            {cat}
          </Link>
        )}
      </div>
    </div>)
}

export default FooterLinks