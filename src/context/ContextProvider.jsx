import React, { Component } from "react";

import { CurrencyProvider } from "./CurrencyContext";
import { CartProvider } from "./CartContext";

export default class ContextProvider extends Component {
  render() {
    const { children } = this.props;
    return (
      <CurrencyProvider>
        <CartProvider>{children}</CartProvider>
      </CurrencyProvider>
    );
  }
}
