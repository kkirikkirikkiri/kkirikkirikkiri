import Footer from "components/common/templates/Footer";
import Header from "components/common/templates/Header";
import media from "constants/media";
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
  overflow-y: hidden;
  overflow-x: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Contents = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  height: 100%;
  /* background-image: url("/img/background-dash.svg"); */
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-position-x: left;
  background-attachment: fixed;
  background-size: 90%;
  ${media.MOBILE} {
    background-image: unset;
    padding: 0 20px;
  }
`;

export default CommonLayout;
