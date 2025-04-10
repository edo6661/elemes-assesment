import Image from 'next/image'
import React from 'react'
interface FooterMenuProps {
  text: string
}
const FooterMenu = (
  { text }: FooterMenuProps
) => {
  return (
    <div className='footer-small__menu'>
      <div className='footer-menu__icon'>
        <Image
          alt={text}
          src="/icons/menu.png"
          width={40}
          height={40}
        />
      </div>
      <span className='footer-menu__text'>
        {text}
      </span>
    </div>
  )
}

export default FooterMenu