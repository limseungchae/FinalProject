import React, {useEffect, useState} from 'react';
import "./Header.css"
import {Button, Col, Container, Row} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';

import {Link, useNavigate} from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import {SlLogin} from "react-icons/sl";

// logo 테스트1
export default function Header() {
    const navigate = useNavigate();
    const [token, setToken] = useState("null");
    const [isMyMenuOpen, setIsMyMenuOpen] = useState(false);

    useEffect(()=> {
        setToken(localStorage.getItem("ACCESS_TOKEN"));
    }, [])

   /* // 로컬 스토리지에서 ACCESS TOKEN 가져오기
    const accessToken = localStorage.getItem("ACCESS_TOKEN");*/

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
        localStorage.setItem("kakaoid", null);
        setToken("null")
        window.location.href = "/";
    }

    const login = () => {
        window.location.href = "/login";
    }

    const handleInfo = () => {
        const tokenExists = (token !== "null");
        (!tokenExists) ? navigate('/login') : navigate("/myinfo/modify");
    };

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
            <Container>
                <Row className="w-100 align-items-center">
                    <Col lg={3} className="offset-2">
                        <div className="logo-container d-flex justify-content-between" style={{marginLeft:"-10px"}}>
                            <Link href to="/" className='navbar-brand text-white logo' ><span style={{color:"#F7B400"}}>Skill</span><span style={{color:"#00C2AC"}}>Rabbit</span></Link>
                        </div>
                    </Col>

                    <Col lg={4}>
                        <Link to={"/search"}>
                            <div id="searchBar" className="border-bottom border-danger" style={{position:"relative"}}>
                                <input type="text" className="w-100 ps-2" placeholder="새로운 취미를 찾아보세요!" readOnly={true} style={{height:"48px", borderRadius:"8px", border:"none", outline: "none",cursor:"pointer"}} />
                                <Button className="searchBtn btn-outline-light" style={{position:"absolute", top:"4px", right:"5px"}}>
                                    <BsSearch className="searchIcon"/>
                                </Button>
                            </div>
                        </Link>
                    </Col>

                    {(token !== "null")
                        ?
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
                                        <div className="ps-2 border" style={{position:"relative",left:"15px", width:"80px", height:"40px", borderRadius:"30px"}} id="headerBox">
                                            <BsFillPersonFill className="my-icon fs-5" style={{position:"absolute", top:"9px", color:"#F7B400"}} />
                                            <span className="icon-text my-text fw-bold" style={{position:"absolute", top:"3px", left:"38px"}}>My</span>
                                        </div>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu style={{marginTop:"-1px"}}>
                                        <Dropdown.Item onClick={handleInfo}>내 정보 수정</Dropdown.Item>
                                        <Dropdown.Item onClick={handleLike}>찜목록</Dropdown.Item>
                                        <Dropdown.Item onClick={handlePayList}>결재 내역</Dropdown.Item>
                                        <Dropdown.Item onClick={logout} ><span className="text-danger">로그아웃</span></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Col>
                        :
                        <Col lg={2}>
                            <div className="ps-2 border" style={{position:"relative",left:"15px", width:"103px", height:"40px", borderRadius:"30px"}} onClick={login} id="headerBox">
                                <SlLogin className="fs-5 " style={{position:"absolute", top:"9px", color:"#00C2AC"}} /> <span className="fw-bold" style={{position:"absolute", top:"7px", left:"38px"}}>LOGIN</span>
                            </div>
                        </Col>
                    }
                    {/*<Col lg={1} className="d-flex justify-content-end">
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
                    </Col>*/}

                    {/*{(token !== "null")
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
                    }*/}
                </Row>
                {/*<Row>
                    <hr style={{width:"68.5%", marginLeft:"15%"}} />
                </Row>*/}
            </Container>
        </header>
    );
}

function myInfo() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
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