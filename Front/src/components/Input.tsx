import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";
type BorderType = "shadow" | "line";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  addonPrev?: React.ReactNode;
  addonNext?: React.ReactNode;
  borderType?: BorderType;
  error?: boolean;
  errorMessage?: string;
}
const Input = (
  {
    addonPrev,
    addonNext,
    className,
    error,
    errorMessage,
    borderType = "shadow",
    ...inputProps
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  console.log("error", error);
  return (
    <InputErrorContainer>
      <InputContainer
        className={className}
        borderType={borderType}
        error={!!error}
      >
        {addonPrev && <PrevIconContainer>{addonPrev}</PrevIconContainer>}
        <input {...inputProps} ref={ref} />
        {addonNext && <NextIconContainer>{addonNext}</NextIconContainer>}
      </InputContainer>
      {error && <ErrorMessageFont>{errorMessage}</ErrorMessageFont>}
    </InputErrorContainer>
  );
};

const InputErrorContainer = styled.div`
  /* display: flex;
  flex-direction: column; */
  width: 100%;
`;
const InputContainer = styled.div<{ borderType: BorderType; error: boolean }>`
  width: inherit;
  position: relative;
  display: flex;
  align-items: center;
  ${({ borderType }) =>
    borderType === "shadow"
      ? css`
          filter: drop-shadow(0px 0px 8px rgba(22, 22, 22, 0.1));
        `
      : null}
  height: 44px;
  background: #ffffff;
  border-radius: 10px;
  input {
    padding: 0 12px;
    height: 44px;
    width: inherit;
    ${({ borderType, error }) =>
      css`
        border: ${error
          ? "1px solid red"
          : borderType === "line"
          ? "1px solid #dbdbdb"
          : 0};
      `}
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
`;

const ErrorMessageFont = styled.div`
  color: #ff0000;
  font-weight: 350;
  font-size: 12px;
  margin-top: 4px;
`;

const PrevIconContainer = styled.div`
  z-index: 1;
  padding-left: 16px;
`;
const NextIconContainer = styled(PrevIconContainer)`
  position: absolute;
  right: 0;
`;
export default forwardRef<HTMLInputElement, InputProps>(Input);
