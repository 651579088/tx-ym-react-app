import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        console.log(8888)
        return (
            <div>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/orderList">订单列表</Link></li>
                    <li><Link to="/orderDetails">订单详情</Link></li>
                    <li><Link to="/productlist">商品列表</Link></li>
                </ul>
                <hr />
                这是首页
                </div>
        )
    }
}
export default Home
