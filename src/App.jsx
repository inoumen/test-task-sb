import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import { SearchPage, ProfilePage } from "shared/pages";
// Constants
import { SEARCH_PAGE_ROUTE, PROFILE_PAGE_ROUTE } from "constants/routes";
// Styles
import "semantic-ui-css/semantic.min.css";
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Verdana, Geneva, sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={SEARCH_PAGE_ROUTE} element={<SearchPage />} />
          <Route
            path={`${PROFILE_PAGE_ROUTE}/:id/:withPosts?`}
            element={<ProfilePage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
