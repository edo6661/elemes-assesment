import React from 'react'
import ReceiptSlider from './ReceiptSlider';
const ReceiptSection = () => {
  return (
    <section className='receipt-section' >
      <div className="receipt-section__header">
        <h2 className='receipt-section__title'>
          <span>
            Browser Our Category

          </span>
          <span className='receipt-section__highlight'>
            Receipt
          </span>
        </h2>
      </div>
      <ReceiptSlider />

    </section>
  )
}

export default ReceiptSection