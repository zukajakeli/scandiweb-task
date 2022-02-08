import React, { Component } from "react";

import { ReactComponent as BackIcon } from "../../assets/icons/back.svg";
import cartIcon from "../../assets/icons/cart.svg";
import currencyIcon from "../../assets/icons/currency.svg";
import arrowDown from "../../assets/icons/arrow-down.svg";
import * as S from "./components";

export default class Header extends Component {
  render() {
    return (
      <S.Wrapper>
        <S.CategoryList>
          <S.Categoty>WOMEN</S.Categoty>
          <S.Categoty>MEN</S.Categoty>
          <S.Categoty>KIDS</S.Categoty>
        </S.CategoryList>

        <S.IconWrapper>
          <BackIcon />
        </S.IconWrapper>

        <S.CartAndCurrency>
          <S.CurrencyIcon src={currencyIcon} />
          <S.ArrowIcon src={arrowDown} />
          <S.CartIcon src={cartIcon} />
        </S.CartAndCurrency>
      </S.Wrapper>
    );
  }
}
