import React, { Component } from "react";

class List extends Component {
  componentWillUnmount() {
    alert(222);
  }
  render() {
    return (
      <div id="list">
        <table>
          <tr>
            <td>1</td>
          </tr>
          <tr>
            <td>1</td>
          </tr>
          <tr>
            <td>1</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default List;
