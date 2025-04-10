import Image from 'next/image'
import React from 'react'
interface FooterIconTextProps {
  icon: string
  text: string
  alt: string
}
const FooterIconText = (
  { icon, text, alt }: FooterIconTextProps
) => {
  return (
    <div className='footer-right__contact'>
      <Image
        alt={alt}
        src={icon}
        width={20}
        height={20}
      />
      <p>{text}</p>
    </div>)
}

export default FooterIconText