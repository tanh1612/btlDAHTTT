
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { FaEye, FaRegFileAlt, FaHeart } from "react-icons/fa";
import Img1 from "../../assets/articleDetail1.png";
import Img2 from "../../assets/articleDetail2.png";
import Img3 from "../../assets/articleDetail3.png";

import ModalAddArticle from "../components/ModalAddArticle";
import { useState } from "react";

const AuthorPage = () => {
  const [showAddArticle, setShowAddArticle] = useState(false);
  
  const myArticles = [
    {
      id: 1,
      title: "Cách cài đặt Python 3.12.3 trên Ubuntu 22.04",
      date: "15/12/2025",
      status: "pending",
      image: Img1,
    },
    {
      id: 2,
      title: "Cách cài đặt thông báo Apple Watch trên iPhone",
      date: "10/12/2025",
      status: "rejected",
      image: Img2,
    },
    {
      id: 3,
      title: 'Cách chia sẻ file giữa thiết bị Android và PC với tính năng "Chia sẻ lân cận"',
      date: "01/12/2025",
      status: "approved",
      image: Img3,
    },
  ];

  const getStatusLabel = (status) => {
    switch (status) {
      case "pending":
        return <span>Chờ kiểm duyệt</span>;
      case "rejected":
        return (
          <span className="d-flex align-items-center gap-2">
            <FaRegFileAlt /> Từ chối
          </span>
        );
      case "approved":
        return (
          <span className="d-flex align-items-center gap-2">
            <FaHeart /> Đã duyệt
          </span>
        );
      default:
        return "";
    }
  };

  return (
    <Layout>
      <div className="author-page py-5">
        <div className="container">
            <div className="author-header d-flex justify-content-between align-items-center mb-5">
              <h2 className="mb-0 fw-bold text-dark">Bài viết của tôi</h2>
              <button 
                className="btn btn-primary d-flex align-items-center gap-2"
                onClick={() => setShowAddArticle(true)}
              >
                <span>+</span> Thêm bài viết
              </button>
            </div>

            <div className="list-articles">
                {myArticles.map((article) => (
                    <div key={article.id} className="card-author-article mb-4">
                        <div className="row g-0 align-items-center h-100">
                            <div className="col-md-3 h-100">
                                <div className="article-image-wrapper h-100">
                                    <img src={article.image} alt={article.title} className="img-fluid article-img" />
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="card-body d-flex justify-content-between align-items-center">
                                    <div className="article-info">
                                        <h5 className="article-title fw-bold mb-2">{article.title}</h5>
                                        <p className="text-muted mb-0 small">{article.date}</p>
                                    </div>
                                    <div className="article-actions d-flex flex-column align-items-end gap-3">
                                        <Link to={`/article/${article.id}`} className="view-btn text-decoration-none" title="Xem chi tiết">
                                            <FaEye size={20} />
                                        </Link>
                                        <span className={`status-badge status-${article.status}`}>
                                            {getStatusLabel(article.status)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
      
      <ModalAddArticle 
        isShow={showAddArticle} 
        handleClose={() => setShowAddArticle(false)} 
      />
    </Layout>
  );
};

export default AuthorPage;
