import React, { useContext, useEffect, useReducer } from 'react'
import stocks_reducer from '../reducers/stocks_reducer'
import { getById } from '../utils/helpers'
import { buyStock, listStock } from '../service'

import {
  GET_STOCKS_LOADING,
  GET_STOCKS_SUCCESS,
  GET_STOCKS_ERROR,
  GET_STOCKS_TOTAL_VALUE,
  BUY_STOCK_SUCCESS,
  BUY_STOCK_ERROR
} from '../actions/actions'

const initialState = {
  loading: false,
  error: false,
  stocks: [],
  stocks_value: 0,
  buy_stock_error: false
}

const StocksContext = React.createContext()

export const StocksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stocks_reducer, initialState)

  const fetchStockItems = async () => {
    dispatch({ type: GET_STOCKS_LOADING })
    try {
      const stockItems = await listStock()
      dispatch({ type: GET_STOCKS_SUCCESS, payload: stockItems })
      dispatch({ type: GET_STOCKS_TOTAL_VALUE })
    } catch (error) {
      dispatch({ type: GET_STOCKS_ERROR })
    }
  }

  const fetchStockItem = id => {
    return getById(state.stocks, id)
  }

  const fetchStockItemQuantity = id => {
    const item = fetchStockItem(id)
    return item.quantity
  }

  const validatePurchase = cart => {
    const tempPurchaseItems = cart.map(cartItem => {
      const { id, amountToBuy } = cartItem
      return amountToBuy > fetchStockItemQuantity(id) ? false : true
    })

    const isInvalidCart = tempPurchaseItems.includes(false)

    return isInvalidCart ? false : true
  }

  const preBuyStock = async (cart, cart_total) => {
    if (!validatePurchase(cart)) {
      dispatch({ type: BUY_STOCK_ERROR })
    } else {
      try {
        const newStock = await buyStock(cart, cart_total)
        dispatch({ type: BUY_STOCK_SUCCESS, payload: newStock })
      } catch (error) {
        dispatch({ type: GET_STOCKS_ERROR })
      }
    }
  }

  useEffect(() => {
    fetchStockItems()
  }, [state.stocks])

  return (
    <StocksContext.Provider
      value={{
        ...state,
        fetchStockItems,
        fetchStockItem,
        fetchStockItemQuantity,
        preBuyStock
      }}>
      {children}
    </StocksContext.Provider>
  )
}

export const useStocksContext = () => {
  return useContext(StocksContext)
}
