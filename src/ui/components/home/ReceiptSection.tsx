import React from 'react'
import ReceiptSlider from './ReceiptSlider';
import ReceiptTitle from './ReceiptTitle';
const ReceiptSection = () => {
  return (
    <section className='receipt-section' >

      <ReceiptTitle
        title='Browser Our Category'
        highlight='Receipt'
      />
      <ReceiptSlider />

    </section>
  )
}

export default ReceiptSection