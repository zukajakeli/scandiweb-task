import React, { PureComponent } from "react";

import CartContext from "../../context/CartContext";

import * as S from "./components";

export default class CartItemAttributes extends PureComponent {
  static contextType = CartContext;

  render() {
    const {
      attribute: { name, items, type },
      selectedAttributes,
    } = this.props;

    const serializedAttributesObj = {};
    selectedAttributes?.forEach(({ name, value }) => {
      serializedAttributesObj[name] = value;
    });

    return (
      <S.Wrapper>
        <S.ItemsWrapper>
          {items?.map(({ id, displayValue, value }) => {
            return (
              <S.Item
                key={id}
                selected={serializedAttributesObj[name] === id}
                background={value}
                type={type}
              >
                {type !== "swatch" && value}
              </S.Item>
            );
          })}
        </S.ItemsWrapper>
      </S.Wrapper>
    );
  }
}
