import { useOutletContext } from 'react-router-dom';
import "./adminPage.css"
import {FaBabyCarriage, FaChalkboardTeacher, FaShower, FaWifi} from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Calendar from "react-calendar";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import {RiParkingBoxLine} from "react-icons/ri";
import {GiLockers, GiSodaCan} from "react-icons/gi";
import {MdOutlinePets} from "react-icons/md";
import {GoPackage} from "react-icons/go";
import {IoLogoYoutube} from "react-icons/io";
import {BsInstagram} from "react-icons/bs";
import Container from "react-bootstrap/Container";
import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export default function AddClass() {
  const isActive = useOutletContext();
    const [activeItem, setActiveItem] = useState('');
    const [activeItem1, setActiveItem1] = useState('');
    const [activeItem2, setActiveItem2] = useState('');
    const [activeItem3, setActiveItem3] = useState('');
    const [activeItem4, setActiveItem4] = useState('');
    const [activeItem5, setActiveItem5] = useState('');
    const [text, setText] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [show, setShow] = useState(false);
    const [selectedRange, setSelectedRange] = useState([null, null]);
    const [isInitialRender, setIsInitialRender] = useState(true);
    const [startDate, endDate] = selectedRange;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        text: '',
    });



    const items = [
        { key: 1, label: '베이킹' },
        { key: 2, label: '헬스' },
        { key: 3, label: '엑티비티' },
        { key: 4, label: '주조/칵테일' },
        { key: 5, label: '핸드드립' },
        { key: 6, label: '미술' },
        { key: 7, label: '음악' },
        { key: 8, label: '요리' },
    ];


    const items1 = [
        { key: 1, label: '00시간' },
        { key: 2, label: '01시간' },
        { key: 3, label: '02시간' },
        { key: 4, label: '03시간' },
        { key: 5, label: '04시간' },
        { key: 6, label: '05시간' },
        { key: 7, label: '06시간' },
        { key: 8, label: '07시간' },
        { key: 9, label: '08시간' },
    ];


    const items2 = [
        { key: 1, label: '00분' },
        { key: 2, label: '05분' },
        { key: 3, label: '10분' },
        { key: 4, label: '15분' },
        { key: 5, label: '20분' },
        { key: 6, label: '25분' },
        { key: 7, label: '30분' },
        { key: 8, label: '35분' },
        { key: 9, label: '40분' },
        { key: 10, label: '45분' },
        { key: 11, label: '50분' },
        { key: 12, label: '55분' },
    ];

    const items3 = [
        { key: 1, label: '1회' },
        { key: 2, label: '2회' },
        { key: 3, label: '3회' },
        { key: 4, label: '4회' },
        { key: 5, label: '5회' },
        { key: 6, label: '6회' },
        { key: 7, label: '7회' },
    ];

    const items4 = [
        { key: 1, label: '1명' },
        { key: 2, label: '5명' },
        { key: 3, label: '10명' },
        { key: 4, label: '15명' },
        { key: 5, label: '20명' },
        { key: 6, label: '25명' },
        { key: 7, label: '30명' },
        { key: 8, label: '30명 이상' },
    ];

    const items5 = [
        { key: 1, label: '1명' },
        { key: 2, label: '5명' },
        { key: 3, label: '10명' },
        { key: 4, label: '15명' },
        { key: 5, label: '20명' },
        { key: 6, label: '25명' },
        { key: 7, label: '30명' },
        { key: 8, label: '30명 이상' },
    ];






    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    const handleImageChange = (event) => {
        setSelectedImage(event.target.files[0]);
    };

    const handleUpload = async () => {
        try {
            if (selectedImage) {
                const formData = new FormData();
                formData.append('image', selectedImage);

                const response = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    // Image uploaded successfully
                    console.log('Image uploaded successfully');
                } else {
                    // Error occurred during upload
                    console.error('Failed to upload image');
                }
            }
        } catch (error) {
            console.error(error);
        }
    };




    const handleDateChange = (date) => {
        setSelectedRange(date);
    };



    useEffect(() => {
        const handleOutput1 = () => {
            const [startDate1, endDate1] = selectedRange;
            if (startDate1 !== null && endDate1 !== null) {
                console.log('Start Date:', startDate1);
                console.log('End Date:', endDate1);
            }
        };

        if (!isInitialRender) {
            handleOutput1(selectedRange);
        } else {
            setIsInitialRender(false);
        }
    }, [selectedRange, isInitialRender]); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때 한 번만 실행되도록 설정




    const handleClick = (eventKey) => {
        const selectedItem = items.find((item) => item.key === parseInt(eventKey));
        if (selectedItem) {
            setActiveItem(selectedItem.label);
        }
    };

    const handleClick1 = (eventKey1) => {
        const selectedItem1 = items1.find((item) => item.key === parseInt(eventKey1));
        if (selectedItem1) {
            setActiveItem1(selectedItem1.label);
        }
    };

    const handleClick2 = (eventKey2) => {
        const selectedItem2 = items2.find((item) => item.key === parseInt(eventKey2));
        if (selectedItem2) {
            setActiveItem2(selectedItem2.label);
        }
    };

    const handleClick3 = (eventKey3) => {
        const selectedItem3 = items3.find((item) => item.key === parseInt(eventKey3));
        if (selectedItem3) {
            setActiveItem3(selectedItem3.label);
        }
    };

    const handleClick4 = (eventKey4) => {
        const selectedItem4 = items4.find((item) => item.key === parseInt(eventKey4));
        if (selectedItem4) {
            setActiveItem4(selectedItem4.label);
        }
    };

    const handleClick5 = (eventKey5) => {
        const selectedItem5 = items5.find((item) => item.key === parseInt(eventKey5));
        if (selectedItem5) {
            setActiveItem5(selectedItem5.label);
        }
    };

    const handleChange = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 1000) {
            setText(inputValue);
        }
    };

    const waringtext = text.length < 100  || text.length > 1000 ;

    const handleOutput = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
        event.preventDefault()
    };



    const handleFormReset = () => {
        setFormData({
            // 폼 데이터를 초기화하는 코드를 작성하세요
            name: '',
            email: '',
            text : '',
        });
    };


  return (
        <div className={`adminMain px-5 ${isActive}`}>

            <div id='adminHeader' className="mt-5">
                <h1><FaChalkboardTeacher /> 원데이 클래스</h1>
                <hr />
            </div>

            <div className="adminBody mt-5 mx-3" >
                <Container>
                    <form name="acfrm" onSubmit={handleOutput} onReset={handleFormReset}>
                    <Row className="justify-content-start"  style={{padding:'5px 0' }}>
                        <Col >
                            <Row style={{width:'85%'}} className="align-items-center">
                                <Col xs={12} md={3}>
                                <h3>클래스명</h3>
                                </Col>
                                <Col xs={12} md={9} className="align-items-center">
                                <DropdownButton
                                    key="end"
                                    id="dropdown-button-drop-end"
                                    drop="end"
                                    variant="secondary"
                                    title={activeItem || "카테고리"}
                                    onSelect={(eventKey) => handleClick(eventKey)} // 여기에서 수정!
                                >
                                    <Dropdown.Item
                                        key="selectedItem"
                                        eventKey=""
                                        onSelect={() => setActiveItem("")}
                                    >
                                        {activeItem || "카테고리"}
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    {items.map((item) => (
                                        <Dropdown.Item
                                            key={item.key}
                                            eventKey={item.key}
                                            onSelect={(eventKey) => handleClick(eventKey)} // 여기에서 수정!
                                        >
                                            {item.label}
                                        </Dropdown.Item>
                                    ))}
                                </DropdownButton>
                                </Col>
                            </Row>
                            <Col xs={12}>
                                <Form.Control
                                    type="text"
                                    id="title"
                                    name="title"
                                    placeholder="띄어쓰기 포함 10자 이상 적어주세요."
                                    style={{ width: '29%' }}
                                />
                            </Col>
                        </Col>
                    </Row>
                    <br/>
                    <Row >
                        <div>
                            <h3>커리큘럼</h3>
                            <span style={{fontSize:'20px',color:'red'}}> 과정1은 해당 교육과정의 설명이 필요해서 무조건 채우셔야합니다.<br/> 내용은 최소 100자 이상 작성해주세요(띄어쓰기 포함, 최대1000자)</span>
                        </div>
                        </Row>
                            {/* 그리드 조정이 많이 필요하다. */}
<br/>
                            <Row>
                            <h5>클래스 소개</h5>
                            <br/>
                            <textarea
                                id="intro"
                                name="intro"
                                value={formData.text}
                                onChange={handleChange}
                                placeholder="클래스의 특징, 장점 등 자유롭게 작성하시면 됩니다"
                                className="form-control"
                                rows={10}
                            ></textarea>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <span className={waringtext ? 'boom' : '' }>
                                {text.length < 100 ? '내용은 최소 100자 이상 작성' : ''}
                                {text.length > 1000 ? '최대 1000자까지 입력할 수 있습니다.' : ''}
                            </span>
                        </Col>
                        <Col md={6} className="d-flex justify-content-end">
                            <span>{text.length} / 1000</span>
                        </Col>
                    </Row>

                    <br/>
                        <Row>
                            <h5>준비물</h5>
                            <ToggleButtonGroup type="checkbox" defaultValue={[2]} className="mb-2">
                                <ToggleButton id="check-1" variant="outline-primary" value={1} style={{ fontSize: '12px', margin: '0 0 0 200px' }}>
                                    필요
                                </ToggleButton>
                                <ToggleButton id="check-2" variant="outline-primary" value={2} style={{ fontSize: '12px', margin:'0 200px 0 0' }}>
                                    불필요
                                </ToggleButton>
                            </ToggleButtonGroup>
                            <textarea
                                id="meterial"
                                name="meterial"
                                value={text}
                                onChange={handleChange}
                                placeholder="준비물이 필요하다면 작성해주세요."
                                className="form-control"
                                rows={10}
                            ></textarea>
                        </Row>
                        <Row>
                            <Col md={6}>
                            <span className={waringtext ? 'boom' : '' }>
                                {text.length < 100 ? '내용은 최소 100자 이상 작성' : ''}
                                {text.length > 1000 ? '최대 1000자까지 입력할 수 있습니다.' : ''}
                            </span>
                            </Col>
                            <Col md={6} className="d-flex justify-content-end">
                                <span>{text.length} / 1000</span>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <h5>사전 공지</h5>
                            <br/>
                            <textarea
                                id="rule"
                                name="rule"
                                value={formData.text}
                                onChange={handleChange}
                                placeholder="재료/레시피 제공 여부, 선택 기능여부, 기타 특이사항 등 자유롭게 작성하시면 됩니다"
                                className="form-control"
                                rows={10}
                            ></textarea>
                        </Row>
                        <Row>
                            <Col md={6}>
                            <span className={waringtext ? 'boom' : '' }>
                                {text.length < 100 ? '내용은 최소 100자 이상 작성' : ''}
                                {text.length > 1000 ? '최대 1000자까지 입력할 수 있습니다.' : ''}
                            </span>
                            </Col>
                            <Col md={6} className="d-flex justify-content-end">
                                <span>{text.length} / 1000</span>
                            </Col>
                        </Row>

                        <br/>

                            <Row>
                            <h5>이용 규정</h5>
                            <br/>
                            <textarea
                                id="notice"
                                name="notice"
                                value={formData.text}
                                onChange={handleChange}
                                placeholder="예약문의, 환불사항, 그 외 협의사항을 작성하시면 됩니다"
                                className="form-control"
                                rows={10}
                            ></textarea>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <span className={waringtext ? 'boom' : '' }>
                                {text.length < 100 ? '내용은 최소 100자 이상 작성' : ''}
                                {text.length > 1000 ? '최대 1000자까지 입력할 수 있습니다.' : ''}
                            </span>
                        </Col>
                        <Col md={6} className="d-flex justify-content-end">
                            <span>{text.length} / 1000</span>
                        </Col>
                    </Row>

                    <br/>


                    {/* 장소는 우편 주소 마냥 한번 모달로 띄우고 주소 출력후 상세 주소는 기입하는 방식
그냥 회원가입 주소 입력이랑 비슷하게 만듬 */}

                    <Row >

                            <Col style={{align:'start'}} offset={5} xs={4}>
                                <div><h3>강의장 위치</h3></div>
                            </Col>
                        <Col style={{align:'center'}} xs={3}>
                                <div> <Button variant="primary" onClick={handleShow}>
                                주소 찾기
                            </Button> </div>
                        </Col>

                    </Row>
                            <Row noGutters >
                                <Col style={{align:'center'}} offset={5} xs={4}>
                                <Form.Control style={{width:'100%',align:'center'}} type='text' id='addr1' classname='addr1' readOnly placeholder="서울시 구로구 가마산로 12가길 306 " />
                                </Col>
                                <Col style={{align:'start'}} xs={3}>
                                <Form.Control style={{width:'35%',align:'center'}} type='text' id='addr2' classname='addr2' />
                                </Col>
                            </Row>





                                <Modal
                                    show={show}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={true}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>주소 검색</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>도로명 주소 / 지역명 검색</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder='예) 판교역로 235, 삼평동 681'
                                                    autoFocus
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlTextarea1"
                                            >
                                                <Form.Label>검색 결과</Form.Label>
                                                <Form.Control as="textarea" value={formData.text} rows={10} readOnly placeholder="도로명 + 건물번호 또는 지역명(동/리) + 번지로 검색을 하시면 더욱 정확한 결과가 검색됩니다." />
                                            </Form.Group>
                                        </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            입력 취소
                                        </Button>
                                        <Button variant="primary" onClick={handleShow}>찾기 완료</Button>
                                    </Modal.Footer>
                                </Modal>



<br/>
                    <Row >
                        <div>
                            <h3>클래스 강의 소개/과정 이미지 등록</h3>
                            <Form.Control style={{width:'50%'}} name="addimg" type="file" accept="image/*" onChange={handleImageChange} />
                            <Button variant="primary" onClick={handleUpload}>사진 등록</Button>
                        </div>
                    </Row>
                    <br/>
<Row>
                        <div>
                            <h3>클래스 썸네일 이미지 등록</h3>
                            <Form.Control style={{width:'50%'}} name="thumb" type="file" accept="image/*" onChange={handleImageChange} />
                            <Button variant="primary" onClick={handleUpload}>사진 등록</Button>
                        </div>
                    </Row>
                    <br/>
                    <Row>
                        <div>
                            <h3>강사 얼굴 등록</h3>
                            <Form.Control style={{width:'50%'}} type="" accept="image/*" onChange={handleImageChange} />
                            <Button variant="primary" onClick={handleUpload}>사진 등록</Button>
                        </div>
                    </Row>
                    <br/>

                        <Row >
                            <div>
                                <h3>소요시간</h3>
                                <span style={{fontSize:'20px',color:'red'}}>최소 강의 시간은 30분입니다.</span>
                            </div>
                        </Row>
                        <Row>
                            <Col offset={6} xs={1}>
                                <div>
                                    <DropdownButton
                                        key="end"
                                        id="dropdown-button-drop-end"
                                        drop="down"
                                        variant="secondary"
                                        title={activeItem1 || "예상시간"}
                                        onSelect={(eventKey1) => handleClick1(eventKey1)} // 여기에서 수정!
                                    >
                                        <Dropdown.Item
                                            key="selectedItem"
                                            eventKey=""
                                            onSelect={() => setActiveItem1("")}
                                        >
                                            {activeItem1 || "시"}
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        {items1.map((item) => (
                                            <Dropdown.Item
                                                key={item.key}
                                                eventKey={item.key}
                                                onSelect={(eventKey1) => handleClick1(eventKey1)} // 여기에서 수정!
                                            >
                                                {item.label}
                                            </Dropdown.Item>
                                        ))}
                                    </DropdownButton>
                                </div>
                            </Col>
                            <Col xs={1}>
                                <div>
                                    <DropdownButton
                                        key="end"
                                        id="dropdown-button-drop-end"
                                        drop="down"
                                        variant="secondary"
                                        title={activeItem2 || "예상시간"}
                                        onSelect={(eventKey2) => handleClick2(eventKey2)} // 여기에서 수정!
                                    >
                                        <Dropdown.Item
                                            key="selectedItem"
                                            eventKey=""
                                            onSelect={() => setActiveItem2("")}
                                        >
                                            {activeItem2 || "분"}
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        {items2.map((item) => (
                                            <Dropdown.Item
                                                key={item.key}
                                                eventKey={item.key}
                                                onSelect={(eventKey2) => handleClick2(eventKey2)} // 여기에서 수정!
                                            >
                                                {item.label}
                                            </Dropdown.Item>
                                        ))}
                                    </DropdownButton>
                                </div>
                            </Col>
                            <Col xs={1}>
                                <div>
                                    <DropdownButton
                                        key="end"
                                        id="dropdown-button-drop-end"
                                        drop="down"
                                        variant="secondary"
                                        title={activeItem3 || "주간횟수"}
                                        onSelect={(eventKey3) => handleClick3(eventKey3)} // 여기에서 수정!
                                    >
                                        <Dropdown.Item
                                            key="selectedItem"
                                            eventKey=""
                                            onSelect={() => setActiveItem3("")}
                                        >
                                            {activeItem3 || "주간횟수"}
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        {items3.map((item) => (
                                            <Dropdown.Item
                                                key={item.key}
                                                eventKey={item.key}
                                                onSelect={(eventKey3) => handleClick3(eventKey3)} // 여기에서 수정!
                                            >
                                                {item.label}
                                            </Dropdown.Item>
                                        ))}
                                    </DropdownButton>
                                </div>
                            </Col>

                        </Row>

                    <br/>
                    <Row >
                        <div>
                            <h3>클래스 일정</h3>
                            <span style={{fontSize:'20px',color:'red'}}>원하시는 시작 날짜를 선택 후 종료 날짜를 선택해주세요.<br/>하루만 진행하실 경우 해당 날짜를 두번 클릭하세요</span>
                            <h5>시작일 / 종료일</h5>
                            <div>
                                <Calendar
                                    selectRange
                                    value={selectedRange}
                                    onChange={handleDateChange}
                                />
                            </div>
                            <br/>
                            <div>
                                <Form.Control
                                    type="text"
                                    id="time"
                                    name="time"
                                    placeholder='몇시부터 몇시까지 강의가 가능한지 작성해주세요'
                                    style={{width:'35%'}}
                                />
                                {startDate instanceof Date && (
                                    <p>선택된 시작 날짜: {startDate.toLocaleDateString()}</p>
                                )}
                                {endDate instanceof Date && (
                                    <p>선택된 종료 날짜: {endDate.toLocaleDateString()}</p>
                                )}
                            </div>
                        </div>
                    </Row>
                        <br/>
                        <ToggleButtonGroup type="checkbox" defaultValue={[2]} className="mb-2">
                            <ToggleButton id="tbg-check-1"  variant="outline-primary" value={1}>
                                월요일
                            </ToggleButton>
                            <ToggleButton id="tbg-check-2"  variant="outline-primary" value={2}>
                                화요일
                            </ToggleButton>
                            <ToggleButton id="tbg-check-3"  variant="outline-primary" value={3}>
                               수요일
                            </ToggleButton>
                            <ToggleButton id="tbg-check-4"  variant="outline-primary" value={4}>
                                목요일
                            </ToggleButton>
                            <ToggleButton id="tbg-check-5"  variant="outline-primary" value={5}>
                                금요일
                            </ToggleButton>
                            <ToggleButton id="tbg-check-6"  variant="outline-primary" value={6}>
                                토요일
                            </ToggleButton>
                            <ToggleButton id="tbg-check-6"  variant="outline-primary" value={6}>
                                일요일
                            </ToggleButton>
                        </ToggleButtonGroup>
                    <br/>

                    <Row >
                        <div>
                            <h3>강의 참가 인원</h3>
                            <span style={{fontSize:'20px',color:'red'}}>일대일 수업의 경우 최소/최대 인원 1명으로 하세요.</span>
                        </div>
                    </Row>
                    <Row>
                        <Col offset={10} xs={1}>
                            <div>
                                <DropdownButton
                                    key="end"
                                    id="dropdown-button-drop-end"
                                    drop="down"
                                    variant="secondary"
                                    title={activeItem4 || "최소인원"}
                                    onSelect={(eventKey4) => handleClick4(eventKey4)} // 여기에서 수정!
                                >
                                    <Dropdown.Item
                                        key="selectedItem"
                                        eventKey=""
                                        onSelect={() => setActiveItem4("")}
                                    >
                                        {activeItem4 || "인원수"}
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    {items4.map((item) => (
                                        <Dropdown.Item
                                            key={item.key}
                                            eventKey={item.key}
                                            onSelect={(eventKey4) => handleClick4(eventKey4)} // 여기에서 수정!
                                        >
                                            {item.label}
                                        </Dropdown.Item>
                                    ))}
                                </DropdownButton>
                            </div>
                        </Col>
                        <Col xs={1}>
                            <div>
                                <DropdownButton
                                    key="end"
                                    id="dropdown-button-drop-end"
                                    drop="down"
                                    variant="secondary"
                                    title={activeItem5 || "최대인원"}
                                    onSelect={(eventKey5) => handleClick5(eventKey5)} // 여기에서 수정!
                                >
                                    <Dropdown.Item
                                        key="selectedItem"
                                        eventKey=""
                                        onSelect={() => setActiveItem5("")}
                                    >
                                        {activeItem5 || "인원수"}
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    {items5.map((item) => (
                                        <Dropdown.Item
                                            key={item.key}
                                            eventKey={item.key}
                                            onSelect={(eventKey5) => handleClick5(eventKey5)} // 여기에서 수정!
                                        >
                                            {item.label}
                                        </Dropdown.Item>
                                    ))}
                                </DropdownButton>
                            </div>
                        </Col>
                    </Row>
                    <Row >

                            <h3>클래스가격</h3>
                        <Col offset={6} md={5}>
                            <Form.Control
                                type="text"
                                id="price"
                                name="price"
                                placeholder="띄어쓰기 하지말고 적어주세요."
                                style={{ width: '100%' }}
                            />
                        </Col>
                            <Col md={1}>
                            <span>원</span>
                        </Col>
                    </Row>
                    <br/>

                        <h3 type="text"
                            id="price"
                            name="price"
                            placeholder="띄어쓰기 하지말고 적어주세요."
                            style={{ width: '100%'}}>해시 태그</h3>
                        <span>단어로 입력해주세요 최대5개<br/>3개 이상 등록시 노출 빈도 증가</span>
                            <Form.Control
                                type="text"
                                id="hash"
                                name="hash"
                                placeholder="띄어쓰기 하지말고 적어주세요."
                                style={{ width: '100%' }}
                            />

                    <Row >
                        <div>
                            <h3>편의사항</h3>
                            <ToggleButtonGroup type="checkbox" defaultValue={[2]} className="mb-2">
                                <ToggleButton id="tbg-check-1"  variant="outline-primary" value={1}>
                                    <RiParkingBoxLine /> 주차장
                                </ToggleButton>
                                <ToggleButton id="tbg-check-2"  variant="outline-primary" value={2}>
                                    <FaWifi /> 와이파이
                                </ToggleButton>
                                <ToggleButton id="tbg-check-3"  variant="outline-primary" value={3}>
                                    <GiSodaCan /> 음료제공
                                </ToggleButton>
                                <ToggleButton id="tbg-check-4"  variant="outline-primary" value={4}>
                                    <GiLockers /> 탈의실
                                </ToggleButton>
                                <ToggleButton id="tbg-check-5"  variant="outline-primary" value={5}>
                                    <FaShower /> 샤워시설
                                </ToggleButton>
                                <ToggleButton id="tbg-check-6"  variant="outline-primary" value={6}>
                                    <FaBabyCarriage /> 유아동반가능
                                </ToggleButton>
                                <ToggleButton id="tbg-check-7"  variant="outline-primary" value={7}>
                                    <MdOutlinePets /> 반려동물동반가능
                                </ToggleButton>
                                <ToggleButton id="tbg-check-8"  variant="outline-primary" value={8}>
                                    <GoPackage /> 포장
                                </ToggleButton>
                                <ToggleButton id="tbg-check-9"  variant="outline-primary" value={9}>
                                    <IoLogoYoutube /> 촬영여부
                                </ToggleButton>
                                <ToggleButton id="tbg-check-10"  variant="outline-primary" value={10}>
                                    <BsInstagram /> 포토존
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                    </Row>
                        <hr />
                        <Row className="justify-content-center ml-3">
                            <Col xs={12} className="d-flex justify-content-center ">
                                <div>
                                    <Button variant="primary" type="submit">조회</Button>
                                    {' '}
                                    <Button variant="danger" type="reset" >초기화</Button>
                                </div>
                            </Col>
                        </Row>
                    </form>
                </Container>
            </div>
        </div>

  );
}