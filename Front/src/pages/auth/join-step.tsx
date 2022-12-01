import Navigation from "components/join-step/Navigation";
import AuthLayout from "layouts/AuthLayout";
import { ReactElement, useState } from "react";
import styled from "styled-components";

const JoinStep = () => {
  const [step, setStep] = useState(0);
  return (
    <>
      <Navigation step={step} />
      <Container>
        <TitleFont>이메일 인증하기</TitleFont>
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
