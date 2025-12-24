

import TagService from "../../usecases/TagService";
import { API_URL_ADMIN } from "../../constants/api";
import { useEffect, useState } from "react";
import { Alert } from "antd";

export default function CreateTag() {
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
  const handleCreateTag = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const tag_name = formData.get("tag_name");
    const newTagService = new TagService();
    const res = await newTagService.createTag(API_URL_ADMIN, {
      tag_name,
    });
    console.log(res);
    if (res.code === 200) {
      isShowAlert({
        title: res.message,
        type: "success",
        show: true,
      });
      
    }
    else{
      isShowAlert({
        title: res.message ? res.message : "Lỗi tạo mới",
        type: "error",
        show: true,
      });
    }
  };
  return (
    <>
      {showAlert.show && (
        <Alert
          title={showAlert.title}
          type={showAlert.type}
          closable={{ closeIcon: true, "aria-label": "close" }}
        />
      )}
      <div className="create-tag">
        <form onSubmit={handleCreateTag}>
          <div className="form-group mb-3">
            <label htmlFor="tag_name">Tên thẻ tag</label>
            <input
              type="text"
              className="form-control"
              id="tag_name"
              name="tag_name"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Thêm mới
          </button>
        </form>
      </div>
    </>
  );
}
