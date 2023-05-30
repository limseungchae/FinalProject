import React, { useState, useEffect } from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";
import {HiLocationMarker} from "react-icons/hi";
import {ImStarEmpty, ImStarFull, ImStarHalf} from "react-icons/im";

export default function Like(){
    return(
        <Container>
            <Row>
                <Col lg={2}>
                </Col>
                <Col lg={8}>
                    <div className={"my-4"}>
                        <h3>abc123님의 찜목록</h3>
                        <hr />
                    </div>
                    <Row>
                        <Col className="col-xl-4 mt-4">
                            <Link to={""} style={{textDecoration:"none"}}>
                                <Card border="light" className="mx-auto" style={{ width: '270px',color:"black" }}>
                                    <Card.Img variant="top" src={"https://s3.ap-northeast-2.amazonaws.com/umclassuploadboardimg/6a43614b1f394a478e13cb7a13977485.jpg"} width="100%" height="218px" />
                                    <Card.Body>
                                        <div className="d-flex py-1">
                                            <div><HiLocationMarker className="fs-5 fw-light" /> <span style={{fontSize:"12px"}}>광진구 / 서울</span></div>
                                        </div>
                                        <Card.Title className="fs-6 mb-0 fw-bold">[부산본점]메시아패스 자유수강권</Card.Title>
                                        <Card.Text>
                                            <p className="mb-0" ><span className="text-warning"><ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarHalf /> <ImStarEmpty /></span> <span className="fw-light" style={{fontSize:"12px"}}>(10)</span></p>
                                            <p className="fw-bold text-end"><span className="text-danger">10% </span >10,000원</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col className="col-xl-4 mt-4">
                            <Link to={""} style={{textDecoration:"none"}}>
                                <Card border="light" className="mx-auto" style={{ width: '270px',color:"black" }}>
                                    <Card.Img variant="top" src={"https://s3.ap-northeast-2.amazonaws.com/umclassuploadboardimg/6a43614b1f394a478e13cb7a13977485.jpg"} width="100%" height="218px" />
                                    <Card.Body>
                                        <div className="d-flex py-1">
                                            <div><HiLocationMarker className="fs-5 fw-light" /> <span style={{fontSize:"12px"}}>광진구 / 서울</span></div>
                                        </div>
                                        <Card.Title className="fs-6 mb-0 fw-bold">[부산본점]메시아패스 자유수강권</Card.Title>
                                        <Card.Text>
                                            <p className="mb-0" ><span className="text-warning"><ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarHalf /> <ImStarEmpty /></span> <span className="fw-light" style={{fontSize:"12px"}}>(10)</span></p>
                                            <p className="fw-bold text-end"><span className="text-danger">10% </span >10,000원</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col className="col-xl-4 mt-4">
                            <Link to={""} style={{textDecoration:"none"}}>
                                <Card border="light" className="mx-auto" style={{ width: '270px',color:"black" }}>
                                    <Card.Img variant="top" src={"https://s3.ap-northeast-2.amazonaws.com/umclassuploadboardimg/6a43614b1f394a478e13cb7a13977485.jpg"} width="100%" height="218px" />
                                    <Card.Body>
                                        <div className="d-flex py-1">
                                            <div><HiLocationMarker className="fs-5 fw-light" /> <span style={{fontSize:"12px"}}>광진구 / 서울</span></div>
                                        </div>
                                        <Card.Title className="fs-6 mb-0 fw-bold">[부산본점]메시아패스 자유수강권</Card.Title>
                                        <Card.Text>
                                            <p className="mb-0" ><span className="text-warning"><ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarHalf /> <ImStarEmpty /></span> <span className="fw-light" style={{fontSize:"12px"}}>(10)</span></p>
                                            <p className="fw-bold text-end"><span className="text-danger">10% </span >10,000원</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col className="col-xl-4 mt-4">
                            <Link to={""} style={{textDecoration:"none"}}>
                                <Card border="light" className="mx-auto" style={{ width: '270px',color:"black" }}>
                                    <Card.Img variant="top" src={"https://s3.ap-northeast-2.amazonaws.com/umclassuploadboardimg/6a43614b1f394a478e13cb7a13977485.jpg"} width="100%" height="218px" />
                                    <Card.Body>
                                        <div className="d-flex py-1">
                                            <div><HiLocationMarker className="fs-5 fw-light" /> <span style={{fontSize:"12px"}}>광진구 / 서울</span></div>
                                        </div>
                                        <Card.Title className="fs-6 mb-0 fw-bold">[부산본점]메시아패스 자유수강권</Card.Title>
                                        <Card.Text>
                                            <p className="mb-0" ><span className="text-warning"><ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarHalf /> <ImStarEmpty /></span> <span className="fw-light" style={{fontSize:"12px"}}>(10)</span></p>
                                            <p className="fw-bold text-end"><span className="text-danger">10% </span >10,000원</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

