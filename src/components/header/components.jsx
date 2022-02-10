import styled from "styled-components";

export const Wrapper = styled.header`
  height: 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: raleway;
  font-weight: 600;
  font-size: 16px;
`;

export const CategoryList = styled.ul`
  list-style: none;
  display: flex;
  font-family: raleway;
  font-weight: 500;
  height: 100%;
`;

export const Categoty = styled.li`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: content-box;
  padding: 0px 15px;

  &:hover {
    color: ${({ theme }) => theme.colors.green};
    border-bottom: 2px solid ${({ theme }) => theme.colors.green};
  }
`;

export const IconWrapper = styled.span`
  cursor: pointer;
  margin-top: 15px;

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
