import { FC } from "react";
import styled from "styled-components";
interface INavigationProps {
  step: number;
}
const Navigation: FC<INavigationProps> = ({ step }) => {
  return (
    <Container>
      <CircleItem active={step === 0} title="이메일 인증" />
      <CircleItem active={step === 1} title="기본정보 입력" />
      <CircleItem active={step === 2} title="상세정보 입력" />
    </Container>
  );
};

const Container = styled.div`
  width: 238px;
  height: 9px;
  background: #f2f2f2;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
`;

const CircleItem = styled.div<{ active: boolean; title: string }>`
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background: ${({ active }) => (active ? "#EE7B45" : "#c2c2c2")};
  display: flex;
  justify-content: center;
  ::before {
    margin-top: 25px;
    position: absolute;
    content: "${({ title }) => title}";
    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -0.5px;
    color: ${({ active }) => (active ? "#EE7B45" : "#c2c2c2")};
  }
`;

export default Navigation;
