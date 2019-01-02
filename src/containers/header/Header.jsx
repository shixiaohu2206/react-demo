import React, { Component } from "react";
import './Header.css';


class Header extends Component {
  componentWillUnmount() {
    alert(222);
  }
  render() {
    return <div id="header">Header</div>;
  }
}

export default Header;
