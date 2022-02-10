import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 80px;
  padding-bottom: 190px;
`;

export const Heading = styled.h2`
  font-family: raleway;
  font-weight: 400;
  font-size: 42px;
`;

export const ProductsWrapper = styled.div`
  margin-top: 87px;
  display: grid;
  grid-column-gap: 75px;
  grid-row-gap: 103px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
