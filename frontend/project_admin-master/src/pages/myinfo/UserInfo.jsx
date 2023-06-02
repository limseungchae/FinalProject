import React, { useState, useEffect, useRef } from 'react';
import { Nav } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import Header from "../front/component/Header";
import Footer from "../front/component/Footer";
import Footer_2 from "../front/component/Footer_2";

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
        <div>
            <Header /> {/* 여기에 헤더 컴포넌트 추가 */}
            <div className="container-fluid" style={{ maxWidth: '1200px' }}>
                <div className="row">
                    <div
                        ref={sidebarRef}
                        className={`col-lg-3 col-md-4 sidebar ${sidebarOpen ? 'open' : ''}`}
                        style={{ paddingLeft: '20px' }} // 원하는 만큼 왼쪽 패딩 조정
                    >
                        <div className="sidebar-toggle" onClick={toggleSidebar}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <Nav className="flex-column">
                            <Nav.Link href="/myinfo/profile">마이페이지 수정</Nav.Link>
                            <Nav.Link href="/myinfo/like">찜 목록</Nav.Link>
                            <Nav.Link href="/myinfo/paylist">결재내역</Nav.Link>
                        </Nav>
                    </div>
                    <div className="col-lg-9 col-md-8">
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer_2 />
        </div>
    );
}
