import React, { useContext, useEffect, useReducer } from 'react'
import cart_reducer from '../reducers/cart_reducer'

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  GET_CART_TOTAL
} from '../actions/actions'

const initialState = {
  cart: [],
  cart_total: 0
}
const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cart_reducer, initialState)

  const addToCart = (amountToBuy, item) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { item: { amountToBuy, ...item } }
    })
  }
  const removeFromCart = id => {
    dispatch({ type: REMOVE_FROM_CART, payload: id })
  }

  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  useEffect(() => {
    dispatch({ type: GET_CART_TOTAL })
  }, [state.cart])

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        clearCart
      }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext)
}
