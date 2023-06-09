import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import DataTable from "react-data-table-component";
import { Accordion, Button, Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";




export default function ClassList() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [data1, setData1] = useState([]);
    const [title, setTitle] = useState('');


    const handleAccordionToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

  const columns = [
      {  name: 'NO.', selector: 'cno', sortable: true},
      {  name: '클래스명', selector: 'title', sortable: true},
      // {  name: '일정', selector: 'durat', sortable: true},
      // {  name: '장소', selector: 'ADDR', sortable: true},
      // {  name: '인원', selector: 'man', sortable: true},
      {  name: '가격', selector: 'price', sortable: true},
  ];


    const columns1 = [
        // {  name: '소개사진', selector: 'cimg', sortable: true},
        // {  name: '썸네일', selector: 'thumb', sortable: true},
        {  name: '클래스명', selector: 'title', sortable: true},
        {  name: '카테고리', selector: 'category', sortable: true},
        {  name: '해시태그', selector: 'hash', sortable: true},
        {  name: '소개글', selector: 'intro', sortable: true},
        {  name: '준비물', selector: 'meterial', sortable: true},
        {  name: '사전공지', selector: 'rules', sortable: true},
        {  name: '이용규칙', selector: 'notice', sortable: true},
        {  name: '시작일', selector: 'sdate', sortable: true},
        {  name: '종료일', selector: 'edate', sortable: true},
        {  name: '일정', selector: 'durat', sortable: true},
        {  name: '시작시간', selector: 'ctime', sortable: true},
        {  name: '장소', selector: 'addr', sortable: true},
        {  name: '인원', selector: 'man', sortable: true},
        {  name: '가격', selector: 'price', sortable: true},
    ];


    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `http://localhost:8080/api/data?title=${title}`;
                const response1 = await axios.get(url);
                const responseData1 = response1.data;
                const updatedData1 = responseData1.map((item) => {
                    const fileName = item.cimg.split('/').pop(); // cimg 파일 이름 추출
                    const thumbName = item.thumb.split('/').pop(); // thumb 파일 이름 추출
                    const timgName = item.timg.split('/').pop(); // timg 파일 이름 추출

                    return {
                        cno: item.cno,
                        cimg: fileName,
                        thumb: thumbName,
                        timg: timgName,
                        title: item.title,
                        category: item.category,
                        hash: item.hash,
                        intro: item.intro,
                        meterial: item.meterial,
                        rules: item.rules,
                        notice: item.notice,
                        sdate: item.sdate,
                        edate: item.edate,
                        durat: item.durat,
                        ctime: item.ctime,
                        addr: item.addr,
                        man: item.man,
                        price: item.price,
                    };
                });
                setData1(updatedData1);
            } catch (error) {
                console.error('데이터를 가져오는 중 오류가 발생했습니다.', error);
            }
        };
        fetchData();
    }, []);

    const handleDelete = (cno) => {
        axios.delete(`http://localhost:8080/api/delete/${cno}`)
            .then(response => {
                console.log('Data deleted successfully');
                // 추가적인 처리나 화면 갱신 등 필요한 작업 수행
                window.location.reload();
            })
            .catch(error => {
                console.error('Error deleting data:', error);
                // 에러 처리 로직
            });
    };

    const handleClick = (cno) => {
        window.location.href = `/myinfo/update?cno=${cno}`;
        // 페이지 전환 로직 또는 필요한 작업 수행
    };

    return (
        <div>
                <input type="hidden" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <div className="adminBody mt-5 mx-3" >
                <Container>
                    <Row className="justify-content-start"  style={{padding:'5px 0' }}>
                        <Col>
                            <Row style={{width:'85%'}} className="align-items-center">
                                <h3>클래스 목록</h3>
                            </Row>
                        </Col>
                    </Row>
                    <br/>
                    <Accordion activeKey={activeIndex} onSelect={handleAccordionToggle}>
                        {data1.map((row, index) => (
                            <Accordion.Item key={row.cno} eventKey={index.toString()}>
                                <Accordion.Header>
                                    <DataTable columns={columns} data={[row]} />
                                    <Button onClick={() => handleDelete(row.cno)}>삭제</Button>
                                    <Link to={`/classes/${row.cno}/edit`}>
                                    <Button onClick={() => handleClick(row.cno)}>수정</Button></Link>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Card>
                                        <Card.Img variant="left" src={`http://localhost/cdn/${row.cimg}`} alt="클래스 소개사진" />
                                        <Card.Img variant="left" src={`http://localhost/cdn/${row.thumb}`} alt="클래스 썸네일" />
                                        <Card.Img variant="left" src={`http://localhost/cdn/${row.timg}`} alt="클래스 타임라인 이미지" />
                                        <Card.Body>
                                            <Table>
                                                <tbody>
                                                {Object.entries(row).map(([key, value]) => {
                                                    const column = columns1.find((col) => col.selector === key);
                                                    if (column) {
                                                        let transformedValue = value;
                                                        if (key === "durat") {
                                                            const { activeItem1, activeItem2, activeItem3 } = JSON.parse(value);
                                                            transformedValue = `${activeItem1} ${activeItem2} 주 ${activeItem3}`;
                                                        }
                                                        if(key==="man"){
                                                            const { activeItem4, activeItem5 } = JSON.parse(value);
                                                            transformedValue = `최소 인원 : ${activeItem4}, 최대 인원 : ${activeItem5}`;
                                                        }
                                                        if(key === "addr"){
                                                            const { addr1, addr2 } = JSON.parse(value);
                                                            transformedValue = `${addr1} ${addr2}`;
                                                        }
                                                        return (
                                                            <tr key={key}>
                                                                <td>{column.name}</td>
                                                                <td>{transformedValue}</td>
                                                            </tr>
                                                        );
                                                    }
                                                    return null;
                                                })}
                                                </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Container>
            </div>
        </div>

  );
}