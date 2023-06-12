/*global kakao*/
// 카카오맵 사용할때 global kakao 라고 컴포넌트 최상위에 적어야함
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
import './react-calendar.css'

export default function ViewClass () {
    // 로컬 스토리지에서 ACCESS TOKEN 가져오기
    const accessToken = localStorage.getItem("ACCESS_TOKEN");

    const location = useLocation(); // url값 가져오는 훅

    const [classInfo, setClassInfo] = useState({});
    const [completeImg, setCompleteImg] = useState({});

    const [quantity, setQuantity] = useState(1);    // 인원
    const curDate = new Date(); // 현재 날짜
    const [dateValue, setDateValue] = useState(curDate);       // 날짜를 선택할때마다 값 바뀜, 초기값은 현재 날짜

    // 일정의 달력에서 선택돼있는 date 형태의 날짜를 YYYY-MM-DD 로 포맷
    const year = dateValue.getFullYear();
    const month = String(dateValue.getMonth() + 1).padStart(2, '0');
    const day = String(dateValue.getDate()).padStart(2, '0');
    const formatedDate = `${year}-${month}-${day}`;

    const [originPrice, setOriginPrice] = useState(0);  // 원가
    const [price, setPrice] = useState(0);              // 총금액

    // 1 ~ 5까지 인원수 선택할 옵션태그 반복문으로 생성
    const options = [];

    for (let i = 1; i <= 5; i++) {
        options.push(<option key={i} value={i}>{i}</option>);
    }

    // 클래스 정보
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/viewclass${location.search}`)
            .then(res => {
                setClassInfo(res.data);
                setPrice(res.data.sale)
                setOriginPrice(res.data.sale)

                // 카카오 지도 표시
                const addr = res.data.addr;

                const patterns = [
                    /(.+로 \d+[-\d]*)/,
                    /(.+동 \d+[-\d]*)/,
                    /(.+길 \d+[-\d]*)/
                ];

                let extractedAddr = "";

                for (const pattern of patterns) {
                    const match = addr.match(pattern);
                    if (match) {
                        extractedAddr = match[1];
                        console.log(extractedAddr);
                        break;
                    }
                }

                const mapContainer = document.getElementById('map'),
                    mapOption = {
                        center: new kakao.maps.LatLng(0, 0),    // 초기 지도 중심좌표 - 필수
                        level: 3 // 지도의 확대 레벨
                    };

                // 지도 생성
                const map = new kakao.maps.Map(mapContainer, mapOption);

                // 주소를 좌표로 변환하는 객체
                const geocoder = new kakao.maps.services.Geocoder();

                // 주소로 좌표를 검색
                geocoder.addressSearch(extractedAddr, function(result, status) {

                    // 정상적으로 검색이 완료됐으면
                    if (status === kakao.maps.services.Status.OK) {

                        const coords = new kakao.maps.LatLng(result[0].y, result[0].x); // 결과 좌표값

                        console.log(coords + " 좌표는 ");
                        // 결과 좌표 위치에 마커 표시
                        const marker = new kakao.maps.Marker({
                            map: map,
                            position: coords
                        });

                        // 결과 좌표 위치로 지도 이동
                        map.setCenter(coords);
                    }
                })

            })
            .catch(error => console.log(error))
    }, []);


    // 클래스 완성작 이미지
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/viewclass/completeimg${location.search}`)
            .then(res => {
                setCompleteImg(res.data);
            })
            .catch(error => console.log(error))
    }, []);

    // 찜하기 처리
    const [favoriteShow, setFavoriteShow] = useState(false);
    const handleShow = () => setFavoriteShow(true);
    const handleClose = () => setFavoriteShow(false);
    const handleAddFavorite = () => {
        if (accessToken && accessToken !== "null") {
            axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/viewclass/addfavorite${location.search}`,
                {
                headers: {Authorization: `Bearer ${accessToken}`},
            })
                .then(res => {
                    setFavoriteShow(false)
                    if(res.data === true) alert("이미 '찜!' 하셨네요!")
                    else alert("'찜!' 목록에 추가했습니다!")
                })
                .catch(e => console.log(e));
        } else window.location.href = "/login";
    }

    // 예약하기 처리시 요청 본문에 담을 클래스
    class ReservationDTO{
        cname = classInfo.cname;
        quantity = quantity;
        totprice = price;
        actdate = formatedDate
    }

    // 예약하기 처리
    const handleReservation = () => {
        if (accessToken && accessToken !== "null") {
            const rDTO = new ReservationDTO();

            axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/viewclass/reservation`, rDTO, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
            }).then(res => {
                if(res.data === true) alert("해당일에 이미 예약한 내역이 있습니다!")
                else alert("성공적으로 예약했습니다!")
            })
        }else {
            window.location.href = "/login";
        }
    };


    // 인원 선택시 인원, 총금액 변경
    const handleAmount = (e) => {
        setPrice(e.target.value * originPrice);
        setQuantity(e.target.value);
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
                    <Col className={'thumbnail-container'}>
                        <Image src={classInfo.thumbnail} className={"thumbnail"}></Image>
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
                    <h4 className={'schedule-title'}>일정</h4>
                    <Col className={'col-5 mb-5'}>
                        <div className='rap'>
                            <div>
                                <Calendar
                                    onChange={setDateValue}
                                    value={dateValue}
                                    className="react-calendar"
                                />
                            </div>
                        </div>
                    </Col>

                    <Col className={'col-5'}>
                        <div className={'mt-4'}>
                            <p className={'reservation-info'}>원하시는 날짜와 인원수를 선택해주세요</p>
                        </div>
                        <Row className={'date-info'}>
                            <Col><span>날짜</span></Col>
                            <Col className={'text-right'}>{formatedDate}</Col>
                        </Row>
                        <Row className={'select-people-container'}>
                            <Col><span>인원수</span></Col>
                            <Col className={'text-right'}>
                            <select onChange={handleAmount} className={'select-number-of-people'}>
                                {options}
                            </select>
                            </Col>
                        </Row>
                        <Row>
                            <Col className={'col-4'}><span className={'all-price'}>총금액</span></Col>
                            <Col className={'col text-right'}><span className={'discount-price'}>{price}원</span></Col>
                        </Row>
                        <div className={'text-right mt-2'}>
                                <Button className={'text-white reservation-btn mb-2'} onClick={handleReservation}>
                                    예약하기
                                </Button>
                        </div>
                    </Col>

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
                                <Col className={'col-10'}>
                                    <div id="map" className={'map'}></div>
                                </Col>
                            </Col>
                            <div className={'addr-container mt-3'}><span>{classInfo.addr}</span></div>
                        </Row>
                    </div>
                </section>
                
                {/*최상단으로 이동*/}
                <div className="SettingView-module__layer_setting___JwfQs">
                    <a href="#" role="button" className="SettingView-module__btn_setting___Z_3Uu SettingView-module__type_top___GkN8V" aria-pressed="false">
                    <span className="blind">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                        </svg>
                    </span>
                    </a>
                </div>

            </div>
        </Container>
    );
}