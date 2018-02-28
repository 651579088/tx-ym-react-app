import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeNav } from 'src/store/actions/changeNav'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import './index.less'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

class TopNav extends Component {
  state = {
    current: 'a-1',
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
    this.props.dispatch(changeNav({
      name: 'tangxiong',
      age: '28'
    }))
    this.props.changeNavEvent()
  }
  render() {
    console.log('菜单1', this.props)
    return(
      <div className="topNavClass">
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal"  theme="dark">
          <Menu.Item key="a-1">旅游</Menu.Item>
          <Menu.Item key="a-2">锦绣中华</Menu.Item>
          <Menu.Item key="b-1">世界之窗</Menu.Item>
          <Menu.Item key="b-2">美食</Menu.Item>
          <Menu.Item key="b-3"><Link to="/home">车费</Link></Menu.Item>
        </Menu>
      </div>
    )
  }
}
export default connect()(TopNav);