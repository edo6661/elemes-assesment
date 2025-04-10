import React from 'react'
import Button from '../../shared/Button'

const HeaderActions = () => {
  return (
    <div className='header__actions'>
      <button className='header__button--login'>Masuk</button>
      <Button className='header__button--signup'>
        Daftar Sekarang
      </Button>
    </div>)
}

export default HeaderActions