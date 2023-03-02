import { useUserInfo } from "apis/user";
import Section from "components/common/atoms/Section";
import media from "constants/media";
import useMediaQuery from "hooks/useMediaQuery";
import Image from "next/image";
import { useMemo } from "react";
import styled from "styled-components";

const UserInfo = () => {
  const isMobile = useMediaQuery(media.mobileMaxWidth);

  const { data } = useUserInfo();
  console.log("data", data);

  const { email, id, isBloodTypes, isColorTypes, isMbti, isSocial, nickName } =
    useMemo(() => Object.assign({}, data?.data), []);
  return (
    <Section gap={6}>
      <Image src={"/img/icon/userDefault.svg"} width={40} height={40} />
      {!isMobile && (
        <Section direction="column" gap={8}>
          <UserNameFont>
            <span>{nickName}</span>님, 끼리끼리 투어중🤘
          </UserNameFont>
          {isMbti && <MbtiNameLabel>{isMbti}</MbtiNameLabel>}
        </Section>
      )}
    </Section>
  );
};

const UserNameFont = styled.div`
  font-weight: 350;
  font-size: 10px;
  letter-spacing: -0.03em;
  color: #424242;
  & > span {
    font-size: 12px;
  }
`;

const MbtiNameLabel = styled.div`
  background: #a088ce;
  border-radius: 4px;
  font-weight: 500;
  font-size: 10px;
  color: #ffffff;
  padding: 2px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
`;

export default UserInfo;
