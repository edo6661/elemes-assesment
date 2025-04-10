import React from 'react'
import ReceiptTitle from './ReceiptTitle'
import { trendingReceipts } from '@/src/constants/receipts'
import Image from 'next/image'
import Button from '../shared/Button'

const TrendingReceiptSection = () => {
  return (
    <section className='receipt-section' >

      <ReceiptTitle
        title='Browser Our Trending'
        highlight='Receipt'
      />
      <div className='trending-receipt-content'>
        {trendingReceipts.map((receipt) => (
          <div key={receipt.title} className={`${receipt.color} trending-receipt-item`}>
            <div>
              <Image
                src={receipt.img}
                width={120}
                height={120}
                alt={receipt.title}
                className='trending-receipt-img'
              />
            </div>
            <h3 className=' trending-receipt__title'>
              {receipt.title}
            </h3>
            <p className=' trending-receipt__category'>
              {receipt.category}
            </p>
            <div className="trending-receipt__stars">
              {Array.from({ length: receipt.star }).map((_, i) =>
                <Image
                  src="/images/yellow-star.png"
                  width={12}
                  height={12}
                  alt={`Star ${i}`}
                  key={i}
                />
              )}
              {Array.from({ length: 5 - receipt.star }).map((_, i) =>
                <Image
                  src="/images/white-star.png"
                  width={12}
                  height={12}
                  alt={`White Star`}
                  key={i}
                />
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="trending-receipt__button-wrapper">
        <Button className='trending-receipt__button'>
          ALL Receipt
        </Button>
      </div>

    </section>)
}

export default TrendingReceiptSection