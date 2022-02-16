import React, { useState } from 'react'
import { truncateString } from '../../utils/helpers'
import { useMediaQuery } from '../../hooks/useMediaquery'
import CartButtons from './CartButtons'
import { useStocksContext } from '../../context/stocks_context'

import { SCREEN_MOBILE } from '../../utils/constants'

import './CartItem.css'

export default function CartItem({ stockItem }) {
  const { name, price, image, id } = stockItem
  const { fetchStockItemQuantity } = useStocksContext()
  const [amount, setAmount] = useState(0)
  const isMobile = useMediaQuery(SCREEN_MOBILE)

  const increase = () => {
    if (amount < fetchStockItemQuantity(id)) {
      setAmount(prevAmount => prevAmount + 1)
    }
  }

  const decrease = () => {
    if (amount >= 1) {
      setAmount(amount - 1)
    }
  }

  return (
    <div className='cart-item-container'>
      <div className='cart-item-image-name'>
        <img src={`/images/${image}`} alt={name} />
        {isMobile ? (
          <h4>{truncateString(name, 15)}</h4>
        ) : (
          <>
            <h4>{name}</h4>
          </>
        )}
      </div>
      <CartButtons
        stockItem={stockItem}
        increase={increase}
        decrease={decrease}
        amount={amount}
      />

      <div className='price'>{price} gold</div>
    </div>
  )
}
