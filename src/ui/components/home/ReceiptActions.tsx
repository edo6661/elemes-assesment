import React from 'react'
import Button from '../shared/Button'
import Image from 'next/image';
interface ReceiptActionsProps {
  canScrollLeft: boolean;
  canScrollRight: boolean;
  scrollLeft: () => void;
  scrollRight: () => void;
}
const ReceiptActions = (
  {
    canScrollLeft,
    canScrollRight,
    scrollLeft,
    scrollRight
  }: ReceiptActionsProps
) => {
  return (
    <div className="receipt-actions">
      <Button
        className={`receipt-actions__button`}
        onClick={scrollLeft}
        disabled={!canScrollLeft}
      >
        <div className='receipt-actions__icon-wrapper'>
          <Image
            src="/icons/chevron.png"
            width={20}
            height={20}
            alt='chevron'
            className='receipt-actions__icon'
          />
        </div>
        <span>
          PREV
        </span>
      </Button>
      <Button
        className={`receipt-actions__button`}
        onClick={scrollRight}
        disabled={!canScrollRight}
      >
        <div className='receipt-actions__icon-wrapper'>
          <Image
            src="/icons/chevron.png"
            width={20}
            height={20}
            alt='chevron'
            className='receipt-actions__icon rotate-180'
          />
        </div>
        <span>
          NEXT
        </span>
      </Button>
    </div>)
}

export default ReceiptActions