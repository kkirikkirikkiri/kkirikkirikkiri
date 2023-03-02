import { useMutation } from "react-query";
import { authInstance } from "./common";

export interface JoinRequest {
  email: string;
  password: string;
  nickName: string;
  isSocial: SocialType;
  passwordConfirm: string;
}

export interface JoinResponse {
  jwt: string;
  user: {
    email: string;
    nickName: string;
    isSocial: string;
    deletedAt: string;
    isBloodTypes: string;
    isMbti: string;
    isColorTypes: string;
    id: number;
    createdAt: string;
    updatedAt: string;
  };
}
type SocialType = "일반" | "네이버" | "카카오";
export const useJoinMutate = () => {
  return useMutation((params: JoinRequest) => {
    return authInstance.post<JoinResponse>(`/auth/register`, params);
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
    return authInstance.post<SignInResponse>(`/auth/login`, params);
  });
};
