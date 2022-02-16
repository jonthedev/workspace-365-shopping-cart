import React from 'react'
import CartHeader from './CartHeader'
import CartItems from './CartItems'
import CartTotal from './CartTotal'

import './Cart.css'

export default function Cart() {
  return (
    <div className='cart-container'>
      <CartHeader title='Order' />
      <CartItems />
      <CartTotal />
    </div>
  )
}
