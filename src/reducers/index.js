import { combineReducers } from 'redux'
import increase from './increase'
import subtraction from './subtraction'

// 合并reducer
const reducers = combineReducers({
  a: increase,
  b: subtraction
})

export default reducers
