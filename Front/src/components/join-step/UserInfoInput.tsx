import { yupResolver } from "@hookform/resolvers/yup";
import { JoinRequest, useJoinMutate } from "apis/auth";
import Button from "components/common/atoms/Button";
import HorizontalBlank from "components/common/atoms/HorizontalBlank";
import Input from "components/common/atoms/Input";
import PasswordInput from "components/common/atoms/PasswordInput";
import Section from "components/common/atoms/Section";
import { FC, useCallback } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
interface UserInfoInputProps {
  onNext: () => void;
}

const UserInfoInput: FC<UserInfoInputProps> = ({ onNext }) => {
  const { mutateAsync } = useJoinMutate();
  const schema = yup.object().shape({
    password: yup.string().required("비밀번호를 입력해주세요."),
    nickName: yup.string().required("닉네임을 입력해주세요."),
    passwordConfirm: yup
      .string()
      .required("비밀번호를 다시 입력해주세요.")
      .test({
        name: "passwords-match",
        message: "비밀번호가 일치하지 않습니다.",
        test: function (value) {
          return this.parent.password === value;
        },
      }),
    email: yup
      .string()
      .required("이메일을 입력해주세요.")
      .email("이메일을 올바르게 입력해주세요."),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<JoinRequest>({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(async (data: JoinRequest) => {
    try {
      const result = await mutateAsync({ ...data, isSocial: "일반" });
      onNext();
    } catch (e) {
      const error = e as Error;
      console.error(error.cause);
    }
  }, []);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Section direction="column" gap={12}>
        <Input
          borderType="line"
          {...register("email")}
          placeholder="아이디를 입력해 주세요"
          error={!!errors.email}
          errorMessage={errors.email?.message}
        />
        <PasswordInput
          {...register("password")}
          placeholder="비밀번호를 입력해 주세요"
          error={!!errors.password}
          errorMessage={errors.password?.message}
        />
        <PasswordInput
          {...register("passwordConfirm")}
          placeholder="비밀번호를 다시 입력해 주세요"
          error={!!errors.passwordConfirm}
          errorMessage={errors.passwordConfirm?.message}
        />
        <Input
          borderType="line"
          {...register("nickName")}
          placeholder="닉네임을 입력해 주세요"
          error={!!errors.nickName}
          errorMessage={errors.nickName?.message}
        />
      </Section>
      <HorizontalBlank height={32} />
      <Button type={"submit"}>가입하기</Button>
    </form>
  );
};

export default UserInfoInput;
