import { Col, Row } from "antd";

import { Card } from "antd";
import { MdArticle } from "react-icons/md";
import { PiArticleLight } from "react-icons/pi";
import { TbArticleOff } from "react-icons/tb";

export default function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <div className="main-content">
          <Row>
            <Col className="py-2">
              <Row>
                <div className="statistic-article">
                  <Card style={{ width: 300 }}>
                    <div className="icon">
                      <MdArticle />
                    </div>
                    <div className="information-article">
                      <span>Tổng bài đăng</span>
                      <span>126</span>
                    </div>
                  </Card>
                  <Card style={{ width: 300 }}>
                    <div className="icon">
                      <PiArticleLight />
                    </div>
                    <div className="information-article">
                      <span>Bài đang chờ duyệt</span>
                      <span>126</span>
                    </div>
                  </Card>
                  <Card style={{ width: 300 }}>
                    <div className="icon">
                      <TbArticleOff />
                    </div>
                    <div className="information-article">
                      <span>Bài đã từ chối</span>
                      <span>126</span>
                    </div>
                  </Card>
                </div>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
