import styled from "styled-components";

export const Wrapper = styled.div`
  width: 325px;
  max-height: 540px;
  z-index: 10;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  top: 50px;
  right: 0px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  transition: all 0.3s ease-in-out;
  visibility: hidden;
  opacity: 0;
  padding: 8px 0px 20px 16px;
  display: flex;
  flex-direction: column;

  ${({ isMiniCartOpen }) =>
    isMiniCartOpen && "visibility: visible; opacity: 1"};
`;

export const Heading = styled.h5`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
`;

export const ItemsQuantity = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  padding-right: 16px;
`;

export const TotalText = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
`;

export const PriceAmount = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  padding-right: 16px;
`;

export const ItemsWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 354px;
  padding-right: 16px;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 15px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #6d6d6d;
    border-radius: 15px;
  }
`;
