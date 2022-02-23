import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 137px;

  border-top: ${({ isForCartPage }) => isForCartPage && "2px solid #E5E5E5"};
  padding-top: ${({ isForCartPage }) => isForCartPage && "20px"};
`;

export const Description = styled.div`
  width: ${({ isForCartPage }) => (isForCartPage ? "100%" : "50%")};
  height: 100%;
  display: flex;
  min-height: 100px;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 300;
  max-height: 50px;
  overflow: hidden;
  margin-bottom: 15px;
`;

export const Price = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 15px;
`;

export const Attributes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const PhotoAndCounter = styled.div`
  height: 100%;
  display: flex;
  justify-content: ${({ isForCartPage }) =>
    isForCartPage ? "flex-end" : "space-between"};
  align-items: center;
  width: 50%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;

  max-width: ${({ isForCartPage }) => isForCartPage && "140px"};
`;

export const Image = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: contain;
  max-height: 185px;
`;

export const Counter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 24px;
  height: ${({ height }) => `${height}px`};
  margin-right: 10px;
`;

export const CounterButton = styled.button`
  height: 24px;
  width: 24px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-size: 22px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
    border: 1px solid ${({ theme }) => theme.colors.white};
  }
`;
