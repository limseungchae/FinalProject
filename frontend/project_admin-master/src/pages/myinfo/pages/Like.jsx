import React, { useState, useEffect } from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";
import {HiLocationMarker} from "react-icons/hi";
import {ImStarEmpty, ImStarFull, ImStarHalf} from "react-icons/im";
import {FaCarrot} from "react-icons/fa";
import axios from "axios";
import {MdOutlineSearchOff} from "react-icons/md";

export default function Like(){
    const [likeList, setLikeList] = useState([]);

    useEffect(() => {
        let param = ``;
        axios.get(`http://localhost:8080/api/likey`)
            .then(response => setLikeList(response.data))
            .catch(error => console.log(error))
    }, []);

    return(
        <Container>
            <Row>
                <Col lg={10}>
                    <div className={"my-4"}>
                        <h3><FaCarrot className={"mb-2"}/> abc123님의 찜목록</h3>
                        <hr />
                    </div>
                    <Row>
                        { (likeList.length > 0) ? likeList.map((array) => {
                            return(
                                <Col className="col-xl-4 mt-4">
                                    <Link to={`/viewclass?link=${array[0]}`} style={{textDecoration:"none"}}>
                                        <Card border="light" className="mx-auto" style={{ width: '270px',color:"black" }}>
                                            <Card.Img variant="top" src={array[9]} width="100%" height="218px" />
                                            <Card.Body>
                                                <div className="d-flex py-1">
                                                    <div><HiLocationMarker className="fs-5 fw-light" /> <span style={{fontSize:"12px"}}>{array[3]} / {array[2]}</span></div>
                                                </div>
                                                <Card.Title className="fs-6 mb-0 fw-bold" style={{whiteSpace: "nowrap",overflow: "hidden", textOverflow: "ellipsis"}}>{array[1]}</Card.Title>
                                                <Card.Text>
                                                    <p className="mb-0" ><span className="text-warning"><ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarHalf /> <ImStarEmpty /></span> <span className="fw-light" style={{fontSize:"12px"}}>({array[6]})</span></p>
                                                    <p className="fw-bold text-end"><span className="text-danger">{Math.floor(array[7]*100)}% </span >{array[8].toLocaleString()}원</p>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                            )
                        }) : <Col className="col-xl-12 mt-4 text-center"><MdOutlineSearchOff style={{fontSize:"200px",color:"grey"}} /><p className="fw-bold h4">찜 목록이 없습니다</p></Col>
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

