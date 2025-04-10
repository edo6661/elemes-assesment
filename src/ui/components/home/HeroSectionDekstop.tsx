import React from 'react'
import Button from '../shared/Button'
import Image from 'next/image'

const HeroSectionDekstop = () => {
  return (
    <section className='hero-section'>
      <div className='hero-section__content'>
        <h1 className='hero-section__title'>
          Good Food Us Good Mood
        </h1>
        <p className='hero-section__description'>
          I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.
        </p>
        <div className="hero-section__buttons">
          <Button>
            Daftar Sekarang
          </Button>

          <Button color='light-gray'>
            About Us
          </Button>

        </div>
      </div>
      <div className='hero-section__image-wrapper'>
        <div className=' hero-section__image-container'>
          <Image
            src="/images/food/big-green-salad-tomato.png"
            width="412"
            height="412"
            alt="Green Salad Tomato"
            className='hero-section__image'
          />

        </div>

        <div className='hero-section__card'>
          <div>
            <Image
              src="/images/food/green-salad-tomato.png"
              width={53}
              height={53}
              alt="Green Salad Tomato"
            />
          </div>
          <div className=''>
            <p className='hero-section__card-title'>
              Green Salad Tomato
            </p>
            <span className='hero-section__card-category'>
              Tomato
            </span>
            <div className="hero-section__card-stars">
              {Array.from({ length: 4 }).map((_, i) =>
                <Image
                  src="/images/yellow-star.png"
                  width={12}
                  height={12}
                  alt={`Star ${i}`}
                  key={i}
                />
              )}
              <Image
                src="/images/white-star.png"
                width={12}
                height={12}
                alt={`White Star`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSectionDekstop