import Image from "next/image";
import KakaoLogin from "react-kakao-login";
import styled from "styled-components";

const token = "64d0c649f5b7e5a3ef9790587ee5f19b";
export const Kakao = () => {
  return (
    <KakaoLogin
      token={token}
      onSuccess={console.log}
      onFail={console.error}
      onLogout={console.info}
      render={({ onClick }: any) => {
        return (
          <KakaoLoginButton onClick={onClick}>
            <Image src={"/img/icon/kakao.svg"} width={14} height={12} />
            카카오 로그인
          </KakaoLoginButton>
        );
      }}
    />
  );
};

const KakaoLoginButton = styled.button`
  background: #f8d756;
  border-radius: 10px;
  width: 162px;
  height: 44px;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  color: #050505;
  gap: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export default Kakao;
