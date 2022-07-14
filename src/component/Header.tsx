import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import LOGO from "../assets/img/logo.png";
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
    .logo {
      height: 40px;
    }
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
`;
const Header = () => {
  return (
    <SHeader>
      <div className="container">
        <img className="logo" src={LOGO} />
        <div className="account">
          <SLoginBtn>로그인</SLoginBtn>
        </div>
      </div>
    </SHeader>
  );
};
export default Header;
