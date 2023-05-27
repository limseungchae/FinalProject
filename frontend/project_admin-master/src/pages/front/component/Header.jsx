import React from 'react';
import "./Header.css"
import {Button, Col, Container, Form, Navbar, Row} from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';

import {Link} from "react-router-dom";
import { BsFillHeartFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";


export default function Header() {
  return (
      <header className={'header-container'}>
          <Navbar className="headerNav" expand="lg">
              <Container>
                  <Row className="w-100 mb-5">
                      <Col lg={5}>
                          <div className="logo-container">
                              <Link href="/" className='navbar-brand text-white logo'>앙클래스</Link>
                          </div>
                      </Col>

                      <Col lg={5}>
                          <Form>
                              <InputGroup className="">
                                  <Form.Control placeholder="클래스를 찾아보세요!" className="searchBar"/>
                                  <InputGroup.Text className="bg-white search-btn-container">
                                      <Button className="searchBtn btn-outline-light" href={'/viewclass'}>
                                          <BsSearch className="searchIcon"/>
                                      </Button>
                                  </InputGroup.Text>
                              </InputGroup>
                          </Form>
                      </Col>

                      <Col lg={2}>
                          <div className="d-flex headerLink mt-2">
                          <Link to="#" className="toCartPg">
                              <div className="icon-text-container">
                                  <BsFillHeartFill />
                                  <span className="icon-text">찜</span>
                              </div>
                          </Link>

                          <Link to="/myinfo/modify" className="toMyPg">
                              <div className="icon-text-container">
                                  <BsFillPersonFill />
                                  <span className="icon-text">마이</span>
                              </div>
                          </Link>
                          </div>
                      </Col>
                  </Row>
              </Container>
          </Navbar>
      </header>
  );
}