import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import reduxPromise from 'redux-promise'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/index'

const store = createStore(
  reducers,
  // 安装redux-devtools-extension的可视化
  composeWithDevTools(applyMiddleware(reduxPromise))
)

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
