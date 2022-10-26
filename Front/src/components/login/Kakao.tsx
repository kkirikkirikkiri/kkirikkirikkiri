import Image from "next/image";
import styled from "styled-components";

export const Kakao = () => {
  return (
    <KakaoLoginButton onClick={() => console.log("카카오 로그인")}>
      <Image src={"/img/icon/kakao.svg"} width={14} height={12} />
      카카오 로그인
    </KakaoLoginButton>
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
