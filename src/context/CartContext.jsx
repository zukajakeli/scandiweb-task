import React, { Component, createContext } from "react";

const CartContext = createContext();

export class CartProvider extends Component {
  state = {
    cartProducts: [],
  };

  setCartProducts = (product) => {
    console.log("oriduct", product);
    this.setState((prevState) => {
      const productObj = { ...product };
      const prev = { ...prevState };

      const index = prev.cartProducts.findIndex((product) => {
        return product.id === productObj.id;
      });

      const sameProduct = prev.cartProducts[index];

      if (index >= 0) {
        prev.cartProducts[index] = {
          ...productObj,
          quantity: sameProduct.quantity + 1,
        };
        return {
          cartProducts: [...prev.cartProducts],
        };
      }
      return {
        cartProducts: [
          ...prev.cartProducts,
          {
            ...productObj,
            quantity: 1,
            // selectedAttributes: productObj.rest?.attributes?.map((item) => {
            //   return { name: item.name, value: item.items[0].id };
            // }),
          },
        ],
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

  setAttributes = (productId, attributes) => {
    const index = this.state.cartProducts?.findIndex(
      (item) => item.id === productId
    );
    console.log("indexeee", this.state.cartProducts[index]);
    if (index >= 0) {
      this.state.cartProducts[index].selectedAttributes = attributes;
    }
  };

  getSelectedAttributes = (productId) => {
    const selectedAttr = this.state.cartProducts.filter(
      (item) => item.id === productId
    )[0].selectedAttributes;

    return selectedAttr;
  };

  render() {
    const { children } = this.props;
    const { cartProducts } = this.state;
    const {
      setCartProducts,
      removeCartProduct,
      setAttributes,
      getSelectedAttributes,
    } = this;

    console.log("cartProducts", cartProducts);

    return (
      <CartContext.Provider
        value={{
          cartProducts,
          removeCartProduct,
          setCartProducts,
          setAttributes,
          getSelectedAttributes,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  }
}

export default CartContext;
