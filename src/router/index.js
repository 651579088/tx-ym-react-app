import React from 'react'
import Home from 'src/pages/home/index'
import App from 'src/components/App/index'
import productlist from 'src/pages/product/list'
import orderDetails from 'src/pages/orders/orderDetails/index'
import orderList from 'src/pages/orders/orderList/index'
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'

const routerList = (
    <BrowserRouter>
        <App>
            <Switch>
                {/* switch 匹配第一个路由地址 */}
                {/* 加 exact 路由完全匹配, 防止包含关系 */}
                <Route exact path="/home" key="a-1" component={Home} />
                <Route path="/productlist" key="a-2" component={productlist} />
                <Route path="/orderDetails" key="b-1" component={orderDetails} />
                <Route path="/orderList"  key="b-2" component={orderList} />
                <Redirect to="/home"  key="a-1" />
            </Switch>
        </App>
    </BrowserRouter>
)


export default routerList