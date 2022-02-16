import {
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  GET_USER_ERROR
} from '../actions/actions'

const user_reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_USER_LOADING:
      return { ...state, loading: true, error: false }

    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload
      }

    case GET_USER_ERROR:
      return { ...state, loading: false, error: true }

    default:
      throw new Error(`No Matching "${type}" - action type`)
  }
}

export default user_reducer
