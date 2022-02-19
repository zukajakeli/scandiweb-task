import React, { Component } from "react";

import * as S from "./components";

export default class SingleAttribute extends Component {
  render() {
    const {
      attribute: { name, items, type },
      attributeHandler,
      selectedAttributes,
    } = this.props;

    const selectedAttributesObject = {};
    selectedAttributes.forEach(({ name, value }) => {
      selectedAttributesObject[name] = value;
    });

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
