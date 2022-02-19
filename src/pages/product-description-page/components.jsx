import styled from "styled-components";

export const Wrapper = styled.section`
  padding-top: 160px;
  padding-bottom: 80px;
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
  max-height: 560px;
  overflow-x: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 15px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #a7a7a7;
    border-radius: 15px;
  }
`;

export const SmallImage = styled.img`
  width: 110px;
  height: 80px;
  object-fit: contain;
  cursor: pointer;
  user-select: none;
`;

export const MainImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const MainImage = styled.img`
  width: 100%;
  max-height: 560px;
  object-fit: contain;
  border: 0.5px solid grey;
  user-select: none;
`;

export const Details = styled.div`
  flex: 1 30%;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: 600;
  height: 60px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 15px;
  height: 70px;
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
  margin-top: 40px;

  ${({ disabled }) => disabled && "opacity: 0.5; cursor: initial"};

  &:hover {
    color: ${({ theme, disabled }) => !disabled && theme.colors.green};
    background-color: ${({ theme, disabled }) =>
      !disabled && theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.green};
  }
`;

export const Description = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-top: 40px;
  height: 180px;
  overflow-x: auto;

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

  & h3 {
    display: block;
    font-size: 1.17em;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }

  & p {
    display: block;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
  }

  & ul {
    display: block;
    list-style-type: disc;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
    padding-left: 40px;
  }

  & li {
    display: list-item;
    margin-bottom: 10px;
  }

  & h1 {
    display: block;
    font-size: 2em;
    margin-top: 0.67em;
    margin-bottom: 0.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }
`;

export const Attributes = styled.div`
  min-height: 120px;
  margin-top: 43px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
