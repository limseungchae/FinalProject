import React, {useState} from 'react';
import './SideNav.css';
import {RiFileListLine, RiQuestionAnswerLine, RiUser5Line} from "react-icons/ri";
import {BiChalkboard} from "react-icons/bi";
import {FaChalkboardTeacher} from "react-icons/fa";
import {IoStarHalf} from "react-icons/io5";
import {MdOutlineDashboard} from "react-icons/md";
import {TbPigMoney} from "react-icons/tb";
import {Link, useLocation } from "react-router-dom";

export default function SideNav({isActive, setIsActive}) {
    // 새로 고침시 초기화 되고 만다.
    const [activeLi, setActiveLi] = useState(0);
    const location = useLocation();
    let currUrl = location.pathname;

    const handleClick = () => {
        (isActive === '') ?  setIsActive('sidebar_active') : setIsActive('')
    };

    // navigation => sidebar_navigation
    // menuToggle => sidebar_menuToggle
    // list => sidebar_list
    // active => sidebar_active
    // icon => sidebar_icon
    // text => sidebar_text

    return (
    <>
    <div className={`sidebar_navigation ${isActive}`}>
      <div className={`sidebar_menuToggle`} onClick={handleClick}>
      </div>
        <ul>
            <li className={`sidebar_list ${(currUrl === '/admin' || currUrl ==="/admin/") ? 'sidebar_active' : ''}`}>
                <Link to="/admin">
                    <span className={`sidebar_icon`} style={{'--clr': '#f44336'}}>
                        <MdOutlineDashboard />
                    </span>
                    <span className={`sidebar_text`}>HOME</span>
                </Link>
            </li>
            <li className={`sidebar_list ${(currUrl === '/admin/myinfo' || currUrl === '/admin/myinfo/') ? 'sidebar_active' : ''}`}>
                <Link to="/admin/myinfo">
                    <span className={`sidebar_icon`} style={{'--clr': '#ffa117'}}>
                        <RiUser5Line />
                    </span>
                    <span className={`sidebar_text`}>나의 정보</span>
                </Link>
            </li>
            <li className={`sidebar_list ${activeLi === 2 ? 'sidebar_active' : ''}`}
                onClick={() => setActiveLi(2)}>
                <Link to="#">
                    <span className={`sidebar_icon`} style={{'--clr': '#0fc70f'}}>
                        <BiChalkboard />
                    </span>
                    <span className={`sidebar_text`}>공지사항 관리</span>
                </Link>
            </li>
            <li className={`sidebar_list ${activeLi === 3 ? 'sidebar_active' : ''}`}
                onClick={() => setActiveLi(3)}>
                <Link to="#">
                    <span className={`sidebar_icon`} style={{'--clr': '#2196f3'}}>
                        <FaChalkboardTeacher />
                    </span>
                    <span className={`sidebar_text`}>원데이클래스</span>
                </Link>
            </li>
            <li className={`sidebar_list ${activeLi === 4 ? 'sidebar_active' : ''}`}
                onClick={() => setActiveLi(4)}>
                <Link to="#">
                    <span className={`sidebar_icon`} style={{'--clr': '#7986cb'}}>
                       <RiQuestionAnswerLine />
                    </span>
                    <span className={`sidebar_text`}>문의 관리</span>
                </Link>
            </li>
            <li className={`sidebar_list ${activeLi === 5 ? 'sidebar_active' : ''}`}
                onClick={() => setActiveLi(5)}>
                <Link to="#">
                    <span className={`sidebar_icon`} style={{'--clr': '#b145e9'}}>
                        <IoStarHalf />
                    </span>
                    <span className={`sidebar_text`}>리뷰 관리</span>
                </Link>
            </li>
            <li className={`sidebar_list ${activeLi === 6 ? 'sidebar_active' : ''}`}
                onClick={() => setActiveLi(6)}>
                <Link to="#">
                    <span className={`sidebar_icon`} style={{'--clr': '#c5e1a5'}}>
                        <RiFileListLine />
                    </span>
                    <span className={`sidebar_text`}>판매 내역</span>
                </Link>
            </li>
            <li className={`sidebar_list ${activeLi === 7 ? 'sidebar_active' : ''}`}
                onClick={() => setActiveLi(7)}>
                <Link to="#">
                    <span className={`sidebar_icon`} style={{'--clr': '#e57373'}}>
                        <TbPigMoney />
                    </span>
                    <span className={`sidebar_text`}>정산 내역</span>
                </Link>
            </li>
        </ul>
    </div>
    </>
  );
}