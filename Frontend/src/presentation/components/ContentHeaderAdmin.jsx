import { Col, Row } from "antd";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaBars } from "react-icons/fa";
import { Dropdown } from "antd";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { allArticle } from "../../redux/action/article";

export default function ContentHeaderAdmin() {  
  const dispatch = useDispatch();
  const handleSelectArticleType = (type) => {
    dispatch(allArticle(type));
  };

  const items = [
    {
      key: "1",
      label: (
        <Button
          onClick={() => handleSelectArticleType("allArticle")}
          block
          style={{ color: "#000000", textDecoration: "none" }}
        >
          Toàn bộ bài đăng
        </Button>
      ),
    },
    {
      key: "2",
      label: (
        <Button
          onClick={() => handleSelectArticleType("approvedArticle")}
          block
          style={{ color: "#000000", textDecoration: "none" }}
        >
          Bài chờ kiểm duyệt
        </Button>
      ),
    },
    {
      key: "3",
      label: (
        <Button
          onClick={() => handleSelectArticleType("rejectArticle")}
          block
          style={{ color: "#000000", textDecoration: "none" }}
        >
          Bài đã từ chối
        </Button>
      ),
    },
  ];
  
  return (
    <>
      <div className="content-header">
        <Row className="text-center d-flex justify-content-between align-items-center">
          <Col xs={6} className="py-2">
          </Col>
          <Col xs={12} className="py-2">
            <div className="d-flex align-items-center justify-content-end px-5">
              <Form className="me-2">
                <InputGroup>
                  <Form.Control
                    placeholder="Tìm kiếm..."
                    aria-label="Search"
                    className="border-end-0"
                  />
                  <InputGroup.Text className="bg-white border-start-0 p-0">
                    <button
                      type="submit"
                      className="btn border-0 bg-transparent h-100 d-flex align-items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width={18}
                        height={18}
                        className="text-secondary"
                      >
                        <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                      </svg>
                    </button>
                  </InputGroup.Text>
                </InputGroup>
              </Form>
              <Dropdown
                styles={{ backgroundColor: "red" }}
                menu={{ items }}
                placement="bottom"
              >
                <FaBars className="icon" />
              </Dropdown>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
