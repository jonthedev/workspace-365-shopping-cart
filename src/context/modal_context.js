import React, { useContext, useReducer } from 'react'
import modal_reducer from '../reducers/modal_reducer'

import { MODAL_OPEN, MODAL_CLOSE } from '../actions/actions'

const initialState = {
  isModalOpen: false
}

const ModalContext = React.createContext()

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modal_reducer, initialState)

  const openModal = () => {
    dispatch({ type: MODAL_OPEN })
  }

  const closeModal = () => {
    dispatch({ type: MODAL_CLOSE })
  }

  return (
    <ModalContext.Provider
      value={{
        ...state,
        openModal,
        closeModal
      }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModalContext = () => {
  return useContext(ModalContext)
}
