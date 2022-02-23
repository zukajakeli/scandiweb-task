import React, { Component } from "react";

import { getCurrencies } from "../../API/API";
import CurrencyContext from "../../context/CurrencyContext";
import * as S from "./components";

export default class CurrencySelector extends Component {
  static contextType = CurrencyContext;

  state = {
    currencies: [],
  };

  componentDidMount() {
    const { setSelectedCurrency } = this.context;

    getCurrencies
      .then((res) => res.json())
      .then((res) => {
        this.setState({ currencies: res.data.currencies });
        setSelectedCurrency(res.data.currencies[0]);
      });
  }

  render() {
    const { isCurrencyDropdownOpen } = this.props;
    const { selectedCurrency, setSelectedCurrency } = this.context;

    return (
      <S.Wrapper isCurrencyDropdownOpen={isCurrencyDropdownOpen}>
        {this.state.currencies.map(({ label, symbol }, index) => {
          return (
            <S.SingleCurrency
              key={index + label}
              onClick={() => {
                setSelectedCurrency({ label, symbol });
                this.props.handler();
              }}
            >
              <S.Symbol>{symbol}</S.Symbol>
              <div>{label}</div>{" "}
            </S.SingleCurrency>
          );
        })}
      </S.Wrapper>
    );
  }
}
