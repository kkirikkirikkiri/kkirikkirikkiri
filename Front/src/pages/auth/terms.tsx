import Button from "components/common/atoms/Button";
import HorizontalBlank from "components/common/atoms/HorizontalBlank";
import HorizontalLine from "components/common/atoms/HorizontalLine";
import Section from "components/common/atoms/Section";
import AuthLayout from "layouts/AuthLayout";
import { ReactElement } from "react";
import styled from "styled-components";

const Join = () => {
  return (
    <Container>
      <TitleFont>서비스 이용약관, 개인정보 수집 및 이용에</TitleFont>
      <TitleFont>모두 동의합니다.</TitleFont>
      <HorizontalLine color="#e0e0e0" marginHorizontal={30} />
      <TitleFont>서비스 사용약관(필수)</TitleFont>
      <GraySection>
        <div>1조 (목적 등)</div>
        <div>
          이 서비스 약관은 회원이 끼리끼리에게 제공하는 인터넷 사이트 서비스를
          이용함에 있어 회사와 회원 간의 권리, 의무 및 책임사항 등을 규정함을
          목적으로 합니다.
        </div>
      </GraySection>
      <HorizontalBlank height={12} />
      <TitleFont>개인정보 수집 및 이용 동의 (필수)</TitleFont>
      <GraySection>
        <div>1조 (목적 등)</div>
        <div>
          이 서비스 약관은 회원이 끼리끼리에게 제공하는 인터넷 사이트 서비스를
          이용함에 있어 회사와 회원 간의 권리, 의무 및 책임사항 등을 규정함을
          목적으로 합니다.
        </div>
      </GraySection>
      <HorizontalBlank height={30} />
      <Button background={"#fcdfc6"} color={"#000000"}>
        가입하기
      </Button>
    </Container>
  );
};
Join.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

const Container = styled.div`
  width: 292px;
`;

const TitleFont = styled(Section)`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.5px;
  color: #000000;
`;

const GraySection = styled.div`
  margin-top: 12px;
  white-space: pre-wrap;
  border-radius: 4px;
  background: #f5f6f8;
  padding: 12px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.5px;
  color: #787878;
`;

export default Join;
