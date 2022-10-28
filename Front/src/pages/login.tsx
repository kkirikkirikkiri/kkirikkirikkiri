import HorizontalBlank from "components/common/atoms/HorizontalBlank";
import Section from "components/common/atoms/Section";
import Kakao from "components/login/Kakao";
import LoginInput from "components/login/LoginInput";
import Naver from "components/login/Naver";
import CommonLayout from "layouts/CommonLayout";
import Image from "next/image";
import { ReactElement } from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Wrapper>
      <Image
        src={"/img/logo-main.png"}
        layout={"fixed"}
        alt="main"
        width={232}
        height={80}
      />
      <HorizontalBlank height={30} />
      <InputContainer gap={12} direction="column">
        <LoginInput placeholder="아이디 입력" />
        <LoginInput placeholder="비밀번호 입력" />
        <LoginButton>로그인</LoginButton>
      </InputContainer>
      <HorizontalBlank height={30} />
      <Section gap={4}>
        <Naver />
        <Kakao />
      </Section>
      <JoinButton>회원가입</JoinButton>
    </Wrapper>
  );
};
Login.getLayout = function getLayout(page: ReactElement) {
  return <CommonLayout>{page}</CommonLayout>;
};

const Wrapper = styled.div`
  width: 328px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const InputContainer = styled(Section)`
  width: 100%;
`;

const LoginButton = styled.button`
  height: 44px;
  background: #ff7f42;
  border-radius: 10px;
  font-weight: 400;
  font-size: 12px;
  color: #ffffff;
  width: 100%;
`;

const JoinButton = styled(LoginButton)`
  background: #fcdfc6;
  color: #000000;
  margin-top: 7px;
`;

export default Login;
