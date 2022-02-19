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
  gap: 12px;
`;

export const Item = styled.div`
  width: 63px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-size: 16px;
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
    `box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
     border: 1px solid green;
    `};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.green};
  }
`;
