import styled from "styled-components";
import { BiCommentDetail, BiLike } from "react-icons/bi";
import { VscEye } from "react-icons/vsc";
import dayjs from "dayjs";
// Styles
const PostBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff30;
  border-radius: 12px;
  gap: 16px;
  position: relative;
`;
const PostPic = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
  object-position: center;
`;
const PostInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const PostInfoText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  // justify-content: center;
  align-items: center;
  font-size: 10px;
  gap: 6px;
  color: white;
`;
const IconWrap = styled.div`
  height: 24px;
  width: 24px;
  svg {
    height: 100%;
    width: 100%;
  }
`;
const TextWrap = styled.div`
  height: 24px;
`;

export const Post = ({ data }) => {
  return (
    <PostBlock>
      <PostPic src={data?.display_url} />
      <PostInfo>
        {data?.comment_count ? (
          <PostInfoText style={{ top: 8, right: 8 }}>
            <IconWrap>
              <BiCommentDetail />
            </IconWrap>
            <TextWrap>{data?.comment_count}</TextWrap>
          </PostInfoText>
        ) : null}
        {data?.like_count ? (
          <PostInfoText style={{ top: 8, left: 8 }}>
            <IconWrap>
              <BiLike />
            </IconWrap>
            <TextWrap>{data?.like_count}</TextWrap>
          </PostInfoText>
        ) : null}
        {data?.view_count ? (
          <PostInfoText style={{ bottom: 8, left: 8 }}>
            <IconWrap>
              <VscEye />
            </IconWrap>
            <TextWrap>{data?.view_count}</TextWrap>
          </PostInfoText>
        ) : null}
        {data?.taken_at ? (
          <PostInfoText style={{ bottom: 8, right: 8 }}>
            {dayjs.unix(data?.taken_at).format("YYYY-MM-DD")}
          </PostInfoText>
        ) : null}
      </PostInfo>
    </PostBlock>
  );
};
