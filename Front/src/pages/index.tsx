import styled from "styled-components";

import HorizontalBlank from "components/common/atoms/HorizontalBlank";
import Input from "components/common/atoms/Input";
import Section from "components/common/atoms/Section";
import BannerSlider from "components/main/BannerSlider";
import MainCategory from "components/main/MainCategory";
import media from "constants/media";
import useMediaQuery from "hooks/useMediaQuery";
import CommonLayout from "layouts/CommonLayout";
import Image from "next/image";
import { ReactElement } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const SMain = styled.div`
  width: calc(100vw - 36px);
  max-width: 500px;
  margin: 0 auto;
  padding: 130px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.MOBILE} {
    padding: 130px 0 0;
  }
`;

const Main = () => {
  const isMobile = useMediaQuery(media.mobileMaxWidth);
  return (
    <SMain>
      <LogoContainer>
        <LogoImageContainer>
          <Image src={"/img/Logo.svg"} alt="main" width={72} height={82} />
        </LogoImageContainer>
        <FontImageContainer>
          <Image src={"/img/FontLogo.svg"} alt="main" width={180} height={43} />
        </FontImageContainer>
      </LogoContainer>

      {!isMobile && (
        <>
          <HorizontalBlank height={30} />
          <BannerSlider />
        </>
      )}
      <SearchInput
        placeholder="내가 관심있는 심리테스트를 검색해 보세요."
        addonNext={
          <Section margin={"0 16px 0 0"}>
            <Image src={"img/icon/SearchGray.svg"} width={24} height={24} />
          </Section>
        }
      />
      <MainCategory />
      {isMobile && (
        <>
          <HorizontalBlank height={100} />
          <BannerSlider />
        </>
      )}
    </SMain>
  );
};

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
`;

const LogoImageContainer = styled.div`
  position: relative;
  width: 72px;
  height: 82px;
  ${media.MOBILE} {
    width: 53px;
    height: 61px;
  }
`;
const FontImageContainer = styled.div`
  position: relative;
  width: 180px;
  height: 43px;
  ${media.MOBILE} {
    width: 117px;
    height: 28px;
  }
`;

const SearchInput = styled(Input)`
  margin: 60px 0;

  ${media.MOBILE} {
    margin: 32px 0 60px;
  }
`;

Main.getLayout = function getLayout(page: ReactElement) {
  return <CommonLayout>{page}</CommonLayout>;
};

export default Main;
