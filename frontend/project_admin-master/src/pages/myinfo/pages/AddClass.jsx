import React, { useState, useEffect } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import Calendar from 'react-calendar';
import Accordion from 'react-bootstrap/Accordion';

export default function AddClass() {
    // ===== react-datetime
    const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
      
  const handleStartDateChange = (moment) => {
    setStartDate(moment);
  };

  const handleEndDateChange = (moment) => {
    setEndDate(moment);
  };

  const handleOutput = () => {
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
  };

// ----------react-calender
  const [selectedRange, setSelectedRange] = useState([null, null]);

  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    if (!isInitialRender) {
      handleOutput1(selectedRange);
    } else {
      setIsInitialRender(false);
    }
  }, [selectedRange, isInitialRender]); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때 한 번만 실행되도록 설정

  const handleDateChange = (date) => {
    setSelectedRange(date);
  };

  const handleOutput1 = () => {
    const [startDate1, endDate1] = selectedRange;
    if (startDate1 !== null && endDate1 !== null) {
        console.log('Start Date:', startDate1);
        console.log('End Date:', endDate1);
      }
  };

//   두개다 가능하다. 출력에서 차이도 없는듯하다.
// const handleOutput1 = (date) => {
//     const [startDate1, endDate1] = date;
//     if (startDate1 && endDate1) {
//       console.log('Start Date:', startDate1.toString());
//       console.log('End Date:', endDate1.toString());
//     }
//   };

    return (
        <>
         <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
        <ToggleButton id="tbg-radio-1" variant="outline-success" value={1}>
          전체
        </ToggleButton>
        <ToggleButton id="tbg-radio-2"  variant="outline-success" value={2}>
          1개월
        </ToggleButton>
        <ToggleButton id="tbg-radio-3"  variant="outline-success" value={3}>
          1년
        </ToggleButton>
      </ToggleButtonGroup>
    <div>
      <h1>Date Range Picker and Output</h1>
      <div>
        <label>Start Date:</label>
        <DateTime value={startDate} onChange={handleStartDateChange} />
      </div>

      <div>
        <label>End Date:</label>
        <DateTime value={endDate} onChange={handleEndDateChange} />
      </div>

      <button onClick={handleOutput}>Output</button>
    </div>
{/* =====react-calender 이건 클래스 등록할 때 사용해야겠다. */}
    <div>
      <h1>Date Range Picker and Output</h1>
      <div>
        <label>Select Range:</label>
        <Calendar
          selectRange
          value={selectedRange}
          onChange={handleDateChange}
        />
      </div>

      {/* <button onClick={handleOutput1}>Output</button> */}
    </div>

    <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
        일선 : // react-calender or react-datetime 사용


조회 버튼, 초기화 버튼

정산
판매 기간 , 상품금액, 상품명, 신청한 인원(결제된 고객 환불x),총 매출,정산금액(총매출 - 수수료)

csv파일 또는 엑셀 파일로 출력해주는 버튼<br/>
         여기에 판매 :
            결제일 , 결제금액, 상품명, 구매자(닉네임), 수강일(시작한 날짜), 구매자 연락처
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>



        </>
    );
}

