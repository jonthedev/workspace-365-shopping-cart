import React from 'react'
import { useCartContext } from '../../context/cart_context.js '
import { useUserContext } from '../../context/user_context'

import './CartTotal.css'

export default function CartTotal() {
  const { cart_total } = useCartContext()
  const { user } = useUserContext()
  return (
    <div className='cart-total-container'>
      <h3>
        Your Balance:{' '}
        <span className='gold-coin'>{user.balance}</span>
      </h3>

      <h3>
        Total: <span className='gold-coin'>{cart_total}</span>
      </h3>
    </div>
  )
}
