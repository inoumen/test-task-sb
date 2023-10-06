import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// Pictures
const BackButtonImg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 45.167 86.167"
    fill="#fff"
    fillRule="evenodd"
    stroke="#fff"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <use xlinkHref="#A" x="2.083" y="2.083" />
    <symbol id="A" overflow="visible">
      <path
        d="M40.402 0L0 40.542l40.402 40.542"
        fill="none"
        strokeWidth="4.167"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </symbol>
  </svg>
);

// Styles
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 32px;
  width: 32px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font-size: inherit;
  font-family: inherit;
  color: inherit;
  text-align: left; /* Reset text alignment if needed */
  svg {
    max-height: 32px;
  }
`;
const Label = styled.label`
  color: white;
  font-weight: 500;
  font-family: Verdana;
  padding: 16px 8px;
  cursor: pointer;
`;

export const BackButton = ({ label }) => {
  const navigate = useNavigate();
  return (
    <>
      <Button id="backButton" onClick={() => navigate(-1)}>
        {BackButtonImg}
      </Button>
      <Label htmlFor="backButton">{label}</Label>
    </>
  );
};
