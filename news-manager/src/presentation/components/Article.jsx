import { Link } from "react-router-dom";
import Article1 from "../../assets/article1.png";
import Article2 from "../../assets/article2.png";
import Article3 from "../../assets/article3.png";
import Article4 from "../../assets/article4.png";
import Article5 from "../../assets/article5.png";
import Article6 from "../../assets/article6.png";
import Article7 from "../../assets/article7.png";
import Article8 from "../../assets/article8.png";

const Article = () => {
  return (
    <>
      <div className="article py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Link to="/article">
                <div className="card border-0 mb-4">
                  <div className="card-img">
                    <img src={Article1} alt="" />
                    <div className="card-overlay">
                      <span className="tag">wifi</span>
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    Sửa lỗi Wifi chậm trên Laptop.
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6">
              <Link to="/article">
                <div className="card border-0 mb-4">
                  <div className="card-img">
                    <img src={Article2} alt="" />
                    <div className="card-overlay">
                      <span className="tag">wifi</span>
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    Sửa lỗi Wifi chậm trên Laptop.
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6">
              <Link to="/article">
                <div className="card border-0 mb-4">
                  <div className="card-img">
                    <img src={Article3} alt="" />
                    <div className="card-overlay">
                      <span className="tag">wifi</span>
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    Sửa lỗi Wifi chậm trên Laptop.
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6">
              <Link to="/article">
                <div className="card border-0 mb-4">
                  <div className="card-img">
                    <img src={Article4} alt="" />
                    <div className="card-overlay">
                      <span className="tag">wifi</span>
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    Sửa lỗi Wifi chậm trên Laptop.
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6">
              <Link to="/article">
                <div className="card border-0 mb-4">
                  <div className="card-img">
                    <img src={Article5} alt="" />
                    <div className="card-overlay">
                      <span className="tag">wifi</span>
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    Sửa lỗi Wifi chậm trên Laptop.
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6">
              <Link to="/article">
                <div className="card border-0 mb-4">
                  <div className="card-img">
                    <img src={Article6} alt="" />
                    <div className="card-overlay">
                      <span className="tag">wifi</span>
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    Sửa lỗi Wifi chậm trên Laptop.
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6">
              <Link to="/article">
                <div className="card border-0 mb-4">
                  <div className="card-img">
                    <img src={Article7} alt="" />
                    <div className="card-overlay">
                      <span className="tag">wifi</span>
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    Sửa lỗi Wifi chậm trên Laptop.
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6">
              <Link to="/article">
                <div className="card border-0 mb-4">
                  <div className="card-img">
                    <img src={Article8} alt="" />
                    <div className="card-overlay">
                      <span className="tag">wifi</span>
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    Sửa lỗi Wifi chậm trên Laptop.
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width={40}
                height={40}
              >
                <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
