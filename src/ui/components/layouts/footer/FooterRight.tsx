import React from 'react'
import Button from '../../shared/Button'
import FooterIconText from './FooterIconText'

const FooterRight = () => {
  const icons = [
    {
      alt: "Mail",
      icon: "/icons/green-mail.png",
      text: "elemesid@gmail.com",
    },
    {
      alt: "Phone",
      icon: "/icons/phone.png",
      text: "0888 1111 2222",
    },
  ]
  return (
    <div className='footer-right'>
      <h6 className='footer-title'>
        Newsletter
      </h6>
      <div className='footer-right-content'>
        <p className='footer-right__description'>
          Get now free 50% discount for alll products on your first order
        </p>
        <div className="footer-right-inner">
          <div className="footer-right__form">
            <input
              className='footer-right__input '
              placeholder='Your email address'
            />
            <Button className='footer-right__button'>
              SEND
            </Button>
          </div>
          <div className="footer-right__contacts">
            {icons.map((icon) =>
              <FooterIconText
                key={icon.alt}
                alt={icon.alt}
                icon={icon.icon}
                text={icon.text}
              />
            )}

          </div>
        </div>
      </div>
    </div>)
}

export default FooterRight