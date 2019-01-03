import { createActions } from 'redux-actions'

export default createActions({
  INCREASE_NUM: num => ({ num }),
  SUBTRACTION_NUM: num => ({ num }),
  SUBTRACTION_2: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  }
})
