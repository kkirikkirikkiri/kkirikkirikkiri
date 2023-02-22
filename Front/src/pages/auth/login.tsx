import { yupResolver } from "@hookform/resolvers/yup";
import { SignInRequest, useSignInMutate } from "apis/auth";
import Button from "components/common/atoms/Button";
import HorizontalBlank from "components/common/atoms/HorizontalBlank";
import HorizontalLine from "components/common/atoms/HorizontalLine";
import Input from "components/common/atoms/Input";
import PasswordInput from "components/common/atoms/PasswordInput";
import Section from "components/common/atoms/Section";
import Kakao from "components/login/Kakao";
import Naver from "components/login/Naver";
import Cookies from "js-cookie";
import AuthLayout from "layouts/AuthLayout";
import { useRouter } from "next/router";
import { ReactElement, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ROUTES from "routes/routes";
import styled from "styled-components";
import * as yup from "yup";

const Login = () => {
  const router = useRouter();
  const [loginResultMessage, setLoginResultMessage] = useState<string>("");
  const { mutateAsync } = useSignInMutate();
  const schema = yup.object().shape({
    password: yup.string().required("비밀번호를 입력해주세요."),
    email: yup.string().required("아이디를 입력해주세요."),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignInRequest>({
    resolver: yupResolver(schema),
  });
  const password = watch("password");
  const email = watch("email");

  const onSubmit = useCallback(async (data: SignInRequest) => {
    console.log("subit", data);
    try {
      const result = await mutateAsync({ ...data, isSocial: "일반" });
      Cookies.set("accessToken", result?.data?.jwt);
      router.push(ROUTES.HOME.url);
    } catch (error) {
      console.log("error", error);
      setLoginResultMessage((error as Error).message);
    }
  }, []);

  useEffect(() => {
    setLoginResultMessage("");
  }, [password, email]);
  console.log("watch", watch(), errors);
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputContainer gap={12} direction="column">
        <Input
          {...register("email")}
          borderType="line"
          placeholder="아이디 입력"
          error={!!errors.email}
          errorMessage={errors.email?.message}
        />
        <PasswordInput
          {...register("password")}
          error={!!errors.password}
          errorMessage={errors.password?.message}
        />
        {loginResultMessage && (
          <ErrorContainer>{loginResultMessage}</ErrorContainer>
        )}
      </InputContainer>
      <HorizontalBlank height={12} />
      <ButtonContainer>
        <Button
          color={"#424242"}
          background={"#fff"}
          border={"1px solid #DBDBDB"}
          type="button"
          onClick={() => router.push(ROUTES.JOIN.url)}
        >
          회원가입
        </Button>
        <Button color={"#ffffff"} background={"#78C3ED"} type={"submit"}>
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
    </FormContainer>
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

const FormContainer = styled.form`
  width: 100%;
`;

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  height: 43px;
  background: rgba(255, 82, 82, 0.05);
  font-weight: 400;
  font-size: 11px;
  padding: 16px;
  line-height: 100%;
  color: #ff5252;
`;
export default Login;
