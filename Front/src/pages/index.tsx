import styled from "styled-components";

import HorizontalBlank from "components/common/atoms/HorizontalBlank";
import Input from "components/Input";
import MainCategory from "components/MainCategory";
import useAppSelector from "hooks/useAppSelector";
import CommonLayout from "layouts/CommonLayout";
import Image from "next/image";
import { ReactElement } from "react";
import Slider from "react-slick";
import { getIsSigned } from "redux/slices/authReducer";
import { usePokemonByNameQuery, usePokemonsQuery } from "redux/slices/test";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const SMain = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 130px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  .banner {
    width: 100%;
    .banner-item {
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      img {
        border-radius: 8px;
        width: 100%;
      }
    }
    .slick-dots {
      ul {
        gap: 8px;
      }
      li {
        width: 6px;
        height: 6px;
        border-radius: 3px;
        background-color: #bdbdbd;
        transition: width 0.3s;
        button::before {
          display: none;
        }
        &.slick-active {
          width: 16px;
          background-color: #848484;
        }
      }
    }
  }
`;

const Main = () => {
  const settings = {
    dots: true,
    infinite: true, // 무한으로 즐기게
    speed: 500,
    slidesToScroll: 1, //1장씩 넘어가세요
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const isSignedIn = useAppSelector(getIsSigned);
  console.log("로그인:", isSignedIn);
  const { data } = usePokemonsQuery();
  const { data: pokemon } = usePokemonByNameQuery("bulbasaur");
  console.log("????", pokemon, data);
  return (
    <div className="container">
      <SMain>
        <Image src={"/img/logo-main.png"} alt="main" width={232} height={80} />
        <HorizontalBlank height={30} />
        <Slider {...settings} className="banner" dots={true}>
          <div className="banner-item">
            <img src={"/img/banner/banner_w_1.jpg"} alt="banner1" />
          </div>
          <div className="banner-item">
            <img src={"/img/banner/banner_w_2.jpg"} alt="banner2" />
          </div>
          <div className="banner-item">
            <img src={"/img/banner/banner_w_3.jpg"} alt="banner3" />
          </div>
        </Slider>
        <Input />
        <MainCategory />
      </SMain>
    </div>
  );
};

Main.getLayout = function getLayout(page: ReactElement) {
  return <CommonLayout>{page}</CommonLayout>;
};

export default Main;
