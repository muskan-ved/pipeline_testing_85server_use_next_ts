import React, { Component } from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class LeftMenu extends Component {
  render() {
    return (
   <Menu mode="horizontal">
       <Menu.Item key="buy">
          <a href="">Buy</a>
        </Menu.Item>
        <Menu.Item key="rent">
          <a href="">Rent</a>
        </Menu.Item>
        <Menu.Item key="landloard">
          <a href="">Landloard</a>
        </Menu.Item>
        <Menu.Item key="brokerage">
          <a href="">Brokerage</a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default LeftMenu;