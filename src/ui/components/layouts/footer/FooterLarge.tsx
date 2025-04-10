import React from 'react'
import FooterLeft from './FooterLeft'
import FooterLinks from './FooterLinks'
import FooterRight from './FooterRight'

const FooterLarge = () => {
  const icons = ["/icons/white-mail.png", "/icons/phone.png", "/icons/instagram.png"]
  const categories = ["Cupcake", "Pizza", "Kebab", "Salmon", "Dougnut"]
  const aboutUs = ["About Us", "FAQ", "Report Problem"]

  return (
    <div className='footer-large'>
      <div className='footer-large__container'>
        <FooterLeft icons={icons} />
        <FooterLinks
          items={categories}
          title="Categories"
        />
        <FooterLinks
          items={aboutUs}
          title="About Us"
        />
        <FooterRight />
      </div>
      <p className='footer-large__copyright'>
        © 2021 Elemes id. All rights reserved
      </p>
    </div>)
}

export default FooterLarge