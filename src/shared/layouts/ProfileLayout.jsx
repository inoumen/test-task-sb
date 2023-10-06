import styled from "styled-components";
// Styles
const Layout = styled.div`
  background-color: #331268;
  min-height: 100vh;
`;

export const ProfileLayout = ({ children }) => <Layout>{children}</Layout>;
