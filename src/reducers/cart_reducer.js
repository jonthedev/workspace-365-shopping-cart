import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  GET_CART_TOTAL
} from '../actions/actions'
import { getById } from '../utils/helpers'

const cart_reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_TO_CART:
      const inCart = getById(state.cart, payload.item.id)

      if (inCart) {
        const tempCart = state.cart.map(cartItem => {
          return cartItem.id === payload.item.id
            ? payload.item
            : cartItem
        })

        return { ...state, cart: [...tempCart] }
      }

      return { ...state, cart: [...state.cart, payload.item] }

    case REMOVE_FROM_CART:
      const tempCart = state.cart.map(cartItem => {
        if (cartItem.id === payload) {
          return {
            ...cartItem,
            amountToBuy: cartItem.amountToBuy - 1
          }
        }
        return cartItem
      })

      return { ...state, cart: [...tempCart] }

    case CLEAR_CART:
      return { ...state, cart: [], cart_total: 0 }

    case GET_CART_TOTAL:
      const total = state.cart.reduce(
        (initialTotal, { price, amountToBuy }) => {
          return (initialTotal += price * amountToBuy)
        },
        0
      )

      return { ...state, cart_total: total }

    default:
      throw new Error(`No Matching "${type}" - action type`)
  }
}

export default cart_reducer
