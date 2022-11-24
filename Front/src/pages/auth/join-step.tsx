import AuthLayout from "layouts/AuthLayout";
import { ReactElement } from "react";

const JoinStep = () => {
  return <></>;
};
JoinStep.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default JoinStep;
