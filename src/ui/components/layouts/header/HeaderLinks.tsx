import Link from 'next/link';
import React from 'react'
interface HeaderLinksProps {
  links: string[];
  isLinkPromotions: (link: string) => boolean;
}
const HeaderLinks = (
  { links, isLinkPromotions }: HeaderLinksProps
) => {
  return (
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
    </div>)
}

export default HeaderLinks