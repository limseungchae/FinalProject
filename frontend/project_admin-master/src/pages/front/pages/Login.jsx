import React from 'react';

export default function Login () {
    const API_KEY = '5d1c1e7c981c84a329eb735d9ad56f88';
    const REDIRECTION = `${process.env.REACT_APP_FRONT_DOMAIN}/auth/kakao`;

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECTION}&response_type=code`

    window.location.href = KAKAO_AUTH_URL;
}