import Button from "components/common/atoms/Button";
import HorizontalBlank from "components/common/atoms/HorizontalBlank";
import Section from "components/common/atoms/Section";
import Kakao from "components/login/Kakao";
import LoginInput from "components/login/LoginInput";
import Naver from "components/login/Naver";
import useAppDispatch from "hooks/useAppDispatch";
import AuthLayout from "layouts/AuthLayout";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { setIsSigned } from "redux/slices/authReducer";
import ROUTES from "routes/routes";
import styled from "styled-components";

const Login = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleAuth = () => {
    dispatch(setIsSigned(true));
    router.push("/");
  };
  return (
    <>
      <InputContainer gap={12} direction="column">
        <LoginInput placeholder="아이디 입력" />
        <LoginInput placeholder="비밀번호 입력" />
        <Button color={"#ffffff"} background={"#ff7f42"} onClick={handleAuth}>
          로그인
        </Button>
      </InputContainer>
      <HorizontalBlank height={30} />
      <Section gap={4} width={"100%"}>
        <Naver />
        <Kakao />
      </Section>
      <HorizontalBlank height={7} />
      <Button
        color={"#000000"}
        background={"#fcdfc6"}
        onClick={() => router.push(ROUTES.JOIN.url)}
      >
        회원가입
      </Button>
    </>
  );
};
Login.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

const InputContainer = styled(Section)`
  width: 100%;
`;

const LoginButton = styled.button`
  cursor: pointer;
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
