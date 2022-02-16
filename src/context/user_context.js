import React, { useContext, useEffect, useReducer } from 'react'
import user_reducer from '../reducers/user_reducer'

import {
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  GET_USER_ERROR
} from '../actions/actions'
import { getUserInfo } from '../service'

const initialState = {
  loading: false,
  error: false,
  user: {}
}

const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(user_reducer, initialState)

  const fetchUser = async () => {
    dispatch({ type: GET_USER_LOADING, payload: true })
    try {
      const user = await getUserInfo()
      dispatch({ type: GET_USER_SUCCESS, payload: user })
    } catch (error) {
      dispatch({ type: GET_USER_ERROR, payload: true })
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <UserContext.Provider
      value={{
        ...state
      }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
}
