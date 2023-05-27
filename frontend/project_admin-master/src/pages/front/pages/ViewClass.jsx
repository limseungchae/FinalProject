import React, {useEffect, useState} from 'react';
import {Col, Row, Image, Container, Button} from "react-bootstrap";
import "./ViewClass.css"
import sample  from '../../../assets/sample.png';
import {BsSearch, BsStarFill} from 'react-icons/bs';
import {BsWifi} from 'react-icons/bs';
import {BsFillGiftFill} from 'react-icons/bs';
import {BsFillInfoCircleFill} from 'react-icons/bs';
import {FiMapPin} from 'react-icons/bs';
import InputGroup from "react-bootstrap/InputGroup";

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
    const [date, setDate] = useState(new Date());

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

        // Clean up event listeners when the component unmounts
        return () => {
            prevDay.removeEventListener('click', handlePrevDayClick);
            nextDay.removeEventListener('click', handleNextDayClick);
        };
    }, [date]); // Empty dependency array ensures the effect runs only once on component mount


    return (
        <Container className="viewClassContainer">
            <div className="offset-1 col-10 viewClassSubContainer">
                <div className={'viewClassInfo'}>

                <Row className="align-items-stretch">
                    <Col>
                        <Image src={sample} className={"w-100"}></Image>
                    </Col>

                    <Col className={'top-right'}>
                        <Row className={'top1'}>
                            <div className={'start-align'}>
                                <span className={'sigu'}>캔들(강남구/서울)</span>
                            </div>
                            <h2>[서울 삼성동] 바다캔들홀더, 티라이트 2개 만들기</h2>
                        </Row>

                        <Row className={'top2'}>
                            <Col className={'col-4'}>
                                <div><h5>소요시간</h5></div>
                                <h4 className={'class-infomation'}>01시간 30분</h4>
                            </Col>
                            <Col className={'col-4'}>
                                <div><h5>수강인원</h5></div>
                                <h4 className={'class-infomation'}>1:1 수업</h4>
                            </Col>
                            <Col>
                                <div><h5>횟수</h5></div>
                                <h4 className={'class-infomation'}>총 1회</h4>
                            </Col>
                        </Row>

                        <Row className={'schedule'}>
                            <Col className={'col-1'}><span><BsFillInfoCircleFill/></span></Col>
                            <Col className={'col'}><span>해당 클래스는 일정 협의가 필요한 클래스 입니다. 일정 협의 후 신청해주세요.</span></Col>
                        </Row>

                        <Row className={'tcProfile'}>
                            <Col className={'col-2 mt-2'}>
                                <div className={'teacher-img'}></div>
                            </Col>
                            <Col className={'mt-3'}>
                                <div><span className={'tcname'}>'강사명'</span></div>
                                <div className={'teacher-rating'}>
                                    <span className={'star-span'}><BsStarFill className={'star'}/>&nbsp;</span>
                                    <span className={'avg-rating'}>5.0</span>
                                    <span>&nbsp;</span>
                                    <span className={'count-rating'}>(51)</span>
                                </div>
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
                                <Col className={'col-2'}><span className={'discount-pct text-danger'}>96%</span></Col>
                                <Col className={'col-2'}><span className={'list-price text-dark opacity-50'}>100,000</span></Col>
                                <Col className={'col-3'}><span className={'discount-price'}>4,000원</span></Col>
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
                                일정협의가 필요한 클래스 입니다. 일정협의 후 신청해주세요<br/><br/>

                                안녕하세요! 리우캔들입니다.<br/>
                                리우캔들은 KCCA 소속 산하 정식 교육기관으로 체계적인 커리큘럼을 통해 나만의 수제캔들을 완성할 수 있습니다.<br/><br/>

                                마음속의 바다 캔들홀더~시원한 바다캔들을 소개드려요.<br/>
                                시원한 바다속 풍경을 상상하며 젤캔들을 만들어 보세요:)<br/>
                                미니미의 귀여운바다캔들 홀더의 인기<br/><br/><br/>


                                바다에 맞게 다양한 피규어와 조개 모래를 이용하여 데코하고<br/>
                                컬러를 넣어~ 그라데이션한 리얼 바다를 만들어 보는 시간이에요.<br/><br/>

                                세상에 하나밖에 없는 바다~<br/><br/>

                                티라이트를 넣어 켜는 홀더형 젤캔들로 영구적으로 사용가능합니다.<br/><br/>

                                취향에 맞게 향선택후 티라이트 2ea만드실수 있습니다.<br/><br/>

                                10가지 이상의 향보유로 취향에 맞게 멋지게 만들어요.<br/><br/>

                                인테리어 소품으로 강추<br/><br/>

                                - 1:1수업을 원칙으로 하되, 친구 ,가족, 연인 은 ok!<br/>
                                - 최대5까지 함께 수업이 가능합니다.<br/>
                                수업을 통해 나를 위한 힐링 !<br/>
                                나와 사랑하는 사람을 위한 선물같은 시간을 가져보세요.
                                </span>
                            </div>
                        </div>

                        <hr/>
                        <span className="class-info-title">준비물</span>
                        <div>필요한 준비물은 모두 제공해드립니다.</div>

                        <hr/>
                        <span className="class-info-title">편의시설</span>
                        <Row className={'convenience'}>
                            <Col className={'col-1'}>
                                <Col className={'col BsWifi'}><BsWifi/></Col>
                                <Col className={'col convenience-icon'}>와이파이</Col>
                            </Col>
                            <Col className={'col-1'}>
                                <Col className={'col BsFillGiftFill'}><BsFillGiftFill/></Col>
                                <Col className={'col convenience-icon'}>포장가능</Col>
                            </Col>
                        </Row>

                        <hr/>
                        <span className="class-info-title">이용 규정</span>
                        <div>
                                <span className="voucher-contents-font rule">
                                    모든 수업은 100% 예약제 입니다. 원하는 날짜, 시간, 수강인원을 결제 전 미리 문의해주세요<br/><br/>
                                    [움클래스 할인 이벤트] 움클래스로 수강신청하면 클래스 5% 할인!<br/><br/>
                                    당일취소는 불가합니다. 수업전 미리 수업을 준비해주세요.
                                </span>
                        </div>

                        <hr/>

                        <span className="class-info-title">일정 공지</span>
                        <div>
                                <span className="voucher-contents-font notification">
                                    따로 정해저있는 수업시간이 없습니다.<br/>
                                    최대한 수강생의 시간에 마춰드리고 있습니다.
                                </span>
                        </div>

                        <hr/>

                        <span className="class-info-title">커리큘럼</span>
                        <div>
                            <span className={'curriculumIcon'}></span>
                            <span>1 단계:[수업 설명 및 재료안내]</span>
                            <div className="curriculum-line">
                                <div className={'offset-1'}>
                                <span className="voucher-contents-font">
                                    제작에 앞서 제작할 작품 소개 및 재료안내를 합니다.
                                </span>
                                </div>
                            </div>
                        </div>
                        <hr/>

                        <Row>
                            <Col><span className="class-info-title">클래스 완성작</span></Col>
                            <Row className="voucher-completed-img">
                                <Col className="col-6">
                                    <div className={'class-completed-img'}></div>
                                </Col>
                                <Col className="col-6">
                                    <div className={'class-completed-img'}></div>
                                </Col>
                            </Row>
                            <Row className="voucher-completed-img">
                                <Col className="col-6">
                                    <div className={'class-completed-img'}></div>
                                </Col>
                                <Col className="col-6">
                                    <div className={'class-completed-img'}></div>
                                </Col>
                            </Row>
                        </Row>


                        <hr/>
                        <Row>
                            <div><span className="class-info-title">장소</span></div>
                            <Col className={'col mt-3'}>
                                <Col className={'col-8'}><div className={'bg-dark bg-opacity-25 map'}></div></Col>
                            </Col>
                            <div className={'addr-container mt-3'}><span><BsStarFill/> 서울특별시 강남구 삼성동 11-2</span></div>
                        </Row>

                        <Row>
                            <Col className={'col-6'}>
                                <Row className={'mt-3'}>
                                    <Col className={'col-4'}><Button className={'map-btn'}>지도보기</Button></Col>
                                    <Col className={'col-4'}><Button className={'map-btn'}>주소복사</Button></Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr/>
                        <span className="class-info-title">'강사명'의 다른 수강권 구경하기</span>
                    </div>
                </section>


            </div>
        </Container>
    );
}