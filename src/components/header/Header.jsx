import React, { Component, createRef } from "react";
import { withRouter } from "react-router-dom";

import CurrencySelector from "../currency-selector/CurrencySelector";
import CurrencyContext from "../../context/CurrencyContext";
import CartContext from "../../context/CartContext";
import MiniCart from "../mini-cart/MiniCart";
import OutsideClickDetector from "../outside-click-detector/OutsideClickDetector";

import { getCartProductsQuantity } from "../../helpers/helpers";

import { getCategories } from "../../API/API";
import { ReactComponent as BackIcon } from "../../assets/icons/back.svg";
import cartIcon from "../../assets/icons/cart.svg";
import arrowDown from "../../assets/icons/arrow-down.svg";
import * as S from "./components";

class Header extends Component {
  constructor(props) {
    super(props);

    this.handler = this.handler.bind(this);
  }

  static contextType = CurrencyContext;

  state = {
    isCurrencyDropdownOpen: false,
    isMiniCartOpen: false,
    categories: [],
  };

  componentDidMount() {
    getCategories
      .then((res) => res.json())
      .then((res) => {
        this.setState({ categories: res.data.categories });
      });
  }

  currencyDropdownToggler = () => {
    this.setState({
      isCurrencyDropdownOpen: !this.state.isCurrencyDropdownOpen,
    });
  };

  closeCurrencySelector = () => {
    this.setState({
      isCurrencyDropdownOpen: false,
    });
  };

  miniCartToggler = () => {
    this.setState({
      isMiniCartOpen: !this.state.isMiniCartOpen,
    });
  };

  closeMiniCart = () => {
    this.setState({
      isMiniCartOpen: false,
    });
  };

  handler() {
    this.setState({ ...this.state, isCurrencyDropdownOpen: false });
  }

  render() {
    const { selectedCurrency } = this.context;
    const { history } = this.props;

    return (
      <CartContext.Consumer>
        {(cartContext) => {
          const cartProductsQuantity = getCartProductsQuantity(
            cartContext.cartProducts
          );

          return (
            <S.Wrapper>
              <S.CategoryList>
                {this.state.categories.map(({ name }, index) => {
                  return (
                    <S.Category key={name + index}>
                      <S.Navlink to={`/category=${name}`}>{name}</S.Navlink>
                    </S.Category>
                  );
                })}
              </S.CategoryList>

              <S.IconWrapper>
                <BackIcon
                  onClick={() => {
                    history.push("/");
                  }}
                />
              </S.IconWrapper>

              <S.CartAndCurrency>
                <OutsideClickDetector
                  onClickOutside={this.closeCurrencySelector}
                >
                  <S.CurrencyAndArrow onClick={this.currencyDropdownToggler}>
                    <S.CurrencyIcon>{selectedCurrency?.symbol}</S.CurrencyIcon>
                    <S.ArrowIcon
                      src={arrowDown}
                      isCurrencyDropdownOpen={this.state.isCurrencyDropdownOpen}
                    />
                  </S.CurrencyAndArrow>
                  <CurrencySelector
                    handler={this.handler}
                    isCurrencyDropdownOpen={this.state.isCurrencyDropdownOpen}
                  />
                </OutsideClickDetector>

                <OutsideClickDetector onClickOutside={this.closeMiniCart}>
                  <S.CartAndCounter onClick={this.miniCartToggler}>
                    <S.CartIcon src={cartIcon} />
                    {!!cartProductsQuantity && (
                      <S.CartCounter>{cartProductsQuantity}</S.CartCounter>
                    )}
                  </S.CartAndCounter>
                  <MiniCart
                    isMiniCartOpen={this.state.isMiniCartOpen}
                    cartProductsQuantity={cartProductsQuantity}
                  />
                </OutsideClickDetector>
              </S.CartAndCurrency>
            </S.Wrapper>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default withRouter(Header);
