import React, { Component } from 'react';
import TopNav from 'src/components/nav/topNav';
import LeftNav from 'src/components/nav/leftNav';
import './index.less'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'antd';

class App extends Component {
   
    constructor(props) {
        super(props);
        console.log('-----------', props)
        this.state={
            isShow:true,
            firstShow:true
        }
    }
    componentWillMount(){
      console.log(1)
    }
    componentDidMount(){
      console.log(2)
    }
    componentWillReceiveProps(){
      console.log(3)
    }
    shouldComponentUpdate(){
      console.log(4)
      return true
    }
    componentWillUpdate(){
      console.log(5)
    }
    componentDidUpdate(){
      console.log(6)
    }
    componentWillUnmount(){
      console.log(7)
    }

    render() {
      console.log(22222222222,this.props)
        return (
        	<div className="appName">
            <TopNav />
            <div className="contentClass">
              <div className="contentName">
                <div className="leftNavName"><LeftNav {...this.props}/></div>
                <div className="content">{this.props.children}</div>
              </div>
            </div>     
        	</div>
        );
    }
}

export default App;
