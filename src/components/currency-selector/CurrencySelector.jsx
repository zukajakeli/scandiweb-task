import React, { Component } from "react";

import { getCurrencies } from "../../API/API";
import CurrencyContext from "../../context/CurrencyContext";
import OutsideClickDetector from "../outside-click-detector/OutsideClickDetector";
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
        console.log(res.data.currencies);
        this.setState({ currencies: res.data.currencies });
        setSelectedCurrency(res.data.currencies[0]);
      });
  }

  render() {
    const { isCurrencyDropdownOpen } = this.props;
    const { selectedCurrency, setSelectedCurrency } = this.context;

    console.log(selectedCurrency);
    return (
      <S.Wrapper isCurrencyDropdownOpen={isCurrencyDropdownOpen}>
        <OutsideClickDetector onClickOutside={this.props.onClickOutside}>
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
        </OutsideClickDetector>
      </S.Wrapper>
    );
  }
}
