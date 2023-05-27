import React from 'react';
import { useOutletContext } from 'react-router-dom';
import "./adminPage.css"
import {MdOutlineDashboard} from "react-icons/md";
export default function Home() {
  const isActive = useOutletContext();

  return (
        <div className={`adminMain px-5 ${isActive}`}>

            <div id='adminHeader' className="mt-5">
                <h1><MdOutlineDashboard /> HOME</h1>
                <hr />
            </div>

            <div className="adminBody mt-5 mx-3" >
                <p>본문이 시작됩니다.</p>
            </div>
        </div>

  );
}