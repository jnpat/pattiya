import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyVerticallyCenteredModal from "./modal";

const Header = () => {
  const [show, setShow] = useState(true);
  const [modalShow, setModalShow] = useState(true);
  const [inputName, setName] = useState("");

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{ backgroundColor: "#8C9086" }}
    >
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        inputName={inputName}
        setName={setName}
      />
      <div className="container">
        <Link className="navbar-brand text-dark" to={"/"}>
          Welcome, {inputName}
        </Link>
        <button
          className="navbar-toggler border-dark text-dark"
          onClick={() => setShow(!show)}
        >
          {show ? <i class="fas fa-bars"></i> : <i class="fas fa-times"></i>}
        </button>
        <div
          className={
            show
              ? "collapse navbar-collapse"
              : "collapse navbar-collapse active"
          }
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link text-dark"
                href="#home"
                onClick={() => setShow(!show)}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark"
                href="#skill"
                onClick={() => setShow(!show)}
              >
                Personal Info.
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark"
                href="#background"
                onClick={() => setShow(!show)}
              >
                Background
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark"
                href="#contact"
                onClick={() => setShow(!show)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <Navbar expand="lg" fixed="top" style={{ backgroundColor: "#8C9086" }}>
    //     <Container>
    //         <Navbar.Brand href="/">Pattiya</Navbar.Brand>
    //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //         <Navbar.Collapse id={show ? "basic-navbar-nav" : "basic-navbar-nav active"}>
    //             <Nav className="me-auto">
    //                 <Nav.Link href="#home">Home</Nav.Link>
    //                 <Nav.Link href="#skill">Skills</Nav.Link>
    //             </Nav>
    //         </Navbar.Collapse>
    //     </Container>
    // </Navbar>
  );
};

export default Header;
