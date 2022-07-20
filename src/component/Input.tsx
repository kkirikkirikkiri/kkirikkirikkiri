import styled from "styled-components";
import ICON_SEARCH from "../assets/img/icon/search.svg";
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
const Input = () => {
  return (
    <SSearchInput>
      <input />
      <div className="searchBtn"></div>
    </SSearchInput>
  );
};
export default Input;
