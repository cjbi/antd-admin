import * as React from "react";
import {Col, Layout, Menu, Row} from "antd";
import {UserOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

export const Header: React.FC<unknown> = () => {
  return (
      <Layout.Header style={{background: "#fff", padding: 0}}>
        <Row justify="end" align="middle">
          <Col span={3}>
            <Menu mode="horizontal">
              <Menu.SubMenu title={<span><UserOutlined/>{"User 1"}</span>}>
                <Menu.Item key="logOut"><Link to="#">Logout</Link></Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Col>
        </Row>
      </Layout.Header>
  );
};
