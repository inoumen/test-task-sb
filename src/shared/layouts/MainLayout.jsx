import styled from "styled-components";
// Styles
const Layout = styled.div`
  background-color: #3e187a;
  background-image: linear-gradient(316deg, #3e187a 0%, #994ecc 74%);
  min-height: 100vh;
`;

export const MainLayout = ({ children }) => <Layout>{children}</Layout>;
