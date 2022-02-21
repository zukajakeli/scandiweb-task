import React, { Component } from "react";

import CartContext from "../../context/CartContext";

import * as S from "./components";

export default class SingleAttribute extends Component {
  static contextType = CartContext;

  render() {
    const { setAttributes, getSelectedAttributes } = this.context;
    const {
      attribute: { name, items, type },
      attributeHandler,
      selectedAttributes,
      productId,
    } = this.props;

    const selectedAttributesObject = {};
    selectedAttributes.forEach(({ name, value }) => {
      selectedAttributesObject[name] = value;
    });

    // const selectedAttributes = getSelectedAttributes(productId);
    console.log("selectedAttributes", selectedAttributes);

    return (
      <S.Wrapper>
        <S.Name>{name}:</S.Name>
        <S.ItemsWrapper>
          {items?.map(({ id, displayValue, value }) => {
            return (
              <S.Item
                key={id}
                onClick={() => {
                  attributeHandler({ name: name, value: id });
                }}
                selected={selectedAttributesObject[name] === id}
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
