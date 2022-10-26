import HorizontalBlank from "components/common/atoms/HorizontalBlank";
import Naver from "components/login/Naver";
import CommonLayout from "layouts/CommonLayout";
import Image from "next/image";
import { ReactElement } from "react";

const Login = () => {
  return (
    <div>
      <Image src={"/img/logo-main.png"} alt="main" width={232} height={80} />
      <HorizontalBlank height={30} />
      <Naver />
    </div>
  );
};
Login.getLayout = function getLayout(page: ReactElement) {
  return <CommonLayout>{page}</CommonLayout>;
};

export default Login;
