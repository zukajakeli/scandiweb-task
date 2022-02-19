import styled from "styled-components";
import { Wrapper as AddToCartButton } from "../add-to-cart-button/components";

export const Wrapper = styled.div`
  height: 444px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  ${({ inStock }) => !inStock && "opacity: 0.6"};

  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }

  &:hover ${AddToCartButton} {
    display: flex;
  }
`;

export const OutOfStockText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: 500;
  color: #8d8f9a;
  white-space: nowrap;
  user-select: none;
`;

export const Image = styled.img`
  height: 338px;
  object-fit: contain;
  box-shadow: rgba(149, 157, 165, 0.06) 0px 8px 24px;
  user-select: none;
  width: 100%;
`;

export const Title = styled.h3`
  margin-top: 24px;
  font-size: 18px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.black};
`;

export const Price = styled.p`
  margin-top: 10px;
  font-weight: 500;
`;

export const AddToCartWrapper = styled.div`
  z-index: 9;
`;

export const SwiperWrapper = styled.div`
  display: flex;
  align-items: center;
`;
