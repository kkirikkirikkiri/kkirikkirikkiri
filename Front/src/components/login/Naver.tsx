import Image from "next/image";
import NaverLogin from "react-naver-login";
import styled from "styled-components";

export const Naver = () => {
  const NAVER_CLIENT_ID = "T1PLBkBiDziggLWWCwK_";
  const NAVER_CALLBACK_URL = "http://localhost:3000/login";

  return (
    <NaverLogin
      clientId={NAVER_CLIENT_ID}
      callbackUrl={NAVER_CALLBACK_URL}
      render={(props: any) => (
        <NaverLoginButton onClick={props.onClick}>
          <Image src={"/img/icon/naver.svg"} width={14} height={12} />
          네이버 로그인
        </NaverLoginButton>
      )}
      onSuccess={(naverUser: any) => console.log(naverUser)}
      onFailure={(result: any) => console.error(result)}
    />
  );
};

const NaverLoginButton = styled.button`
  background: #6bbe48;
  border-radius: 10px;
  width: 162px;
  height: 44px;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  color: #ffffff;
  gap: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export default Naver;
