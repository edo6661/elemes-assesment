import Image from 'next/image'
import React from 'react'

const HeroSectionImage = () => {
  return (
    <div className=' hero-section__image-container'>
      <Image
        src="/images/food/big-green-salad-tomato.png"
        width="412"
        height="412"
        alt="Green Salad Tomato"
        className='hero-section__image'
      />

    </div>)
}

export default HeroSectionImage