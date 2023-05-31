import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Reservation.css"

export default function Reservation () {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="me-2">
                bottom
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement={"bottom"} name={"bottom"}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>예약하기</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    예약하기 자리
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );

}