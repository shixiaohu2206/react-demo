import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  componentWillUnmount() {
    alert(222);
  }
  render() {
    return <div id="footer">Header</div>;
  }
}

export default Footer;
