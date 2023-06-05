import React, { useState } from 'react';
import './Paylist.css';
import Table from 'react-bootstrap/Table';
import * as classmeta from "react-bootstrap/ElementChildren";
import axios from "axios";

export default function Paylist() {
    const [status, setStatus] = useState('');

    const handleCancel = () => {
        setStatus('예약취소');
    };


    return (
        <div className="container-fluid">
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
