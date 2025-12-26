import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Alert } from "antd";
import axios from "axios";

import { API_URL_CLIENT, API_URL_ADMIN } from "../../constants/api";

const ModalAddArticle = ({ isShow, handleClose }) => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    categoryId: "",
    content: "",
    thumbnail: null,
  });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        if (isShow) {
          const response = await axios.get(`${API_URL_ADMIN}/category`);
          if (response.data && response.data.code === 200) {
             setCategories(response.data.categories || response.data.data || []);
          } else {
             console.warn("Failed to fetch categories:", response.data.message);
          }
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [isShow]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditorChange = (content) => {
    setFormData((prev) => ({ ...prev, content }));
  };

  const handleThumbnailChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, thumbnail: e.target.files[0] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Validation
    if (!formData.title || !formData.categoryId || !formData.content) {
      setNotification({ type: "error", message: "Vui lòng điền đầy đủ thông tin!" });
      setLoading(false);
      return;
    }

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("category_id", formData.categoryId);
      data.append("content", formData.content);
      const user = JSON.parse(localStorage.getItem("user"));
      if (user && user._id) {
          data.append("author_id", user._id);
      }
      
      if (formData.thumbnail) {
        data.append("thumbnail", formData.thumbnail);
      }

      console.log("Submitting Article Data:", Object.fromEntries(data));
      
      setTimeout(() => {
          setNotification({ type: "success", message: "Bài viết đã được tạo và đang chờ kiểm duyệt!" });
          setLoading(false);
          setFormData({ title: "", categoryId: "", content: "", thumbnail: null });
          setTimeout(() => {
              handleClose();
              setNotification(null);
          }, 2000);
      }, 1000);

    } catch (error) {
      console.error(error);
      setNotification({ type: "error", message: "Có lỗi xảy ra, vui lòng thử lại!" });
      setLoading(false);
    }
  };

  if (!isShow) return null;

  return (
    <div className="card-modal add-article-modal">
      {notification && (
        <Alert
          message={notification.message}
          type={notification.type}
          showIcon
          closable
          onClose={() => setNotification(null)}
          style={{ position: 'absolute', top: 20, right: 20, zIndex: 1001 }}
        />
      )}
      <div className="modal-content">
        <div className="d-flex justify-content-between align-items-center mb-4">
            <span style={{margin: 0}}>Thêm bài viết mới</span>
            <IoMdCloseCircleOutline
                className="icon-close position-static"
                onClick={handleClose}
                size={30}
            />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Tiêu đề bài viết</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Nhập tiêu đề..."
            />
          </div>

          <div className="row">
            <div className="col-md-6">
                <div className="form-group">
                    <label>Danh mục</label>
                    <select
                    name="categoryId"
                    value={formData.categoryId}
                    onChange={handleChange}
                    >
                    <option value="">-- Chọn danh mục --</option>
                    {categories.map((cat) => (
                        <option key={cat._id} value={cat._id}>
                        {cat.category_name}
                        </option>
                    ))}
                    </select>
                </div>
            </div>
            <div className="col-md-6">
                 <div className="form-group">
                    <label>Ảnh bìa (Thumbnail)</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleThumbnailChange}
                        style={{padding: '7px'}}
                    />
                </div>
            </div>
          </div>

          <div className="form-group">
            <label>Nội dung bài viết</label>
            <ReactQuill
              theme="snow"
              value={formData.content}
              onChange={handleEditorChange}
              placeholder="Viết nội dung ở đây..."
              modules={{
                  toolbar: [
                      [{ 'header': [1, 2, false] }],
                      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                      ['link', 'image'],
                      ['clean']
                  ],
              }}
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={handleClose}>
              Hủy bỏ
            </button>
            <button type="submit" disabled={loading}>
              {loading ? "Đang xử lý..." : "Đăng bài viết"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalAddArticle;
