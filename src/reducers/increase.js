import { handleActions } from 'redux-actions'

export default handleActions(
  {
    INCREASE_NUM(state, action) {
      return { ...state, num: action.payload.num }
    }
  },
  {
    num: 1
  }
)
