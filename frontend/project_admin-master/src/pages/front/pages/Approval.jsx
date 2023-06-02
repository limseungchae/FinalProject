import React from "react";
import axios from "axios";
import DateTime from "react-datetime";

class Approval extends React.Component {
    state = {
        params: {
            cid: "TC0ONETIME",
            tid: window.localStorage.getItem("tid"),
            partner_order_id: 'YOUR_PARTNER_ORDER_ID',
            partner_user_id: 'YOUR_PARTNER_USER_ID',
            item_name: '초코파이', // 여기에 상품명을 넣으세요
            amount: 2200, // 여기에 총 결제 금액을 넣으세요
            approved_at: new Date().toLocaleString('ko-KR', { dateStyle: 'medium', timeStyle: 'short' }), // Display both date and time in a specific format
            pg_token: '',
        },
    };

    componentDidMount() {
        const { location } = this.props;

        if (location && location.search) {
            const search = location.search;
            const { params } = this.state;
            params.pg_token = search.split("=")[1];

            axios({
                url: "/v1/payment/approve",
                method: "POST",
                headers: {
                    Authorization: "KakaoAK f57ea5bc4f7c552c7541e7a194783d59",
                    "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
                },
                params,
            }).then((response) => {
                console.log(response);
            });
        }
    }

    render() {
        return (
            <div>
                <div className="mt-5 pt-5 row justify-content-center">
                    <h2 className="text-center my-5 col-12">결제가 완료되었습니다!</h2>
                    <div className="col-4 p-5 bg-light">
                        <h3 className="text-center my-5">주문자 정보</h3>
                        <div>
                            <div className="my-3 row">
                                <div className="h5 col-6">주문번호</div>
                                <div className="h6 col-6 text-right">{this.state.params.partner_order_id}</div>
                            </div>
                            <div className="my-3 row">
                                <div className="h5 col-6">상품명</div>
                                <div className="h6 col-6 text-right">{this.state.params.item_name}</div>
                            </div>
                            <div className="my-3 row">
                                <div className="h5 col-6">결제금액</div>
                                <div className="h6 col-6 text-right">{this.state.params.amount}원</div>
                            </div>
                            <div className="my-3 row">
                                <div className="h5 col-6">결제승인시각</div>
                                <div className="h6 col-6 text-right">{this.state.params.approved_at}</div>
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
}

export default Approval;
