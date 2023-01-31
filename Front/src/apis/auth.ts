import { useMutation } from "react-query";
import { axiosInstance } from "./common";

export interface JoinRequest {
  email: string;
  password: string;
  nickName: string;
  isSocial: string;
}
export const useJoinMutate = () => {
  return useMutation((params: JoinRequest) => {
    return axiosInstance.post("/api/users", params);
  });
};
