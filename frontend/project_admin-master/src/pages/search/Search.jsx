import React, {useEffect, useState} from 'react';
import SearchBar from "./component/SearchBar";
import {Col, Container, Row} from "react-bootstrap";
import {AiFillCaretDown} from "react-icons/ai";
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";
import {HiLocationMarker} from "react-icons/hi";
import {ImStarEmpty, ImStarFull, ImStarHalf} from "react-icons/im";
import {MdOutlineSearchOff} from "react-icons/md";
import axios from "axios";
import Reservation from "../front/component/Reservation";

export default function Search() {
    const [classList, setClassList] = useState([]);
    const [search, setSearch] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = document.documentElement.scrollTop;
            setIsVisible(scrollPosition > 250);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const processSearch = () => {
        let param = `?search=${search}`
        console.log(param)
        axios.get(`http://localhost:8080/api/search${param}`)
            .then(response => setClassList(response.data))
            .catch(error => console.log(error))
    }

    const handleScroll = () => {
        window.scrollTo(0, 0);
    };

    return(
        <main>
            <SearchBar search={search} setSearch={setSearch} processSearch={processSearch}/>
            <Container>
                <Row>
                    <Col className="offset-xl-2 col-xl-8 mb-5">
                        <Row>
                            { (classList.length > 0) ? classList.map((array, index) => {
                                return(
                                    <Col className="col-xl-4 mt-4" key={index}>
                                        <Link to={`/viewclass?link=${array[0]}`} onClick={handleScroll} style={{textDecoration:"none"}}>
                                            <Card border="light" className="mx-auto" style={{ width: '270px',color:"black" }}>
                                                <Card.Img variant="top" src={array[9]} width="100%" height="218px" />
                                                <Card.Body>
                                                    <div className="d-flex py-1">
                                                        <div><HiLocationMarker className="fs-5 fw-light" /> <span style={{fontSize:"12px"}}>{array[3]} / {array[2]}</span></div>
                                                    </div>
                                                    <Card.Title className="fs-6 mb-0 fw-bold w-100" style={{whiteSpace: "nowrap", overflow:"hidden",textOverflow:"ellipsis"}}>{array[1]}</Card.Title>
                                                    <Card.Text>
                                                        <span className="mb-0" style={{display:"block"}}><span className="text-warning"><ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarHalf /> <ImStarEmpty /></span> <span className="fw-light" style={{fontSize:"12px"}}>({array[6]})</span></span>
                                                        <span className="fw-bold text-end" style={{display:"block"}}><span className="text-danger">{Math.floor(array[7]*100)}% </span >{array[8].toLocaleString()}원</span>
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
            <div className="SettingView-module__layer_setting___JwfQs" style={isVisible ? {display:"block"} : {display: "none"} } id="topBar">
                <a href="#" role="button" className="SettingView-module__btn_setting___Z_3Uu SettingView-module__type_top___GkN8V" aria-pressed="false">
                    <span className="blind">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                        </svg>
                    </span>
                </a>
            </div>
        </main>
    )
}