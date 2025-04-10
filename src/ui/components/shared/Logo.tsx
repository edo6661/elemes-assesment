import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <Image
      alt='Logo Elemes Group'
      src="/images/logo.png"
      width={180}
      height={50}
    />)
}

export default Logo