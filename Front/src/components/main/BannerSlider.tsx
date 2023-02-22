import IMAGE_LIST from "constants/bannerList";
import { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import BannerModal from "./BannerModal";
const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true, // 무한으로 즐기게
    speed: 500,
    slidesToScroll: 1, //1장씩 넘어가세요
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <Container>
        <Slider
          {...settings}
          className="banner"
          afterChange={(currentSlide) => setCurrentIndex(currentSlide)}
        >
          {IMAGE_LIST.map((image, index) => (
            <div className="banner-item">
              <img src={`/img/banner/${image}`} alt={`banner${index + 1}`} />
            </div>
          ))}
        </Slider>
        <BannerModal currentIndex={currentIndex} />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  .banner {
    .banner-item {
      img {
        width: 100%;
      }
    }
    .slick-arrow {
      display: none !important;
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
export default BannerSlider;
