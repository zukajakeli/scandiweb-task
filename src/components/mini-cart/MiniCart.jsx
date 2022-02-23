import React, { Component } from "react";

import CartContext from "../../context/CartContext";
import CurrencyContext from "../../context/CurrencyContext";

import CartItem from "../cart-item/CartItem";
import Button from "../button/MiniCartButton";

import * as S from "./components";
import { withRouter } from "react-router-dom";

class MiniCart extends Component {
  static contextType = CartContext;

  render() {
    const { isMiniCartOpen, cartProductsQuantity } = this.props;

    return (
      <CurrencyContext.Consumer>
        {(currencyContext) => {
          const { cartProducts } = this.context;
          const { selectedCurrency } = currencyContext;

          const totalPrice = cartProducts.reduce((prev, current) => {
            return (
              prev +
              current?.prices?.find((item) => {
                return item?.currency?.label === selectedCurrency?.label;
              })?.amount *
                current.quantity
            );
          }, 0);

          return (
            <S.Wrapper isMiniCartOpen={isMiniCartOpen}>
              <S.TitleWrapper>
                <S.Heading>My Bag,</S.Heading>
                <S.ItemsQuantity>{cartProductsQuantity} items</S.ItemsQuantity>
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
                <Button
                  children={"VIEW BAG"}
                  onClick={() => {
                    this.props.onClickOutside();
                    this.props.history.push("/cart");
                  }}
                />
                <Button isGreen children={"CHECKOUT"} />
              </S.ButtonsWrapper>
            </S.Wrapper>
          );
        }}
      </CurrencyContext.Consumer>
    );
  }
}

export default withRouter(MiniCart);
