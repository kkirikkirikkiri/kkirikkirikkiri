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

interface SignInResponse {
  jwt: string;
  user: {
    id: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    email: string;
    nickName: string;
    isBloodTypes: string;
    isMbti: string;
    isSocial: string;
    isColorTypes: string;
  };
}
export type SignInRequest = Omit<JoinRequest, "nickName" | "passwordConfirm">;
export const useSignInMutate = () => {
  return useMutation((params: SignInRequest) => {
    return axiosInstance.post<SignInResponse>(`/auth/login`, params);
  });
};
