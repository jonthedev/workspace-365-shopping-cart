import React from 'react'
import { useStocksContext } from '../../context/stocks_context'
import './StockAvailability.css'

export default function StockAvailability({ id }) {
  const { fetchStockItemQuantity } = useStocksContext()
  return (
    <span className='stock-availability'>
      &#128230; {fetchStockItemQuantity(id)}
    </span>
  )
}
