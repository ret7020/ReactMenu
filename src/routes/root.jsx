import React from 'react';
import { Layout, Menu, theme } from 'antd';

import { Link, Outlet, useLocation } from "react-router-dom";
import { routes } from './routes';
const { Header, Content, Footer, Sider } = Layout;

const items = routes.map(route => ({
  key: route.path,
  icon: route.icon,
  label: <Link to={route.path}>{route.label}</Link>,
}));

export const Root = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const location = useLocation();
  

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
        
      >
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname.slice(1)]} items={items} />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Outlet/>         
        </Content>
        <Footer style={{ textAlign: 'center' }}>ShTP dev</Footer>
      </Layout>
    </Layout>
  );
};

