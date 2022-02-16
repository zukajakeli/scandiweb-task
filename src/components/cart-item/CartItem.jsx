import React, { Component } from "react";

import CartContext from "../../context/CartContext";
import { getPriceBySelectedCurrency } from "../../helpers/helpers";

import { ReactComponent as MinusIcon } from "../../assets/icons/minus.svg";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";

import * as S from "./components";

export default class CartItem extends Component {
  static contextType = CartContext;

  render() {
    const { product, selectedCurrency, isForCartPage } = this.props;
    const { gallery, name, prices, quantity } = product;
    const { setCartProducts, removeCartProduct } = this.context;

    console.log("itemDetails", product);
    return (
      <S.Wrapper isForCartPage={isForCartPage}>
        <S.Description isForCartPage={isForCartPage}>
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

        <S.PhotoAndCounter isForCartPage={isForCartPage}>
          <S.Counter>
            <S.CounterButton
              onClick={() => {
                setCartProducts(product);
              }}
            >
              +
            </S.CounterButton>
            {quantity}
            <S.CounterButton
              onClick={() => {
                removeCartProduct(product);
              }}
            >
              {quantity === 1 ? <TrashIcon /> : <MinusIcon />}
            </S.CounterButton>
          </S.Counter>
          <S.ImageWrapper isForCartPage={isForCartPage}>
            <S.Image src={gallery[0]} />
          </S.ImageWrapper>
        </S.PhotoAndCounter>
      </S.Wrapper>
    );
  }
}
