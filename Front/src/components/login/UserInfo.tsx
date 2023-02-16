import styled from "styled-components";

const UserInfo = () => {
  return (
    <div>
      <UserNameFont>
        <em>홍INFP</em>님, 끼리끼리 투어중🤘
      </UserNameFont>
      <MbtiNameLabel>INTJ</MbtiNameLabel>
    </div>
  );
};

const UserNameFont = styled.span`
  font-weight: 350;
  font-size: 10px;
  letter-spacing: -0.03em;
  color: #424242;
  & > em {
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
  margin-top: 8px;
`;

export default UserInfo;
