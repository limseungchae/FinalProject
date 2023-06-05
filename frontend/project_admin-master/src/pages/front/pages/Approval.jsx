import React, { useEffect, useState } from "react";
import axios from "axios";

const Approval = () => {
    const [params, setParams] = useState({
        cid: "TC0ONETIME",
        tid: window.localStorage.getItem("tid"),
        partner_order_id: 'YOUR_PARTNER_ORDER_ID',
        partner_user_id: 'YOUR_PARTNER_USER_ID',
        approved_at: new Date().toLocaleString('ko-KR', { dateStyle: 'medium', timeStyle: 'short' }),
        pg_token: new URLSearchParams(window.location.search).get('pg_token'),
    });
    const [response, setResponse] = useState();

    useEffect(() => {
            axios({
                url: "https://kapi.kakao.com/v1/payment/approve",
                method: "POST",
                headers: {
                    Authorization: "KakaoAK f57ea5bc4f7c552c7541e7a194783d59",
                },
                params: params,
            }).catch(console.log).then((response) => {
                console.log(response);
                if(response?.data !== undefined) {
                    setResponse(response.data);
                }
            });
    }, []);

    return (
        <div>
            <div className="mt-5 pt-5 row justify-content-center">
                <h2 className="text-center my-5 col-12">결제가 완료되었습니다!</h2>
                <div className="col-4 p-5 bg-light">
                    <h3 className="text-center my-5">주문자 정보</h3>
                    <div>
                        <div className="my-3 row">
                            <div className="h5 col-6">주문번호</div>
                            <div className="h6 col-6 text-right">{params.partner_order_id}</div>
                        </div>
                        <div className="my-3 row">
                            <div className="h5 col-6">상품명</div>
                            <div className="h6 col-6 text-right">{response?.item_name}</div>
                        </div>
                        <div className="my-3 row">
                            <div className="h5 col-6">결제금액</div>
                            <div className="h6 col-6 text-right">{response?.amount.total}원</div>
                        </div>
                        <div className="my-3 row">
                            <div className="h5 col-6">결제승인시각</div>
                            {/*<div className="h6 col-6 text-right">{response?.approved_at}</div>*/}
                            <div className="h6 col-6 text-right">{params.approved_at}</div>
                        </div>
                    </div>
                    <div className="mt-5 pt-3 text-center">
                        <a href="/" className="btn btn-warning">메인으로 돌아가기</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Approval;
