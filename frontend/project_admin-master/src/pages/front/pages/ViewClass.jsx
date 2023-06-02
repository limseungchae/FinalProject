import React, {useEffect, useState} from 'react';
import {Col, Row, Image, Container, Button} from "react-bootstrap";
import "./ViewClass.css"
import {BsStarFill} from 'react-icons/bs';
import {BsFillInfoCircleFill} from 'react-icons/bs';
import axios from "axios";
import { useLocation } from "react-router-dom"
import Modal from "react-bootstrap/Modal";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


export default function ViewClass () {
    // 로컬 스토리지에서 ACCESS TOKEN 가져오기
    const accessToken = localStorage.getItem("ACCESS_TOKEN");

    const location = useLocation(); // url값 가져오는 훅
    const [classInfo, setClassInfo] = useState({});
    const [completeImg, setCompleteImg] = useState([]);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [date, setDate] = useState(null);


    // 클래스 정보
    useEffect(() => {
        axios.get(`http://localhost:8080/viewclass${location.search}`)
            .then(response => setClassInfo(response.data))
            .catch(error => console.log(error))
    }, []);


    // 클래스 완성작 이미지
    useEffect(() => {
        axios.get(`http://localhost:8080/viewclass/completeimg${location.search}`)
            .then(response => setCompleteImg(response.data))
            .catch(error => console.log(error))
    }, []);

    // 리액트 달력
    const handleDateChange = (date) => {

    };

    // 찜하기 처리
    const [favoriteShow, setFavoriteShow] = useState(false);
    const handleShow = () => setFavoriteShow(true);
    const handleClose = () => setFavoriteShow(false);
    const handleAddFavorite = () => {
        if (accessToken && accessToken !== "null") {
            setFavoriteShow(false)
        } else window.location.href = "/login";
    }

    // 예약하기 처리
    const handleReservation = () => {
        if (accessToken && accessToken !== "null") {
            window.location.href = '/';     // 결제페이지 생기기전 임시 리디렉트
        }else window.location.href = "/login";
    };


    return (

        <Container className="viewClassContainer">
            <Modal show={favoriteShow} onHide={handleClose}>
                <Modal.Body className={'favorite-modal-body'}>찜하시겠습니까?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        취소
                    </Button>
                    <Button variant="primary" onClick={handleAddFavorite}>
                        찜하기
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="offset-1 col-10 viewClassSubContainer">
                <div className={'viewClassInfo'}>

                <Row className="align-items-stretch">
                    <Col>
                        <Image src={classInfo.thumbnail} className={"w-100"}></Image>
                    </Col>

                    <Col className={'top-right'}>
                        <Row className={'top1'}>
                            <div className={'start-align'}>
                                <span className={'sigu'}>{classInfo.detail}({classInfo.gugun} / {classInfo.sido})</span>
                            </div>
                            <h2>{classInfo.cname}</h2>
                        </Row>

                        <Row className={'top2'}>
                            <Col className={'col-4'}>
                                <div><h5>소요시간</h5></div>
                                <h4 className={'class-infomation'}>{classInfo.duration}</h4>
                            </Col>
                            <Col className={'col-4'}>
                                <div><h5>수강인원</h5></div>
                                <h4 className={'class-infomation'}>{classInfo.man}</h4>
                            </Col>
                            <Col>
                                <div><h5>횟수</h5></div>
                                <h4 className={'class-infomation'}>{classInfo.man}</h4>
                            </Col>
                        </Row>

                        <Row className={'schedule'}>
                            <Col className={'col-1'}><span><BsFillInfoCircleFill/></span></Col>
                            <Col className={'col'}><span>해당 클래스는 일정 협의가 필요한 클래스 입니다. 일정 협의 후 신청해주세요.</span></Col>
                        </Row>

                        <Row className={'tcProfile'}>
                            <Col className={'col-2 mt-2'}>
                                <div>
                                    <Image src={classInfo.tuterimg} className={'teacher-img'}></Image>
                                </div>
                            </Col>
                            <Col className={'mb-4 col-4'}>
                                <div><span className={'tcname'}>{classInfo.tutername}</span></div>
                                <div className={'teacher-rating'}>
                                    <span className={'star-span'}><BsStarFill className={'star'}/>&nbsp;</span>
                                    <span className={'avg-rating'}>{classInfo.star}</span>
                                    <span>&nbsp;</span>
                                    <span className={'count-rating'}>({classInfo.cntrvs})</span>
                                </div>
                            </Col>
                            <Col className={'offset-2 mb-2'}>
                                <Button className={'favorite-btn'} onClick={handleShow}>찜하기</Button>
                            </Col>
                        </Row>

                    </Col>
                </Row>
                </div>

                <Row className={'payboard'}>
                    <h5 className={'schedule-title'}>일정</h5>
                    <div className='rap'>
                        <div>
                            <Calendar
                                onChange={handleDateChange}
                                value={[startDate, endDate]}
                                className="calendar"
                            />
                        </div>
                    </div>

                    <Row className={'mt-3'}>
                        <Col className={'offset-2 col-8'}>
                            <Row className={'pay'}>
                                <Col className={'offset-3 col-4'}><span className={'discount-price'}>{classInfo.sale}원</span></Col>
                                <Col className={'col-5 res-btn-container'}>
                                    <Button className={'text-white reservation-btn mb-2'} onClick={handleReservation}>
                                        예약하기
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Row>

                <section className={'text-start'}>
                    <div className={'sectionContainer'}>
                        <div>
                        <span className="class-info-title">클래스 소개</span>
                            <div>
                                <span className="voucher-contents-font intro">
                                    {classInfo.intro}
                                </span>
                            </div>
                        </div>

                        <hr/>
                        <span className="class-info-title">준비물</span>
                        <div>
                            <span className="voucher-contents-font">
                                {classInfo.material}
                            </span>
                        </div>


                        <hr/>
                        <span className="class-info-title">이용 규정</span>
                        <div>
                                <span className="voucher-contents-font rule">
                                    {classInfo.rule===null ? "정보없음" : classInfo.rule}
                                </span>
                        </div>

                        <hr/>

                        <span className="class-info-title">일정 공지</span>
                        <div>
                                <span className="voucher-contents-font notification">
                                    {classInfo.notice}
                                </span>
                        </div>

                        <hr/>

                        <Row>
                            <Col><span className="class-info-title">클래스 완성작</span></Col>
                            { (completeImg.length > 0) ? completeImg.map((img, index) => {
                                return(
                                    <Row className="voucher-completed-img" key={index}>
                                        <Col className="col">
                                            <div>
                                                <Image className={'class-completed-img'} src={img}></Image>
                                            </div>
                                        </Col>
                                    </Row>
                                )
                                }) :
                                <div>
                                    <span className="voucher-contents-font">
                                        정보없음
                                    </span>
                                </div>
                            }
                        </Row>


                        <hr/>
                        <Row>
                            <div><span className="class-info-title">장소</span></div>
                            <Col className={'col mt-3'}>
                                <Col className={'col-8'}><div className={'bg-dark bg-opacity-25 map'}></div></Col>
                            </Col>
                            <div className={'addr-container mt-3'}><span>{classInfo.addr}</span></div>
                        </Row>

                        <Row>
                            <Col className={'col-6'}>
                                <Row className={'mt-3'}>
                                    <Col className={'col-4'}><Button className={'map-btn'}>지도보기</Button></Col>
                                    <Col className={'col-4'}><Button className={'map-btn'}>주소복사</Button></Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </section>


            </div>
        </Container>
    );
}