import CategoryService from "../../usecases/CategoryService";
import { API_URL_ADMIN } from "../../constants/api";
import { useEffect, useState } from "react";
import { Alert } from "antd";

export default function CreateCategory() {
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
  const handleCreateCategory = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const category_name = formData.get("category_name");
    const description = formData.get("description");
    const newCategoryService = new CategoryService();
    const res = await newCategoryService.createCategory(API_URL_ADMIN, {
      category_name,
      description,
    });
    if (res.code === 200) {
      isShowAlert({
        title: res.message,
        type: "success",
        show: true,
      });
      
    }
    else{
      isShowAlert({
        title: res.message,
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
      <div className="create-category">
        <form onSubmit={handleCreateCategory}>
          <div className="form-group mb-3">
            <label htmlFor="category_name">Tên danh mục</label>
            <input
              type="text"
              className="form-control"
              id="category_name"
              name="category_name"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="description">Mô tả danh mục</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
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
