import React from 'react'
import FooterMenu from './FooterMenu'

const FooterSmall = () => {
  const menus = ["Home", "Promotions", "Others"]

  return (
    <div className='footer-small'>
      {menus.map((menu) =>
        <FooterMenu
          key={menu}
          text={menu}
        />
      )}
    </div>)
}

export default FooterSmall