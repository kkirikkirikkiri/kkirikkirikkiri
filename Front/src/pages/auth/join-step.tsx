import HorizontalBlank from "components/common/atoms/HorizontalBlank";
import AuthEmail from "components/join-step/AuthEmail";
import DetailProfileInput from "components/join-step/DetailProfileInput";
import Navigation from "components/join-step/Navigation";
import UserInfoInput from "components/join-step/UserInfoInput";
import AuthLayout from "layouts/AuthLayout";
import { ReactElement, useCallback, useState } from "react";
import styled from "styled-components";

const JoinStep = () => {
  const [step, setStep] = useState(0);
  const handleNextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);
  console.log("step", step);
  const titleList = [
    "이메일 인증하기",
    "회원정보 입력하기 (필수)",
    "나만의 프로필 만들기 (선택)",
  ];
  return (
    <>
      <Navigation step={step} />
      <Container>
        <TitleFont>{titleList[step]}</TitleFont>
        <HorizontalBlank height={16} />
        {step === 0 && <AuthEmail onNext={handleNextStep} />}
        {step === 1 && <UserInfoInput onNext={handleNextStep} />}
        {step === 2 && <DetailProfileInput onNext={handleNextStep} />}
      </Container>
    </>
  );
};
JoinStep.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

const Container = styled.div`
  width: 100%;
  margin-top: 87px;
`;

const TitleFont = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.5px;
  color: #000000;
`;

export default JoinStep;
