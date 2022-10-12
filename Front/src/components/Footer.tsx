import styled from "styled-components";
const SFooter = styled.footer`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  box-sizing: border-box;
  border-top: 1px solid #bdbdbd;
  position: absolute;
  bottom: 0;
  .contact {
    font-family: "Noto Sans KR";
    font-weight: 300;
    font-size: 12px;
    color: #000000;
    display: flex;
    align-items: center;
    margin: 15px 0;
    img {
      margin-right: 8px;
    }
    span {
      background: #bdbdbd;
      border-radius: 12px;
      font-weight: 400;
      font-size: 12px;
      color: #000000;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: 5px 8px;
      margin-right: 10px;
    }
  }
  .copyright {
    font-family: "Noto Sans KR";
    font-weight: 300;
    font-size: 10px;
    color: #757575;
  }
`;
const Footer = () => {
  return (
    <SFooter>
      <img src={"/img/icon/hand.png"} />
      <div className="contact">
        <span>
          <img src={"/img/icon/hand.png"} />
          Contact us
        </span>
        admin@gmail.com
      </div>
      <div className="copyright">Copyright ⓒ심커. All rights reserved.</div>
    </SFooter>
  );
};
export default Footer;
