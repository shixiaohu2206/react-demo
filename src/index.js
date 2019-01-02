import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import index from './reducers/index';

import Home from "./containers/home/Home";
import Header from "./containers/header/Header";
import Footer from "./containers/footer/Footer";
import List from "./containers/list/List";

let store = createStore(index);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <>
        <Header />
        <div id="main">
          <Route exact path="/" component={Home} />
          <Route path="/list" component={List} />
        </div>
        <Footer />
      </>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
