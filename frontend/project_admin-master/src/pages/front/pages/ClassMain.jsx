import React, {useEffect, useState} from 'react';
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
import {ImStarEmpty, ImStarFull, ImStarHalf} from "react-icons/im";
import axios from "axios";
import {Link} from "react-router-dom";
import {AiFillCaretDown} from "react-icons/ai";
import {MdOutlineSearchOff} from "react-icons/md";



export default function ClassMain() {
    const [classList, setClassList] = useState([]);
    const [category, setCategory] = useState("all");
    const [selectMenuActive, setSelectMenuActive] = useState("");
    const [area, setArea] = useState("지역선택")

    useEffect(() => {
        let param = `?category=${category}&sido=${area}`
        axios.get(`http://localhost:8080/api/main${param}`)
            .then(response => setClassList(response.data))
            .catch(error => console.log(error))
    }, [category, area]);

    function handleOnClick(e) {
        let value = e.currentTarget.getAttribute('value');
        setArea("지역선택")
        setCategory(value)
    }

    // 선택바 여는 함수
    const handleOpen = () => {
        if(selectMenuActive === ""){
            setSelectMenuActive("selectMenuActive");
        } else {
            setSelectMenuActive("");
        }
    };

    const handleSelect = (e) => {
        let area = e.currentTarget.getAttribute('value');
        setArea(area);
        if(selectMenuActive === "selectMenuActive") setSelectMenuActive("");

    };
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
                                <li className="px-3 pb-1 pt-2" style={{"--clr":"#fd7e14"}} value="all" onClick={handleOnClick}><img src={all} alt="all" /><p className={"mt-1"}>전체</p></li>
                                <li className="px-3 pb-1 pt-2" style={{"--clr":"#6c757d"}} value="15" onClick={handleOnClick}><img src={fitness} alt="fitness" /><p className={"mt-1"}>피트니스</p></li>
                                <li className="px-3 pb-1 pt-2" style={{"--clr":"#faad14"}} value="18" onClick={handleOnClick}><img src={cook} alt="cook" /><p className={"mt-1"}>요리</p></li>
                                <li className="px-3 pb-1 pt-2" style={{"--clr":"#f27781"}} value="19" onClick={handleOnClick}><img src={craft} alt="craft" /><p className={"mt-1"}>공예</p></li>
                                <li className="px-3 pb-1 pt-2" style={{"--clr":"#6f42c1"}} value="16" onClick={handleOnClick}><img src={music} alt="music" /><p className={"mt-1"}>음악</p></li>
                                <li className="px-3 pb-1 pt-2" style={{"--clr":"#52c41a"}} value="32" onClick={handleOnClick}><img src={art} alt="art" /><p className={"mt-1"}>미술</p></li>
                                <li className="px-3 pb-1 pt-2" style={{"--clr":"#e83e8c"}} value="11" onClick={handleOnClick}><img src={activity} alt="activity" /><p className={"mt-1"}>액티비티</p></li>
                                <li className="px-3 pb-1 pt-2" style={{"--clr":"#3B4CA8"}} value="0" onClick={handleOnClick}><img src={others} alt="others" /><p className={"mt-1"}>기타</p></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xl={2} />
                </Row>

                <Row>
                    <Col className="offset-xl-2 col-xl-8">
                        <div className={`mainSelectMenu ${selectMenuActive}`}>
                            <div className="mainSelectBtn" onClick={handleOpen}>
                                <span className="sBtnText">{area}</span><AiFillCaretDown />
                            </div>
                            <ul className="selectOptions mb-0">
                                <li className="selectOption" value="전체" onClick={handleSelect}><span className="optionText">전체</span></li>
                                <li className="selectOption" value="강원" onClick={handleSelect}><span className="optionText">강원</span></li>
                                <li className="selectOption" value="경기" onClick={handleSelect}><span className="optionText">경기</span></li>
                                <li className="selectOption" value="경남" onClick={handleSelect}><span className="optionText">경남</span></li>
                                <li className="selectOption" value="경북" onClick={handleSelect}><span className="optionText">경북</span></li>
                                <li className="selectOption" value="광주" onClick={handleSelect}><span className="optionText">광주</span></li>
                                <li className="selectOption" value="대구" onClick={handleSelect}><span className="optionText">대구</span></li>
                                <li className="selectOption" value="세종" onClick={handleSelect}><span className="optionText">세종</span></li>
                                <li className="selectOption" value="대전" onClick={handleSelect}><span className="optionText">대전</span></li>
                                <li className="selectOption" value="부산" onClick={handleSelect}><span className="optionText">부산</span></li>
                                <li className="selectOption" value="서울" onClick={handleSelect}><span className="optionText">서울</span></li>
                                <li className="selectOption" value="울산" onClick={handleSelect}><span className="optionText">울산</span></li>
                                <li className="selectOption" value="인천" onClick={handleSelect}><span className="optionText">인천</span></li>
                                <li className="selectOption" value="전남" onClick={handleSelect}><span className="optionText">전남</span></li>
                                <li className="selectOption" value="전북" onClick={handleSelect}><span className="optionText">전북</span></li>
                                <li className="selectOption" value="제주" onClick={handleSelect}><span className="optionText">제주</span></li>
                                <li className="selectOption" value="충남" onClick={handleSelect}><span className="optionText">충남</span></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>


            <Container className="mainCardContainer">
                <Row>
                    <Col className="offset-xl-2 col-xl-8 mb-5">
                        <Row>
                            { (classList.length > 0) ? classList.map((array) => {
                              return(
                                  <Col className="col-xl-4 mt-4">
                                      <Link to={`/viewclass?link=${array[0]}`} style={{textDecoration:"none"}}>
                                      <Card border="light" className="mx-auto" style={{ width: '270px',color:"black" }}>
                                          <Card.Img variant="top" src={array[9]} width="100%" height="218px" loading="lazy" />
                                          <Card.Body>
                                              <div className="d-flex py-1">
                                                  <div><HiLocationMarker className="fs-5 fw-light" /> <span style={{fontSize:"12px"}}>{array[3]} / {array[2]}</span></div>
                                              </div>
                                              <Card.Title className="fs-6 mb-0 fw-bold">{array[1]}</Card.Title>
                                              <Card.Text>
                                                  <p className="mb-0" ><span className="text-warning"><ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarHalf /> <ImStarEmpty /></span> <span className="fw-light" style={{fontSize:"12px"}}>({array[6]})</span></p>
                                                  <p className="fw-bold text-end"><span className="text-danger">{Math.floor(array[7]*100)}% </span >{array[8].toLocaleString()}원</p>
                                              </Card.Text>
                                          </Card.Body>
                                      </Card>
                                      </Link>
                                  </Col>
                              )
                            }) : <Col className="col-xl-12 mt-4 text-center"><MdOutlineSearchOff style={{fontSize:"200px",color:"grey"}} /><p className="fw-bold h4">검색 결과가 없습니다</p></Col>
                            }

                        </Row>
                    </Col>
                </Row>
            </Container>


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

        </>
    )
}

