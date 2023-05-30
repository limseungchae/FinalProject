import { useOutletContext } from 'react-router-dom';
import "./adminPage.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import React,{useState} from "react";
// import Button from 'react-bootstrap/Button';
import DataTable from "react-data-table-component";
import  {Accordion, Card } from "react-bootstrap";
import Img from '../../../assets/classimg2.png';


export default function ClassList() {
  const isActive = useOutletContext();

    const [activeIndex, setActiveIndex] = useState("0");

    const handleAccordionToggle = (index) => {
        setActiveIndex(index);
    };

  const columns = [
      {  name: 'NO.', selector: 'cno', sortable: true},
      {  name: '클래스명', selector: 'cname', sortable: true},
      {  name: '일정', selector: 'duration', sortable: true},
      {  name: '장소', selector: 'addr', sortable: true},
      {  name: '인원', selector: 'man', sortable: true},
      {  name: '가격', selector: 'price', sortable: true},
  ];

    const data = [
        {id:1, cno:1, cname:'뜨개뜨개 뜨개공방', duration:'5/24 ~ 6/24 주 1회 3시간', addr:'신도림', man:'3명', price:'50,000원' },
        {id:2, cno:2, cname:'뚝딱뚝딱 가구공방', duration:'5/24 8시간', addr:'신촌 Gongbang', man:'4명', price:'60,000원' },
    ];

    const columns1 = [
        {  name: '클래스 소개사진', selector: 'cimg1', sortable: true},
        {  name: '클래스 완성작', selector: 'cimg2', sortable: true},
        {  name: '커리큘럼', selector: 'cc', sortable: true},
        {  name: '카테고리', selector: 'category', sortable: true},
        {  name: '클래스명', selector: 'cname', sortable: true},
        {  name: '일정', selector: 'duration', sortable: true},
        {  name: '장소', selector: 'addr', sortable: true},
        {  name: '인원', selector: 'man', sortable: true},
        {  name: '가격', selector: 'price', sortable: true},
    ];

    const data1 = [
        {id:1, cimg1:1, cimg2:11, cc:'뜨개뜨개뜨개뜨개뜨개뜨개뜨개뜨개뜨개뜨개뜨개뜨개뜨개뜨개뜨개뜨개뜨개뜨개', category:'공예', cname:'뜨개뜨개 뜨개공방', duration:'5/24 ~ 6/24 주 1회 3시간', addr:'신도림', man:'3명', price:'50,000원' },
        {id:2, cimg1:2, cimg2:12, cc:'뚝딱뚝딱뚝딱뚝딱뚝딱뚝딱뚝딱뚝딱뚝딱뚝딱뚝딱뚝딱뚝딱뚝딱뚝딱뚝딱뚝딱뚝딱', category:'공예', cname:'뚝딱뚝딱 가구공방', duration:'5/24 8시간', addr:'신촌 Gongbang', man:'4명', price:'60,000원' },
    ];

    const columns2 = [
        {  name: '강사 사진', selector: 'timg', sortable: true},
        {  name: '강사 이름', selector: 'tname', sortable: true},
        {  name: '강사 나이', selector: 'age', sortable: true},
        {  name: '전공', selector: 'main', sortable: true},
        {  name: '연락처', selector: 'phone', sortable: true},
    ];

    const data2 = [
        {id:1, timg:'1', tname:'최춘자', age:'35', main:'퀼트', phone:'010-123-4567' },
        {id:2, timg:'2', tname:'최춘백', age:'28', main:'목공', phone:'010-123-4567' },
    ];



  return (
        <div className={`adminMain px-5 ${isActive}`}>


            <div className="adminBody mt-5 mx-3" >
                <Container>
                    <Row className="justify-content-start"  style={{padding:'5px 0' }}>
                        <Col style={{ }}>
                            <Row style={{width:'85%'}} className="align-items-center">
                                <h3>클래스 목록</h3>
                            </Row>
                        </Col>
                    </Row>
                    <br/>
                    <table style={{ width: '100%', textAlign: 'center' }}>
                        <thead>
                        <tr>
                            <th style={{ width: '5%' }}>NO.</th>
                            <th style={{ width: '29%' }}>클래스명</th>
                            <th style={{ width: '13%' }}>일정</th>
                            <th style={{ width: '15%' }}>장소</th>
                            <th style={{ width: '10%' }}>인원</th>
                            <th style={{ width: '35%' }}>가격</th>
                        </tr>
                        </thead>
                        </table>

                    <Accordion activeKey={activeIndex} onSelect={handleAccordionToggle}>
                        {data.map((row) => (
                            <Accordion.Item key={row.id} eventKey={row.id.toString()}>
                                <Accordion.Header>
                                    <DataTable columns={columns} data={[row]} noHeader noTableHead />
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col md={4}>
                                            <Card>
                                                <Card.Img variant="top" src={Img} alt="이미지dydy" />
                                                <Card.Body>
                                                    <DataTable columns={columns2} data={data2.filter((item) => item.id === row.id)} noHeader noTableHead />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={8}>
                                            <DataTable columns={columns1} data={data1.filter((item) => item.id === row.id)} noHeader noTableHead />
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>

                </Container>
            </div>
        </div>

  );
}