import styled from "styled-components";

export const Wrapper = styled.button`
  height: 43px;
  width: 100%;
  padding: 13px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isGreen, theme }) =>
    isGreen ? theme.colors.green : theme.colors.white};
  color: ${({ isGreen, theme }) =>
    isGreen ? theme.colors.white : theme.colors.black};
  border: ${({ isGreen, theme }) =>
    !isGreen ? `1px solid ${theme.colors.black}` : "none"};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${({ isGreen, theme }) =>
      isGreen ? theme.colors.white : theme.colors.black};
    color: ${({ isGreen, theme }) =>
      isGreen ? theme.colors.green : theme.colors.white};
    border: ${({ isGreen, theme }) =>
      isGreen ? `1px solid ${theme.colors.green}` : "none"};
  }
`;
