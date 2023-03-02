import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
interface UserInfoResponse {
  email: string;
  id: number;
  isBloodTypes: string;
  isColorTypes: string;
  isMbti: string;
  isSocial: string;
  nickName: string;
}
export const useUserInfo = () => {
  return useQuery<AxiosResponse<UserInfoResponse>>(`/users/findOneUserInfo`);
};
