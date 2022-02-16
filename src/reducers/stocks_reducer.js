import {
  GET_STOCKS_LOADING,
  GET_STOCKS_SUCCESS,
  GET_STOCKS_ERROR,
  GET_STOCKS_TOTAL_VALUE,
  BUY_STOCK_SUCCESS,
  BUY_STOCK_ERROR
} from '../actions/actions'

const stocks_reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_STOCKS_LOADING:
      return { ...state, loading: true, error: false }

    case GET_STOCKS_SUCCESS:
      return {
        ...state,
        loading: false,
        stocks: payload
      }

    case GET_STOCKS_ERROR:
      return { ...state, loading: false, error: true }

    case GET_STOCKS_TOTAL_VALUE:
      const stocksValue = state.stocks.reduce((total, stock) => {
        return (total += stock.price * stock.quantity)
      }, 0)
      return { ...state, stocks_value: stocksValue }

    case BUY_STOCK_SUCCESS:
      return { ...state, stocks: payload }

    case BUY_STOCK_ERROR:
      return { ...state, buy_stock_error: true }

    default:
      throw new Error(`No Matching "${type}" - action type`)
  }
}

export default stocks_reducer
