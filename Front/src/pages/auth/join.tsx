import Button from "components/common/atoms/Button";
import Section from "components/common/atoms/Section";
import Kakao from "components/join/Kakao";
import Naver from "components/join/Naver";
import AuthLayout from "layouts/AuthLayout";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import ROUTES from "routes/routes";
import styled from "styled-components";

const Join = () => {
  const router = useRouter();
  return (
    <>
      <ButtonContainer direction="column" gap={16}>
        <Kakao />
        <Naver />
        <EmailJoinButton onClick={() => router.push(ROUTES.TERMS.url)}>
          이메일로 회원가입
        </EmailJoinButton>
      </ButtonContainer>
    </>
  );
};
Join.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

const ButtonContainer = styled(Section)`
  width: 100%;
`;

const EmailJoinButton = styled(Button)`
  border: 1px solid #bdbdbd;
  background: #fff;
  color: #424242;
`;

export default Join;
