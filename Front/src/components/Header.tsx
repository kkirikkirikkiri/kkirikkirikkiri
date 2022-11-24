import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ROUTES from "routes/routes";
import styled from "styled-components";
import media from "../constants/media";
const SHeader = styled.nav`
  background-color: #ff7f42;
  width: 100%;
  height: 80px;
  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    position: relative;
    padding: 0 40px;
    max-width: 1042px;
    .logo {
      height: 40px;
      display: block;
    }
    .logo-mini {
      display: none;
    }
    .dimmed {
      display: none;
    }
    .mobile-menu {
      display: none;
    }
  }
  ${media.MOBILE} {
    height: 56px;
    box-sizing: border-box;
    .container {
      padding: 0 20px;
      .logo {
        display: none;
      }
      .dimmed {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: block;
        background-color: #000;
        transition: opacity 0.5s ease-out;
        &.active {
          opacity: 0.8;
          z-index: 998;
        }
        &.none {
          opacity: 0;
          z-index: -999;
        }
      }
      .mobile-menu {
        display: block;
        width: 80%;
        height: 100vh;
        position: absolute;
        top: 0;
        background-color: #fff;
        z-index: 999;
        transition: left 0.7s ease;
        box-sizing: border-box;
        .close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
        }
        &.active {
          left: -20px;
        }
        &.none {
          left: -86%;
        }
        .m-login {
          padding: 20px;
          border-bottom: 10px solid #f4f4f4;
          span {
            font-size: 12px;
            width: 68%;
            display: inline-block;
          }
        }
        .m-menu {
          padding: 0 20px;
          ul.board {
            border-bottom: 1px solid #e0e0e0;
            line-height: 40px;
            font-size: 16px;
            padding-bottom: 10px;
            list-style-type: none;
            padding-inline-start: 0px;
            h2 {
              color: #616161;
              font-weight: 400;
              font-size: 13px;
              line-height: 19px;
            }
          }
        }
      }
    }
  }
`;
const LoginButton = styled.a`
  width: 100%;
  height: 38px;
  background: #faecdc;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  ${media.MOBILE} {
    height: 25px;
  }
`;
const LoginBtn = styled.div`
  cursor: pointer;
  background: #ffffff;
  border-radius: 10px;
  color: #000;
  width: 76px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${media.MOBILE} {
    height: 28px;
  }
`;

const MobileIconImageContainer = styled.div`
  cursor: pointer;
  display: none;
  ${media.MOBILE} {
    display: block;
  }
  &.center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const PcIconImageContainer = styled.div`
  cursor: pointer;
  position: relative;
  display: block;
  ${media.MOBILE} {
    display: none;
  }
`;

const MobileGNB = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  return (
    <>
      <MobileIconImageContainer>
        <Image
          src={"/img/icon/menu.svg"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          width={24}
          height={24}
        />
      </MobileIconImageContainer>
      <div className={`mobile-menu ${mobileMenuOpen ? "active" : "none"}`}>
        <span
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="close-btn"
        >
          <MobileIconImageContainer>
            <Image src={"/img/icon/close.svg"} width={24} height={24} />
          </MobileIconImageContainer>
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
  return (
    <SHeader>
      <div className="container">
        <MobileGNB />
        <PcIconImageContainer>
          <Image
            className="logo"
            src={"/img/logo.png"}
            width={115}
            height={39}
          />
        </PcIconImageContainer>
        <MobileIconImageContainer className="center">
          <Image
            className="logo-mini"
            src={"/img/logo-mini.svg"}
            width={39}
            height={35}
            objectFit="fill"
          />
        </MobileIconImageContainer>
        <Link href={ROUTES.LOGIN.url}>
          <div className="account">
            <LoginBtn>로그인</LoginBtn>
          </div>
        </Link>
      </div>
    </SHeader>
  );
};
export default Header;
