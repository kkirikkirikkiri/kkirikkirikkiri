import styled from "styled-components";
import Header from "../component/Header";
import IMG_MAINLOGO from "../assets/img/logo-main.png";
import BANNER_1 from "../assets/img/banner/banner-1.png";
import ICON_SEARCH from "../assets/img/icon/search.svg";
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
const SSearchInput = styled.div`
  width: 100%;
  margin: 60px 0;
  position: relative;
  input {
    background: #fafafa;
    filter: drop-shadow(0px 0px 9px rgba(34, 34, 34, 0.34));
    border-radius: 10px;
    border: 0;
    width: 100%;
    height: 44px;
    padding: 0 20px;
    box-sizing: border-box;
    font-size: 18px;
    &:focus {
      outline: none;
    }
  }
  .searchBtn {
    cursor: pointer;
    width: 46px;
    height: 46px;
    background: #ff7f42;
    border-radius: 0px 10px 10px 0px;
    position: absolute;
    right: -1px;
    top: -1px;
    background-image: url(${ICON_SEARCH});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 24px;
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
          <SSearchInput>
            <input />
            <div className="searchBtn"></div>
          </SSearchInput>
        </div>
      </div>
    </SMainContainer>
  );
};
