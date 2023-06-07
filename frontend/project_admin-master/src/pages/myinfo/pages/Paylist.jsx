import React, {useEffect, useState} from 'react';
import './Paylist.css';
import Table from 'react-bootstrap/Table';
import * as classmeta from "react-bootstrap/ElementChildren";
import axios from "axios";
import {FaCarrot} from "react-icons/fa";
import {useOutletContext} from "react-router-dom";

export default function Paylist() {
    /*const [status, setStatus] = useState('');*/
    const userInfo = useOutletContext();
    const [payList, setPayList] = useState([]);
    const kId = userInfo.kakaoid;


    // kId 서버 전송 => (서버) kId -> mbno 매핑 => 해당 mbno의 PAY데이터 get.
    // 경로: /api/paylist.
    useEffect(() => {
        const param = `?kId=${kId}`;
        axios
            .get(`${process.env.REACT_APP_SERVER_DOMAIN}/api/paylist${param}`)
            .catch(console.log)
            .then(response => {
                console.log(response?.data);
                setPayList(response?.data);
            });
    }, [kId])

    /*const handleCancel = () => {
        setStatus('예약취소');
    };*/


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
                {
                    (payList.length > 0) ?
                        payList.map(list => {
                            return (
                               <tr>
                                   <td>{list.cname}</td>
                                   <td></td>
                                   <td>{list.actdate}</td>
                                   <td>{list.quantity}</td>
                                   <td>{list.totprice}</td>
                                   {(list.paydate !== null) ? <td>{list.paydate}</td> : <td></td>}
                                   {(list.tid !== null) ? <td>결제완료</td> : <td>예약완료</td> }
                               </tr>
                            )
                        }) : <tr></tr>
                }


                {/*{(cla => (
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
                ))}*/}
                </tbody>
            </Table>
        </div>
    );
}
