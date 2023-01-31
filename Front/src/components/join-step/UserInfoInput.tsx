import { yupResolver } from "@hookform/resolvers/yup";
import { JoinRequest, useJoinMutate } from "apis/auth";
import Button from "components/common/atoms/Button";
import HorizontalBlank from "components/common/atoms/HorizontalBlank";
import Section from "components/common/atoms/Section";
import Input from "components/Input";
import { FC, useCallback } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
interface UserInfoInputProps {
  onNext: () => void;
}

interface AuthForm extends JoinRequest {
  newPassword: string;
}
const UserInfoInput: FC<UserInfoInputProps> = ({ onNext }) => {
  const { mutateAsync } = useJoinMutate();
  const schema = yup.object().shape({
    password: yup.string().required("비밀번호를 입력해주세요."),
    nickName: yup.string().required("닉네임을 입력해주세요."),
    newPassword: yup
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
  } = useForm<AuthForm>({
    resolver: yupResolver(schema),
  });

  console.log("????", errors, watch());

  const onSubmit = useCallback(async (data: AuthForm) => {
    // const result = await mutateAsync(data);
    onNext();
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
        <Input
          borderType="line"
          {...register("password")}
          placeholder="비밀번호를 입력해 주세요"
          error={!!errors.password}
          errorMessage={errors.password?.message}
        />
        <Input
          borderType="line"
          {...register("newPassword")}
          placeholder="비밀번호를 다시 입력해 주세요"
          error={!!errors.newPassword}
          errorMessage={errors.newPassword?.message}
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
