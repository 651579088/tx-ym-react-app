import React, { Component } from 'react'
import { changeNav } from 'src/store/actions/changeNav'
import { connect } from 'react-redux'
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
         console.log(111, this.props)
        return (
            <div>
                <div onClick={this.dispatchEvent.bind(this)}>订单详情</div>
            </div>
        )
    }
}
function select(state) {
    return {
        thisData: state
      }
}
export default connect(select)(OrderDetails)