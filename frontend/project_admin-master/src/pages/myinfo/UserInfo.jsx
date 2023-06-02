import React, { useState, useEffect, useRef } from 'react';
import {Col, Container, Nav, Row} from 'react-bootstrap';
import {Link, Outlet} from 'react-router-dom';

import Header from "../front/component/Header";
import Footer from "../front/component/Footer";
import Footer_2 from "../front/component/Footer_2";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";

export default function UserInfo() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setSidebarOpen(prevState => !prevState);
    };

    useEffect(() => {
        const handleWheelEvent = (event) => {
            if (sidebarOpen) {
                event.stopPropagation();
            }
        };

        const sidebarElement = sidebarRef.current;
        if (sidebarElement) {
            sidebarElement.addEventListener('wheel', handleWheelEvent, { passive: false });
        }

        return () => {
            if (sidebarElement) {
                sidebarElement.removeEventListener('wheel', handleWheelEvent);
            }
        };
    }, [sidebarOpen]);

    return (
        <>
            <Header /> {/* 여기에 헤더 컴포넌트 추가 */}
            <main>
                <Container>
                    <Row>
                        <Col lg={2} className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                            <div style={{height:"77px"}}>

                            </div>
                            <ul className="border border-1">
                                <li className="border-bottom py-2 ps-2"><Link to="/myinfo/modify">마이페이지 수정</Link></li>
                                <li className="border-bottom py-2 ps-2"><Link to="/myinfo/like">찜 목록</Link></li>
                                <li className="py-2 ps-2"><Link to="/myinfo/paylist">결재내역</Link></li>
                            </ul>
                        </Col>
                        <Col lg={10}>
                            <Outlet />
                        </Col>
                    </Row>
                </Container>
            </main>
            <Footer_2 />
        </>
    );
}
