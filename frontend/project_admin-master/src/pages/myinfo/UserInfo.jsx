import React from 'react';
import {Outlet} from "react-router-dom";
import Footer_2 from "../front/component/Footer_2";
import Header from "../front/component/Header";

// /myinfo/Xxx  myinfo이하 url들의 공통 부분을 정하는 곳

export default function UserInfo() {
  return (
    <>
        <Header />
        {/*<div style={{border:"1px solid #3B4CA8",height:"70px"}}>
            여기는 myinfoNAV자리, header와 합쳐 120px로 예상. 존재하지 않을 수도 있다.
        </div>*/}
        <Outlet />
        {/*<Footer_2 />*/}
    </>
  );
}