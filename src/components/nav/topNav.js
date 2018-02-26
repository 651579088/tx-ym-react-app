import React, { Component } from 'react'
import { Menu } from 'antd'
import './index.less'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

class TopNav extends Component {
  state = {
    current: 'a-1',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return(
      <div className="topNavClass">
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal"  theme="dark">
          <Menu.Item key="a-1">旅游</Menu.Item>
          <Menu.Item key="a-2">美食</Menu.Item>
          <SubMenu title="景区" key="a-3">
            <MenuItemGroup title="深圳">
              <Menu.Item key="a-3-1-1">世界之窗</Menu.Item>
              <Menu.Item key="a-3-1-2">锦绣中华</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="惠州">
              <Menu.Item key="a-3-2-1">大亚湾</Menu.Item>
              <Menu.Item key="a-3-2-2">奥地利小镇</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key="a-4">帮助中心</Menu.Item>
        </Menu>
      </div>
    )
  }
}
export default TopNav;