import Footer from "components/Footer";
import Header from "components/Header";
import { FC, ReactNode } from "react";
import styled from "styled-components";
interface ICommonLayoutProps {
  children: ReactNode;
}
const CommonLayout: FC<ICommonLayoutProps> = ({ children }) => {
  return (
    <CommonLayoutContainer>
      <Header />
      <Contents>{children}</Contents>
      <Footer />
    </CommonLayoutContainer>
  );
};

const CommonLayoutContainer = styled.div`
  background-color: #fff;
  overflow: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Contents = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  height: 100%;
  background-image: url("/img/background-dash.svg");
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-position-x: left;
  background-attachment: fixed;
  background-size: 90%;
`;

export default CommonLayout;
