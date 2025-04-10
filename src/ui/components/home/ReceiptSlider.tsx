"use client"
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { receipts } from '@/src/constants/receipts';
import ReceiptActions from './ReceiptActions';


const ReceiptSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollAmount = 250;
  const checkScrollability = () => {
    const slider = sliderRef.current;
    if (slider) {
      setCanScrollLeft(slider.scrollLeft > 0);
      setCanScrollRight(slider.scrollLeft < slider.scrollWidth - slider.clientWidth);
    }
  };

  useEffect(() => {
    checkScrollability();
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);
    }

    return () => {
      if (slider) {
        slider.removeEventListener('scroll', checkScrollability);
      }
      window.removeEventListener('resize', checkScrollability);
    };
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div
        ref={sliderRef}
        className='receipt-slider'
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {receipts.map((receipt, i) => (
          <div
            key={i}
            className={`${receipt.color} receipt-slider__item`}
          >
            <Image
              width={48}
              height={48}
              src={receipt.img}
              alt={receipt.title}
            />
            <p className='receipt-slider__title'>{receipt.title}</p>
            <span>
              {receipt.itemCount} items
            </span>
          </div>
        ))}
      </div>
      <ReceiptActions
        canScrollLeft={canScrollLeft}
        canScrollRight={canScrollRight}
        scrollLeft={scrollLeft}
        scrollRight={scrollRight}
      />
    </>
  )
}

export default ReceiptSlider