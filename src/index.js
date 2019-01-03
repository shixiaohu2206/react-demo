import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/index'

let store = createStore(reducers, applyMiddleware(ReduxPromise))

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
