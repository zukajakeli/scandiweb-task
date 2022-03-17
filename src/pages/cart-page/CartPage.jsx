import React, { PureComponent } from "react";

import CartContext from "../../context/CartContext";
import CurrencyContext from "../../context/CurrencyContext";

import CartItem from "../../components/cart-item/CartItem";
import emptyCartIcon from "../../assets/icons/empty-cart.svg";
import * as S from "./components";

export default class CartPage extends PureComponent {
  static contextType = CartContext;

  render() {
    return (
      <CurrencyContext.Consumer>
        {(currencyContext) => {
          const { cartProducts } = this.context;
          const { selectedCurrency } = currencyContext;

          return (
            <S.Wrapper>
              <S.Heading>CART</S.Heading>

              {!!cartProducts.length ? (
                <S.ItemsWrapper>
                  {cartProducts.map((product, index) => {
                    return (
                      <CartItem
                        key={`cartPageItem${product.id}${index}`}
                        product={product}
                        selectedCurrency={selectedCurrency}
                        isForCartPage
                      />
                    );
                  })}
                </S.ItemsWrapper>
              ) : (
                <S.ItemsWrapper>
                  <S.EmptyText>Your cart is empty...</S.EmptyText>
                  <S.EmptyCartImage src={emptyCartIcon} alt="empty-cart" />
                </S.ItemsWrapper>
              )}
            </S.Wrapper>
          );
        }}
      </CurrencyContext.Consumer>
    );
  }
}
