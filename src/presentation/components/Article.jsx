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
      <div className="article">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <div className="card border-0 mb-4">
                <div className="card-img">
                  <a href="">
                    <img src={Article1} alt="" />
                  </a>
                  <div className="card-overlay">
                    <span className="tag">
                      <a href="">powershell</a>
                    </span>
                    <span className="tag">
                      <a href="">tips-tricks</a>
                    </span>
                  </div>
                </div>
                <div className="card-body pt-3">
                  <a href="">
                    Nén và giải nén file bằng lệnh câu lệnh trong PowerShell
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 mb-4">
                <div className="card-img">
                  <a href="">
                    <img src={Article2} alt="" />
                  </a>
                  <div className="card-overlay">
                    <span className="tag">
                      <a href="">tips-tricks</a>
                    </span>
                  </div>
                </div>
                <div className="card-body pt-3">
                  <a href="">Thủ thuật tăng tốc độ Windows 11</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 mb-4">
                <div className="card-img">
                  <a href="">
                    <img src={Article3} alt="" />
                  </a>
                  <div className="card-overlay">
                    <span className="tag">
                      <a href="">wifi</a>
                    </span>
                  </div>
                </div>
                <div className="card-body pt-3">
                  <a href="">Sửa lỗi Wifi chậm trên Laptop.</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 mb-4">
                <div className="card-img">
                  <a href="">
                    <img src={Article4} alt="" />
                  </a>
                  <div className="card-overlay">
                    <span className="tag">
                      <a href="">security</a>
                    </span>
                  </div>
                </div>
                <div className="card-body pt-3">
                  <a href="">
                    Cách tắt Multi Factor Authentication (MFA) trong Office 365
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 mb-4">
                <div className="card-img">
                  <a href="">
                    <img src={Article5} alt="" />
                  </a>
                  <div className="card-overlay">
                    <span className="tag">
                      <a href="">excel</a>
                    </span>
                  </div>
                </div>
                <div className="card-body pt-3">
                  <a href="">
                    Cách tạo Timeline trong Excel PivotTables và PivotCharts
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 mb-4">
                <div className="card-img">
                  <a href="">
                    <img src={Article6} alt="" />
                  </a>
                  <div className="card-overlay">
                    <span className="tag">
                      <a href="">error-fix</a>
                    </span>
                  </div>
                </div>
                <div className="card-body pt-3">
                  <a href="">
                    Sửa lỗi “Missing Entry: PcaWallpaperAppDetect” trên Windows
                    11 24H2
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 mb-4">
                <div className="card-img">
                  <a href="">
                    <img src={Article7} alt="" />
                  </a>
                  <div className="card-overlay">
                    <span className="tag">
                      <a href="">network</a>
                    </span>
                  </div>
                </div>
                <div className="card-body pt-3">
                  <a href="">
                    Cách thay đổi địa chỉ IP của Domain Controller (DC)
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 mb-4">
                <div className="card-img">
                  <a href="">
                    <img src={Article8} alt="" />
                  </a>
                  <div className="card-overlay">
                    <span className="tag">
                      <a href="">linux</a>
                    </span>
                    <span className="tag">
                      <a href="">security</a>
                    </span>
                  </div>
                </div>
                <div className="card-body pt-3">
                  <a href="">Cách lấy lại mật khẩu Root trong RHEL Systems</a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center -3">
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
