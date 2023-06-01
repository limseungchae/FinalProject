import React from 'react';
import "./SearchBar.css"
import {Button, Col, Container, Form, Navbar, Row} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import logo4 from "../img/logo4.png";

import {Link} from "react-router-dom";
import { BsFillHeartFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

// logo 테스트
export default function SearchBar({search, setSearch, processSearch}) {

    return (
      <header className={'header-container'}>
          <Navbar className="headerNav" expand="lg">
              <Container>
                  <Row className="w-100 align-items-center">
                      <Col lg={1} className="offset-2">
                          <div className="logo-container d-flex justify-content-between" style={{marginLeft:"-10px"}}>
                              <Link to="/">
                                <img src={logo4} alt="logo4" style={{padding:"8px"}}/>
                              </Link>
                          </div>
                      </Col>

                      <Col lg={6}>
                          <div id="searchBar" style={{position:"relative"}}>
                              <input type="text" className="w-100 ps-2" placeholder="지역/클래스 이름으로 검색할 수 있습니다" style={{height:"48px", borderRadius:"8px", border:"none", outline: "none"}} value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => {
                                  if (e.key === 'Enter') {
                                      processSearch();
                                  }
                              }}/>
                              <Button className="searchBtn btn-outline-light" onClick={processSearch} style={{position:"absolute", top:"4px", right:"5px"}}>
                                  <BsSearch className="searchIcon"/>
                              </Button>
                          </div>
                      </Col>

                      <Col lg={2} className="d-flex justify-content-end">
                          <div className="d-flex headerLink mt-2" style={{marginRight:"80px"}}>
                              <Link to="/myinfo/like" className="toCartPg">
                                  <div className="icon-text-container">
                                      <BsFillHeartFill />
                                      <span className="icon-text">찜</span>
                                  </div>
                              </Link>
                              <div className="icon-text-container">
                                  <BsFillPersonFill />
                                  <span className="icon-text">마이</span>
                              </div>
                          </div>
                      </Col>
                  </Row>
              </Container>
          </Navbar>
      </header>
  );
}
