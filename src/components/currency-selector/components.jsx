import styled from "styled-components";

export const Wrapper = styled.div`
  width: 114px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  position: absolute;
  top: 40px;
  left: -5px;
  z-index: 10;
  padding: 0px 15px 15px 15px;
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 0.3s ease-in-out;
  visibility: hidden;
  opacity: 0;

  ${({ isCurrencyDropdownOpen }) =>
    isCurrencyDropdownOpen && "visibility: visible; opacity: 1"};
`;

export const SingleCurrency = styled.div`
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  padding-left: 10px;
  width: 100%;
  display: flex;
  user-select: none;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  }
`;

export const Symbol = styled.span`
  width: 22px;
  margin-right: 5px;
`;
