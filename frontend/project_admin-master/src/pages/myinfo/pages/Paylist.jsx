import React, {useEffect, useState} from 'react';
import './Paylist.css';
import Table from 'react-bootstrap/Table';
import * as classmeta from "react-bootstrap/ElementChildren";
import axios from "axios";
import {FaCarrot} from "react-icons/fa";
import {useNavigate, useOutletContext} from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';

export default function Paylist() {
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    /*const [status, setStatus] = useState('');*/
    const userInfo = useOutletContext();
    const [rows, setRows] = useState([{
        id:0
    }]);
    const kId = userInfo.kakaoid;
    const navigate = useNavigate();


    // kId 서버 전송 => (서버) kId -> mbno 매핑 => 해당 mbno의 PAY데이터 get.
    // 경로: /api/paylist.
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_SERVER_DOMAIN}/api/paylist`, {
                headers: {Authorization: `Bearer ${accessToken}`},
            })
            .catch(console.log)
            .then(response => {
                if(response?.data !== null) {
                    let data = response?.data;
                    let rows = []
                    // id, cname, tuter, quantity, totprice, paydate, tid
                    for(let i = 0; data?.length > i; i++) {
                        console.log("가져온 = > " + data[i].tid)
                        let row = {
                            id: data[i].rno,
                            mbno: data[i].mbno,
                            cname: data[i].cname,
                            tuter: "없음",
                            actdate: data[i].actdate,
                            quantity: data[i].quantity,
                            totprice: data[i].totprice,
                            paydate: data[i].paydate?.split('T')[0],
                            tid: (data[i].tid !== null) ? "결제완료" : "결제하기",
                        }
                        console.log("tid  =>   " + row.tid);
                        rows.push(row)
                    }
                    setRows(rows)
                }
            });
    }, [kId])

    /*const handleCancel = () => {
        setStatus('예약취소');
    };*/

    const columns = [
        {
            field: 'cname',
            headerName: '클래스',
            width: 420,
            headerAlign: 'center',
            renderCell: (params) => {
                const cname = params.value;
                return <div className="fw-bold">{cname}</div>
            },
        },
        { field: 'tuter', headerName: '강사명', width: 100 },
        { field: 'actdate', headerName: '일정', width: 100 },
        {
            field: 'quantity',
            headerName: '인원',
            width: 100,
        },
        {
            field: 'totprice',
            headerName: '가격',
            /*description: 'This column has a value getter and is not sortable.',*/
            /*sortable: false,*/
            width: 100,
            valueFormatter: (params) => {
                const formattedPrice = new Intl.NumberFormat('en-US').format(params.value);
                return `${formattedPrice}원`;
            },
            /*valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,*/
        },
        {
            field: 'paydate',
            headerName: '결제일자',
            width: 130,
        },
        {
            field: 'tid',
            headerName: '상태',
            width: 80,
            renderCell: (params) => {
                const tid = params.value;
                const rno = params.id;
                const mbno = params.row.mbno;
                if (tid === '결제완료') {
                    return <div style={{color:"#18298c"}}>{tid}</div>;
                } else if (tid === '결제하기') {
                    return <div style={{  color: '#f29f05', cursor:"pointer" }} onClick={() => {
                        navigate(`/payclass?rno=${rno}&mbno=${mbno}`)
                    }}>{tid}</div>;
                }
            },
        }
    ];


    return (
        <div className="container-fluid">
            <div className={"my-4"}>
                <h3><FaCarrot className={"mb-2"} style={{color:"#00C2AC"}}/> 예약내역</h3>
                <hr />
            </div>
            <div style={{ height: "100%", width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSizeOptions={[5, 10]}
                />
            </div>
            {/*<Table striped bordered hover responsive>
                <thead >
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
                    (rows?.length > 0) ?
                        rows?.map(list => {
                            return (
                               <tr>
                                   <td>{list.cname}</td>
                                   <td></td>
                                   <td>{list.actdate}</td>
                                   <td>{list.quantity}</td>
                                   <td>{list.totprice}</td>
                                   {(list.paydate !== null) ? <td>{list.paydate}</td> : <td></td>}
                                   {(list.tid !== null) ? <td>결제완료</td> : <td>예약성공</td> }
                               </tr>
                            )
                        }) : <tr></tr>
                }
                </tbody>
            </Table>*/}
        </div>
    );
}