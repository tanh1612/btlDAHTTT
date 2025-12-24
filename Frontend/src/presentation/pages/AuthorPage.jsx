
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { FaEye, FaRegFileAlt, FaHeart } from "react-icons/fa";
import Img1 from "../../assets/articleDetail1.png"; // Placeholder images
import Img2 from "../../assets/articleDetail2.png";
import Img3 from "../../assets/articleDetail3.png";

const AuthorPage = () => {
  // Mock data matching the design
  const myArticles = [
    {
      id: 1,
      title: "Cách cài đặt Python 3.12.3 trên Ubuntu 22.04",
      date: "15/12/2025",
      status: "pending", // Chờ kiểm duyệt
      image: Img1,
    },
    {
      id: 2,
      title: "Cách cài đặt thông báo Apple Watch trên iPhone",
      date: "10/12/2025",
      status: "rejected", // Từ chối
      image: Img2,
    },
    {
      id: 3,
      title: 'Cách chia sẻ file giữa thiết bị Android và PC với tính năng "Chia sẻ lân cận"',
      date: "01/12/2025",
      status: "approved", // Đã duyệt
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
            <h2 className="text-center mb-4">Bài viết của tôi</h2>
            
            <div className="d-flex justify-content-end mb-4">
                 <button className="btn btn-primary" style={{ backgroundColor: "#5e0a0a", borderColor: "#5e0a0a" }}>
                    Thêm bài viết
                 </button>
            </div>

            <div className="list-articles">
                {myArticles.map((article) => (
                    <div key={article.id} className="card-author-article mb-3 p-3">
                        <div className="row align-items-center">
                            <div className="col-md-3">
                                <img src={article.image} alt={article.title} className="img-fluid rounded" style={{ height: '100px', width: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="col-md-7">
                                <h5 className="mb-2">{article.title}</h5>
                                <p className="text-muted mb-0">{article.date}</p>
                            </div>
                            <div className="col-md-2 text-end d-flex flex-column align-items-end justify-content-between h-100">
                                <Link to={`/article/${article.id}`} className="text-dark mb-3">
                                    <FaEye size={20} />
                                </Link>
                                <span className={`status-badge status-${article.status}`}>
                                    {getStatusLabel(article.status)}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default AuthorPage;
