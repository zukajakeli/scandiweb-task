import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  z-index: 11;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  white-space: nowrap;
  font-weight: 500;
  font-style: italic;
  border: 1px solid ${({ theme }) => theme.colors.green};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 0.5s ease-in-out;
  top: 10%;
  right: ${({ isActive }) => (isActive ? "50%" : "-1000px")};
  transform: translate(50%, 50%);
`;
