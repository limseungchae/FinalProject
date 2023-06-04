import axios from "axios";

export default function Oauth() {
    const code = new URL(window.location.href).searchParams.get('code') // 쿼리스트링에서 'code' 에 해당하는 값만 추출

    const postData = {
        'grant_type':'authorization_code',
        'client_id':'5d1c1e7c981c84a329eb735d9ad56f88',
        'redirect_uri':'http://localhost:3000/auth/kakao',
        'code':code,
        'client_secret':'A02yOfXLP1tARjREXatbEAfP9w1WrDKX'
        // 본문 데이터
    };

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
    };

    // 토큰 요청
    axios.post('https://kauth.kakao.com/oauth/token', postData, config)
        .then(response => {
            // 성공적으로 요청을 보낸 경우의 처리
            console.log(response.data);
            axios.get('http://localhost:8080/auth/token?token=' + response.data.access_token)
                .then((res)=> {
                if(res.data.token) {
                    localStorage.setItem("ACCESS_TOKEN", res.data.token);
                    // token이 존재하는 경우 메인페이지로 리디렉트
                    window.location.href = '/';
                }
            })
        })
        .catch(error => {
            // 요청이 실패한 경우의 처리
            console.error(error);
        });
}
