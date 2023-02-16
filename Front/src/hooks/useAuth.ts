import Cookies from "js-cookie";

const useAuth = () => {
  const accessToken = Cookies.get("accessToken");
  return {
    isAuthed: !!accessToken,
  };
};

export default useAuth;
