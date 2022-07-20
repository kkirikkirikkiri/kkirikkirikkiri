import styled from "styled-components";
import Header from "../component/Header";
import IMG_MAINLOGO from "../assets/img/logo-main.png";
import BANNER_1 from "../assets/img/banner/banner-1.png";
import ICON_FREEBOARD from "../assets/img/icon/free.png";
import ICON_MBTITEST from "../assets/img/icon/mbti.png";
import ICON_COLORTEST from "../assets/img/icon/color.png";
import Input from "../component/Input";
import Footer from "../component/Footer";
const SMainContainer = styled.div`
  .container {
    width: 1024px;
    margin: 0 auto;
    .main {
      width: 500px;
      margin: 0 auto;
      padding: 130px 0;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      .main-logo {
        width: 225px;
        margin: 20px auto;
      }
      .banner {
        width: 100%;
      }
    }
  }
`;
const SMainIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  .item {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto;
    position: relative;
    cursor: pointer;
    span {
      white-space: nowrap;
      position: absolute;
      bottom: -35px;
      left: 51%;
      transform: translateX(-50%);
    }
    &.color-test {
      background-color: #a07eff;
      background-image: url(${ICON_COLORTEST});
    }
    &.mbti-test {
      background-color: #7cca97;
      background-image: url(${ICON_MBTITEST});
    }
    &.free-board {
      background-color: #78d1e9;
      background-image: url(${ICON_FREEBOARD});
    }
  }
`;
export const Main = () => {
  return (
    <SMainContainer>
      <Header />
      <div className="container">
        <div className="main">
          <img className="main-logo" src={IMG_MAINLOGO} />
          <img className="banner" src={BANNER_1} />
          <Input />
          <SMainIcon className="main-icon">
            <div className="item color-test">
              <span>색상별 테스트</span>
            </div>
            <div className="item mbti-test">
              <span>MBTI별 테스트</span>
            </div>
            <div className="item free-board">
              <span>자유게시판</span>
            </div>
          </SMainIcon>
        </div>
      </div>
      <Footer />
    </SMainContainer>
  );
};
