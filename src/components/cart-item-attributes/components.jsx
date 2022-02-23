import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  gap: 3px;
`;

export const Item = styled.div`
  width: ${({ type }) => (type === "swatch" ? "22px" : "30px")};
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-size: 10px;
  font-weight: 500;
  user-select: none;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ background }) => background};
  cursor: pointer;

  ${({ selected, theme, type }) =>
    selected &&
    type !== "swatch" &&
    `color: ${theme.colors.white}; background-color: ${theme.colors.black}`};

  ${({ selected, theme, type }) =>
    selected &&
    type === "swatch" &&
    `box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, 
    rgba(0, 0, 0, 0.12) 0px -12px 30px, 
    rgba(0, 0, 0, 0.12) 0px 4px 6px, 
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
     rgba(0, 0, 0, 0.09) 0px -3px 5px;
    `};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.green};
  }
`;
