import React, {useEffect, useState} from 'react';
import './Payclass.css';
import axios from 'axios';
import qs from 'qs';
import {useLocation, useParams} from "react-router-dom";

const Payclass = () => {
    const location = useLocation();
    const [orderInfoAgreed, setOrderInfoAgreed] = useState(false);
    const [personalInfoAgreed, setPersonalInfoAgreed] = useState(false);
    /*const [ono, setOno] = useState("");
    const [payList, setPayList] = useState([]);*/
    const [img, setImg] = useState("");
    const [payInfo, setPayInfo] = useState({});
    const [userInfo, setUserInfo] = useState({});

    const params = location.search.replace("?","").split("&");
    const rno = params[0].replace("rno=","");
    const mbno = params[1].replace("mbno=","");

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_SERVER_DOMAIN}/api/payclass?rno=${rno}&mbno=${mbno}`)
            .catch(console.log)
            .then(response => {
                const body = response.data;
                const img = body.img;
                const payInfo = body.info;
                const userInfo = body.member;

                setImg(img);
                setPayInfo(payInfo);
                setUserInfo(userInfo);
            });
    }, [])

    /*const param = `?ono=${ono}`
    console.log(param)
    axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/api/pay${param}`)
        .then((res)=>{setPayList(res.data);console.log("성공")})
        .catch((Error)=>{console.log(Error)})
    const test = () =>{
        if(payList.length >0){
            return payList.map((val)=><div key={val.ono}>{val.item}</div> );
        }
    }*/

    const handleClick = async () => {
        // 약관에 동의한 경우만 처리
        if (!orderInfoAgreed || !personalInfoAgreed) {
            alert('약관에 동의하십시오');
            return;
        }
        const IMP = window.IMP;
        IMP.init('imp84245708');


        // useEffect(() => {
        //     let param = `?ono=${ono}`
        //     console.log(param)
        //     axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/api/pay${param}`)
        //         .then(response => setPayList(response.data))
        //         .catch(error => console.log(error))
        // }, [ono]);
        //

        try {
            const response = await axios.post(
                'https://kapi.kakao.com/v1/payment/ready',
                qs.stringify({
                    cid: 'TC0ONETIME',
                    partner_order_id: 'YOUR_PARTNER_ORDER_ID', // 여기에 고유한 주문 ID를 넣으세요
                    partner_user_id: 'YOUR_PARTNER_USER_ID', // 여기에 고유한 사용자 ID를 넣으세요
                    item_name: '초코파이', // 여기에 상품명을 넣으세요
                    quantity: 1, // 여기에 구매 수량을 넣으세요
                    total_amount: 2200, // 여기에 총 결제 금액을 넣으세요
                    vat_amount: 200,
                    tax_free_amount: 0, // 여기에 면세 금액을 넣으세요
                    approval_url: 'http://localhost:3000/approval', // 여기에 성공 시 리디렉션할 URL을 넣으세요
                    fail_url: 'http://localhost:3000/viewclass', // 여기에 실패 시 리디렉션할 URL을 넣으세요
                    cancel_url: 'http://localhost:3000/payclass', // 여기에 취소 시 리디렉션할 URL을 넣으세요
                }),
                {
                    headers: {
                        Authorization: 'KakaoAK f57ea5bc4f7c552c7541e7a194783d59',
                        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                    },
                }
            );

            console.log(response);

            const box = response.data.next_redirect_pc_url;
            window.open(box);

            const {
                data: { next_redirect_pc_url, tid },
            } = response;

            console.log(next_redirect_pc_url);
            console.log(tid);
            // localstorage에 tid 저장
            window.localStorage.setItem("tid", tid);

        } catch (error) {
            alert(error.message);
        }
    };

    const handleOrderInfoCheckboxChange = (e) => {
        setOrderInfoAgreed(e.target.checked);
    };

    const handlePersonalInfoCheckboxChange = (e) => {
        setPersonalInfoAgreed(e.target.checked);
    };

    return (
        <div id="wrap" style={{ padding: '50px', paddingLeft: '350px' }}>
            <div id="container" className="">
                <div id="editor"></div>
                <form id="order_payment_form" name="order_payment_form" method="post" onSubmit={(e) => e.preventDefault()}>
                    <div className="content order-content" data-sticky-container>
                        {/* title */}
                        <div className="tit-box cart-title">
                            <h1 className="txt-s20">주문/결제</h1>
                        </div>
                        {/* title */}
                        {/* S : 주문상품 */}
                        <div className="order-area order-m-area">
                            <h2>주문상품</h2>
                            <div className="order-tbl order-page buy-target-goods p-bespoke watch-opt cartListRst">
                                {/* S : 이미지 */}
                                <div className="order-td order-image">
                                    <img src={img} width="100" height="100" alt="Product" />
                                </div>
                                {/* E : 이미지 */}
                                {/*<div><button onClick={test}>실험</button></div>*/}
                                {/* S : 모델명 */}
                                <div className="order-td order-name">
                                    <div>
                                        <p className="o-title class-name">{payInfo.cname}</p>
                                        <p className="o-title instructor-name">강사명</p>
                                    </div>
                                </div>

                                {/* E : 모델명 */}
                                {/* S : 갯수 */}
                                <div className="order-td order-spec">
                                    <p>일정 : {payInfo.actdate}</p>
                                    {/*<p>제목 : 제목</p>*/}
                                </div>
                                <input type="hidden" name="buyQtyOrd" value="1" />
                                {/* E : 갯수 */}
                                <div className="order-td order-count">
                                    <p>인원: {payInfo.quantity}인</p>
                                </div>
                                {/* S : 가격 */}
                                <div className="order-td order-price">
                                    <p>₩{payInfo.totprice}</p>
                                </div>
                                {/* E : 가격 */}
                            </div>
                        </div>
                        {/* E : 주문상품 */}
                        <div className="order-area">
                            {/* s : 배송정보 */}
                            <h2 className="m-secon-tit">배송 정보</h2>
                            <div className="order-box">
                                <ul className="order-info-box">
                                    {/* s : 회원 주문자 정보 */}
                                    <li id="liMemberInfo" style={{ display: '' }}>
                                        <span className="head">주문자 정보</span>
                                        <ul className="order-info-detail info-order">
                                            <li>
                                                닉네임 : <span id="spanMbrNm">{userInfo.nickname}</span>
                                            </li>
                                            {(userInfo.email !== "null") ?
                                                <li>
                                                    이메일 : <span id="spanMbrEmail">{userInfo.email}</span>
                                                </li>
                                                :
                                                <li></li>
                                            }
                                        </ul>
                                    </li>
                                    {/* e : 회원 주문자 정보 */}
                                </ul>
                                {/* end order-info-box */}
                                <ul className="info-ul">
                                    <li>
                                        고객센터<strong className="txt-small"> 1588-6084</strong>평일 09시 ~ 18시 / 토요일 09시 ~ 13시 (일요일, 공휴일은 운영하지 않습니다.)
                                    </li>
                                    <li>
                                        스킬라빗 고객센터 <strong className="txt-small">1811-9228</strong> 평일 09시~ 18시(주말, 공휴일은 운영하지 않습니다.)
                                    </li>
                                </ul>
                            </div>
                            {/* end order-box */}
                            {/* e : 배송정보 */}
                        </div>
                        {/* end order-area */}
                        {/* s : 결제 정보 */}
                        <div className="payment-area">
                            <h2>결제 정보</h2>
                            <ul className="payment-listup">
                                <li>
                                    <span className="head">상품 수</span>
                                    <span className="text">
                    <strong id="goods_cnt">{payInfo.quantity}</strong>인
                  </span>
                                </li>
                                <li>
                                    <span className="head">주문 금액</span>
                                    <span className="text">
                    <strong id="order_payment_total_goods_amt_view">{payInfo.totprice}</strong>원
                  </span>
                                </li>
                            </ul>
                            <ul className="cost-listup">
                                <li>
                  <span className="head">
                    <strong>결제 예정 금액</strong>
                  </span>
                                    <span className="text">
                    <strong id="order_payment_total_pay_amt_view">{payInfo.totprice}</strong>원
                  </span>
                                </li>
                            </ul>
                            <div className="terms-box">
                                <h2>
                                    약관 동의<i className="required-item">*</i>
                                </h2>
                                <div className="chk-form allChk-box">
                                    <label>
                                        <input type="checkbox" className="check" onChange={handleOrderInfoCheckboxChange} />
                                        주문 상품정보 및 전자금융거래 이용약관에 모두 동의하십니까?
                                    </label>
                                </div>
                                <div className="chk-form">
                                    <label>
                                        <input type="checkbox" className="check" onChange={handlePersonalInfoCheckboxChange} checked={personalInfoAgreed} />
                                        개인정보 수집&middot;이용 및 제3자 제공에 모두 동의하십니까?
                                    </label>
                                </div>
                                {/* e : 이용약관 */}
                            </div>
                            <div className="row mt-5">
                                <h1 className="col-12 text-center my-5">KAKAO PAY</h1>
                                <form className="col-12 text-center">
                                    <button type="button" className="btn btn-warning" onClick={handleClick}>
                                        카카오페이로 결제하기
                                    </button>
                                </form>
                            </div>
                            <div id="message" style={{ color: 'red' }}></div>
                            {/*s: 22-02-22 문구추가*/}
                            {/*e: 22-02-22 문구추가*/}
                        </div>
                        {/* e : 결제 정보 */}
                    </div>
                    {/* end content order-content */}
                </form>
            </div>
            {/* container */}
        </div>
    );
};

export default Payclass;