import { handleActions } from 'redux-actions'

export default handleActions(
  {
    SUBTRACTION_NUM(state) {
      return { ...state, num: state.num-- }
    },
    SUBTRACTION_2(state) {
      return { ...state, num: state.num - 2 }
    }
  },
  {
    num: 3
  }
)
