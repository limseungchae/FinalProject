import React, {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import {FaChalkboardTeacher} from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Calendar from "react-calendar";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Class() {
    const [title, setTitle] = useState("");
    const [activeItem, setActiveItem] = useState("");
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");
    const [text4, setText4] = useState("");
    const [toggleValue, setToggleValue] = useState(1);
    const [waringtext, setWarningText] = useState(false);
    const [address, setAddress] = useState({
        addr1: '',
        addr2: ''
    });
    const [cimgFile, setCimgFile] = useState(null);
    const [thumbFile, setThumbFile] = useState(null);
    const [timgFile, setTimgFile] = useState(null);
    const [selectedRange, setSelectedRange] = useState([]);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [text5, setText5] = useState('');
    const [activeItems, setActiveItems] = useState({
        activeItem1: '',
        activeItem2: '',
        activeItem3: ''
    });
    const [activeItems2, setActiveItems2] = useState({
        activeItem4: '',
        activeItem5: ''
    });
    const [price, setPrice] = useState('');
    const [hash, setHash] = useState('');


    const items = [{ key: 1, label: '피트니스' }, { key: 2, label: '요리' }, { key: 3, label: '엑티비티' }, { key: 4, label: '공예' }, { key: 5, label: '음악' }, { key: 6, label: '미술' }, { key: 7, label: '엑티비티' }];
    const items1 = [{ key: 1, label: '00시간' }, { key: 2, label: '01시간' }, { key: 3, label: '02시간' }, { key: 4, label: '03시간' }, { key: 5, label: '04시간' }, { key: 6, label: '05시간' }, { key: 7, label: '06시간' }, { key: 8, label: '07시간' }, { key: 9, label: '08시간' },];
    const items2 = [{ key: 1, label: '00분' }, { key: 2, label: '05분' }, { key: 3, label: '10분' }, { key: 4, label: '15분' }, { key: 5, label: '20분' }, { key: 6, label: '25분' }, { key: 7, label: '30분' }, { key: 8, label: '35분' }, { key: 9, label: '40분' }, { key: 10, label: '45분' }, { key: 11, label: '50분' }, { key: 12, label: '55분' },];
    const items3 = [{ key: 1, label: '1회' }, { key: 2, label: '2회' }, { key: 3, label: '3회' }, { key: 4, label: '4회' }, { key: 5, label: '5회' }, { key: 6, label: '6회' }, { key: 7, label: '7회' },];
    const items4 = [{ key: 1, label: '1명' }, { key: 2, label: '5명' }, { key: 3, label: '10명' }, { key: 4, label: '15명' }, { key: 5, label: '20명' }, { key: 6, label: '25명' }, { key: 7, label: '30명' }, { key: 8, label: '30명 이상' },];
    const items5 = [{ key: 1, label: '1명' }, { key: 2, label: '5명' }, { key: 3, label: '10명' }, { key: 4, label: '15명' }, { key: 5, label: '20명' }, { key: 6, label: '25명' }, { key: 7, label: '30명' }, { key: 8, label: '30명 이상' },];
    const handleTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleClick = (eventKey) => {
        const selectedItem = items.find((item) => item.key === parseInt(eventKey));
        if (selectedItem) {
            setActiveItem(selectedItem.label);
        }
    };

    const handleChange = (event) => {
        setText1(event.target.value);
    };

    const handleChange2 = (event) => {
        setText2(event.target.value);
    };

    const handleChange3 = (event) => {
        setText3(event.target.value);
    };

    const handleChange4 = (event) => {
        setText4(event.target.value);
    };

    const handleToggleChange = (value) => {
        setToggleValue(value);
    };

    const handleButtonClick = () => {
        new window.daum.Postcode({
            oncomplete: function (data) {
                setAddress((prevAddress) => ({
                    ...prevAddress,
                    addr1: data.address,
                    addr2: '',
                }));
            },
        }).open();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setCimgFile(file);
    };

    const handleImageChange2 = (e) => {
        const file = e.target.files[0];
        setThumbFile(file);
    };

    const handleImageChange3 = (e) => {
        const file = e.target.files[0];
        setTimgFile(file);
    };

    const handleDateChange = (date) => {
        if (date.length === 1) {
            setStartDate(date[0]);
            setEndDate(date[0]);
        } else if (date.length === 2) {
            setStartDate(date[0]);
            setEndDate(date[1]);
        }
        setSelectedRange(date);
    };

    const handleCtime = (e) => {
        setText5(e.target.value);
    };

    const updateActiveItems = (newActiveItems) => {
        setActiveItems((prevActiveItems) => ({
            ...prevActiveItems,
            ...newActiveItems,
        }));
    };
    const handleClick1 = (eventKey1) => {
        updateActiveItems({ activeItem1: eventKey1 });
    };

    const updateActiveItems2 = (newActiveItems) => {
        setActiveItems((prevActiveItems) => ({
            ...prevActiveItems,
            ...newActiveItems,
        }));
    };

    const handleClick2 = (eventKey2) => {
        updateActiveItems2({ activeItem2: eventKey2 });
    };
    const updateActiveItems3 = (newActiveItems) => {
        setActiveItems((prevActiveItems) => ({
            ...prevActiveItems,
            ...newActiveItems,
        }));
    };
    const handleClick3 = (eventKey3) => {
        updateActiveItems3({ activeItem3: eventKey3 });
    };

    const updateActiveItems4 = (newActiveItems) => {
        setActiveItems2((prevActiveItems) => ({
            ...prevActiveItems,
            ...newActiveItems,
        }));
    };
    const handleClick4 = (eventKey4) => {
        updateActiveItems4({ activeItem4: eventKey4 });
    };
    const updateActiveItems5 = (newActiveItems) => {
        setActiveItems2((prevActiveItems) => ({
            ...prevActiveItems,
            ...newActiveItems,
        }));
    };
    const handleClick5 = (eventKey5) => {
        updateActiveItems5({ activeItem5: eventKey5 });
    };

    const handlePrice = (event) => {
        setPrice(event.target.value);
    };

    const handleHash = (event) => {
        setHash(event.target.value);
    };

    const handleSubmit = (event) => {
        console.log("handleSubmit???")

        event.preventDefault();
        const tags = hash.split(',');
        const tag = tags.slice(0, 5)

        const formData = new FormData();
        formData.append('cimg', cimgFile);
        formData.append('thumb', thumbFile);
        formData.append('timg', timgFile);

        // 나머지 데이터 추가
        formData.append('title', title);
        formData.append('category', activeItem);
        formData.append('intro', text1);
        formData.append('meterial', text2);
        formData.append('rules', text3);
        formData.append('notice', text4);
        formData.append('addr', JSON.stringify(address));
        formData.append('durat', JSON.stringify(activeItems));
        formData.append('sdate', startDate);
        formData.append('edate', endDate);
        formData.append('ctime', text5);
        formData.append('man', JSON.stringify(activeItems2));
        formData.append('price', price);
        formData.append('hash', tag);

        console.log(formData)

        axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/api/addclass`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },})
            .then((response) => {
                console.log("전송 성공", response.data);
                window.location.href = "/myinfo/classlist"
            })
            .catch((error) => {
                console.log("전송 실패", error);
            });
    };

    const handleFormReset = () => {
        setTitle("");
        setActiveItem("");
        setText1("");
        setText2("");
        setText3("");
        setText4("");
        setToggleValue(1);
        setWarningText(false);
        setAddress({  addr1: '',
            addr2: ''});
        setCimgFile(null);
        setThumbFile(null);
        setTimgFile(null);
        setStartDate(null);
        setSelectedRange([]);
        setEndDate(null);
        setText5('');
        setActiveItems({activeItem1: '',
            activeItem2: '',
            activeItem3: ''});
        setActiveItems2({ activeItem4: '',
            activeItem5: ''});
        setPrice('');
        setHash('');
        // 다른 상태 변수들도 초기화하는 로직을 추가하세요.
    };


    return (
        <div>
            <div id='adminHeader' className="mt-5"><h1><FaChalkboardTeacher/> 원데이 클래스</h1>
                <hr/>
            </div>
            <div className="adminBody mt-5 mx-3"><Container>
                <form name="acfrm" onSubmit={(e) => {
                    console.log("submit 되나요?")
                    handleSubmit(e);
                }} onReset={handleFormReset}>
                    <Row className="justify-content-start" style={{padding: '5px 0'}}><Col><Row style={{width: '85%'}}
                                                                                                className="align-items-center"><Col
                        xs={12} md={3}><h3>클래스명</h3></Col><Col xs={12} md={9} className="align-items-center">
                        <DropdownButton key="end" id="dropdown-button-drop-end" drop="end" variant="secondary"
                                        title={activeItem || "카테고리"} onSelect={(eventKey) => handleClick(eventKey)}>
                            <Dropdown.Item key="selectedItem" eventKey=""
                                           onSelect={() => setActiveItem("")}>{activeItem || "카테고리"}</Dropdown.Item><Dropdown.Divider/>{items.map((item) => (
                            <Dropdown.Item key={item.key} eventKey={item.key}
                                           onSelect={(eventKey) => handleClick(eventKey)}>{item.label}</Dropdown.Item>))}
                        </DropdownButton></Col></Row>
                        <Col xs={12}><Form.Control type="text" id="title" name="title"
                                                   value={title} onChange={handleTitle}
                                                   placeholder="띄어쓰기 포함 10자 이상 적어주세요."
                                                   style={{width: '29%'}}/></Col></Col></Row>
                    <br/><Row>
                    <div><h3>커리큘럼</h3><span style={{fontSize: '20px', color: 'red'}}> 과정1은 해당 교육과정의 설명이 필요해서 무조건 채우셔야합니다.<br/> 내용은 최소 100자 이상 작성해주세요(띄어쓰기 포함, 최대1000자)</span>
                    </div>
                </Row>
                    <br/><Row><h5>클래스 소개</h5><br/><textarea id="intro" name="intro" value={text1}
                                                            onChange={handleChange}
                                                            placeholder="클래스의 특징, 장점 등 자유롭게 작성하시면 됩니다"
                                                            className="form-control" rows={10}></textarea></Row>
                    <Row><Col md={6}><span
                        className={waringtext ? 'boom' : ''}>{text1.length < 100 ? '내용은 최소 100자 이상 작성' : ''}{text1.length > 1000 ? '최대 1000자까지 입력할 수 있습니다.' : ''}</span></Col>
                        <Col md={6}
                             className="d-flex justify-content-end"><span>{text1.length} / 1000</span></Col></Row>

                    <br/><Row><Col xs={1}><h5>준비물</h5></Col><Col className="d-flex justify-content-start" xs={11}>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={toggleValue} className="mb-2">
                        <ToggleButton id="tbg-radio-1" onClick={() => handleToggleChange(1)} variant="outline-primary"
                                      value={1} style={{fontSize: '12px', margin: '0 0 0 10%'}}>필요</ToggleButton>
                        <ToggleButton id="tbg-radio-2" onClick={() => handleToggleChange(2)} variant="outline-primary"
                                      value={2} style={{
                            fontSize: '12px',
                            margin: '0 10% 0 0'
                        }}>불필요</ToggleButton></ToggleButtonGroup></Col></Row>
                    <Row><textarea id="meterial" name="meterial" value={text2} onChange={handleChange2}
                                   placeholder="준비물이 필요하다면 작성해주세요." className="form-control" rows={10}
                                   readOnly={toggleValue === 2}></textarea>
                        <Col md={6}><span
                            className={waringtext ? 'boom' : ''}>{text2.length < 50 ? '내용은 최소 100자 이상 작성' : ''}{text2.length > 1000 ? '최대 1000자까지 입력할 수 있습니다.' : ''}</span></Col>
                        <Col md={6}
                             className="d-flex justify-content-end"><span>{text2.length} / 1000</span></Col></Row>

                    <br/><Row><h5>사전 공지</h5><br/><textarea id="rule" name="rule" value={text3} onChange={handleChange3}
                                                           placeholder="재료/레시피 제공 여부, 선택 기능여부, 기타 특이사항 등 자유롭게 작성하시면 됩니다"
                                                           className="form-control" rows={10}></textarea></Row>
                    <Row><Col md={6}><span
                        className={waringtext ? 'boom' : ''}>{text3.length < 50 ? '내용은 최소 50자 이상 작성' : ''}{text3.length > 1000 ? '최대 1000자까지 입력할 수 있습니다.' : ''}</span></Col>
                        <Col md={6}
                             className="d-flex justify-content-end"><span>{text3.length} / 1000</span></Col></Row>

                    <br/><Row><h5>이용 규정</h5><br/><textarea id="notice" name="notice" value={text4}
                                                           onChange={handleChange4}
                                                           placeholder="예약문의, 환불사항, 그 외 협의사항을 작성하시면 됩니다"
                                                           className="form-control" rows={10}></textarea></Row>
                    <Row><Col md={6}><span
                        className={waringtext ? 'boom' : ''}>{text4.length < 100 ? '내용은 최소 100자 이상 작성' : ''}{text4.length > 1000 ? '최대 1000자까지 입력할 수 있습니다.' : ''}</span></Col>
                        <Col md={6}
                             className="d-flex justify-content-end"><span>{text4.length} / 1000</span></Col></Row>
                    <br/>><Row>
                    <Col style={{ align: 'start' }} offset={5} xs={4}>
                        <div>
                            <h3>강의장 위치</h3>
                        </div>
                    </Col>
                    <Col style={{ align: 'center' }} xs={3}>
                        <div>
                            <Button variant="primary" onClick={handleButtonClick}>주소 찾기</Button>
                        </div>
                    </Col>
                </Row>
                    <Row noGutters>
                        <Col style={{ align: 'center' }} offset={5} xs={4}>
                            <Form.Control
                                style={{ width: '100%', textAlign: 'center' }}
                                type='text'
                                id='addr1'
                                name='addr1'
                                readOnly
                                placeholder="서울시 구로구 가마산로 12가길 306"
                                value={address.addr1}
                                onChange={(e) => setAddress({ ...address, addr1: e.target.value })}
                            />
                        </Col>
                        <Col style={{ align: 'start' }} xs={3}>
                            <Form.Control
                                style={{ width: '35%', textAlign: 'center' }}
                                type='text'
                                id='addr2'
                                name='addr2'
                                value={address.addr2}
                                onChange={(e) => setAddress({ ...address, addr2: e.target.value })}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <div>
                            <h3>클래스 강의 소개/과정 이미지 등록</h3>
                            <Form.Control
                                style={{ width: '50%' }}
                                name="cimg"
                                type="file"
                                accept="image/*"
                                id="cimg"
                                onChange={handleImageChange}
                            />
                        </div>
                    </Row>
                    <br />
                    <Row>
                        <div>
                            <h3>클래스 썸네일 이미지 등록</h3>
                            <Form.Control
                                style={{ width: '50%' }}
                                name="thumb"
                                type="file"
                                id="thumb"
                                accept="image/*"
                                onChange={handleImageChange2}
                            />
                        </div>
                    </Row>
                    <br />
                    <Row>
                        <div>
                            <h3>강사 얼굴 등록</h3>
                            <Form.Control
                                style={{ width: '50%' }}
                                type="file"
                                accept="image/*"
                                id="timg"
                                name="timg"
                                onChange={handleImageChange3}
                            />
                        </div>
                    </Row>
                    <br/><Row>
                    <div><h3>소요시간</h3><span style={{fontSize: '20px', color: 'red'}}>최소 강의 시간은 30분입니다.</span></div>
                </Row>
                    <Row><Col offset={6} xs={1}>
                        <div><DropdownButton
                            key="end"
                            id="dropdown-button-drop-end"
                            drop="down"
                            variant="secondary"
                            title={activeItems.activeItem1 || "예상시간(시)"}
                            onSelect={handleClick1}
                        >
                            <Dropdown.Item key="selectedItem" eventKey="" onSelect={() => setActiveItems(prevState => ({ ...prevState, activeItem1: "" }))}>
                                {activeItems.activeItem1 || "시"}
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            {items1.map((item) => (
                                <Dropdown.Item
                                    key={item.key}
                                    eventKey={item.label} // 변경된 부분: eventKey 값을 item.label로 설정
                                    onSelect={handleClick1}
                                >
                                    {item.label}
                                </Dropdown.Item>
                            ))}
                        </DropdownButton></div>
                    </Col>
                        <Col xs={1}>
                            <div><DropdownButton
                                key="end"
                                id="dropdown-button-drop-end"
                                drop="down"
                                variant="secondary"
                                title={activeItems.activeItem2 || "예상시간(분)"}
                                onSelect={handleClick2}
                            >
                                <Dropdown.Item key="selectedItem" eventKey="" onSelect={() => setActiveItems(prevState => ({ ...prevState, activeItem2: "" }))}>
                                    {activeItems.activeItem2 || "분"}
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                {items2.map((item) => (
                                    <Dropdown.Item
                                        key={item.key}
                                        eventKey={item.label} // 변경된 부분: eventKey 값을 item.label로 설정
                                        onSelect={handleClick2}
                                    >
                                        {item.label}
                                    </Dropdown.Item>
                                ))}
                            </DropdownButton></div>
                        </Col>
                        <Col xs={1}>
                            <div><DropdownButton
                                key="end"
                                id="dropdown-button-drop-end"
                                drop="down"
                                variant="secondary"
                                title={activeItems.activeItem3 || "주간횟수"}
                                onSelect={handleClick3}
                            >
                                <Dropdown.Item key="selectedItem" eventKey="" onSelect={() => setActiveItems(prevState => ({ ...prevState, activeItem3: "" }))}>
                                    {activeItems.activeItem3 || "횟수"}
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                {items3.map((item) => (
                                    <Dropdown.Item
                                        key={item.key}
                                        eventKey={item.label} // 변경된 부분: eventKey 값을 item.label로 설정
                                        onSelect={handleClick3}
                                    >
                                        {item.label}
                                    </Dropdown.Item>
                                ))}
                            </DropdownButton></div>
                        </Col></Row>
                    <br/><Row>
                    <div><h3>클래스 일정</h3><span
                        style={{fontSize: '20px', color: 'red'}}>원하시는 시작 날짜를 선택 후 종료 날짜를 선택해주세요.<br/>하루만 진행하실 경우 해당 날짜를 두번 클릭하세요</span>
                        <h5>시작일 / 종료일</h5>
                        <div><Calendar selectRange value={selectedRange} onChange={handleDateChange}/></div>
                        <br/>
                        <div><Form.Control type="text" id="time" name="time" value={text5} onChange={handleCtime} placeholder='몇시부터 몇시까지 강의가 가능한지 작성해주세요'
                                           style={{width: '35%'}}/>{startDate instanceof Date && (
                            <p>선택된 시작 날짜: {startDate.toLocaleDateString()}</p>)}{endDate instanceof Date && (
                            <p>선택된 종료 날짜: {endDate.toLocaleDateString()}</p>)}</div>
                    </div>
                </Row>
                    <br/>
                    <div>
                        <h3>강의 참가 인원</h3>
                        <span style={{ fontSize: '20px', color: 'red' }}>일대일 수업의 경우 최소/최대 인원 1명으로 하세요.</span>
                    </div>
                    <Row>
                        <Col offset={10} xs={1}>
                            <div>
                                <DropdownButton
                                    key="end"
                                    id="dropdown-button-drop-end"
                                    drop="down"
                                    variant="secondary"
                                    title={activeItems2.activeItem4 || "최소인원"}
                                    onSelect={handleClick4}
                                >
                                    <Dropdown.Item key="selectedItem" eventKey="" onSelect={() => setActiveItems2(prevState => ({ ...prevState, activeItem4: "" }))}>
                                        {activeItems2.activeItem4 || "인원수"}
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    {items4.map((item) => (
                                        <Dropdown.Item
                                            key={item.key}
                                            eventKey={item.label}
                                            onSelect={handleClick4}
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
                                    title={activeItems2.activeItem5 || "최대인원"}
                                    onSelect={handleClick5}
                                >
                                    <Dropdown.Item key="selectedItem" eventKey="" onSelect={() => setActiveItems2(prevState => ({ ...prevState, activeItem5: "" }))}>
                                        {activeItems2.activeItem5 || "인원수"}
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    {items5.map((item) => (
                                        <Dropdown.Item
                                            key={item.key}
                                            eventKey={item.label}
                                            onSelect={handleClick5}
                                        >
                                            {item.label}
                                        </Dropdown.Item>
                                    ))}
                                </DropdownButton>
                            </div>
                        </Col>
                    </Row>
                    <Row><h3>클래스가격</h3><Col offset={6} md={5}><Form.Control type="text" id="price" name="price"
                                                                            value={price} onChange={handlePrice}
                                                                            placeholder="띄어쓰기 하지말고 적어주세요."
                                                                            style={{width: '100%'}}/></Col>
                        <Col md={1}><span>원</span></Col></Row><br/><h3>해시 태그</h3><span>단어로 입력해주세요 최대5개<br/>3개 이상 등록시 노출 빈도 증가</span>
                    <Form.Control type="text" id="hash" name="hash" placeholder="띄어쓰기 하지말고 쉼표(,)사용해서 작성해 주세요."
                                 value={hash} onChange={handleHash} style={{width: '100%'}}/>
                    <hr/>
                    <Row className="justify-content-center ml-3"><Col xs={12}
                                                                      className="d-flex justify-content-center ">
                        <div>
                            {/*<Link to={"/myinfo/classlist"}>*/}
                                <Button variant="primary" type="submit">등록</Button>
                            {/*</Link>*/}
                            {' '}<Button variant="danger"
                                                                                             type="reset"
                                                                                             className="ml-2">초기화</Button>
                        </div>
                    </Col></Row></form>
            </Container></div>
        </div>

    );
}
