import styled from "styled-components";
import { Input, Checkbox } from "semantic-ui-react";
// Styles
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: -25vh;
  label {
    color: #e0cee4 !important;
  }
`;
const Title = styled.div`
  font-size: 24px;
  color: white;
`;

export const UserNameInput = ({
  value,
  onChange,
  onEnter,
  checked,
  onChangeCheckbox,
}) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onEnter();
    }
  };
  return (
    <InputWrapper>
      <Title>Enter Instagram user name:</Title>
      <Input
        action={{ content: "Go", onClick: onEnter }}
        placeholder="User name"
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
      <Checkbox
        label="With posts"
        checked={checked}
        onChange={onChangeCheckbox}
      />
    </InputWrapper>
  );
};
