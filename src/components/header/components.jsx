import { NavLink } from "react-router-dom";
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
  position: fixed;
  padding-right: 200px;
  z-index: 10;
`;

export const CategoryList = styled.ul`
  list-style: none;
  display: flex;
  font-family: raleway;
  font-weight: 500;
  height: 100%;
  width: 150px;
`;

export const Category = styled.li``;

export const Navlink = styled(NavLink)`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: content-box;
  padding: 0px 15px;
  text-transform: uppercase;

  &:hover {
    color: ${({ theme }) => theme.colors.green};
    border-bottom: 2px solid ${({ theme }) => theme.colors.green};
  }

  &.active {
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
  position: relative;
  width: 150px;
`;

export const CartIcon = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const CurrencyIcon = styled.div`
  width: 28px;
  padding-top: 1px;
  height: auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 18px;
`;

export const CurrencyAndArrow = styled.div`
  display: flex;
  gap: 2px;
`;

export const ArrowIcon = styled.img`
  cursor: pointer;
  margin-right: 22px;
  margin-left: -3px;
  padding-top: 5px;
  transition: all 0.3s ease-in-out;

  ${({ isCurrencyDropdownOpen }) =>
    isCurrencyDropdownOpen && "transform: rotate(-180deg)"};
`;

export const CartCounter = styled.span`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 60px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  top: -11px;
  right: -12px;
  padding-bottom: 2px;
  user-select: none;
`;

export const CartAndCounter = styled.div`
  position: relative;
  cursor: pointer;
`;
