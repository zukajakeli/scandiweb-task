import React, { Component } from "react";

import CartContext from "../../context/CartContext";
import { getPriceBySelectedCurrency } from "../../helpers/helpers";

import { ReactComponent as MinusIcon } from "../../assets/icons/minus.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";

import * as S from "./components";

export default class CartItem extends Component {
  static contextType = CartContext;

  render() {
    const { product, selectedCurrency } = this.props;
    const { gallery, name, prices, quantity } = product;
    const { setCartProducts, removeCartProduct } = this.context;

    console.log("itemDetails", product);
    return (
      <S.Wrapper>
        <S.Description>
          <S.Title>{name}</S.Title>
          <S.Price>
            {getPriceBySelectedCurrency(selectedCurrency, prices, quantity)}
          </S.Price>
          <S.Attributes>
            <S.CounterButton>
              <MinusIcon />
            </S.CounterButton>
          </S.Attributes>
        </S.Description>

        <S.PhotoAndCounter>
          <S.Counter>
            <S.CounterButton
              onClick={() => {
                setCartProducts(product);
              }}
            >
              <PlusIcon />
            </S.CounterButton>
            {quantity}
            <S.CounterButton
              onClick={() => {
                removeCartProduct(product);
              }}
            >
              <MinusIcon />
            </S.CounterButton>
          </S.Counter>
          <S.ImageWrapper>
            <S.Image src={gallery[0]} />
          </S.ImageWrapper>
        </S.PhotoAndCounter>
      </S.Wrapper>
    );
  }
}
