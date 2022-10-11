import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ICON_CLOSE from "../assets/img/icon/close.svg";
import ICON_MENU from "../assets/img/icon/menu.svg";
import LOGOMINI from "../assets/img/logo-mini.svg";
import LOGO from "../assets/img/logo.png";
import media from "../constants/media";
const SHeader = styled.nav`
  background-color: #ff7f42;
  width: 100%;
  height: 80px;
  .container {
    width: 1024px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    position: relative;
    .logo {
      height: 40px;
      display: block;
    }
    .logo-mini {
      display: none;
    }
    .menu-btn {
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
    padding: 0 20px;
    box-sizing: border-box;
    .container {
      width: 100%;
      .logo {
        display: none;
      }
      .logo-mini {
        z-index: 99;
        display: block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
      .menu-btn {
        display: block;
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
const SM_LoginBtn = styled.div`
  ${media.MOBILE} {
    width: 100%;
    height: 38px;
    background: #faecdc;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
`;
const SLoginBtn = styled.div`
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
    display: none;
  }
`;
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  return (
    <SHeader>
      <div className="container">
        <img
          src={ICON_MENU}
          className={`menu-btn`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
        <div className={`mobile-menu ${mobileMenuOpen ? "active" : "none"}`}>
          <span
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="close-btn"
          >
            <img src={ICON_CLOSE} />
          </span>
          <div className="m-login">
            <span>로그인하고 끼리끼리를 마음껏 투어하세요!</span>
            <Link to="/login">
              <SM_LoginBtn>로그인</SM_LoginBtn>
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
        <img className="logo" src={LOGO} />
        <img className="logo-mini" src={LOGOMINI} />
        <Link to="/login">
          <div className="account">
            <SLoginBtn>로그인</SLoginBtn>
          </div>
        </Link>
      </div>
    </SHeader>
  );
};
export default Header;
