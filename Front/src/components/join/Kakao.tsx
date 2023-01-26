import Button from "components/common/atoms/Button";
import VerticalBlank from "components/common/atoms/VerticalBlank";
import Image from "next/image";
import { FC } from "react";
import KakaoJoin from "react-kakao-login";
import styled from "styled-components";

const token = "64d0c649f5b7e5a3ef9790587ee5f19b";
const Kakao: FC = () => {
  return (
    <KakaoJoin
      token={token}
      onSuccess={console.log}
      onFail={console.error}
      onLogout={console.info}
      render={({ onClick }: any) => {
        return (
          <Button onClick={onClick} background={"#f8d756"} color={"#050505"}>
            <Image src={"/img/icon/kakao.svg"} width={14} height={12} />
            <VerticalBlank width={4} />
            {"네이버 계정으로 회원가입"}
          </Button>
        );
      }}
    />
  );
};

const KakaoJoinButton = styled.button`
  cursor: pointer;
  background: #f8d756;
  border-radius: 10px;
  width: 100%;
  min-height: 44px;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  color: #050505;
  gap: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export default Kakao;
