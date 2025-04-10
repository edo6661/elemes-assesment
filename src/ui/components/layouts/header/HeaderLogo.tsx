import Image from 'next/image'
import React from 'react'

const HeaderLogo = () => {
  return (
    <div className='header__logo'>
      <Image
        alt='Logo Elemes Group'
        src="/images/logo.png"
        width={207}
        height={50}
      />
    </div>)
}

export default HeaderLogo