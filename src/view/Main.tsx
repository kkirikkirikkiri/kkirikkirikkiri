import styled from "styled-components";
import Header from "../component/Header";
import IMG_MAINLOGO from "../assets/img/logo-main.png";
import BANNER_1 from "../assets/img/banner/banner-1.png";
import Input from "../component/Input";
import Footer from "../component/Footer";
import MainCategory from "../component/MainCategory";
import media from "../constants/media";
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
        display: block;
      }
    }
  }
  ${media.MOBILE} {
    .container {
      width: 100%;
      .main {
        width: 100%;
        padding: 50px 0;
        .main-logo {
          width: 180px;
          margin: 20px auto;
        }
        .banner {
          display: none;
        }
      }
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
          <MainCategory />
        </div>
      </div>
      <Footer />
    </SMainContainer>
  );
};
