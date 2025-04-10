import React from 'react'
import Logo from '../../shared/Logo'
import Image from 'next/image'
interface FooterLeftProps {
  icons: string[]
}
const FooterLeft = (
  { icons }: FooterLeftProps
) => {
  return (
    <div className='footer-left'>
      <div className='footer-left__first-wrapper'>
        <div>
          <Logo />
        </div>
        <div>
          <p className='footer-left__address'>
            Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan,
            Kecamatan Setiabudi, Kota Jakarta Selatan,
            Daerah Khusus Ibukota Jakarta 12950
          </p>
        </div>
      </div>
      <div className='footer-left__second-wrapper'>
        {icons.map((icon) =>
          <div
            key={icon}
            className={icon === "/icons/white-mail.png" ? "footer-left__social-green" : "footer-left__social-white"}
          >
            <Image
              alt={icon}
              src={icon}
              width={20}
              height={20}
            />
          </div>
        )}
      </div>
    </div>)
}

export default FooterLeft