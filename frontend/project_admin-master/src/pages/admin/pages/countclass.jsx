import React, { useState,useEffect,useRef } from 'react';

// import axios from 'axios';
import {RiFileListLine} from "react-icons/ri";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import 'react-calendar/dist/Calendar.css'
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button} from "react-bootstrap";
import { useOutletContext } from 'react-router-dom';
import "./adminPage.css"
import jQuery from "jquery";
import DataTableExtensions from 'react-data-table-component-extensions';
import DataTable from "react-data-table-component";
import 'react-data-table-component-extensions/dist/index.css';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net-responsive-dt/css/responsive.dataTables.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'datatables.net-buttons/js/dataTables.buttons';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import 'datatables.net-buttons/js/buttons.colVis';

window.$ = window.jQuery = jQuery;






export default function CountClass() {

    const columns = [
        {name: '결제일', selector: 'pdate', sortable: true},
        {name: '결제금액', selector: 'price', sortable: true},
        {name: '구매자', selector: 'name', sortable: true},
        {name: '연락처', selector: 'phone', sortable: true},
        {name: '클래스이름', selector: 'title', sortable: true},
        {name: '시작일', selector: 'sdate', sortable: true},
        {name: '종료일', selector: 'edate', sortable: true},
    ];

    const data = [
        {
            id: 1,
            pdate: '2023-05-29',
            price: '50000원',
            name: '박연진',
            phone: '010-123-4567',
            title: '마카롱 만들기',
            sdate: '2023-06-15',
            edate: '2023-06-15',
        },
        {
            id: 2,
            pdate: '2023-05-27',
            price: '50000원',
            name: '최혜정',
            phone: '010-123-4567',
            title: '마카롱 만들기',
            sdate: '2023-06-15',
            edate: '2023-06-15',
        },
        {
            id: 3,
            pdate: '2023-05-28',
            price: '50000원',
            name: '이사라',
            phone: '010-123-4567',
            title: '마카롱 만들기',
            sdate: '2023-06-15',
            edate: '2023-06-15',
        },
        {
            id: 4,
            pdate: '2023-05-28',
            price: '50000원',
            name: '전예솔',
            phone: '010-123-4567',
            title: '마카롱 만들기',
            sdate: '2023-06-15',
            edate: '2023-06-15',
        },
        {
            id: 5,
            pdate: '2023-05-27',
            price: '50000원',
            name: '문동은',
            phone: '010-123-4567',
            title: '마카롱 만들기',
            sdate: '2023-06-15',
            edate: '2023-06-15',
        },
        {
            id: 6,
            pdate: '2023-05-26',
            price: '50000원',
            name: '주여정',
            phone: '010-123-4567',
            title: '마카롱 만들기',
            sdate: '2023-06-15',
            edate: '2023-06-15',
        },
        {
            id: 7,
            pdate: '2023-05-25',
            price: '50000원',
            name: '하예솔',
            phone: '010-123-4567',
            title: '마카롱 만들기',
            sdate: '2023-06-15',
            edate: '2023-06-15',
        },
        {
            id: 8,
            pdate: '2023-05-30',
            price: '50000원',
            name: '손명오',
            phone: '010-123-4567',
            title: '마카롱 만들기',
            sdate: '2023-06-15',
            edate: '2023-06-15',
        },
        {
            id: 9,
            pdate: '2023-05-29',
            price: '50000원',
            name: '전재준',
            phone: '010-123-4567',
            title: '마카롱 만들기',
            sdate: '2023-06-15',
            edate: '2023-06-15',
        },
        {
            id: 10,
            pdate: '2023-05-29',
            price: '50000원',
            name: '하도영',
            phone: '010-123-4567',
            title: '마카롱 만들기',
            sdate: '2023-06-15',
            edate: '2023-06-15',
        },
        {
            id: 11,
            pdate: '2023-05-29',
            price: '50000원',
            name: '하도영',
            phone: '010-123-4567',
            title: '마카롱 만들기',
            sdate: '2023-06-15',
            edate: '2023-06-15',
        },
        {
            id: 12,
            pdate: '2023-05-29',
            price: '50000원',
            name: '하도영',
            phone: '010-123-4567',
            title: '마카롱 만들기',
            sdate: '2023-06-15',
            edate: '2023-06-15',
        },
        {
            id: 13,
            pdate: '2023-05-30',
            price: '50000원',
            name: '손명오',
            phone: '010-123-4567',
            title: '마카롱 만들기',
            sdate: '2023-06-15',
            edate: '2023-06-15',
        },
        {
            id: 14,
            pdate: '2023-05-29',
            price: '50000원',
            name: '하도영',
            phone: '010-123-4567',
            title: '마카롱 만들기',
            sdate: '2023-06-15',
            edate: '2023-06-15',
        },
        {
            id: 15,
            pdate: '2023-05-26',
            price: '50000원',
            name: '주여정',
            phone: '010-123-4567',
            title: '마카롱 만들기',
            sdate: '2023-06-15',
            edate: '2023-06-15',
        },
        {
            id: 16,
            pdate: '2023-05-29',
            price: '50000원',
            name: '하도영',
            phone: '010-123-4567',
            title: '마카롱 만들기',
            sdate: '2023-06-15',
            edate: '2023-06-15',
        },
        {
            id: 17,
            pdate:'2023-05-26',
            price: '50000원',
            name: '주여정',
            phone: '010-123-4567',
            title: '마카롱 만들기',
            sdate: '2023-06-15',
            edate: '2023-06-15',
        },
    ];

    // ===== react-datetime
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    // const [data, setData] = useState();

            const handleStartDateChange = (moment) => {
                setStartDate(moment);
            };

            const handleEndDateChange = (moment) => {
                setEndDate(moment);
            };

            const handleOutput = (event) => {
                console.log("Start Date:", startDate);
                console.log("End Date:", endDate);
                event.preventDefault()
            };


// 페이지네이션 상태 및 설정
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;

    // 현재 페이지에 해당하는 게시글 목록 계산
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    // 페이지 변경 처리
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


            const isActive = useOutletContext();

            const tableRef = useRef(null);

            useEffect(() => {
                if (tableRef.current) {
                    const table = tableRef.current;
                    const dataTable = window.$(table).DataTable({
                        columns,
                        data: currentPosts,
                        pagination: true,
                        paginationPerPage: postsPerPage,
                        paginationTotalRows: data.length,
                        onChangePage: handlePageChange,
                        searching: true,
                        dom: 'Bfrtip',
                        responsive: true,
                        lengthChange: false,
                        autoWidth: false,
                        buttons: ['Copy', 'CSV', 'Excel', 'PDF', 'Print', 'colvis'],
                    });
                    console.log(handlePageChange);
                    dataTable.buttons().container().appendTo(
                        window.$("#example1_wrapper .col-md-6:eq(0)")
                    );

                    return () => {
                        // Clean up DataTables instance if needed
                        dataTable.destroy();
                    };

            }}, [currentPosts]);


            const extensions = {
                filter: true,
                buttons: ['Copy', 'CSV', 'Excel', 'PDF', 'Print', 'colvis'],
            };


            // useEffect(() => {
            //     fetchData();
            // }, []);
            //
            // const fetchData = async () => {
            //     try {
            //         const response = await axios.get('/api/data'); // Replace with your API endpoint
            //         setData(response.data);
            //     } catch (error) {
            //         console.error('Error fetching data:', error);
            //     }
            // };

            return (
                <>
                    <div className={`adminMain px-5 ${isActive}`}>

                        <div id='adminHeader' className="mt-5">
                            <h1><RiFileListLine/> 정산 조회/신청 </h1>
                            <hr/>

                        </div>

                        <div className="adminBody mt-5 mx-3">
                            <Container>
                                <form onSubmit={handleOutput}>
                                    <Row>
                                        <Col xs={8}>
                                            <h1>정산 내역</h1></Col>
                                        <Col className="d-flex justify-content-end" xs={4}>
                                            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                                <ToggleButton id="tbg-radio-1" variant="outline-success"
                                                              value={1}>전체</ToggleButton>
                                                <ToggleButton id="tbg-radio-2" variant="outline-success"
                                                              value={2}>1개월</ToggleButton>
                                                <ToggleButton id="tbg-radio-3" variant="outline-success"
                                                              value={3}>1년</ToggleButton>
                                            </ToggleButtonGroup>
                                        </Col>

                                        <Col xs={{span: 4}}>
                                            <div>
                                                <label>조회 / 시작 일자</label>
                                                <DateTime value={startDate} onChange={handleStartDateChange}/>
                                            </div>
                                        </Col>
                                        <Col xs={4}>
                                            <div>
                                                <label>조회 / 마지막 일자 </label>
                                                <DateTime value={endDate} onChange={handleEndDateChange}/>
                                            </div>
                                        </Col>
                                        <Col xs={4}>
                                            <div>
                                                <label>조회 / 클래스 이름 </label>
                                                <input className="form-control" type="text" id="title"/>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-center">
                                        <Col xs={12} className="d-flex justify-content-center mt-3">
                                            <div>
                                                <Button variant="primary" type="submit">조회</Button>
                                                {' '}
                                                <Button variant="danger" type="reset" className="ml-2">초기화</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </form>
                                <hr/>

                                <Row>

                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            {/*해당 부분에 데이터베이스 사용시 map으로 결과 출력*/}
                                            <Accordion.Header>(클래스 이름) : 기간 / , 신청 인원(환불 미포함) / , 총 매출 / , 정산 금액
                                                / </Accordion.Header>
                                            <Accordion.Body>
                                                <DataTableExtensions {...extensions}  columns={columns} data={data}>
                                                    <DataTable  pagination={true}>
                                                        <tbody>
                                                        {data.map((row) => (
                                                            <tr key={row.id}>
                                                                <td>{row.pdate}</td>
                                                                <td>{row.price}</td>
                                                                <td>{row.name}</td>
                                                                <td>{row.phone}</td>
                                                                <td>{row.title}</td>
                                                                <td>{row.sdate}</td>
                                                                <td>{row.edate}</td>
                                                            </tr>
                                                        ))}
                                                        </tbody>
                                                    </DataTable>
                                                </DataTableExtensions>


                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>

                                </Row>
                            </Container>
                        </div>
                    </div>
                </>
            );
        }