import styled from "styled-components";
// Components
import { Avatar, UserDataText } from "shared/atoms";
// Styles
const ProfileBlockWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  background-color: #ffffff30;
  border-radius: 12px;
  padding: 16px 24px;
  margin: 16px 8px;
  p {
    margin: 0;
  }
`;
const UserName = styled.p`
  font-size: 24px;
  color: white;
`;
const UserBiography = styled.p`
  font-size: 16px;
  color: white;
`;
const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ProfileBlock = ({ data }) => {
  return (
    <ProfileBlockWrapper>
      <Avatar url={data?.user?.profile_pic_url} />
      <InfoBlock>
        <UserName>{data?.user?.username}</UserName>
        <UserBiography>{data?.user?.biography}</UserBiography>
        <UserDataText>Follows: {data?.user?.follow_count}</UserDataText>
        <UserDataText>Followers: {data?.user?.follower_count}</UserDataText>
        {data?.user?.full_name ? (
          <UserDataText>Full Name: {data?.user?.full_name}</UserDataText>
        ) : null}
        <UserDataText>
          Privat profile: {data?.user?.is_private ? "Yes" : "No"}
        </UserDataText>
        <UserDataText>Posts: {data?.user?.posts_count}</UserDataText>
      </InfoBlock>
    </ProfileBlockWrapper>
  );
};
