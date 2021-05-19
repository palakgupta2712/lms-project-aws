import React from "react";
import "../index.css";
import "antd/dist/antd.css";
import { Menu, Layout } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { SubMenu } = Menu;
const { Header } = Layout;

function Navbar() {
  return (
    <div>
      <Layout>
        <Header theme="light">
          <span className="logo"> LOGO </span>
          <Menu theme="dark" mode="horizontal" style={{ float: "right" }}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Posts</Menu.Item>
            <Menu.Item key="3">Courses</Menu.Item>
            <Menu.Item key="4">Become a teacher</Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Hi! User">
              <Menu.Item>View Profile</Menu.Item>
              <Menu.Item>Settings</Menu.Item>
              <Menu.Item>Logout</Menu.Item>
            </SubMenu>
          </Menu>
        </Header>
      </Layout>
    </div>
  );
}

export default Navbar;
