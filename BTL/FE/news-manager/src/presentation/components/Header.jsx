import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logo.png";
import { Col, Row } from "react-bootstrap";

import { useState } from "react";
import ModalLogin from "./ModalLogin";


const Header = () => {
    const [isShowModalLogin,setIsShowModalLogin] = useState(false);

    const handleCloseModalLogin = () => {
      setIsShowModalLogin(false);
    }
  return (
    <>
      <header className="shadow">
        <div className="container-fluid">
          <Navbar expand="lg" className="py-2">
            <Navbar.Brand href="/" className="ms-5">
              <img src={Logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <div className="d-flex ms-auto me-5">
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
                <button className="btn btn-dark me-2" onClick={() => setIsShowModalLogin(true)}>Đăng nhập</button>
                <button className="btn btn-dark">Đăng ký</button>
              </div>
            </Navbar.Collapse>
          </Navbar>
          <Row xs={5} className="text-center">
            <Col className="py-2">
              <a href="">Windows clients</a>
            </Col>
            <Col className="py-2">
              <a href="">Windows server</a>
            </Col>
            <Col className="py-2">
              <a href="">Office</a>
            </Col>
            <Col className="py-2">
              <a href="">Phần mềm</a>
            </Col>
            <Col className="py-2">
              <a href="">Mobile</a>
            </Col>
          </Row>
        </div>
      </header>
      <ModalLogin isShowModalLogin={isShowModalLogin} handleCloseModalLogin={handleCloseModalLogin}/>
    </>
  );
};

export default Header;
