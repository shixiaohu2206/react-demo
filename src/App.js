import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './containers/home/Home'
import Header from './containers/header/Header'
import Footer from './containers/footer/Footer'
import List from './containers/list/List'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <div id="main">
            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
          </div>
          <Footer />
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default App
