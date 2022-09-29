import ICON_FREEBOARD from "../assets/img/icon/free.png";
import ICON_MBTITEST from "../assets/img/icon/mbti.png";
import ICON_COLORTEST from "../assets/img/icon/color.png";
import styled from "styled-components";
import media from "../constants/media";

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
  ${media.MOBILE} {
    .item {
      width: 45px;
      height: 45px;
      background-size: 60%;
      span {
        bottom: -25px;
        font-size: 14px;
      }
    }
  }
`;
const MainCategory = () => {
  return (
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
  );
};
export default MainCategory;
