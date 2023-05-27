import React from 'react';
import "./Modify.css"
import {Col, Row} from "react-bootstrap";

export default function Modify() {

    return(
        <div className="modifyMain mt-5">
            <Row>
                <Col className={"offset-xl-4 col-xl-4 modifyContainer"}>
                    <h3 className={"text-start ps-4 registerHeader"} style={{marginBottom:"32px"}}>개인 정보 수정</h3>
                    <div id="modifyForm" className="ps-3 border-top border-2 border-dark">
                        <Row className={"mb-4 mt-3"}>
                            <Col className={"col-3 align-self-center"}>
                                <label htmlFor="email"><p style={{margin:"0"}}>이메일</p></label>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="text" id="email" readOnly={true} style={{width:"100%",height:"40px"}} />
                            </Col>
                        </Row>
                        <Row className={"mb-4"}>
                            <Col className={"col-3 align-self-center"}>
                                <label htmlFor="password"><p style={{margin:"0"}}>현재 비밀번호 <span className={"text-danger"}>*</span></p></label>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="password" id="password" style={{width:"100%",height:"40px"}} />
                            </Col>
                        </Row>
                        <Row className={"mb-4"}>
                            <Col className={"col-3 align-self-center"}>
                                <label htmlFor="password"><p style={{margin:"0"}}>새 비밀번호 <span className={"text-danger"}>*</span></p></label>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="password" id="password" style={{width:"100%",height:"40px"}} />
                            </Col>
                        </Row>
                        <Row className={"mb-4"}>
                            <Col className={"col-3 align-self-center"}>
                                <label htmlFor="rePassword"><p style={{margin:"0"}}>새 비밀번호 확인 <span className={"text-danger"}>*</span></p></label>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="password" id="rePassword" style={{width:"100%",height:"40px"}} />
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
                                <p style={{margin:"0"}}>이름 <span className={"text-danger"}>*</span></p>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="text" style={{width:"100%",height:"40px"}} />
                            </Col>
                        </Row>
                        <Row className={"mb-4"}>
                            <Col className={"col-3 align-self-center"}>
                                <p style={{margin:"0"}}>휴대폰 번호 <span className={"text-danger"}>*</span></p>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="text" style={{width:"100%",height:"40px"}} />
                            </Col>
                        </Row>

                        <Row className={"mb-4"}>
                            <Col className={"col-3 align-self-center"}>
                                <p style={{margin:"0"}}>성별 <span className={"text-danger"}>*</span></p>
                            </Col>
                            <Col className={"col-6"}>
                                <div className="registerGenderInputContainer d-flex justify-content-between px-2">
                                    <label><input type="radio" name='gender' value="male" /><span>&nbsp;&nbsp; 남</span></label>
                                    <label><input type="radio" name='gender' value="female" /><span>&nbsp;&nbsp; 여</span></label>
                                    <label><input type="radio" name='gender' value="none" /><span>&nbsp;&nbsp; 선택안함</span></label>
                                </div>
                            </Col>
                        </Row>
                        <Row className={"mb-5"}>
                            <Col className={"col-3 align-self-center"}>
                                <p style={{margin:"0"}}>생년 월일 <span className={"text-danger"}>*</span></p>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="text" style={{width:"100%",height:"40px"}} />
                            </Col>
                        </Row>
                        <Row style={{marginBottom:"100px"}}>
                            <Col className={"offset-3 col-6 d-flex justify-content-center"}>
                                <button className="joinSubmitButton">수정하기</button>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}