import React from 'react'
import { useModalContext } from '../../context/modal_context'
import { useCartContext } from '../../context/cart_context.js '

import './CartHeader.css'

export default function CartHeader({ title }) {
  const { closeModal } = useModalContext()
  const { clearCart } = useCartContext()

  const closeHandler = () => {
    clearCart()
    closeModal()
  }

  return (
    <div className='cart-header-container'>
      <h3>{title}</h3>
      <button onClick={closeHandler}>X</button>
    </div>
  )
}
