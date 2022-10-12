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
`;

const Contents = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  height: 100%;
`;

export default CommonLayout;
