import HorizontalBlank from "components/common/atoms/HorizontalBlank";
import media from "constants/media";
import Image from "next/image";
import { FC, ReactNode } from "react";
import styled from "styled-components";
import CommonLayout from "./CommonLayout";
interface ICommonLayoutProps {
  children: ReactNode;
  logoVisible?: boolean;
}
const AuthLayout: FC<ICommonLayoutProps> = ({
  children,
  logoVisible = true,
}) => {
  return (
    <CommonLayout>
      <Wrapper>
        {logoVisible && (
          <>
            <Image
              src={"/img/banner/Logo.svg"}
              alt="main"
              width={270}
              height={83}
            />
            <HorizontalBlank height={30} />
          </>
        )}
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
  ${media.MOBILE} {
    width: 100%;
  }
`;

export default AuthLayout;
