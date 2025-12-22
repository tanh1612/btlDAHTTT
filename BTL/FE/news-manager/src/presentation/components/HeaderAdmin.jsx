import { Layout } from "antd";
import { useState } from "react";
import ModalLogin from "./ModalLogin";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {auth} from "../../redux/action/auth"
const { Header } = Layout;

export default function HeaderAdmin() {
  const [isShowModalLogin, setIsShowModalLogin] = useState(false);
  const dispatch = useDispatch();

  const state = useSelector(state => state.reducerAuth);
  const handleCloseModalLogin = () => {
    setIsShowModalLogin(false);
  };

  
  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(auth("logout"));
  }
  
  
  const headerStyle = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "#a19191",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
  };
  return (
    <>
      <Header style={headerStyle}>
        {state && <button className="btn btn-dark me-2 h-75" onClick={handleLogout}>Đăng xuất</button>}
        {!state && <button className="btn btn-dark me-2 h-75" onClick={() => setIsShowModalLogin(true)}>Đăng nhập</button>}
      </Header>
      <ModalLogin
        isShowModalLogin={isShowModalLogin}
        handleCloseModalLogin={handleCloseModalLogin}
      />
    </>
  );
}
