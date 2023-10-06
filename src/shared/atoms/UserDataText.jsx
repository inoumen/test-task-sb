import styled from "styled-components";
// Styles
const UserDataTextStyle = styled.p`
  font-size: 14px;
  color: white;
`;

export const UserDataText = ({ children }) => (
  <UserDataTextStyle>{children}</UserDataTextStyle>
);
