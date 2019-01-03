import React, { Component } from 'react'

class Index extends Component {
  componentWillUnmount() {
    alert(222)
  }
  render() {
    return <>首页</>
  }
}

export default Index
