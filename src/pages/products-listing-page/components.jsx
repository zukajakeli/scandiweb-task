import styled from "styled-components";

export const Wrapper = styled.section`
  padding-top: 160px;
  padding-bottom: 190px;
`;

export const Heading = styled.h2`
  font-family: raleway;
  font-weight: 400;
  font-size: 42px;
  text-transform: capitalize;
`;

export const ProductsWrapper = styled.div`
  margin-top: 87px;
  display: grid;
  grid-column-gap: 75px;
  grid-row-gap: 103px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
