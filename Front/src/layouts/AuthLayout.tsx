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
          src={"/img/banner/Logo.svg"}
          alt="main"
          width={270}
          height={83}
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
