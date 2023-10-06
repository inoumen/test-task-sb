import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Dimmer, Loader } from "semantic-ui-react";
// Components
import { ProfileLayout } from "shared/layouts";
import { BackButton, InstagramGradientText } from "shared/atoms";
import { ProfileBlock, Post } from "shared/organisms";
// Hooks
import { useGetCheck } from "hooks";
// Styles
const BackButtonWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
const ExceptionsWrap = styled.div`
  margin-top: 20vh;
`;
const ExceptionText = styled.p`
  color: white;
  font-size: 24px;
  text-align: center;
`;
const PostsWrapper = styled.div`
  display: grid;
  margin: 16px 8px;
  grid-template-columns: 0.25fr 0.25fr 0.25fr 0.25fr;
  gap: 16px;
`;

export const ProfilePage = () => {
  const { id, withPosts } = useParams();
  const { data, isLoading, isError } = useGetCheck(id, withPosts);
  const isNoData = data?.user === null || data?.user === undefined;
  const isPosts = data?.posts?.items?.length > 0;
  const isException = !isLoading && (isError || isNoData);
  return (
    <ProfileLayout>
      <BackButtonWrap>
        <BackButton label="Back to Search" />
      </BackButtonWrap>
      <Dimmer active={isLoading}>
        <Loader size="big">Loading</Loader>
      </Dimmer>
      {isException ? (
        <ExceptionsWrap>
          {isError ? (
            <ExceptionText>
              Something happened, we are working on it, please try again later
            </ExceptionText>
          ) : isNoData ? (
            <ExceptionText>
              Unfortunately, we can not reach the{" "}
              <InstagramGradientText text={id} /> profile
            </ExceptionText>
          ) : null}
        </ExceptionsWrap>
      ) : null}
      {!isNoData ? <ProfileBlock data={data} /> : null}
      {isPosts ? (
        <PostsWrapper>
          {data?.posts?.items.map((post) => (
            <Post key={post?.code} data={post} />
          ))}
        </PostsWrapper>
      ) : null}
    </ProfileLayout>
  );
};
