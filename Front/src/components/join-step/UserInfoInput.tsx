import Button from "components/common/atoms/Button";
import HorizontalBlank from "components/common/atoms/HorizontalBlank";
import Section from "components/common/atoms/Section";
import LoginInput from "components/login/LoginInput";
import { FC, useCallback } from "react";
interface UserInfoInputProps {
  onNext: () => void;
}
const UserInfoInput: FC<UserInfoInputProps> = ({ onNext }) => {
  const handleClick = useCallback(() => {
    onNext();
  }, []);
  return (
    <>
      <Section direction="column" gap={12}>
        <LoginInput placeholder="아이디를 입력해 주세요" />
        <LoginInput placeholder="비밀번호를 입력해 주세요" />
        <LoginInput placeholder="비밀번호를 다시 입력해 주세요" />
        <LoginInput placeholder="닉네임을 입력해 주세요" />
      </Section>
      <HorizontalBlank height={32} />
      <Button onClick={handleClick}>인증하기</Button>
    </>
  );
};

export default UserInfoInput;
