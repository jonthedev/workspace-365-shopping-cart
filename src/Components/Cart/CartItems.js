import React from 'react'
import { useStocksContext } from '../../context/stocks_context'
import CartItem from './CartItem'

import './CartItems.css'

export default function CartItems() {
  const { stocks } = useStocksContext()

  return (
    <div className='cart-items-container'>
      {stocks.map(stockItem => (
        <CartItem key={stockItem.id} stockItem={stockItem} />
      ))}
    </div>
  )
}
