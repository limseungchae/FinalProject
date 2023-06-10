import React, {useEffect, useState} from "react";
import axios from "axios";
import {useLocation, Link} from 'react-router-dom';
import {FaChalkboardTeacher} from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Class() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    let cno = searchParams.get('cno');

    const [title, setTitle] = useState("");
    const [activeItem, setActiveItem] = useState("");
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");
    const [text4, setText4] = useState("");
    const [toggleValue, setToggleValue] = useState(1);
    const [waringtext, setWarningText] = useState(false);
    const [address, setAddress] = useState({addr1: '', addr2:'' });
    const [cimgFile, setCimgFile] = useState(null);
    const [thumbFile, setThumbFile] = useState(null);
    const [timgFile, setTimgFile] = useState(null);
    const [selectedRange, setSelectedRange] = useState([]);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [text5, setText5] = useState('');
    const [activeItems, setActiveItems] = useState({activeItem1:'' , activeItem2:'' , activeItem3:'' });
    const [activeItems2, setActiveItems2] = useState({activeItem4:'' , activeItem5:'' });
    const [price, setPrice] = useState('');
    const [hash, setHash] = useState('');
    const [data1, setData1] = useState([]);
    const [initialAddr1, setInitialAddr1] = useState('');
    const [initialAddr2, setInitialAddr2] = useState('');
    const [inactive, setInActive] = useState('');
    const [inactive2, setInActive2] = useState('');
    const [inactive3, setInActive3] = useState('');
    const [inactive4, setInActive4] = useState('');
    const [inactive5, setInActive5] = useState('');
    const items = [{key: 1, label: '피트니스'}, {key: 2, label: '요리'}, {key: 3, label: '엑티비티'}, {
        key: 4,
        label: '공예'
    }, {key: 5, label: '음악'}, {key: 6, label: '미술'}, {key: 7, label: '엑티비티'}];
    const items1 = [{key: 1, label: '00시간'}, {key: 2, label: '01시간'}, {key: 3, label: '02시간'}, {
        key: 4,
        label: '03시간'
    }, {key: 5, label: '04시간'}, {key: 6, label: '05시간'}, {key: 7, label: '06시간'}, {key: 8, label: '07시간'}, {
        key: 9,
        label: '08시간'
    },];
    const items2 = [{key: 1, label: '00분'}, {key: 2, label: '05분'}, {key: 3, label: '10분'}, {
        key: 4,
        label: '15분'
    }, {key: 5, label: '20분'}, {key: 6, label: '25분'}, {key: 7, label: '30분'}, {key: 8, label: '35분'}, {
        key: 9,
        label: '40분'
    }, {key: 10, label: '45분'}, {key: 11, label: '50분'}, {key: 12, label: '55분'},];
    const items3 = [{key: 1, label: '1회'}, {key: 2, label: '2회'}, {key: 3, label: '3회'}, {key: 4, label: '4회'}, {
        key: 5,
        label: '5회'
    }, {key: 6, label: '6회'}, {key: 7, label: '7회'},];
    const items4 = [{key: 1, label: '1명'}, {key: 2, label: '5명'}, {key: 3, label: '10명'}, {
        key: 4,
        label: '15명'
    }, {key: 5, label: '20명'}, {key: 6, label: '25명'}, {key: 7, label: '30명'}, {key: 8, label: '30명 이상'},];
    const items5 = [{key: 1, label: '1명'}, {key: 2, label: '5명'}, {key: 3, label: '10명'}, {
        key: 4,
        label: '15명'
    }, {key: 5, label: '20명'}, {key: 6, label: '25명'}, {key: 7, label: '30명'}, {key: 8, label: '30명 이상'},];

    const handleTitle = (event) => {
        const updatedData1 = [...data1];
        updatedData1[0].title = event.target.value;
        setData1(updatedData1);
    };
    const handleClick = (eventKey) => {
        const selectedItem = items.find((item) => item.key === parseInt(eventKey));
        if (selectedItem) {
            setActiveItem(selectedItem.label);
        }
    };
    const handleChange = (event) => {
        const updatedData1 = [...data1];
        updatedData1[0].intro = event.target.value;
        setText1(updatedData1);
    };
    const handleChange2 = (event) => {
        const updatedData1 = [...data1];
        updatedData1[0].meterial = event.target.value;
        setData1(updatedData1);
    };
    const handleChange3 = (event) => {
        const updatedData1 = [...data1];
        updatedData1[0].rules = event.target.value;
        setData1(updatedData1);
    };
    const handleChange4 = (event) => {
        const updatedData1 = [...data1];
        updatedData1[0].notice = event.target.value;
        setData1(updatedData1);
    };
    const handleToggleChange = (value) => {
        setToggleValue(value);
    };
    // const handleButtonClick = () => {
    //     new window.daum.Postcode({
    //         oncomplete: function (data) {
    //             setAddress({addr1: data.address, addr2: ''});
    //             console.log(address)
    //         },
    //     }).open();
    // };

    const handleButtonClick = () => {
        new window.daum.Postcode({
            oncomplete: function (data) {
                const newAddress = { addr1: data.address, addr2: '' };
                setAddress(newAddress);
                console.log(newAddress);
            },
        }).open();
    };

    useEffect( () => {
        if (data1.length > 0) {
            const parsedAddr1 = JSON.parse(data1[0].addr).addr1;
            const parsedAddr2 = JSON.parse(data1[0].addr).addr2;
            setInitialAddr1(parsedAddr1);
            setInitialAddr2(parsedAddr2);
        }
    }, [data1]);
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
    const tileContent = ({date}) => {
        const selected =
            startDate &&
            endDate &&
            date >= startDate &&
            date <= endDate &&
            selectedRange.length === 2;

        return selected ? <div className="selected-range"/> : null;
    };
    const handleCtime = (event) => {
        const updatedData1 = [...data1];
        updatedData1[0].ctime = event.target.value;
        setData1(updatedData1);
    };
    const handleClick1 = (eventKey1) => {
        setActiveItems(prevState => ({...prevState, activeItem1: eventKey1}));
    };
    const handleClick2 = (eventKey2) => {
        setActiveItems(prevState => ({...prevState, activeItem2: eventKey2}));
    };
    const handleClick3 = (eventKey3) => {
        setActiveItems(prevState => ({...prevState, activeItem3: eventKey3}));
    };
    const handleClick4 = (eventKey4) => {
        setActiveItems2(prevState => ({...prevState, activeItem4: eventKey4}));
    };
    const handleClick5 = (eventKey5) => {
        setActiveItems2(prevState => ({...prevState, activeItem5: eventKey5}));
    };
    const handlePrice = (event) => {
        const updatedData1 = [...data1];
        updatedData1[0].price = event.target.value;
        setData1(updatedData1);
    };
    const handleHash = (event) => {
        const updatedData1 = [...data1];
        updatedData1[0].hash = event.target.value;
        setData1(updatedData1);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `http://localhost:8080/api/update?cno=${cno}`;
                const response1 = await axios.get(url);
                const responseData1 = response1.data;
                const updatedData1 = responseData1.map((item) => ({
                    cno: item.cno,
                    cimg: item.cimg,
                    thumb: item.thumb,
                    timg: item.timg,
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
                }));
                setData1(updatedData1);
            } catch (error) {
                console.error('데이터를 가져오는 중 오류가 발생했습니다.', error);
            }
        };
        fetchData();
    }, []);
    if(data1.length > 0 ) {
        console.log(data1[0].title)
        console.log(data1[0].hash)
        console.log(data1[0].intro)
        // console.log(JSON.parse(data1[0].addr).addr1)
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault(); // 기본 form 제출 동작 방지
    //     const cno = data1.length > 0 ? data1[0].cno : '';
    //     console.log(cno)
    //     // form 데이터 가져오기
    //     const form = event.target;
    //     const formData = new FormData(form);
    //
    //     // formData에 들어있는 값 콘솔에 출력
    //     for (let [key, value] of formData.entries()) {
    //         console.log(`${key}: ${value}`);
    //     }
    //
    //     // POST 요청 보내기
    //     const url = 'http://localhost:8080/api/updateclass/{cno}'; // POST 요청을 보낼 URL
    //
    //
    //     // POST 요청에 포함될 데이터
    //     const data = Object.fromEntries(formData);
    //
    //     axios.post(url.replace('{cno}', cno), data)
    //         .then(response => {
    //             console.log('POST 요청이 성공했습니다.', response.data);
    //             // 성공한 경우 추가 처리 로직 작성...
    //         })
    //         .catch(error => {
    //             console.error('POST 요청이 실패했습니다.', error);
    //             // 실패한 경우 에러 처리 로직 작성...
    //         });
    // };

    const handleSubmit = (event) => {
        event.preventDefault(); // 기본 form 제출 동작 방지
        console.log(initialAddr1)
        console.log(address.addr1)
        console.log(initialAddr2)
        console.log(address.addr2)


        // 값이 변경되었는지 확인
        if (address.addr1 !== initialAddr1 || address.addr2 !== initialAddr2) {
            // 데이터베이스에 변경된 값 반영
            // 예: API 호출 또는 데이터베이스 업데이트 로직 실행
            console.log('주소가 변경되었습니다:', address);
            address.addr1 = initialAddr1;
            address.addr2 = initialAddr2;
            console.log(address.addr1)
            console.log(address.addr2)
            console.log('뭐나옴?')

            const cno = data1.length > 0 ? data1[0].cno : '';
            console.log(cno);
            console.log(startDate);
            console.log(address);
            console.log(address.addr1);

            // form 데이터 가져오기
            const form = event.target;
            console.log("폼" + form);
            console.log("폼" + form.target.addr1);
            const formData = new FormData(form);

            // 멀티파트와 텍스트 데이터를 함께 담을 FormData 생성
            const requestData = new FormData();
            // console.log(formData.address.addr1)
            // console.log(requestData.address.addr1)

            // 멀티파트로 전송될 파일들 추가
            requestData.append('cimg', formData.get('cimg'));
            requestData.append('thumb', formData.get('thumb'));
            requestData.append('timg', formData.get('timg'));

            // 텍스트로 전송될 데이터 추가
            for (let [key, value] of formData.entries()) {
                if (key !== 'cimg' && key !== 'thumb' && key !== 'timg') {
                    requestData.append(key, value);
                }
            }

            // POST 요청 보내기
            const url = `http://localhost:8080/api/updateclass/${cno}`; // POST 요청을 보낼 URL

            axios
                .post(url, requestData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then((response) => {
                    window.location.href = '/myinfo/classlist';
                    console.log('POST 요청이 성공했습니다.', response.data);
                    // 성공한 경우 추가 처리 로직 작성...
                })
                .catch((error) => {
                    console.error('POST 요청이 실패했습니다.', error);
                    // 실패한 경우 에러 처리 로직 작성...
                });
        } else {
            console.log('주소가 변경되지 않았습니다.');
        }
    };


    // const handleSubmit = (event) => {
    //     console.log("789-----")
    //     event.preventDefault();
    //     const tags = hash.split(',');
    //     const tag = tags.slice(0, 5)
    //     const formData = new FormData();
    //     console.log(formData)
    //     formData.append('cimg', cimgFile);
    //     console.log(formData.cimg)
    //     formData.append('thumb', thumbFile);
    //     console.log("------25417")
    //     formData.append('timg', timgFile);
    //     formData.append('title', title);
    //     console.log(formData)
    //     console.log(formData.title)
    //     formData.append('category', activeItem);
    //     formData.append('intro', text1);
    //     console.log(formData.intro)
    //     formData.append('meterial', text2);
    //     formData.append('rules', text3);
    //     formData.append('notice', text4);
    //     formData.append('addr', address);
    //     formData.append('durat', activeItems);
    //     formData.append('sdate', startDate);
    //     formData.append('edate', endDate);
    //     formData.append('ctime', text5);
    //     formData.append('man', activeItems2);
    //     formData.append('price', price);
    //     formData.append('hash', tag);
    //     console.log(formData+"김바보씨")
    //     axios.post(`http://localhost:8080/api/updateclass?cno=${cno}`, formData, {
    //         params: {
    //             cno: cno,
    //         },
    //
    //         headers: {
    //             'Content-Type': 'multipart/form-data'
    //         }
    //     }).then((response) => {
    //         console.log("전송 성공", response.data);
    //         window.location.herf = "/myinfo/classlist"
    //     }).catch((error) => {
    //         console.log("전송 실패", error);
    //     });
    // };
    const handleFormReset = () => {
        setTitle("");
        setActiveItem("");
        setText1("");
        setText2("");
        setText3("");
        setText4("");
        setToggleValue(1);
        setWarningText(false);
        setAddress({addr1: '', addr2: ''});
        setCimgFile(null);
        setThumbFile(null);
        setTimgFile(null);
        setStartDate(null);
        setSelectedRange([]);
        setEndDate(null);
        setText5('');
        setActiveItems({activeItem1: '', activeItem2: '', activeItem3: ''});
        setActiveItems2({activeItem4: '', activeItem5: ''});
        setPrice('');
        setHash('');
    };

    useEffect(() => {
        console.log('Address:', address);
    }, [address])

    useEffect(() => {
        if (data1.length > 0) {
            const earliestStartDate = new Date(Math.min(...data1.map((item) => new Date(item.sdate))));
            const latestEndDate = new Date(Math.max(...data1.map((item) => new Date(item.edate))));
            setStartDate(earliestStartDate);
            setEndDate(latestEndDate);
            console.log('sdate:', startDate);
            console.log('edate:', endDate);
        }
    }, [data1]);

    useEffect( () =>{
        if (data1.length > 0) {
            const defaultActiveItem1 = JSON.parse(data1[0].durat).activeItem1;
            const defaultActiveItem2 = JSON.parse(data1[0].durat).activeItem2;
            const defaultActiveItem3 = JSON.parse(data1[0].durat).activeItem3;
            const defaultActiveItem4 = JSON.parse(data1[0].man).activeItem4;
            const defaultActiveItem5 = JSON.parse(data1[0].man).activeItem5;
            setInActive(defaultActiveItem1)
            setInActive2(defaultActiveItem2)
            setInActive3(defaultActiveItem3)
            setInActive4(defaultActiveItem4)
            setInActive5(defaultActiveItem5)
        }
    }, [data1]);

    return (
        <div>
            <div id='adminHeader' className="mt-5"><h1><FaChalkboardTeacher/> 원데이 클래스</h1>
                <hr/>
            </div>
            <div className="adminBody mt-5 mx-3">
                <Container>
                <form name="acfrm" onSubmit={handleSubmit} onReset={handleFormReset} encType="multipart/form-data">
                    <Row className="justify-content-start" style={{padding: '5px 0'}}><Col><Row style={{width: '85%'}}
                                                                                                className="align-items-center">
                        <Col xs={12} md={3}><h3>클래스명</h3></Col><Col xs={12} md={9} className="align-items-center">
                        <DropdownButton key="end" id="dropdown-button-drop-end" drop="end" variant="secondary"
                                        title={activeItem || (data1.length > 0 ? data1[0].category : "카테고리")}
                                        onSelect={(eventKey) => handleClick(eventKey)}>
                            <Dropdown.Item key="selectedItem" eventKey=""
                                           onSelect={() => setActiveItem("")}>{activeItem || "카테고리"}
                            </Dropdown.Item>
                            <Dropdown.Divider/>
                            {items.map((item) => (
                                <Dropdown.Item key={item.key} eventKey={item.key}
                                               onSelect={(eventKey) => handleClick(eventKey)}>
                                    {item.label}
                                </Dropdown.Item>))}
                        </DropdownButton></Col></Row>
                        <Col xs={12}><Form.Control
                            type="text"
                            id="title"
                            name="title"
                            value={data1.length > 0 ? data1[0].title : ''}
                            onChange={handleTitle}
                            placeholder={data1.length > 0 ? '' : '띄어쓰기 포함 10자 이상 적어주세요.'}
                            style={{width: '29%'}}
                        />
                        </Col></Col></Row>
                    <br/><Row>
                    <div><h3>커리큘럼</h3><span style={{fontSize: '20px', color: 'red'}}>
                        과정1은 해당 교육과정의 설명이 필요해서 무조건 채우셔야합니다.<br/>
                        내용은 최소 100자 이상 작성해주세요(띄어쓰기 포함, 최대1000자)</span>
                    </div>
                </Row>
                    <br/><Row><h5>클래스 소개</h5><br/>
                    <textarea
                        id="intro"
                        name="intro"
                        value={data1.length > 0 ? data1[0].intro : ''}
                        onChange={handleChange}
                        placeholder={data1.length > 0 ? '' : '내용을 입력해주세요.'}
                        style={{width: '100%', height: '150px'}}
                    />
                </Row>
                    <Row><Col md={6}><span
                        className={waringtext ? 'boom' : ''}>{text1.length < 100 ? '내용은 최소 100자 이상 작성' : ''}
                        {text1.length > 1000 ? '최대 1000자까지 입력할 수 있습니다.' : ''}</span></Col>
                        <Col md={6}
                             className="d-flex justify-content-end"><span>{text1.length} / 1000</span></Col></Row><br/><Row><Col
                    xs={1}><h5>준비물</h5></Col><Col className="d-flex justify-content-start" xs={11}><ToggleButtonGroup
                    type="radio" name="options" defaultValue={toggleValue} className="mb-2">
                    <ToggleButton id="tbg-radio-1" onClick={() => handleToggleChange(1)} variant="outline-primary"
                                  value={1}
                                  style={{fontSize: '12px', margin: '0 0 0 10%'}}>필요</ToggleButton><ToggleButton
                    id="tbg-radio-2" onClick={() => handleToggleChange(2)} variant="outline-primary" value={2} style={{
                    fontSize: '12px', margin: '0 10% 0 0'
                }}>불필요</ToggleButton></ToggleButtonGroup></Col></Row><Row> <textarea
                    id="meterial"
                    name="meterial"
                    value={data1.length > 0 ? data1[0].meterial : ''}
                    onChange={handleChange2}
                    placeholder={data1.length > 0 ? '' : '내용을 입력해주세요.'}
                    style={{width: '100%', height: '150px'}}
                />
                    <Col md={6}><span
                        className={waringtext ? 'boom' : ''}>{text2.length < 50 ? '내용은 최소 100자 이상 작성' : ''}
                        {text2.length > 1000 ? '최대 1000자까지 입력할 수 있습니다.' : ''}</span></Col>
                    <Col md={6}
                         className="d-flex justify-content-end"><span>{text2.length} / 1000</span></Col></Row><br/><Row>
                    <h5>사전 공지</h5><br/> <textarea
                    id="rules"
                    name="rules"
                    value={data1.length > 0 ? data1[0].rules : ''}
                    onChange={handleChange3}
                    placeholder={data1.length > 0 ? '' : '내용을 입력해주세요.'}
                    style={{width: '100%', height: '150px'}}
                />
                </Row>
                    <Row><Col md={6}><span
                        className={waringtext ? 'boom' : ''}>{text3.length < 50 ? '내용은 최소 50자 이상 작성' : ''}
                        {text3.length > 1000 ? '최대 1000자까지 입력할 수 있습니다.' : ''}</span></Col>
                        <Col md={6}
                             className="d-flex justify-content-end"><span>{text3.length} / 1000</span></Col></Row><br/><Row>
                    <h5>이용 규정</h5><br/> <textarea
                    id="notice"
                    name="notice"
                    value={data1.length > 0 ? data1[0].notice : ''}
                    onChange={handleChange4}
                    placeholder={data1.length > 0 ? '' : '내용을 입력해주세요.'}
                    style={{width: '100%', height: '150px'}}
                /></Row>
                    <Row><Col md={6}><span
                        className={waringtext ? 'boom' : ''}>{text4.length < 100 ? '내용은 최소 100자 이상 작성' : ''}
                        {text4.length > 1000 ? '최대 1000자까지 입력할 수 있습니다.' : ''}</span></Col>
                        <Col md={6}
                             className="d-flex justify-content-end"><span>{text4.length} / 1000</span></Col></Row><br/><Row><Col
                    style={{align: 'start'}} offset={5} xs={4}>
                    <div><h3>강의장 위치</h3></div>
                </Col><Col style={{align: 'center'}} xs={3}>
                    <div><Button variant="primary" onClick={handleButtonClick}>주소 찾기</Button></div>
                </Col></Row><Row noGutters>
                    <Col style={{align: 'center'}} offset={5} xs={4}><Form.Control
                        style={{width: '100%', textAlign: 'center'}}
                        type='text'
                        id="addr1"
                        name="addr1"
                        readOnly
                        value={(address && address.addr1) || initialAddr1}
                        onChange={(e) => setAddress(address=>({
                            ...address,
                            addr1: e.target.value
                        }))}
                    />
                    </Col><Col style={{align: 'start'}} xs={3}><Form.Control style={{width: '35%', textAlign: 'center'}}
                                                                             type='text' id='addr2' name='addr2'
                                                                             value={(address && address.addr2) || initialAddr2} onChange={(e) => setAddress(prevAddress => ({
                    ...prevAddress,
                    addr1: e.target.value
                }))}/></Col></Row><Row>
                    <div><h3>클래스 강의 소개/과정 이미지 추가</h3><Form.Control style={{width: '50%'}} name="cimg" type="file"
                                                                   accept="image/*" id="cimg"
                                                                   onChange={handleImageChange}/></div>
                </Row><br/><Row>
                    <div><h3>클래스 썸네일 이미지 추가</h3><Form.Control style={{width: '50%'}} name="thumb" type="file"
                                                              id="thumb"
                                                              accept="image/*" onChange={handleImageChange2}/></div>
                </Row><br/><Row>
                    <div><h3>강사 얼굴 추가</h3><Form.Control style={{width: '50%'}} type="file" accept="image/*" id="timg"
                                                        name="timg" onChange={handleImageChange3}/></div>
                </Row>
                    <br/><Row>
                    <div><h3>소요시간</h3><span style={{fontSize: '20px', color: 'red'}}>최소 강의 시간은 30분입니다.</span></div>
                </Row><Row><Col offset={6} xs={1}>
                    <div><DropdownButton key="end" id="dropdown-button-drop-end" drop="down" variant="secondary"
                                         title={activeItems.activeItem1 || inactive} onSelect={handleClick1}>
                        <Dropdown.Item key="selectedItem" eventKey="" onSelect={() => setActiveItems(prevState => ({
                            ...prevState,
                            activeItem1: ""
                        }))}>{activeItems.activeItem1 || "시"}</Dropdown.Item><Dropdown.Divider/>{items1.map((item) => (
                        <Dropdown.Item key={item.key} eventKey={item.label}
                                       onSelect={handleClick1}>{item.label}</Dropdown.Item>))}
                    </DropdownButton></div>
                </Col><Col xs={1}>
                    <div><DropdownButton key="end" id="dropdown-button-drop-end" drop="down" variant="secondary"
                                         title={activeItems.activeItem2 || inactive2}
                                         onSelect={handleClick2}><Dropdown.Item key="selectedItem" eventKey=""
                                                                                onSelect={() => setActiveItems(prevState => ({
                                                                                    ...prevState,
                                                                                    activeItem2: ""
                                                                                }))}>{activeItems.activeItem2 || "분"}</Dropdown.Item>
                        <Dropdown.Divider/>{items2.map((item) => (
                            <Dropdown.Item key={item.key} eventKey={item.label}
                                           onSelect={handleClick2}>{item.label}</Dropdown.Item>))}</DropdownButton>
                    </div>
                </Col><Col xs={1}>
                    <div><DropdownButton key="end" id="dropdown-button-drop-end" drop="down" variant="secondary"
                                         title={activeItems.activeItem3 || inactive3}
                                         onSelect={handleClick3}><Dropdown.Item key="selectedItem" eventKey=""
                                                                                onSelect={() => setActiveItems(prevState => ({
                                                                                    ...prevState,
                                                                                    activeItem3: ""
                                                                                }))}>{activeItems.activeItem3 || "횟수"}</Dropdown.Item>
                        <Dropdown.Divider/>{items3.map((item) => (
                            <Dropdown.Item key={item.key} eventKey={item.label}
                                           onSelect={handleClick3}> {item.label}</Dropdown.Item>))}
                    </DropdownButton></div>
                </Col></Row><br/><Row>
                    <div><h3>클래스 일정</h3><span
                        style={{fontSize: '20px', color: 'red'}}>원하시는 시작 날짜를 선택 후 종료 날짜를 선택해주세요.
                        <br/>하루만 진행하실 경우 해당 날짜를 두번 클릭하세요</span>
                        <h5>시작일 / 종료일</h5>
                        <div><Calendar selectRange value={selectedRange} onChange={handleDateChange}
                                       tileContent={tileContent}/></div>
                        <br/>
                        <div><Form.Control
                            type="text"
                            id="ctime"
                            name="ctime"
                            value={data1.length > 0 ? data1[0].ctime : ''}
                            onChange={handleCtime}
                            placeholder={data1.length > 0 ? '' : '띄어쓰기 포함 10자 이상 적어주세요.'}
                            style={{width: '29%'}}
                        />
                            {startDate instanceof Date && (
                                <p>선택된 시작 날짜: {startDate.toLocaleDateString()}</p>
                            )}
                            {endDate instanceof Date && (
                                <p>선택된 종료 날짜: {endDate.toLocaleDateString()}</p>
                            )}
                        </div>
                    </div>
                </Row><br/>
                    <div>
                        <h3>강의 참가 인원</h3><span
                        style={{fontSize: '20px', color: 'red'}}>일대일 수업의 경우 최소/최대 인원 1명으로 하세요.</span></div>
                    <Row><Col offset={10} xs={1}>
                        <div><DropdownButton key="end" id="dropdown-button-drop-end" drop="down" variant="secondary"
                                             title={activeItems2.activeItem4 || inactive4}
                                             onSelect={handleClick4}><Dropdown.Item key="selectedItem" eventKey=""
                                                                                    onSelect={() => setActiveItems2(prevState => ({
                                                                                        ...prevState,
                                                                                        activeItem4: ""
                                                                                    }))}>{activeItems2.activeItem4 || "인원수"}
                        </Dropdown.Item><Dropdown.Divider/>
                            {items4.map((item) => (<Dropdown.Item key={item.key} eventKey={item.label}
                                                                  onSelect={handleClick4}>{item.label}</Dropdown.Item>))}
                        </DropdownButton></div>
                    </Col><Col xs={1}>
                        <div><DropdownButton key="end" id="dropdown-button-drop-end" drop="down" variant="secondary"
                                             title={activeItems2.activeItem5 || inactive5}
                                             onSelect={handleClick5}><Dropdown.Item key="selectedItem" eventKey=""
                                                                                    onSelect={() => setActiveItems2(prevState => ({
                                                                                        ...prevState,
                                                                                        activeItem5: ""
                                                                                    }))}>{activeItems2.activeItem5 || "인원수"}
                        </Dropdown.Item><Dropdown.Divider/>{items5.map((item) => (
                            <Dropdown.Item key={item.key} eventKey={item.label}
                                           onSelect={handleClick5}>{item.label}</Dropdown.Item>))}
                        </DropdownButton></div>
                    </Col></Row><Row><h3>클래스가격</h3><Col offset={6} md={5}><Form.Control
                    type="text"
                    id="price"
                    name="price"
                    value={data1.length > 0 ? data1[0].price : ''}
                    onChange={handlePrice}
                    placeholder={data1.length > 0 ? '' : '띄어쓰기 포함 10자 이상 적어주세요.'}
                    style={{width: '29%'}}
                /></Col><Col
                    md={1}><span>원</span></Col></Row><br/><h3>해시 태그</h3>
                    <span>단어로 입력해주세요 최대5개<br/>3개 이상 등록시 노출 빈도 증가</span><Form.Control
                    type="text"
                    id="hash"
                    name="hash"
                    value={data1.length > 0 ? data1[0].hash : ''}
                    onChange={handleHash}
                    placeholder={data1.length > 0 ? '' : '띄어쓰기 포함 10자 이상 적어주세요.'}
                    style={{width: '29%'}}
                />
                    <hr/>
                    <Row className="justify-content-center ml-3"><Col xs={12}
                                                                      className="d-flex justify-content-center ">
                        <div><Button variant="primary" type="submit">수정</Button>{' '}<Button
                            variant="danger"
                            type="reset"
                            className="ml-2">초기화</Button>
                        </div>
                    </Col></Row></form>
                </Container>
            </div>
        </div>
    );
}
