import { IoMdCloseCircleOutline } from "react-icons/io";
import AuthService from "../../usecases/AuthService";
import { API_URL_CLIENT } from "../../constants/api";
import { Alert } from "antd";
import { useEffect, useState } from "react";

export default function ModalRegister({
  isShowModalRegister,
  handleCloseModalRegister,
}) {
  const [showAlert, isShowAlert] = useState({
    title: "",
    type: "",
    show: false,
  });

  useEffect(() => {
    let timer;
    if (showAlert.show) {
      timer = setTimeout(() => {
        isShowAlert({
          ...showAlert,
          show: false,
        });
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showAlert]);

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const full_name = formData.get("full_name");
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirm_password = formData.get("confirm_password");

    if (password !== confirm_password) {
      isShowAlert({
        title: "Mật khẩu không khớp",
        type: "error",
        show: true,
      });
      return;
    }

    try {
      const newAuthService = new AuthService();
      const res = await newAuthService.register(API_URL_CLIENT, {
        full_name,
        username,
        email,
        password,
      });
      if (res.code === 200) {
        handleCloseModalRegister();
        isShowAlert({
          title: res.message,
          type: "success",
          show: true,
        });
      } else {
        isShowAlert({
          title: res.message,
          type: "error",
          show: true,
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <>
      {showAlert.show && (
        <Alert
          message={showAlert.title}
          type={showAlert.type}
          closable={{ closeIcon: true, "aria-label": "close" }}
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 9999,
          }}
        />
      )}
      {isShowModalRegister && (
        <div className="card-modal register-modal">
          <div className="modal-content">
            <span>Đăng ký</span>

            <form className="login" onSubmit={handleRegister}>
              <input type="text" placeholder="Họ và tên" name="full_name" required />
              <input type="text" placeholder="Tên đăng nhập" name="username" required />
              <input type="email" placeholder="Email" name="email" required />
              <input type="password" placeholder="Mật khẩu" name="password" required />
              <input
                type="password"
                placeholder="Nhập lại mật khẩu"
                name="confirm_password"
                required
              />
              <button type="submit">Đăng ký</button>
            </form>
            <IoMdCloseCircleOutline
              className="icon-close"
              onClick={() => handleCloseModalRegister()}
            />
          </div>
        </div>
      )}
    </>
  );
}
