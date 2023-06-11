import React from 'react';
import {Button, Col, Row} from "react-bootstrap";


export default function Join () {
    return (
        <div className="registerMain mt-5">
            <Row>
                <Col className={"offset-xl-4 col-xl-4 joinContainer"}>
                    <h3 className={"text-center registerHeader"} style={{marginBottom:"60px"}}>회원가입</h3>
                    <div id="joinForm" className="ps-3 border-top border-2 border-dark">
                        <Row className={"mb-4 mt-3"}>
                            <Col className={"col-3 align-self-center"}>
                                <label htmlFor="email"><p style={{margin:"0"}}>이메일 <span className={"text-danger"}>*</span></p></label>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="text" id="email" style={{width:"100%",height:"40px"}} />
                            </Col>
                            <Col className={"col-3"}>
                               <button className="joinButton">중복확인</button>
                            </Col>
                        </Row>
                        <Row className={"mb-4"}>
                            <Col className={"col-3 align-self-center"}>
                                <label htmlFor="password"><p style={{margin:"0"}}>비밀번호 <span className={"text-danger"}>*</span></p></label>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="password" id="password" style={{width:"100%",height:"40px"}} />
                            </Col>
                        </Row>
                        <Row className={"mb-4"}>
                            <Col className={"col-3 align-self-center"}>
                                <label htmlFor="rePassword"><p style={{margin:"0"}}>비밀번호 확인 <span className={"text-danger"}>*</span></p></label>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="password" id="rePassword" style={{width:"100%",height:"40px"}} />
                            </Col>
                        </Row>
                        <Row className={"mb-4"}>
                            <Col className={"col-3 align-self-center"}>
                                <label htmlFor="userType"><p style={{margin:"0"}}>구분 <span className={"text-danger"}>*</span></p></label>
                            </Col>
                            <Col className={"col-6"}>
                                <div className="registerTypeInputContainer d-flex justify-content-between px-2">
                                    <label><input type="radio" id="userType" name='userType' value="user" checked={true} /><span>&nbsp;&nbsp; 유저</span></label>
                                    <label><input type="radio" name='userType' value="tutor" /><span>&nbsp;&nbsp; 유저 + 강사</span></label>
                                </div>
                            </Col>
                        </Row>
                        <Row className={"mb-4"}>
                            <Col className={"col-3 align-self-center"}>
                                <label htmlFor="nickName"><p style={{margin:"0"}}>닉네임 <span className={"text-danger"}>*</span></p></label>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="text" id="nickName" style={{width:"100%",height:"40px"}} />
                            </Col>

                        </Row>
                        <Row className={"mb-4"}>
                            <Col className={"col-3 align-self-center"}>
                                <label htmlFor="name"><p style={{margin:"0"}}>이름 <span className={"text-danger"}>*</span></p></label>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="text" id="name" style={{width:"100%",height:"40px"}} />
                            </Col>
                        </Row>
                        <Row className={"mb-4"}>
                            <Col className={"col-3 align-self-center"}>
                                <label htmlFor="phone"><p style={{margin:"0"}}>휴대폰 번호 <span className={"text-danger"}>*</span></p></label>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="text" id="phone" style={{width:"100%",height:"40px"}} />
                            </Col>
                        </Row>

                        <Row className={"mb-4"}>
                            <Col className={"col-3 align-self-center"}>
                                <label htmlFor="gender"><p style={{margin:"0"}}>성별 <span className={"text-danger"}>*</span></p></label>
                            </Col>
                            <Col className={"col-6"}>
                                <div className="registerGenderInputContainer d-flex justify-content-between px-2">
                                    <label><input type="radio" id="gender" name='gender' value="male" /><span>&nbsp;&nbsp; 남</span></label>
                                    <label><input type="radio" name='gender' value="female" /><span>&nbsp;&nbsp; 여</span></label>
                                    <label><input type="radio" name='gender' value="none" /><span>&nbsp;&nbsp; 선택안함</span></label>
                                </div>
                            </Col>
                        </Row>
                        <Row className={"mb-5"}>
                            <Col className={"col-3 align-self-center"}>
                                <label htmlFor="birth"><p style={{margin:"0"}}>생년 월일 <span className={"text-danger"}>*</span></p></label>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="text" id="birth" style={{width:"100%",height:"40px"}} />
                            </Col>
                        </Row>
                        <Row style={{marginBottom:"100px"}}>
                            <Col className={"offset-3 col-6 d-flex justify-content-center"}>
                                <button className="joinSubmitButton">가입하기</button>
                            </Col>
                        </Row>
                    </div>

                </Col>
            </Row>
        </div>
    );
}