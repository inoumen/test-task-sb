import styled from "styled-components";

export const InstagramGradientTextStyle = styled.span`
  background: linear-gradient(90deg, #fa3434, #ffd000, #ff8800);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 24px;
`;

export const InstagramGradientText = ({ text }) => {
  return <InstagramGradientTextStyle>@{text}</InstagramGradientTextStyle>;
};
