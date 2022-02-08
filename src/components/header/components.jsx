import styled from "styled-components";

export const Wrapper = styled.header`
  padding: 0px 100px;
  height: 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  font-family: raleway;
  font-weight: 500;
`;

export const CategoryList = styled.ul`
  list-style: none;
  display: flex;
  gap: 32px;
  font-family: raleway;
  font-weight: 500;
`;

export const Categoty = styled.li``;

export const IconWrapper = styled.span`
  cursor: pointer;

  & > svg {
    fill: #1dcf64;

    & :hover {
      fill: #229751;
    }
  }
`;

export const CartAndCurrency = styled.div`
  display: flex;
  align-items: center;
`;

export const CartIcon = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const CurrencyIcon = styled.img`
  width: 28px;
  padding-top: 1px;
  height: auto;
  cursor: pointer;
`;

export const ArrowIcon = styled.img`
  cursor: pointer;
  margin-right: 22px;
  margin-left: -3px;
  padding-top: 5px;
`;
