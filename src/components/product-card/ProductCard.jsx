import React, { Component } from "react";

import CartContext from "../../context/CartContext";
import AddToCartButton from "../add-to-cart-button/AddToCartButton";
import { getPriceBySelectedCurrency } from "../../helpers/helpers";

import * as S from "./components";

export class ProductCard extends Component {
  static contextType = CartContext;

  render() {
    const { gallery, name, id, selectedCurrency, inStock } = this.props;
    const { setCartProducts } = this.context;

    return (
      <S.Wrapper inStock={inStock}>
        <S.Image src={gallery[0]} />
        <S.AddToCartWrapper
          onClick={() => {
            setCartProducts(this.props);
          }}
        >
          {inStock ? (
            <AddToCartButton />
          ) : (
            <S.OutOfStockText>OUT OF STOCK</S.OutOfStockText>
          )}
        </S.AddToCartWrapper>
        <S.Title>{name}</S.Title>
        <S.Price>
          {getPriceBySelectedCurrency(selectedCurrency, this.props.prices)}
        </S.Price>
      </S.Wrapper>
    );
  }
}

export default ProductCard;
