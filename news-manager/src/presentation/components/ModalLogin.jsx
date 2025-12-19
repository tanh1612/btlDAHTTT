import { IoMdCloseCircleOutline } from "react-icons/io";

export default function ModalLogin ({isShowModalLogin,handleCloseModalLogin}) {

    return <>
        {isShowModalLogin && <div className="card-modal">
        <div className="modal-content">
          <span>Đăng nhập</span>
          <form className="login">
            <input type="text" placeholder="Email" name="email" />
            <input type="password" placeholder="Mật khẩu" name="password" />
            <button type="submit">Đăng nhập</button>
            <p>Forgot your password?</p>
          </form>
          <IoMdCloseCircleOutline className="icon-close" onClick={() => handleCloseModalLogin()}/>
        </div>
      </div>}
    </>
}