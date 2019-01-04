import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../actions/index'

class List extends Component {
  increaseNuma = () => {
    this.props.increaseNum(this.props.a_num + 1)
  }

  subtraction_2 = () => {
    this.props.subtraction2()
  }
  render() {
    return (
      <>
        a_reducer：{this.props.a_num}
        <br />
        b_reducer：{this.props.b_num}
        <br />
        <input type="button" value="点击+" onClick={this.increaseNuma} />
        <input type="button" value="点击-2" onClick={this.subtraction_2} />
      </>
    )
  }
}

// 当前组件想要使用的全局state
function mapStateToProps(state) {
  return { a_num: state.a.num, b_num: state.b.num }
}

// actions映射到全局中
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...actions
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
