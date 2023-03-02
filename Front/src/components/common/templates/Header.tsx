import UserInfo from "components/login/UserInfo";
import media from "constants/media";
import useAuth from "hooks/useAuth";
import useMediaQuery from "hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ROUTES from "routes/routes";
import styled from "styled-components";
const MobileGNB = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  return (
    <>
      <div>
        <Image
          src={"/img/icon/menu.svg"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          width={24}
          height={24}
        />
      </div>
      <div className={`mobile-menu ${mobileMenuOpen ? "active" : "none"}`}>
        <span
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="close-btn"
        >
          <div>
            <Image src={"/img/icon/close.svg"} width={24} height={24} />
          </div>
        </span>
        <div className="m-login">
          <span>로그인하고 끼리끼리를 마음껏 투어하세요!</span>
          <Link href={ROUTES.LOGIN.url}>
            <LoginButton>로그인</LoginButton>
          </Link>
        </div>
        <div className="m-menu">
          <ul className="board">
            <li>공지사항</li>
            <li>자유게시판</li>
          </ul>
          <ul className="board">
            <h2>유형별 TEST</h2>
            <li>MBTI 유형</li>
            <li>색상 테스트</li>
            <li>?? 테스트</li>
            <li>?? 테스트</li>
          </ul>
        </div>
      </div>
      <div className={`dimmed ${mobileMenuOpen ? "active" : "none"}`}></div>
    </>
  );
};

const Header = () => {
  const isMobile = useMediaQuery(media.mobileMaxWidth);
  const { isAuthed } = useAuth();
  console.log("isAuthed", isAuthed);
  return (
    <Container>
      <SHeader>
        {/* <MobileGNB /> */}
        {isMobile && (
          <>
            <LeftContainer>
              <Image
                src={"/img/icon/hamberger.svg"}
                alt="main"
                width={24}
                height={24}
              />
            </LeftContainer>

            <Link href={ROUTES.HOME.url}>
              <Image src={"/img/Logo.svg"} alt="main" width={28} height={32} />
            </Link>
          </>
        )}
        <RightContainer>
          {isAuthed ? (
            <UserInfo />
          ) : (
            <Link href={ROUTES.LOGIN.url}>
              <LoginButton>로그인</LoginButton>
            </Link>
          )}
        </RightContainer>
      </SHeader>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  ${media.MOBILE} {
    ::after {
      content: " ";
      display: block;
      height: 2px;
      width: 100%;
      background: linear-gradient(
        90deg,
        #9b51e0 0%,
        #2f80ed 29.17%,
        #6fcf97 72.4%,
        #f2c94c 100%
      );
    }
  }
`;
const SHeader = styled.nav`
  max-width: 1100px;
  width: 70vw;
  display: flex;
  height: 76px;
  align-items: center;
  margin: 0 auto;
  justify-content: flex-end;
  position: relative;
  ${media.MOBILE} {
    width: 100vw;
    height: 56px;
    padding: 12px 16px;
    justify-content: center;
    box-sizing: border-box;
  }
`;

const LoginButton = styled.button`
  height: 40px;
  width: 76px;
  border-radius: 10px;
  background: #eef6fa;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #2aa0e1;
  ${media.MOBILE} {
    height: 32px;
    width: 64px;
    font-size: 12px;
  }
`;

const LeftContainer = styled.div`
  position: absolute;
  left: 16px;
`;

const RightContainer = styled.div`
  position: absolute;
  right: 16px;
`;

export default Header;
