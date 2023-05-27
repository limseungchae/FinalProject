import React, { useState, useEffect } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
// import Modal from "./pages/admin/pages/Modal";
// import Figure from 'react-bootstrap/Figure';
// import Image from 'react-bootstrap/Image'
import{GoPackage} from 'react-icons/go'
import {IoLogoYoutube} from 'react-icons/io'
import {BsInstagram} from 'react-icons/bs'
import {MdOutlinePets} from 'react-icons/md'
import {FaBabyCarriage, FaShower, FaWifi} from 'react-icons/fa'
import {GiLockers, GiSodaCan} from 'react-icons/gi'
import {RiParkingBoxLine} from 'react-icons/ri'

export default function AddClass() {
  const [activeItem, setActiveItem] = useState('');
  const [activeItem1, setActiveItem1] = useState('');
  const [activeItem2, setActiveItem2] = useState('');
  const [activeItem3, setActiveItem3] = useState('');
  const [text, setText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);





//     const [imageData, setImageData] = useState(null);
  
//     useEffect(() => {
//       // 이미지 데이터를 가져오는 함수를 호출합니다.
//       fetchImageData()
//         .then(data => setImageData(data))
//         .catch(error => console.error(error));
//     }, []);
  
//     const fetchImageData = async () => {
//       try {
//         // 이미지 데이터를 가져오기 위한 API 엔드포인트에 요청합니다.
//         const response = await fetch('/api/image');
//         if (response.ok) {
//           // 응답이 성공적인 경우 이미지 데이터를 받아옵니다.
//           const data = await response.blob();
//           return URL.createObjectURL(data);
//         } else {
//           throw new Error('Failed to fetch image data');
//         }
//       } catch (error) {
//         throw new Error(error.message);
//       }
//     };
  
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
        if (startDate && !endDate) {
          // If start date is already selected and end date is not set, set the end date
          setEndDate(date);
          console.log(setEndDate);
        } else {
          // Set the start date if no start date is selected or both start and end dates are set
          setStartDate(date);
          setEndDate(null); // Reset the end date if both start and end dates are set
          console.log(setStartDate);
        }
        
      };

      console.log(setEndDate);
      console.log(setStartDate);

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

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 1000) {
      setText(inputValue);
    }
  };

const waringtext = text.length < 100  || text.length > 1000 ;

const addrModal = () => {
    setModalVisible(!modalVisible);
};

  return (
    <>
      <div>
      <h3>클래스명</h3>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="띄어쓰기 포함 10자 이상 적어주세요. 최대 40자"
        />
        </div>
      <div>
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
      </div>
      <div>
        <h3>커리큘럼</h3>
        <span> 과정1은 해당 교육과정의 설명이 필요해서 무조건 채우셔야합니다.<br/> 내용은 최소 100자 이상 작성해주세요(띄어쓰기 포함, 최대1000자)</span>
       
{/* 그리드 조정이 많이 필요하다. */}

        <h5>과정1</h5>
        <br/>
        <textarea
        id="content"
        name="content"
        value={text}
        onChange={handleChange}
        placeholder="클래스의 특징, 장점, 준비물, 재료/레시피 제공 여부, 선택 기능여부, 기타 특이사항 등 자유롭게 작성하시면 됩니다"
        cols={70}
        rows={10}
        ></textarea>
        <p className={waringtext ? 'boom' : '' }>
        {text.length < 100 ? '내용은 최소 100자 이상 작성해주세요.' : ''}
        {text.length > 1000 ? '최대 1000자까지 입력할 수 있습니다.' : ''}
        </p>
        <p>{text.length} / 1000</p>
        

        <h5>과정2</h5>
        <br/>
        <textarea
        id="content2"
        name="content2"
        value={text}
        onChange={handleChange}
        placeholder="클래스의 특징, 장점, 준비물, 재료/레시피 제공 여부, 선택 기능여부, 기타 특이사항 등 자유롭게 작성하시면 됩니다"
        cols={70}
        rows={10}
        ></textarea>
        <p className={waringtext ? 'boom' : '' }>
        {text.length < 100 ? '내용은 최소 100자 이상 작성해주세요.' : ''}
        {text.length > 1000 ? '최대 1000자까지 입력할 수 있습니다.' : ''}
        </p>
        <p>{text.length} / 1000</p>

        <h5>과정3</h5>
        <br/>
        <textarea
        id="content3"
        name="content3"
        value={text}
        onChange={handleChange}
        placeholder="클래스의 특징, 장점, 준비물, 재료/레시피 제공 여부, 선택 기능여부, 기타 특이사항 등 자유롭게 작성하시면 됩니다"
        cols={70}
        rows={10}
        ></textarea>
        <p className={waringtext ? 'boom' : '' }>
        {text.length < 100 ? '내용은 최소 100자 이상 작성해주세요.' : ''}
        {text.length > 1000 ? '최대 1000자까지 입력할 수 있습니다.' : ''}
        </p>
        <p>{text.length} / 1000</p>
    </div>

{/* 장소는 우편 주소 마냥 한번 모달로 띄우고 주소 출력후 상세 주소는 기입하는 방식
그냥 회원가입 주소 입력이랑 비슷하게 만듬 */}
    <div>
        <h3>강의장 위치</h3>
        <div>
        <button type='button' id='addr' classname='addr' onClick={addrModal}>주소 검색</button>
        </div>
        <div>
        <input type='text' id='addr1' classname='addr1' readOnly />
        <input type='text' id='addr2' classname='addr2' />
        </div>
    </div>

    {/* <Figure>
      <Figure.Image
        width={600}
        height={500}
        alt="600x500"
        src="holder.js/600x500"
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure> 
    
    이걸로 할지 img로 할지 결과값보고 결정하고
    버튼을 눌렀을 때 
    */}

    {/* <div>
      <h1>이미지 불러오기 예시</h1>
      {imageData && <img src={imageData} alt="My Image" />}
    </div> */}

        {/* figure사용해서 이미지 불러오기
         <div>
            <h1>Image Example</h1>
            {imageData && (
                <figure>
                <img src={imageData} alt="My Image" />
                <figcaption>A beautiful image</figcaption>
                </figure>
            )}
            </div> */}

        <div>
            <h3>클래스 강의 소개/과정 이미지 등록</h3>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button onClick={handleUpload}>사진 등록</button>
            </div>

            <div>
            <h3>클래스 완성작 이미지 등록</h3>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button onClick={handleUpload}>사진 등록</button>
            </div>

            <div>
            <h3>강사 얼굴 등록</h3>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button onClick={handleUpload}>사진 등록</button>
            </div>



        <div>
        <h3>클래스 일정</h3>
        <span>등록한 일정은 </span>
        <h5>시작일 / 종료일</h5>
              <div>
                <Calendar
                  onChange={handleDateChange}
                  selectRange = {true}
                  value={[startDate, endDate]}
                  className="calendar"
                />
              </div>
              <div>
              <input
                type="text"
                id="time"
                name="time"
                placeholder='몇시부터 몇시까지 강의를 하는지 작성해주세요'
                />
              {startDate instanceof Date && (
                  <p>Selected Start Date: {startDate.toLocaleDateString()}</p>
                )}
                {endDate instanceof Date && (
                  <p>Selected End Date: {endDate.toLocaleDateString()}</p>
                )}
                </div>
            </div>

            <div>
      <h3>클래스가격</h3>
      <input
        type="text"
        id="price"
        name="price"
        /><span>원</span>
        </div>


          <div>
          <h5>소요시간</h5>
          <span>최소 강의 시간은 30분입니다.</span>
          <div>
      <DropdownButton
            key="end"
            id="dropdown-button-drop-end"
            drop="end"
            variant="secondary"
            title={activeItem1 || "예상시간"}
            onSelect={(eventKey1) => handleClick1(eventKey1)} // 여기에서 수정!
            >
            <Dropdown.Item
            key="selectedItem"
            eventKey=""
            onSelect={() => setActiveItem1("")}
            >
                {activeItem1 || "소요시간"}
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

       
      <DropdownButton
            key="end"
            id="dropdown-button-drop-end"
            drop="end"
            variant="secondary"
            title={activeItem2 || "예상시간"}
            onSelect={(eventKey2) => handleClick2(eventKey2)} // 여기에서 수정!
            >
            <Dropdown.Item
            key="selectedItem"
            eventKey=""
            onSelect={() => setActiveItem2("")}
            >
                {activeItem2 || "소요시간"}
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
    
        <DropdownButton
            key="end"
            id="dropdown-button-drop-end"
            drop="end"
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
      
          </div>

                <div>
                <h5>편의사항</h5>
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

        </>
    );
}