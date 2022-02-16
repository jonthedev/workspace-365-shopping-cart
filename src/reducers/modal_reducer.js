import { MODAL_OPEN, MODAL_CLOSE } from '../actions/actions'

const modal_reducer = (state, action) => {
  const { type } = action
  switch (type) {
    case MODAL_OPEN:
      return { ...state, isModalOpen: true }
    case MODAL_CLOSE:
      return { ...state, isModalOpen: false }

    default:
      throw new Error(`No Matching "${type}" - action type`)
  }
}

export default modal_reducer
