import styled from "styled-components";
// Styles
const AvaWrapper = styled.div`
  height: 200px;
`;
const AvaPic = styled.img`
  height: 200px;
  border-radius: 100px;
`;

export const Avatar = ({ url }) => {
  return (
    <AvaWrapper>
      <AvaPic src={url} />
    </AvaWrapper>
  );
};
