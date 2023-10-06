import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// Components
import { UserNameInput } from "shared/organisms";
import { MainLayout } from "shared/layouts";
// Constants
import { PROFILE_PAGE_ROUTE } from "constants/routes";
// Styles
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const SearchPage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [withPosts, setWithPosts] = useState(true);
  return (
    <MainLayout>
      <Wrapper>
        <UserNameInput
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onEnter={() =>
            navigate(`${PROFILE_PAGE_ROUTE}/${userName}/${withPosts}`)
          }
          checked={withPosts}
          onChangeCheckbox={() => setWithPosts(!withPosts)}
        />
      </Wrapper>
    </MainLayout>
  );
};
