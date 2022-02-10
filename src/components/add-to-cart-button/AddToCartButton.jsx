import React from "react";

import cartIcon from "../../assets/icons/cart-white.svg";
import * as S from "./components";

const AddToCartButton = () => {
  return (
    <S.Wrapper>
      <S.CartImage src={cartIcon} />
    </S.Wrapper>
  );
};

export default AddToCartButton;
