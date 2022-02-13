import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.green};
  width: 52px;
  height: 52px;
  position: absolute;
  top: 330px;
  right: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  display: none;
  user-select: none;
`;

export const CartImage = styled.img`
  width: 24px;
  height: 21px;
`;
