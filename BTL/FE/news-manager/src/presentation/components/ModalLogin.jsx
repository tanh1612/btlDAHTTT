import { IoMdCloseCircleOutline } from "react-icons/io";
import AuthService from "../../usecases/AuthService";
import { API_URL_ADMIN } from "../../constants/api";
import { Alert } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {auth} from "../../redux/action/auth"

export default function ModalLogin({
  isShowModalLogin,
  handleCloseModalLogin,
}) {
  const dispatch = useDispatch();
  const [showAlert,isShowAlert] = useState({
    title: "",
    type: "",
    show: false
  });
  
  useEffect(() => {
    let timer;
    if(showAlert.show){
      timer = setTimeout(() => {
        isShowAlert(({
          ...showAlert,
          show: false
        }));
      },3000);
    }
    return () => clearTimeout(timer);
  },[showAlert]);
  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try{
      const newAuthService = new AuthService();
      const res = await newAuthService.login(API_URL_ADMIN, {
        email,
        password,
      });
      if(res.code === 200){
        localStorage.setItem("user",JSON.stringify(res.user));
        dispatch(auth("login"))
        handleCloseModalLogin();
        isShowAlert({
          title: res.message,
          type: "success",
          show: true
        });
      }
      else{
        isShowAlert({
          title: res.message,
          type: "error",
          show: true
        });
      }

    }

    catch(error){
      throw new Error(error);
    }
  };

  return (
    <>
      {showAlert.show && <Alert
        title={showAlert.title}
        type={showAlert.type}
        closable={{ closeIcon: true, "aria-label": "close" }}
      />}
      {isShowModalLogin && (
        <div className="card-modal">
          <div className="modal-content">
            <span>Đăng nhập</span>

            <form className="login" onSubmit={handleLogin}>
              <input type="text" placeholder="Email" name="email" />
              <input type="password" placeholder="Mật khẩu" name="password" />
              <button type="submit">Đăng nhập</button>
              <p>Forgot your password?</p>
            </form>
            <IoMdCloseCircleOutline
              className="icon-close"
              onClick={() => handleCloseModalLogin()}
            />
          </div>
        </div>
      )}
    </>
  );
}
