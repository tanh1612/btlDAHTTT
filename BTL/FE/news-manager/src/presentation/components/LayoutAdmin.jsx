import { Layout } from "antd";
const { Content } = Layout;

import SiderAdmin from "../components/SiderAdmin";
import HeaderAdmin from "../components/HeaderAdmin";
import ContentHeaderAdmin from "../components/ContentHeaderAdmin";
import { Outlet } from "react-router-dom";

export default function LayoutAdmin() {
  const contentStyle = {
    textAlign: "center",
    minHeight: 1000,
    color: "#fff",
    backgroundColor: "#d9d9d9",
  };

  const layoutStyle = {
    borderRadius: 8,
    overflow: "hidden",
    width: "calc(100%)",
    maxWidth: "calc(100%)",
  };
  return (
    <>
      <div className="layout-admin">
        <Layout style={layoutStyle}>
          <SiderAdmin />
          <Layout>
            <HeaderAdmin />
            <Content style={contentStyle}>
              <div className="content">
                <ContentHeaderAdmin />
                <Outlet />
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    </>
  );
}
