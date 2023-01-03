import { FC, InputHTMLAttributes } from "react";
import styled from "styled-components";
import media from "../constants/media";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  addonPrev?: React.ReactNode;
  addonNext?: React.ReactNode;
}
const Input: FC<InputProps> = ({ addonPrev, addonNext, ...inputProps }) => {
  return (
    <InputContainer>
      {addonPrev && <PrevIconContainer>{addonPrev}</PrevIconContainer>}
      <input {...inputProps} />
      {addonNext && <NextIconContainer>{addonNext}</NextIconContainer>}
    </InputContainer>
  );
};
const InputContainer = styled.div`
  width: 100%;
  margin: 60px 0;
  position: relative;
  display: flex;
  align-items: center;
  filter: drop-shadow(0px 0px 8px rgba(22, 22, 22, 0.1));
  height: 44px;
  background: #ffffff;
  border-radius: 10px;
  input {
    padding: 0 12px;
    height: 44px;
    width: 100%;
    border: 0;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 350;
    font-size: 14px;
    line-height: 100%;
    color: #616161;
    border-radius: 10px;
    ::placeholder {
      color: #bfbfbf;
    }
    &:focus {
      outline: none;
    }
  }
  ${media.MOBILE} {
    margin: 30px 0;
  }
`;

const PrevIconContainer = styled.div`
  z-index: 1;
  padding-left: 16px;
`;
const NextIconContainer = styled(PrevIconContainer)`
  right: 0;
`;
export default Input;
