import React from 'react';
import "./ClassMain.css";
import all from "../img/nav/011-all-2.png";
import fitness from "../img/nav/013-dumbbell.png";
import cook from "../img/nav/016-bake.png";
import craft from "../img/nav/018-paper-crafts.png";
import music from "../img/nav/002-live-music.png";
import art from "../img/nav/003-art.png";
import activity from "../img/nav/019-flyboard.png";
import others from "../img/nav/007-more.png";
import bannerSale1 from "../img/banner/webBanner01.png"
import bannerLemon1 from "../img/banner/webBanner02.png"
import pupucook from "../img/banner/webBanner03.png"
import {Carousel, Col, Container, Row} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import {HiLocationMarker} from "react-icons/hi";
import {VscFilterFilled} from "react-icons/vsc";
import {ImStarEmpty, ImStarFull, ImStarHalf} from "react-icons/im";



export default function ClassMain() {
    return(
        <>
                <Carousel className=" mt-4 mb-5 ">
                    <Carousel.Item>
                        <div className="d-flex justify-content-center">
                            <img
                                className="d-block rounded"
                                src={bannerSale1}
                                alt="First slide"
                                width="50%"
                                height="380"
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-flex justify-content-center">
                            <img
                                className="d-block rounded"
                                src={bannerLemon1}
                                alt="Second slide"
                                width="50%"
                                height="380"
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-flex justify-content-center">
                            <img
                                className="d-block rounded"
                                src={pupucook}
                                alt="Third slide"
                                width="50%"
                                height="380"
                            />
                        </div>
                    </Carousel.Item>
                </Carousel>

            <Container>
                <Row>
                    <Col xl={2} />
                    <Col xl={8}>
                        <div className="mainNavContainer">
                            <ul className={"d-flex justify-content-between text-center flex-wrap list-unstyled mb-5"}>
                                <li className="px-3 pb-1 pt-2" style={{"--clr":"#fd7e14"}}><img src={all} alt="all" /><p className={"mt-1"}>전체</p></li>
                                <li className="px-3 pb-1 pt-2" style={{"--clr":"#6c757d"}}><img src={fitness} alt="fitness" /><p className={"mt-1"}>피트니스</p></li>
                                <li className="px-3 pb-1 pt-2" style={{"--clr":"#faad14"}}><img src={cook} alt="cook" /><p className={"mt-1"}>요리</p></li>
                                <li className="px-3 pb-1 pt-2" style={{"--clr":"#f27781"}}><img src={craft} alt="craft" /><p className={"mt-1"}>공예</p></li>
                                <li className="px-3 pb-1 pt-2" style={{"--clr":"#6f42c1"}}><img src={music} alt="music" /><p className={"mt-1"}>음악</p></li>
                                <li className="px-3 pb-1 pt-2" style={{"--clr":"#52c41a"}}><img src={art} alt="art" /><p className={"mt-1"}>미술</p></li>
                                <li className="px-3 pb-1 pt-2" style={{"--clr":"#e83e8c"}}><img src={activity} alt="activity" /><p className={"mt-1"}>액티비티</p></li>
                                <li className="px-3 pb-1 pt-2" style={{"--clr":"#3B4CA8"}}><img src={others} alt="others" /><p className={"mt-1"}>기타</p></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xl={2} />
                </Row>

                <Row>
                    <Col className="offset-xl-2 col-xl-8  mb-2" style={{cursor:"pointer"}}>
                        <span className="border border-1 border-dark rounded-pill px-3 py-1 border-opacity-25" style={{fontSize:"16px"}}>
                           <VscFilterFilled className="mb-1" /> 필터
                        </span>
                    </Col>
                </Row>
            </Container>


            <Container className="mainCardContainer">
                <Row>
                    <Col className="offset-xl-2 col-xl-8 mb-5">
                        <Row>
                            <Col className="col-xl-4 mt-4">
                                <Card border="light" className="mx-auto" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://s3.ap-northeast-2.amazonaws.com/umclassuploadboardimg/3d6446b750d54cff8e2f8eba1c946358.jpg" width="100%" height="218px" />
                                    <Card.Body>
                                        <div className="d-flex py-1">
                                            <div><HiLocationMarker className="fs-5 fw-light" /> <span style={{fontSize:"12px"}}>구로구 / 서울</span></div>
                                        </div>
                                        <Card.Title className="fs-6 mb-0">[구로구] 취미성인발레 프라이빗 1:1 개인레슨</Card.Title>
                                        <Card.Text>
                                            <p className="mb-0" ><span className="text-warning"><ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarHalf /> <ImStarEmpty /></span> <span className="fw-light" style={{fontSize:"12px"}}>(37)</span></p>
                                            <p className="fw-bold text-end"><span className="text-danger">30% </span >30,000원</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-xl-4  mt-4">
                                <Card border="light" className="mx-auto" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://s3.ap-northeast-2.amazonaws.com/umclassuploadboardimg/107245ea89a24b5484bef665c9a3b947.jpg" width="100%" height="218px" />
                                    <Card.Body>
                                        <div className="d-flex py-1">
                                            <div><HiLocationMarker className="fs-5 fw-light" /> <span style={{fontSize:"12px"}}>구로구 / 서울</span></div>
                                        </div>
                                        <Card.Title className="fs-6 mb-0">[구로구] 취미성인발레 프라이빗 1:1 개인레슨</Card.Title>
                                        <Card.Text>
                                            <p className="mb-0" ><span className="text-warning"><ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarHalf /> <ImStarEmpty /></span> <span className="fw-light" style={{fontSize:"12px"}}>(37)</span></p>
                                            <p className="fw-bold text-end"><span className="text-danger">30% </span >30,000원</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-xl-4 mt-4">
                                <Card border="light" className="mx-auto"style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://s3.ap-northeast-2.amazonaws.com/umclassuploadboardimg/9aaa99bb62c44b38adcf441b5256b782.jpg" width="100%" height="218px" />
                                    <Card.Body>
                                        <div className="d-flex py-1">
                                            <div><HiLocationMarker className="fs-5 fw-light" /> <span style={{fontSize:"12px"}}>구로구 / 서울</span></div>
                                        </div>
                                        <Card.Title className="fs-6 mb-0">[구로구] 취미성인발레 프라이빗 1:1 개인레슨</Card.Title>
                                        <Card.Text>
                                            <p className="mb-0" ><span className="text-warning"><ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarHalf /> <ImStarEmpty /></span> <span className="fw-light" style={{fontSize:"12px"}}>(37)</span></p>
                                            <p className="fw-bold text-end"><span className="text-danger">30% </span >30,000원</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-xl-4 mt-4">
                                <Card border="light" className="mx-auto"style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://s3.ap-northeast-2.amazonaws.com/umclassuploadboardimg/ede7841e7fd242259f201dc7dd73a91d.jpg" width="100%" height="218px" />
                                    <Card.Body>
                                        <div className="d-flex py-1">
                                            <div><HiLocationMarker className="fs-5 fw-light" /> <span style={{fontSize:"12px"}}>구로구 / 서울</span></div>
                                        </div>
                                        <Card.Title className="fs-6 mb-0">[구로구] 취미성인발레 프라이빗 1:1 개인레슨</Card.Title>
                                        <Card.Text>
                                            <p className="mb-0" ><span className="text-warning"><ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarHalf /> <ImStarEmpty /></span> <span className="fw-light" style={{fontSize:"12px"}}>(37)</span></p>
                                            <p className="fw-bold text-end"><span className="text-danger">30% </span >30,000원</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-xl-4 mt-4">
                                <Card border="light" className="mx-auto"style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://s3.ap-northeast-2.amazonaws.com/umclassuploadboardimg/c573170218414d0ca49314b80559c780.jpg" width="100%" height="218px" />
                                    <Card.Body>
                                        <div className="d-flex py-1">
                                            <div><HiLocationMarker className="fs-5 fw-light" /> <span style={{fontSize:"12px"}}>구로구 / 서울</span></div>
                                        </div>
                                        <Card.Title className="fs-6 mb-0">[구로구] 취미성인발레 프라이빗 1:1 개인레슨</Card.Title>
                                        <Card.Text>
                                            <p className="mb-0" ><span className="text-warning"><ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarHalf /> <ImStarEmpty /></span> <span className="fw-light" style={{fontSize:"12px"}}>(37)</span></p>
                                            <p className="fw-bold text-end"><span className="text-danger">30% </span >30,000원</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-xl-4 mt-4">
                                <Card border="light" className="mx-auto"style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://s3.ap-northeast-2.amazonaws.com/umclassuploadboardimg/4eb9426e3d1f433eb0c22242d97edfc2.jpg" width="100%" height="218px" />
                                    <Card.Body>
                                        <div className="d-flex py-1">
                                            <div><HiLocationMarker className="fs-5 fw-light" /> <span style={{fontSize:"12px"}}>구로구 / 서울</span></div>
                                        </div>
                                        <Card.Title className="fs-6 mb-0">[구로구] 취미성인발레 프라이빗 1:1 개인레슨</Card.Title>
                                        <Card.Text>
                                            <p className="mb-0" ><span className="text-warning"><ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarHalf /> <ImStarEmpty /></span> <span className="fw-light" style={{fontSize:"12px"}}>(37)</span></p>
                                            <p className="fw-bold text-end"><span className="text-danger">30% </span >30,000원</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-xl-4 mt-4">
                                <Card border="light" className="mx-auto"style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://s3.ap-northeast-2.amazonaws.com/umclassuploadboardimg/57b1ad459a8f40e4bc0e0e2914977fb1.JPG" width="100%" height="218px" />
                                    <Card.Body>
                                        <div className="d-flex py-1">
                                            <div><HiLocationMarker className="fs-5 fw-light" /> <span style={{fontSize:"12px"}}>구로구 / 서울</span></div>
                                        </div>
                                        <Card.Title className="fs-6 mb-0">[구로구] 취미성인발레 프라이빗 1:1 개인레슨</Card.Title>
                                        <Card.Text>
                                            <p className="mb-0" ><span className="text-warning"><ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarHalf /> <ImStarEmpty /></span> <span className="fw-light" style={{fontSize:"12px"}}>(37)</span></p>
                                            <p className="fw-bold text-end"><span className="text-danger">30% </span >30,000원</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-xl-4 mt-4">
                                <Card border="light" className="mx-auto"style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://s3.ap-northeast-2.amazonaws.com/umclassuploadboardimg/5988c7de06a14b45bd8354cc285f092c.jpg" width="100%" height="218px" />
                                    <Card.Body>
                                        <div className="d-flex py-1">
                                            <div><HiLocationMarker className="fs-5 fw-light" /> <span style={{fontSize:"12px"}}>구로구 / 서울</span></div>
                                        </div>
                                        <Card.Title className="fs-6 mb-0">[구로구] 취미성인발레 프라이빗 1:1 개인레슨</Card.Title>
                                        <Card.Text>
                                            <p className="mb-0" ><span className="text-warning"><ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarHalf /> <ImStarEmpty /></span> <span className="fw-light" style={{fontSize:"12px"}}>(37)</span></p>
                                            <p className="fw-bold text-end"><span className="text-danger">30% </span >30,000원</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-xl-4 mt-4">
                                <Card border="light" className="mx-auto"style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://s3.ap-northeast-2.amazonaws.com/umclassuploadboardimg/18a922ad06e74794a5bce4fa68d30264.JPG" width="100%" height="218px" />
                                    <Card.Body>
                                        <div className="d-flex py-1">
                                            <div><HiLocationMarker className="fs-5 fw-light" /> <span style={{fontSize:"12px"}}>구로구 / 서울</span></div>
                                        </div>
                                        <Card.Title className="fs-6 mb-0">[구로구] 취미성인발레 프라이빗 1:1 개인레슨</Card.Title>
                                        <Card.Text>
                                            <p className="mb-0" ><span className="text-warning"><ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarHalf /> <ImStarEmpty /></span> <span className="fw-light" style={{fontSize:"12px"}}>(37)</span></p>
                                            <p className="fw-bold text-end"><span className="text-danger">30% </span >30,000원</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-xl-4 mt-4">
                                <Card border="light" className="mx-auto"style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://s3.ap-northeast-2.amazonaws.com/umclassuploadboardimg/c16d3620cc6548109303d7033f62ab24.jpg" width="100%" height="218px" />
                                    <Card.Body>
                                        <div className="d-flex py-1">
                                            <div><HiLocationMarker className="fs-5 fw-light" /> <span style={{fontSize:"12px"}}>구로구 / 서울</span></div>
                                        </div>
                                        <Card.Title className="fs-6 mb-0">[구로구] 취미성인발레 프라이빗 1:1 개인레슨</Card.Title>
                                        <Card.Text>
                                            <p className="mb-0" ><span className="text-warning"><ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarHalf /> <ImStarEmpty /></span> <span className="fw-light" style={{fontSize:"12px"}}>(37)</span></p>
                                            <p className="fw-bold text-end"><span className="text-danger">30% </span >30,000원</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-xl-4 mt-4">
                                <Card border="light" className="mx-auto"style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://s3.ap-northeast-2.amazonaws.com/umclassuploadboardimg/f01c9f5cbdb641b1adc91c6c02c07300.jpg" width="100%" height="218px" />
                                    <Card.Body>
                                        <div className="d-flex py-1">
                                            <div><HiLocationMarker className="fs-5 fw-light" /> <span style={{fontSize:"12px"}}>구로구 / 서울</span></div>
                                        </div>
                                        <Card.Title className="fs-6 mb-0">[구로구] 취미성인발레 프라이빗 1:1 개인레슨</Card.Title>
                                        <Card.Text>
                                            <p className="mb-0" ><span className="text-warning"><ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarHalf /> <ImStarEmpty /></span> <span className="fw-light" style={{fontSize:"12px"}}>(37)</span></p>
                                            <p className="fw-bold text-end"><span className="text-danger">30% </span >30,000원</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-xl-4 mt-4">
                                <Card border="light" className="mx-auto"style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://s3.ap-northeast-2.amazonaws.com/umclassuploadboardimg/74f88105855744a19c1e308d48d696f7.jpg" width="100%" height="218px" />
                                    <Card.Body>
                                        <div className="d-flex py-1">
                                            <div><HiLocationMarker className="fs-5 fw-light" /> <span style={{fontSize:"12px"}}>구로구 / 서울</span></div>
                                        </div>
                                        <Card.Title className="fs-6 mb-0">[구로구] 취미성인발레 프라이빗 1:1 개인레슨</Card.Title>
                                        <Card.Text>
                                            <p className="mb-0" ><span className="text-warning"><ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarHalf /> <ImStarEmpty /></span> <span className="fw-light" style={{fontSize:"12px"}}>(37)</span></p>
                                            <p className="fw-bold text-end"><span className="text-danger">30% </span >30,000원</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>


        </>
    )




}