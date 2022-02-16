import styled from "styled-components";

export const Wrapper = styled.section`
  padding-top: 160px;
  padding-bottom: 190px;
  display: flex;
`;

export const ImagesWrapper = styled.div`
  flex: 1 70%;
  display: flex;
  gap: 40px;
`;

export const SmallImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const SmallImage = styled.img`
  width: 110px;
  height: 80px;
  object-fit: contain;
  cursor: pointer;
`;

export const MainImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const MainImage = styled.img`
  width: 100%;
  max-height: 560px;
  object-fit: contain;
`;

export const Details = styled.div`
  flex: 1 30%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: 600;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 15px;
`;

export const PriceText = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

export const PriceAmount = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

export const AddToCartButton = styled.button`
  width: 100%;
  height: 52px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.green};
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    color: ${({ theme }) => theme.colors.green};
    background-color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.green};
  }
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 40px;
`;
