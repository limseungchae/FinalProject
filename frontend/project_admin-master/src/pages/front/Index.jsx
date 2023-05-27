import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from "../front/component/Footer";
import Footer_2 from "./component/Footer_2";
import Header from "./component/Header";

export default function Index() {
  return (
    <>
      {/*<h1 style={{border:"1px solid #3B4CA8",margin:"0", color:"#3B4CA8"}}>엄클래스!</h1>*/}
      <Header />
      <Outlet />
      <Footer_2 />
    </>
  );
}