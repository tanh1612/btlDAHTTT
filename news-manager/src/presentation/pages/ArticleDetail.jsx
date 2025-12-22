import Layout from "../components/Layout";
import Img1 from "../../assets/articleDetail1.png";
import Img2 from "../../assets/articleDetail2.png";
import Img3 from "../../assets/articleDetail3.png";
import Img4 from "../../assets/articleDetail4.png";
import Img5 from "../../assets/articleDetail5.png";
import Img6 from "../../assets/articleDetail6.png";
import Img7 from "../../assets/articleDetail7.png";
import Img8 from "../../assets/articleDetail8.png";
import Img9 from "../../assets/articleDetail9.png";

const ArticleDetail = () => {
  return (
    <>
      <Layout>
        <div className="article-detail py-5">
          <div className="container">
            <div className="mb-4">
              <h1>Nén và giải nén file bằng lệnh câu lệnh trong PowerShell</h1>
              <time>17 Tháng 4, 2024</time>
            </div>
            <div>
              <div>
                Trên Windows, bạn có thể sử dụng lệnh trong PowerShell để nén và
                giải nén file từ CMD hoặc từ tập lệnh PowerShell. Từ phiên bản
                PowerShell 5.0 (được giới thiệu trong Windows 10), các lệnh sau
                đã có sẵn để làm việc với các kho lưu trữ ZIP. Compress-Archive
                Expand-Archive
                <ul>
                  <li className="mb-2">Compress-Archive</li>
                  <li className="mb-2">Expand-Archive</li>
                </ul>
                Lệnh Compress-Archive cho phép bạn tạo một file nén từ một hoặc
                nhiều file hoặc thư mục được chỉ định. Nếu bạn muốn nén một file
                vào một file nén ZIP, hãy sử dụng lệnh:
                <img src={Img1} alt="" className="d-block mx-auto my-4" />
                <strong>Ghi chú</strong>: Thêm dấu ngoặc kép vào đường dẫn file
                nếu tên file nguồn hoặc đích chứa khoảng trắng.
                <img src={Img2} alt="" className="d-block mx-auto my-4" />
                Các tùy chọn được sử dụng với lệnh Compress-Archive:
                <ul>
                  <li className="mb-2">
                    DestinationPath - đường dẫn lưu file ZIP
                  </li>
                  <li className="mb-2">
                    Path - tên của file hoặc folder bạn muốn nén
                  </li>
                  <li className="mb-2">
                    Force - ghi đè lên file nếu một file Zip cùng tên đã tồn tại
                  </li>
                  <li className="mb-2">
                    CompressionLevel - cho phép bạn đặt mức nén. Các giá trị có
                    thể có: NoCompression, Fastest, and Optimal (được sử dụng
                    theo mặc định)
                  </li>
                </ul>
                Nếu bạn chỉ muốn nén nội dung thư mục (bao gồm các thư mục con),
                chứ không muốn nén chính thư mục đó, hãy chỉ định:
                <img src={Img3} alt="" className="d-block mx-auto my-4" />
                Lưu ý rằng kích thước tối đa của file ZIP có thể được tạo bằng
                cách sử dụng lệnh Compress-Archive là 2 GB. Đây là một hạn chế
                của API Microsoft .NET cơ bản (System.IO.Compression.ZipArchive
                class). Nếu bạn cố gắng tạo tệp lưu trữ ZIP lớn hơn 2GB, lệnh
                Compress-Archive sẽ trả về lỗi:
                <img src={Img4} alt="" className="d-block mx-auto my-4" />
                <img src={Img5} alt="" className="d-block mx-auto my-4" />
                Tùy chọn Update cho phép bạn thêm file vào file ZIP hiện có:
                <img src={Img6} alt="" className="d-block mx-auto my-4" />
                Nén tất cả các file có phần mở rộng cụ thể trong một thư mục:
                <img src={Img7} alt="" className="d-block mx-auto my-4" />
                Sử dụng lệnh Expand-Archive để giải nén file ZIP. Bạn có thể sử
                dụng lệnh Expand-Archive để giải nén một file Zip có sẵn:
                <img src={Img8} alt="" className="d-block mx-auto my-4" />
                <img src={Img9} alt="" className="d-block mx-auto my-4" />
                Thêm tham số -Force nếu bạn muốn ghi đè lên các file trong thư
                mục đích.
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ArticleDetail;
