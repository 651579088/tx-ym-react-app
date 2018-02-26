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
                <Route exact path="/home" component={Home} />
                <Route path="/productlist" component={productlist} />
                <Route path="/orderDetails" component={orderDetails} />
                <Route path="/orderList" component={orderList} />
                <Redirect to="/home" />
            </Switch>
        </App>
    </BrowserRouter>
)


export default routerList