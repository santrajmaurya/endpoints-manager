import React from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EndpointsList from "./EndpointsList";
import Details from "./Details";
import { EndpointProvider, useEndpointsContext } from "./context";

import "./App.css";

const { Content, Header } = Layout;

const App = () => {
  console.log('con', useEndpointsContext());
  return (
    <EndpointProvider>
      <Router>
        <Layout>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="/" />
                Home
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/details" />
                Details
              </Menu.Item>
            </Menu>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280,
            }}
          >
            <Route exact path="/" component={EndpointsList} />
            <Route path="/details" component={Details} />
          </Content>
        </Layout>
      </Router>
    </EndpointProvider>
  );
};

export default App;
