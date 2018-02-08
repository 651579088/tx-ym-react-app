import React, { Component } from 'react';
import {
 NavLink
} from 'react-router-dom'
class App extends Component {
   
    constructor(props) {
        super(props);
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
        	<div>
        	       {this.props.children}
        	</div>
        );
    }
}

export default App;
