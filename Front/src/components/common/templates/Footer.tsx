import styled from "styled-components";
import Section from "../atoms/Section";
const Footer = () => {
  return (
    <FooterWrapper>
      <KkiriFont>끼리끼리</KkiriFont>
      <Section gap={13} margin={"8px 0 0 0"}>
        <ContactUsFont>Contact us</ContactUsFont>
        <ContactUsFont>admin@gmail.com</ContactUsFont>
      </Section>
      <CopyrightFont>Copyright ⓒ심커. All rights reserved.</CopyrightFont>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f5f5;
  padding: 24px 0;
  width: 100vw;
`;

const KkiriFont = styled.span`
  font-family: yg-jalnan;
  color: #989898;
`;

const ContactUsFont = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 100%;
  color: #616161;
`;

const CopyrightFont = styled.span`
  font-weight: 300;
  font-size: 10px;
  line-height: 100%;
  color: #757575;
  margin-top: 21px;
`;
export default Footer;
