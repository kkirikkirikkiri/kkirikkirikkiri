import Input, { InputProps } from "components/common/atoms/Input";
import { FC } from "react";

const LoginInput: FC<InputProps> = (props) => {
  return <Input borderType="line" {...props} />;
};

export default LoginInput;
