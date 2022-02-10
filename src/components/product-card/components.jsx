import styled from "styled-components";

export const Wrapper = styled.div`
  /* max-width: 386px; */
  height: 444px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;

  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
`;

export const Image = styled.img`
  height: 338px;
  object-fit: contain;
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
