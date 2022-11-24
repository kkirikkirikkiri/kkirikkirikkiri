import HorizontalBlank from "components/common/atoms/HorizontalBlank";
import Image from "next/image";
import { FC, ReactNode } from "react";
import styled from "styled-components";
import CommonLayout from "./CommonLayout";
interface ICommonLayoutProps {
  children: ReactNode;
}
const AuthLayout: FC<ICommonLayoutProps> = ({ children }) => {
  return (
    <CommonLayout>
      <Wrapper>
        <Image
          src={"/img/logo-main.png"}
          layout={"fixed"}
          alt="main"
          width={232}
          height={80}
        />
        <HorizontalBlank height={30} />
        {children}
      </Wrapper>
    </CommonLayout>
  );
};
const Wrapper = styled.div`
  width: 328px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default AuthLayout;
