import React, { Component } from 'react';
import TopNav from 'src/components/nav/topNav';
import LeftNav from 'src/components/nav/leftNav';
import './index.less'

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
      // console.log(1)
    }
    componentDidMount(){
      // console.log(2)
    }
    componentWillReceiveProps(){
      // console.log(3)
    }
    shouldComponentUpdate(){
      // console.log(4)
      return true
    }
    componentWillUpdate(){
      // console.log(5)
    }
    componentDidUpdate(){
      // console.log(6)
    }
    componentWillUnmount(){
      // console.log(7)
    }

    changeNavEvent = () => {
      this.setState({});
    }

    render() {
        const pathname = window.location.pathname
        let key = null
        console.log('总方法', this.props.children.props.children)
        for (let obj of this.props.children.props.children){
          if(obj.props.path === pathname){
            key = obj.key
            break
          }
        }
        return (
        	<div className="appName">
            <TopNav {...this.props} pathname={pathname} keyval={key} changeNavEvent={this.changeNavEvent}/>
            <div className="contentClass">
              <div className="contentName">
                <div className="leftNavName"><LeftNav {...this.props} pathname={pathname} keyval={key}/></div>
                <div className="content">{this.props.children}</div>
              </div>
            </div>
        	</div>
        );
    }
}

export default App;
