import Button from "components/common/atoms/Button";
import HorizontalBlank from "components/common/atoms/HorizontalBlank";
import HorizontalLine from "components/common/atoms/HorizontalLine";
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
      </InputContainer>
      <HorizontalBlank height={12} />
      <ButtonContainer>
        <Button
          color={"#424242"}
          background={"#fff"}
          border={"1px solid #DBDBDB"}
          onClick={() => router.push(ROUTES.JOIN.url)}
        >
          회원가입
        </Button>
        <Button color={"#ffffff"} background={"#78C3ED"} onClick={handleAuth}>
          로그인
        </Button>
      </ButtonContainer>
      <HorizontalBlank height={60} />
      <LineContainer>
        <HorizontalLine />
        <span>SNS 계정으로 로그인</span>
        <HorizontalLine />
      </LineContainer>
      <HorizontalBlank height={24} />
      <Section direction={"column"} gap={12} width={"100%"}>
        <Naver />
        <Kakao />
      </Section>
    </>
  );
};
Login.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

const InputContainer = styled(Section)`
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`;

const LineContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  display: flex;
  align-items: center;
  color: #c2c2c2;
  white-space: pre;
`;
export default Login;
