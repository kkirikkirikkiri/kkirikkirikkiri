import { JoinResponse } from "apis/auth";
import HorizontalBlank from "components/common/atoms/HorizontalBlank";
import AuthEmail from "components/join-step/AuthEmail";
import DetailProfileInput from "components/join-step/DetailProfileInput";
import MobileNavigation from "components/join-step/MobileNavigation";
import Navigation from "components/join-step/Navigation";
import UserInfoInput from "components/join-step/UserInfoInput";
import { AUTH_TITLE_LIST } from "constants/authStepList";
import media from "constants/media";
import useMediaQuery from "hooks/useMediaQuery";
import AuthLayout from "layouts/AuthLayout";
import { ReactElement, useCallback, useState } from "react";
import styled from "styled-components";
const JoinStep = () => {
  const [step, setStep] = useState(0);
  const handleNextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);
  const isMobile = useMediaQuery(media.mobileMaxWidth);
  const [tempAuthInfo, setTempAuthInfo] = useState<JoinResponse>();
  return (
    <>
      {isMobile ? <MobileNavigation step={step} /> : <Navigation step={step} />}
      <Container>
        <TitleFont>{AUTH_TITLE_LIST[step]}</TitleFont>
        <HorizontalBlank height={16} />
        {step === 0 && <AuthEmail onNext={handleNextStep} />}
        {step === 1 && (
          <UserInfoInput
            onNext={handleNextStep}
            onJoinDone={(data) => setTempAuthInfo(data)}
          />
        )}
        {step === 2 && (
          <DetailProfileInput
            onNext={handleNextStep}
            tempAuthInfo={tempAuthInfo}
          />
        )}
      </Container>
    </>
  );
};
JoinStep.getLayout = function getLayout(page: ReactElement) {
  const isMobile = useMediaQuery(media.mobileMaxWidth);
  return <AuthLayout logoVisible={!isMobile}>{page}</AuthLayout>;
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
