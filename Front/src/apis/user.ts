import { useQuery } from "react-query";

export const useUser = (userId: string) => {
  return useQuery(`/board/findBoardList`);
};
