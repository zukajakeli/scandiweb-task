import React from "react";

import cartIcon from "../../assets/icons/cart-white.svg";
import * as S from "./components";

class AddToCartButton extends React.PureComponent {
  render() {
    return (
      <S.Wrapper>
        <S.CartImage src={cartIcon} />
      </S.Wrapper>
    );
  }
}

export default AddToCartButton;
