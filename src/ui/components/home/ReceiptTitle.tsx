import React from 'react'
interface ReceiptTitleProps {
  title: string
  highlight: string
}
const ReceiptTitle = (
  { title, highlight }: ReceiptTitleProps
) => {
  return (
    <div className="receipt-section__header">
      <h2 className='receipt-section__title'>
        <span>
          {title}

        </span>
        <span className='receipt-section__highlight'>
          {highlight}
        </span>
      </h2>
    </div>)
}

export default ReceiptTitle