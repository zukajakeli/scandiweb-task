import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 137px;
`;

export const Description = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 300;
  max-height: 50px;
  overflow: hidden;
`;

export const Price = styled.p`
  font-weight: 500;
  font-size: 16px;
`;

export const Attributes = styled.div``;

export const PhotoAndCounter = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
`;

export const Image = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Counter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 24px;
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
