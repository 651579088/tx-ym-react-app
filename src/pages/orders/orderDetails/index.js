import React, { Component } from 'react'
import { changeNav } from 'src/store/actions/changeNav'
import { connect, getState } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
class OrderDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'tangxiong',
            age: '28'
        }
    }
    dispatchEvent() {
        this.props.dispatch(changeNav(this.state))
    }
    render() {
        return (
            <div onClick={this.dispatchEvent.bind(this)}>订单详情</div>
        )
    }
}
function select(state) {
    return {
        thisData: state
      }
}
export default connect(select)(OrderDetails)