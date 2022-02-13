import React, { Component } from "react";

import CartContext from "../../context/CartContext";
import CurrencyContext from "../../context/CurrencyContext";

import CartItem from "../cart-item/CartItem";
import Button from "../button/MiniCartButton";
import OutsideClickDetector from "../outside-click-detector/OutsideClickDetector";

import * as S from "./components";

export default class MiniCart extends Component {
  static contextType = CartContext;

  render() {
    const { isMiniCartOpen } = this.props;
    const { cartProducts } = this.context;

    return (
      <CurrencyContext.Consumer>
        {(currencyContext) => {
          const { cartProducts } = this.context;
          const { selectedCurrency } = currencyContext;
          console.log("cart", cartProducts);
          console.log("currnecy", currencyContext);

          const totalPrice = cartProducts.reduce((prev, current) => {
            return (
              prev +
              current?.prices?.find((item) => {
                return item?.currency?.label === selectedCurrency?.label;
              })?.amount *
                current.quantity
            );
          }, 0);

          console.log("isMiniCartOpen", isMiniCartOpen);

          return (
            <S.Wrapper isMiniCartOpen={isMiniCartOpen}>
              <OutsideClickDetector onClickOutside={this.props.onClickOutside}>
                <S.TitleWrapper>
                  <S.Heading>My Bag,</S.Heading>
                  <S.ItemsQuantity>{cartProducts.length} items</S.ItemsQuantity>
                </S.TitleWrapper>

                <S.ItemsWrapper>
                  {cartProducts.map((product, index) => {
                    return (
                      <CartItem
                        key={`cartItem${product.id}${index}`}
                        product={product}
                        selectedCurrency={selectedCurrency}
                      />
                    );
                  })}
                </S.ItemsWrapper>

                <S.TotalPrice>
                  <S.TotalText>Total</S.TotalText>
                  <S.PriceAmount>
                    {currencyContext.selectedCurrency?.symbol}
                    {totalPrice.toFixed(2)}
                  </S.PriceAmount>
                </S.TotalPrice>

                <S.ButtonsWrapper>
                  <Button children={"VIEW BAG"} />
                  <Button isGreen children={"CHECKOUT"} />
                </S.ButtonsWrapper>
              </OutsideClickDetector>
            </S.Wrapper>
          );
        }}
      </CurrencyContext.Consumer>
    );
  }
}
