import React, { useReducer, useContext } from 'react'
import toast_reducer from '../reducers/toast_reducer'

const initialState = {
  toasts: [],
  toast: null
}

const ToastContext = React.createContext()

export const ToastProvider = ({ children }) => {
  const [state, dispatch] = useReducer(toast_reducer, initialState)

  const toast = delay => {
    function toast(type, message) {
      const id = Math.random().toString(36).substr(2, 9)
      dispatch({
        type: 'ADD_TOAST',
        toast: {
          type,
          message,
          id
        }
      })

      setTimeout(() => {
        dispatch({ type: 'DELETE_TOAST', id })
      }, delay)
    }

    return toast
  }

  return (
    <ToastContext.Provider value={{ ...state, toast, dispatch }}>
      {children}
    </ToastContext.Provider>
  )
}

export const useToastContext = () => {
  return useContext(ToastContext)
}
