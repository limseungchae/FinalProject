import React from 'react';
import {Outlet} from "react-router-dom";
import Footer_2 from "../front/component/Footer_2";

// /myinfo/Xxx  myinfo이하 url들의 공통 부분을 정하는 곳

export default function UserInfo() {
  return (
    <>
        <h1 style={{border:"1px solid #3B4CA8",margin:"0", color:"#3B4CA8"}}>엄클래스!</h1>
        {/*<div style={{border:"1px solid #3B4CA8",height:"70px"}}>
            여기는 myinfoNAV자리, header와 합쳐 120px로 예상. 존재하지 않을 수도 있다.
        </div>*/}
        <Outlet />
        {/*<Footer_2 />*/}
    </>
  );
}