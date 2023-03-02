import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (token) {
      setAuth(true);
    }
  }, []);

  return {
    isAuthed: !!auth,
  };
};

export default useAuth;
