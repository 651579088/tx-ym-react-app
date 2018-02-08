import React from 'react'
import Home from 'src/pages/home/index'
import App from 'src/components/App/index'
import productlist from 'src/pages/product/list'
import orderDetails from 'src/pages/orders/orderDetails/index'
import orderList from 'src/pages/orders/orderList/index'
import {
    BrowserRouter,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom'

const routerList = (
    <BrowserRouter>
        <App>
            <Switch>
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