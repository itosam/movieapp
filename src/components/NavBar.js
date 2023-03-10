import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Nav, Navbar, Container, Row, Col, Badge } from "react-bootstrap";

function NavBar() {
  return (
    //made changeas to positionig of navbar and made it fixed to top of screen
    <header>
      <Navbar bg="dark" fixed="top" className="justify-content-center">
        <div className="navigation">
          <Nav>
            <Container>
              <Row>
                <Col>
                  <Badge pill bg="light" style={{ padding: "10px 20px" }}>
                    <Nav.Item>
                      <Link to="/movieapp" style={{ textDecoration: "none" }}>
                        Home
                      </Link>
                    </Nav.Item>
                  </Badge>
                </Col>
                <Col>
                  <Badge pill bg="light" style={{ padding: "10px 20px" }}>
                    <Nav.Item>
                      <NavLink
                        className="button"
                        exact
                        to="/movies"
                        style={{ textDecoration: "none" }}
                      >
                        Movies
                      </NavLink>
                    </Nav.Item>
                  </Badge>
                </Col>
                <Col>
                  <Badge pill bg="light" style={{ padding: "10px 20px" }}>
                    <Nav.Item>
                      <NavLink
                        className="button"
                        to="/movies/new"
                        style={{ textDecoration: "none" }}
                      >
                        Add Movie
                      </NavLink>
                    </Nav.Item>
                  </Badge>
                </Col>
                <Col>
                  <Badge pill bg="light" style={{ padding: "10px 20px" }}>
                    <Nav.Item>
                      <NavLink
                        className="button"
                        to="/about"
                        style={{ textDecoration: "none" }}
                      >
                        About
                      </NavLink>
                    </Nav.Item>
                  </Badge>
                </Col>
              </Row>
            </Container>
          </Nav>
        </div>
      </Navbar>
    </header>
  );
}
export default NavBar;
