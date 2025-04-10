import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../../shared/Button'

const Header = () => {
  const links = ["Home", "About", "Promotions", "Blogs", "Contact Us"]
  const isLinkPromotions = (link: string) => {
    return link === "Promotions"
  }

  return (
    <header>
      <nav className='header__nav'>
        <div className='header__logo'>
          <Image
            alt='Logo Elemes Group'
            src="/images/logo.png"
            width={207}
            height={50}
          />
        </div>
        <div className='header__menu'>
          <ul className='header__links'>
            {links.map((link) =>
              <li key={link} className='header__link-item'>
                {isLinkPromotions(link) && (
                  <div className='header__badge--hot'>
                    <span className='header__badge--text'>
                      HOT
                    </span>
                  </div>
                )}
                <Link href="#" className='header__link'>
                  {link}
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className='header__actions'>
          <button className='header__button--login'>Masuk</button>
          <Button className='header__button--signup'>
            Daftar Sekarang
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Header