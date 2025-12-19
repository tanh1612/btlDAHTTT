import logo from "../../assets/logo.png";
import { RiAdminLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Layout } from "antd";

const { Sider } = Layout;

export default function SiderAdmin() {
    const siderStyle = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#1677ff",
  };
  return (
    <>
      <Sider width="25%" style={siderStyle}>
        <div className="sider">
          <div className="sider-header">
            <img src={logo} />
            <div className="admin">
              <RiAdminLine className="icon-admin" />
              <span>Admin</span>
            </div>
          </div>
          <div className="sider-content">
            <ul>
              <li>
                <Link to="/admin/dashboard">Trang chủ</Link>
              </li>
              <li>
                <Link to="/admin/articles">Quản lý bài đăng</Link>
              </li>
              <li>
                <Link to="/admin/category-tag">Quản lý danh mục và thẻ</Link>
              </li>
              <li>
                <Link to="/admin/history-approved">Lịch sử duyệt bài</Link>
              </li>
            </ul>
          </div>
        </div>
      </Sider>
    </>
  );
}
