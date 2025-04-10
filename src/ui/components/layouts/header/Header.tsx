import React from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderLinks from './HeaderLinks'
import HeaderActions from './HeaderActions'

const Header = () => {
  const links = ["Home", "About", "Promotions", "Blogs", "Contact Us"]
  const isLinkPromotions = (link: string) => {
    return link === "Promotions"
  }

  return (
    <header>
      <nav className='header__nav'>
        <HeaderLogo />
        <HeaderLinks
          links={links}
          isLinkPromotions={isLinkPromotions}
        />
        <HeaderActions />
      </nav>
    </header>
  )
}

export default Header