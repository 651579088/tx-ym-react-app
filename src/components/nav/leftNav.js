import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

export default class LeftNav extends Component {
   state = {
    collapsed: false,
    current: 'b-1'
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    console.log('菜单2', this.props)
    return (
      <div className="leftNavName">
        {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button> */}
        <Menu className="leftNav" onClick={this.handleClick} defaultSelectedKeys={[this.state.current]} defaultOpenKeys={[this.state.current]} mode="inline" inlineCollapsed={this.state.collapsed} theme="dark">
          <Menu.Item key="b-1">
            <Icon type="pie-chart"/>
            <Link className="display-init" to="/home">车费</Link>
          </Menu.Item>
          <Menu.Item key="b-2">
            <Icon type="desktop" />
            <Link className="display-init" to="/orderList">订单</Link>
          </Menu.Item>
          <SubMenu key="b-3" title={<span><Icon type="appstore" /><span>综合管理</span></span>}>
            <Menu.Item key="b-3-1">添加收费项</Menu.Item>
            <Menu.Item key="b-3-2">收费标准</Menu.Item>
            <SubMenu key="b-3-3" title="统计">
              <Menu.Item key="b-3-3-1">订单统计</Menu.Item>
              <Menu.Item key="b-3-3-2">人数统计</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
