import Button from "components/common/atoms/Button";
import VerticalBlank from "components/common/atoms/VerticalBlank";
import Image from "next/image";
import { FC } from "react";
import NaverJoin from "react-naver-login";
import styled from "styled-components";

interface NaverProps {
  title?: string;
}

export const Naver: FC<NaverProps> = ({ title = "네이버 로그인" }) => {
  const NAVER_CLIENT_ID = "T1PLBkBiDziggLWWCwK_";
  const NAVER_CALLBACK_URL = "http://localhost:3000/login";

  return (
    <NaverJoin
      clientId={NAVER_CLIENT_ID}
      callbackUrl={NAVER_CALLBACK_URL}
      render={(props: any) => (
        <Button
          onClick={props.onClick}
          background={"#6bbe48"}
          color={"#ffffff"}
        >
          <Image src={"/img/icon/naver.svg"} width={14} height={12} />
          <VerticalBlank width={4} />
          {title}
        </Button>
      )}
      onSuccess={(naverUser: any) => console.log(naverUser)}
      onFailure={(result: any) => console.error(result)}
    />
  );
};

const NaverJoinButton = styled.button`
  cursor: pointer;
  background: #6bbe48;
  border-radius: 10px;
  width: 100%;
  min-height: 44px;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  color: #ffffff;
  gap: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export default Naver;
