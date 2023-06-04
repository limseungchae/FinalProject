import React, {useEffect, useState} from 'react';
import "./SearchBar.css"
import {Button, Col, Container, Navbar, Row} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';

import {Link, useNavigate} from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

// logo 테스트
export default function SearchBar({search, setSearch, processSearch}) {
    const navigate = useNavigate();
    const [token, setToken] = useState("null");

    useEffect(()=> {
        setToken(localStorage.getItem("ACCESS_TOKEN"));
    }, [])


    /* // 로컬 스토리지에서 ACCESS TOKEN 가져오기
     const accessToken = localStorage.getItem("ACCESS_TOKEN");*/

    const [isMyMenuOpen, setIsMyMenuOpen] = useState(false);

    /*    const handleDropdown = () => {
            if (localStorage.getItem("ACCESS_TOKEN") == null) {
                window.location.href = "/login";
            }
        };*/

    const handleMyMenuToggle = () => {
        setIsMyMenuOpen(!isMyMenuOpen);
    };

    const closeMyMenu = () => {
        setIsMyMenuOpen(false);
    };


    const logout = () => {
        localStorage.setItem("ACCESS_TOKEN", null);
        setToken("null")
        window.location.href = "/";
    }

    const login = () => {
        window.location.href = "/login";
    }

    const handleLike = () => {
        const tokenExists = (token !== "null");
        (!tokenExists) ? navigate('/login') : navigate("/myinfo/like");
    };

    const handlePayList = () => {
        const tokenExists = (token !== "null");
        (!tokenExists) ? navigate('/login') : navigate("/myinfo/paylist");
    };

    return (
      <header className={'header-container'}>
          <Navbar className="headerNav" expand="lg">
              <Container>
                  <Row className="w-100 align-items-center" style={{boxShadow:"rgba(0, 0, 0, 0.07) 0px 2px 0px 0px"}}>
                      <Col lg={1} className="offset-2">
                          <div className="logo-container d-flex justify-content-between" style={{marginLeft:"-10px"}}>
                              <Link href to="/" className='navbar-brand text-white logo' ><span style={{color:"#F7B400"}}>S</span><span style={{color:"#00C2AC"}}>R</span></Link>
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

                      <Col lg={1} className="d-flex justify-content-end">
                          <div className="d-ex headerLink mt-2fl">
                              <Dropdown
                                  onMouseEnter={handleMyMenuToggle}
                                  onMouseLeave={closeMyMenu}
                                  show={isMyMenuOpen}>
                                  <Dropdown.Toggle
                                      as={CustomToggle}
                                      id="dropdown-my-menu"
                                      className="my-button">
                                      <BsFillPersonFill className="my-icon" />
                                      <span className="icon-text my-text" >마이</span>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                      <Dropdown.Item onClick={handleLike}>찜목록</Dropdown.Item>
                                      <Dropdown.Item onClick={handlePayList}>결재 내역</Dropdown.Item>
                                  </Dropdown.Menu>
                              </Dropdown>
                          </div>
                      </Col>

                      {(token !== "null")
                          ?
                          <Col lg={2} className={'d-flex justify-content-end'}>
                              <div className={'d-flex mt-2'}>
                                  <Button className={'btn btn-dark'} onClick={logout}>로그아웃</Button>
                              </div>
                          </Col>
                          :
                          <Col lg={2} className={'d-flex justify-content-end'}>
                              <div className={'d-flex mt-2'}>
                                  <Button className={'btn btn-secondary'} onClick={login}>로그인</Button>
                              </div>
                          </Col>
                      }

                  </Row>
              </Container>
          </Navbar>
      </header>
  );
}

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
    </div>
));