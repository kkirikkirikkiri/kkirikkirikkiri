import { useEffect } from "react";

export const NaverLogin = () => {
  const NAVER_CLIENT_ID = "T1PLBkBiDziggLWWCwK_";
  const NAVER_CALLBACK_URL = "http://localhost:3000/login";

  const initializeNaverLogin = (naver: any) => {
    const naverLogin = new naver.LoginWithNaverId({
      firstChild: "body",
      clientId: NAVER_CLIENT_ID,
      callbackUrl: NAVER_CALLBACK_URL,
      // 팝업창으로 로그인
      isPopup: false,
      // 버튼 타입 ( 색상, 타입, 크기 변경 가능 )
      loginButton: { color: "green", type: 1, height: 40 },
      callbackHandle: true,
    });
    naverLogin.init();
    naverLogin.getLoginStatus(async function (status: boolean) {
      if (status) {
        const userid = naverLogin.user.getEmail();
        const username = naverLogin.user.getName();
        console.log({ id: userid, name: username, dd: naverLogin.user });
        // setUserInfo(naverLogin.user)
      }
    });
  };

  const userAccessToken = () => {
    window.location.href.includes("access_token") && getToken();
  };

  const getToken = () => {
    const token = window.location.href.split("=")[1].split("&")[0];
    // 이후 로컬 스토리지 또는 state에 저장하여 사용하자!
    // localStorage.setItem('access_token', token)
    // setGetToken(token)
  };

  useEffect(() => {
    //@ts-ignore
    const { naver } = window;
    initializeNaverLogin(naver);
    userAccessToken();
  }, []);

  // 구현할 위치에 아래와 같이 코드를 입력해주어야 한다.
  // 태그에 id="naverIdLogin" 를 해주지 않으면 오류가 발생한다!
  return (
    <>
      <div id="naverIdLogin"> </div>
    </>
  );
};
