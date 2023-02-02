import { useMutation } from "react-query";
import { axiosInstance } from "./common";

export interface JoinRequest {
  email: string;
  password: string;
  nickName: string;
  isSocial: SocialType;
  passwordConfirm: string;
}

type SocialType = "일반" | "네이버" | "카카오";
export const useJoinMutate = () => {
  return useMutation((params: JoinRequest) => {
    return axiosInstance.post(`/auth/register`, params);
  });
};

export type SignInRequest = Omit<JoinRequest, "nickName" | "passwordConfirm">;
export const useSignInMutate = () => {
  return useMutation((params: SignInRequest) => {
    return axiosInstance.post(`/auth/login`, params);
  });
};
