import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import Top from './top'
import Menu from './menu'

class productlist extends Component {
  render() {
    return (
      <div>
        <Top />
        <Menu />
        <div>内容</div>
      </div>
    )
  }
}
export default productlist
