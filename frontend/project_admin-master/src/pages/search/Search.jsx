import React, {useState} from 'react';
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
    console.log(search)

    const processSearch = () => {
        let param = `?search=${search}`
        console.log(param)
        axios.get(`http://localhost:8080/api/search${param}`)
            .then(response => setClassList(response.data))
            .catch(error => console.log(error))
    }

    return(
        <main>
            <SearchBar search={search} setSearch={setSearch} processSearch={processSearch}/>
            <Container>
                <Row>
                    <Col className="offset-xl-2 col-xl-8 mb-5">
                        <Row>
                            { (classList.length > 0) ? classList.map((array) => {
                                return(
                                    <Col className="col-xl-4 mt-4">
                                        <Link to={array[0]} style={{textDecoration:"none"}}>
                                            <Card border="light" className="mx-auto" style={{ width: '270px',color:"black" }}>
                                                <Card.Img variant="top" src={array[9]} width="100%" height="218px" />
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
        </main>
    )
}