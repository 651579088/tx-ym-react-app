import React, { Component } from 'react'

class Home extends Component {
    jequ = () => {
        this.props.history.push('/home')
    }
    render() {
        console.log(111, this.props)
        return (
            <div>
                <div onClick={this.jequ}>这是首页</div>
            </div>
        )
    }
}
export default Home
