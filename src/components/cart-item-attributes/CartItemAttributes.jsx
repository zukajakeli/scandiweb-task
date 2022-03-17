import React, { Component } from "react";

import CartContext from "../../context/CartContext";

import * as S from "./components";

export default class CartItemAttributes extends Component {
  static contextType = CartContext;

  render() {
    const {
      attribute: { name, items, type },
      productId,
      selectedAttributes,
    } = this.props;

    const { setAttributes } = this.context;

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
                onClick={() => {
                  setAttributes(productId, { name: name, value: id });
                }}
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
