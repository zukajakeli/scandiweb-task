import React, { Component, createContext } from "react";

const CartContext = createContext();

export class CartProvider extends Component {
  state = {
    cartProducts: [],
  };

  setCartProducts = (product) => {
    this.setState((prevState) => {
      const productObj = { ...product };
      const sameProduct = prevState.cartProducts.find((product) => {
        return product.id === productObj.id;
      });

      if (sameProduct) {
        productObj.quantity = sameProduct.quantity + 1;
      } else {
        productObj.quantity = 1;
      }
      return {
        cartProducts: [
          ...prevState.cartProducts.filter((product) => {
            return product.id !== productObj.id;
          }),
          productObj,
        ],
      };
    });
  };

  removeCartProduct = (product) => {
    this.setState((prevState) => {
      const productObj = { ...product };
      const prevQuantity = productObj.quantity;

      if (prevQuantity > 1) {
        return {
          cartProducts: [
            ...prevState.cartProducts.filter((product) => {
              return product.id !== productObj.id;
            }),
            { ...productObj, quantity: prevQuantity - 1 },
          ],
        };
      } else {
        return {
          cartProducts: [
            ...prevState.cartProducts.filter((product) => {
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
