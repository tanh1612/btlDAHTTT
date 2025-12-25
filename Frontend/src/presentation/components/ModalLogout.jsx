import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { auth } from "../../redux/action/auth";
import { useNavigate } from "react-router-dom";

export default function ModalLogout({ isShowModalLogout, handleCloseModalLogout }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(auth("logout"));
    handleCloseModalLogout();
    navigate("/");
  };

  return (
    <>
      {isShowModalLogout && (
        <div className="card-modal logout-modal">
          <div className="modal-content text-center pt-4 pb-4 px-4">
            <div className="mb-3">
                <IoWarningOutline size={50} className="icon-warning"/>
            </div>
            <h4 className="mb-3 fw-bold title-logout">Đăng xuất</h4>
            
            <p className="mb-4 text-logout">Bạn có chắc chắn muốn đăng xuất không?</p>
            
            <div className="d-flex justify-content-center gap-3">
                <button 
                    className="btn btn-secondary px-4 py-2" 
                    onClick={handleCloseModalLogout}
                >
                    Không
                </button>
                <button 
                    className="btn btn-logout px-4 py-2" 
                    onClick={handleLogout}
                >
                    Có
                </button>
            </div>

            <IoMdCloseCircleOutline
              className="icon-close"
              onClick={handleCloseModalLogout}
            />
          </div>
        </div>
      )}
    </>
  );
}
