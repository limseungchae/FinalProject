import React from 'react';
import {Button, Col, Form, Row, NavLink, Image, Container} from "react-bootstrap";
import "./Login.css"
import kakao  from '../../../assets/kakaologin.png';
import {Link} from "react-router-dom";


export default function Login () {
    const API_KEY = '5d1c1e7c981c84a329eb735d9ad56f88';
    const REDIRECTION = 'http://localhost:3000/oauth/kakao';

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECTION}&response_type=code`

    const kakaoLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    }

    return (
        <Container className={"text-center"}>
          <div className="loginMain">
            <Row>
                <Col className={"offset-4 col-4 pt-4 loginContainer"}>

                    <h2 className={"text-center mb-xl-5 loginLogo"}>앙클래스</h2>
                    <div id="joinForm" className="ps-3">
                        <Row className={"mb-3"}>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicId">
                                    <Col className={"offset-1 col-10"}>
                                    <Form.Control type="userid" placeholder="아이디를 입력하세요" />
                                    </Col>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Col className={"offset-1 col-10"}>
                                    <Form.Control type="password" placeholder="비밀번호" />
                                    </Col>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Col className={'offset-1 col-10'}>
                                        <Row>
                                            <Col className={'col-6 findInfo'}>
                                                <Link to="#" className={'text-decoration-none text-dark'}>회원정보 찾기</Link>
                                            </Col>
                                            <Col>
                                                <Form.Check type="checkbox" label="아이디 기억하기" />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Form.Group>

                                <Col className={'toJoin mb-3 offset-1 col-10'}>
                                    <Link to="/join" className={'text-decoration-none text-dark'}>회원가입</Link>
                                </Col>

                                <Col className={"offset-1 col-10"}>
                                <Button className={"loginbtn"} variant="secondary" type="submit"
                                href={'/'}>
                                    로그인
                                </Button>
                                </Col>

                                <Col className={"offset-1 col-10 mt-2"}>
                                    <div className="kakaoLogin" onClick={kakaoLogin}>
                                        <Image src={kakao} className={"kakaoImg"}/>
                                    </div>
                                </Col>

                            </Form>
                        </Row>
                    </div>

                </Col>
            </Row>
        </div>
        </Container>
    );
}