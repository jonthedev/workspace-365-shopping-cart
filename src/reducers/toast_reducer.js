function toast_reducer(state, action) {
  switch (action.type) {
    case 'ADD_TOAST': {
      return {
        ...state,
        toasts: [...state.toasts, action.toast]
      }
    }
    case 'DELETE_TOAST': {
      const updatedToasts = state.toasts.filter(
        e => e.id !== action.id
      )
      return {
        ...state,
        toasts: updatedToasts
      }
    }
    default: {
      throw new Error('unhandled action')
    }
  }
}

export default toast_reducer
