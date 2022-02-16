import React from 'react'
import './ModalButtons.css'
import { useModalContext } from '../../context/modal_context'
import { useCartContext } from '../../context/cart_context.js '
import { useUserContext } from '../../context/user_context'
import { useStocksContext } from '../../context/stocks_context'
import { useToastContext } from '../../context/toast_context'

export default function ModalButtons({ actionButtonText }) {
  const { closeModal } = useModalContext()
  const { cart, clearCart, cart_total } = useCartContext()
  const { preBuyStock, buy_stock_error } = useStocksContext()
  const { user } = useUserContext()
  const isValidAddToCart = user.balance > cart_total
  const { toast: useToast } = useToastContext()
  const toast = useToast(3000)

  const cancelHandler = () => {
    clearCart()
    closeModal()
  }

  const buyHandler = async () => {
    if (cart_total === 0) {
      toast('error', 'Cart is empty, please add items')
    } else {
      if (!isValidAddToCart) {
        toast('error', 'Insufficient balance..')
      } else {
        toast('info', 'Processing')
        setTimeout(() => {
          preBuyStock(cart, cart_total)
          if (buy_stock_error) {
            toast('Unable to finish payment.')
          } else {
            toast('success', 'Success!')
            clearCart()
            closeModal()
          }
        }, 1000)
      }
    }
  }

  return (
    <div className='modal-buttons'>
      <button className='btn btn-buy' onClick={buyHandler}>
        Buy
      </button>
      <button className='btn btn-cancel' onClick={cancelHandler}>
        Cancel
      </button>
    </div>
  )
}
