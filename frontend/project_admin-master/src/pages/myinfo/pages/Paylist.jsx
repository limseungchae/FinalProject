import React, { useState } from 'react';
import './Paylist.css';
import Table from 'react-bootstrap/Table';
import * as classmeta from "react-bootstrap/ElementChildren";
import axios from "axios";
import {FaCarrot} from "react-icons/fa";

export default function Paylist() {
    const [status, setStatus] = useState('');

    const handleCancel = () => {
        setStatus('예약취소');
    };


    return (
        <div className="container-fluid">
            <div className={"my-4"}>
                <h3><FaCarrot className={"mb-2"} style={{color:"#00C2AC"}}/> 결재내역</h3>
                <hr />
            </div>
            <Table striped bordered hover responsive variant="primary">
                <thead>
                <tr>
                    <th>클래스명</th>
                    <th>강사명</th>
                    <th>일정</th>
                    <th>인원</th>
                    <th>가격</th>
                    <th>결제일자</th>
                    <th>결제 상태</th>
                </tr>
                </thead>
                <tbody>
                {(cla => (
                    <tr>
                        <td>1111</td>
                        <td>1111</td>
                        <td>2023-05-30</td>
                        <td>1111</td>
                        <td>1111</td>
                        <td>2023-05-30</td>
                        <td>
                            {status ? (
                                '예약취소'
                            ) : (
                                <button onClick={handleCancel}>취소</button>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}
