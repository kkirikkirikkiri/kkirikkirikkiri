import { FC } from "react";
import styled from "styled-components";
interface IMobileNavigationProps {
  step: number;
}
const MobileNavigation: FC<IMobileNavigationProps> = ({ step }) => {
  return (
    <Container>
      <Progress step={step} />
      <NavigationItem active={step === 0} title="이메일 인증" />
      <NavigationItem active={step === 1} title="기본정보 입력" />
      <NavigationItem active={step === 2} title="상세정보 입력" />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  display: flex;
  position: sticky;
  top: 0;
  height: 4px;
`;

const Progress = styled.div<{ step: number }>`
  position: absolute;
  width: ${({ step }) =>
    step === 0 ? "33.3%" : step === 1 ? "66.6%" : "100%"};
  height: 4px;
  background: #78c3ed;
  border-radius: 2px;
  transition: width 0.3s;
`;

const NavigationItem = styled.div<{ active: boolean; title: string }>`
  flex: 1;
  ::after {
    display: flex;
    justify-content: center;
    margin-top: 12px;
    content: "${({ title }) => title}";
    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -0.5px;
    color: ${({ active }) => (active ? "#78C3ED" : "#c2c2c2")};
  }
`;

export default MobileNavigation;
