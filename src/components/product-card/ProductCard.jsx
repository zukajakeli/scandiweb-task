import React from "react";

import AddToCartButton from "../add-to-cart-button/AddToCartButton";

import * as S from "./components";

const ProductCard = ({ name, prices, gallery }) => {
  return (
    <S.Wrapper>
      <S.Image src={gallery[0]} />
      <AddToCartButton />
      <S.Title>{name}</S.Title>
      <S.Price>$ {prices[0].amount}</S.Price>
    </S.Wrapper>
  );
};

export default ProductCard;
