import React, { Component, createContext } from "react";

const CartContext = createContext();

export class CartProvider extends Component {
  state = {
    cartProducts: [],
  };

  setCartProducts = (product) => {
    this.setState((prevState) => {
      const productObj = { ...product };
      const prev = { ...prevState };
      const sameProduct = prev.cartProducts.find((product) => {
        return product.id === productObj.id;
      });
      const index = prev.cartProducts.findIndex((product) => {
        return product.id === productObj.id;
      });

      productObj.quantity = sameProduct ? sameProduct.quantity + 1 : 1;

      if (index >= 0) {
        prev.cartProducts[index] = { ...productObj };
        return {
          cartProducts: [...prevState.cartProducts],
        };
      }
      return {
        cartProducts: [...prevState.cartProducts, productObj],
      };
    });
  };

  removeCartProduct = (product) => {
    this.setState((prevState) => {
      const productObj = { ...product };
      const prev = { ...prevState };
      const qtyBeforeRemoving = productObj.quantity;
      const index = prev.cartProducts.findIndex((product) => {
        return product.id === productObj.id;
      });

      if (qtyBeforeRemoving > 1) {
        prev.cartProducts[index] = {
          ...productObj,
          quantity: qtyBeforeRemoving - 1,
        };
        return {
          cartProducts: [...prev.cartProducts],
        };
      } else {
        return {
          cartProducts: [
            ...prev.cartProducts.filter((product) => {
              return product.id !== productObj.id;
            }),
          ],
        };
      }
    });
  };

  render() {
    const { children } = this.props;
    const { cartProducts } = this.state;
    const { setCartProducts, removeCartProduct } = this;

    console.log("cartProducts", cartProducts);

    return (
      <CartContext.Provider
        value={{ cartProducts, removeCartProduct, setCartProducts }}
      >
        {children}
      </CartContext.Provider>
    );
  }
}

export default CartContext;
