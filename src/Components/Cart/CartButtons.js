import React from 'react'
import { useCartContext } from '../../context/cart_context.js '
import { useStocksContext } from '../../context/stocks_context'
import OutOfStock from './OutOfStock'

import './CartButtons.css'

export default function CartButtons({
  stockItem,
  increase,
  decrease,
  amount
}) {
  const { id } = stockItem
  const { addToCart, removeFromCart } = useCartContext()
  const { fetchStockItemQuantity } = useStocksContext()
  const inStock = fetchStockItemQuantity(id) ? true : false

  const addToCartHandler = () => {
    const tempAmount = amount + 1
    if (tempAmount <= fetchStockItemQuantity(id)) {
      increase()
      addToCart(tempAmount, stockItem)
    }
  }

  const removeItemFromCartHandler = () => {
    if (amount) {
      decrease()
      removeFromCart(id)
    }
  }

  return (
    <div className='cart-buttons-container'>
      {inStock ? (
        <>
          <button
            onClick={removeItemFromCartHandler}
            className='cart-button'>
            -
          </button>
          <div className='cart-item-amount'>{amount}</div>

          <button onClick={addToCartHandler} className='cart-button'>
            +
          </button>
        </>
      ) : (
        <OutOfStock />
      )}
    </div>
  )
}
