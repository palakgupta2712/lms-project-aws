import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../index.css";
import "antd/dist/antd.css";
import { Menu, Layout } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Routes from "../Routes/Routes";
const { SubMenu } = Menu;
const { Header } = Layout;

function Navbar({user}) {
  return (
    <div>
    <Router>
      <Layout>
        <Header theme="light">
          <span className="logo">
            <Link to="/"> LOGO </Link>
          </span>
          <Menu theme="dark" mode="horizontal" style={{float:"right"}}>
            <Menu.Item key="1">
              <Link to="/home">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/posts">Posts</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/courses">Courses</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/teach">Become a teacher</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title={"Hi, " +  user.attributes.name}>
              <Menu.Item>View Profile</Menu.Item>
              <Menu.Item>Settings</Menu.Item>
              <Menu.Item>Logout</Menu.Item>
            </SubMenu>
          </Menu>
        </Header>
      </Layout>
      <Routes />
    </Router>
    </div>

  );
}

export default Navbar;
