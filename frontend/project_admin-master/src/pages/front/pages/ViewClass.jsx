import React, {useEffect, useState} from 'react';
import {Col, Row, Image, Container, Button} from "react-bootstrap";
import "./ViewClass.css"
import {BsStarFill} from 'react-icons/bs';
import {BsFillInfoCircleFill} from 'react-icons/bs';
import axios from "axios";
import { useLocation } from "react-router-dom"
import Modal from "react-bootstrap/Modal";

const makeCalendar = (date) => {
    const currentYear = new Date(date).getFullYear();
    const currentMonth = new Date(date).getMonth() + 1;

    const firstDay = new Date(currentYear, currentMonth - 1, 1).getDay();
    const lastDay = new Date(currentYear, currentMonth, 0).getDate();

    const limitDay = firstDay + lastDay;
    const nextDay = Math.ceil(limitDay / 7) * 7;

    let htmlDummy = '';

    for (let i = 0; i < firstDay; i++) {
        htmlDummy += `<div class="noColor"></div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        htmlDummy += `<div>${i}</div>`;
    }

    for (let i = limitDay; i < nextDay; i++) {
        htmlDummy += `<div class="noColor"></div>`;
    }

    const dateBoard = document.querySelector('.dateBoard');
    const dateTitle = document.querySelector('.dateTitle');
    if (dateTitle && dateBoard) {
        dateBoard.innerHTML = htmlDummy;
        dateTitle.innerText = `${currentYear}년 ${currentMonth}월`;
    }
}


export default function ViewClass () {
    const location = useLocation(); // url값 가져오는 훅
    const [date, setDate] = useState(new Date());
    const [classInfo, setClassInfo] = useState({});
    const [completeImg, setCompleteImg] = useState([]);


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

    // 달력
    useEffect(() => {
        makeCalendar(date);
        const prevDay = document.querySelector('.prevDay');
        const nextDay = document.querySelector('.nextDay');

        const handlePrevDayClick = () => {
            const prevDate = new Date(date);
            prevDate.setMonth(prevDate.getMonth() - 1);
            setDate(prevDate);
            makeCalendar(date);
        };

        const handleNextDayClick = () => {
            const nextDate = new Date(date);
            nextDate.setMonth(nextDate.getMonth() + 1);
            setDate(nextDate);
            makeCalendar(date);
        };

        prevDay.addEventListener('click', handlePrevDayClick);
        nextDay.addEventListener('click', handleNextDayClick);


        return () => {
            prevDay.removeEventListener('click', handlePrevDayClick);
            nextDay.removeEventListener('click', handleNextDayClick);
        };
    }, [date]);


    // 찜하기 처리
    const [favoriteShow, setFavoriteShow] = useState(false);
    const handleShow = () => setFavoriteShow(true);
    const handleClose = () => setFavoriteShow(false);
    const handleAddFavorite = () => {
        setFavoriteShow(false)
}


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
                        <div className="header">
                            <div className="btn prevDay"></div>
                            <h5 className='dateTitle'></h5>
                            <div className="btn nextDay"></div>
                        </div>

                        <div className="grid dateHead">
                            <div>일</div>
                            <div>월</div>
                            <div>화</div>
                            <div>수</div>
                            <div>목</div>
                            <div>금</div>
                            <div>토</div>
                        </div>

                        <div className="grid dateBoard"></div>
                    </div>

                    <Row className={'mt-3'}>
                        <Col className={'offset-2 col-8'}>
                            <Row className={'pay'}>
                                <Col className={'offset-3 col-4'}><span className={'discount-price'}>{classInfo.sale}원</span></Col>
                                <Col className={'col-5 res-btn-container'}>
                                    <Button className={'text-white reservation-btn mb-2'}>
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