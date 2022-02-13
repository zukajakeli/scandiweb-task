import React, { Component, createContext } from "react";

const CurrencyContext = createContext();

export class CurrencyProvider extends Component {
  state = {
    selectedCurrency: null,
  };

  setSelectedCurrency = (currency) => {
    this.setState({ selectedCurrency: currency });
  };

  render() {
    const { children } = this.props;
    const { selectedCurrency } = this.state;
    const { setSelectedCurrency } = this;

    console.log("selectedCurrency", selectedCurrency);

    return (
      <CurrencyContext.Provider
        value={{ selectedCurrency, setSelectedCurrency }}
      >
        {children}
      </CurrencyContext.Provider>
    );
  }
}

export default CurrencyContext;
