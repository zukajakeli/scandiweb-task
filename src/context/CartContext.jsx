import React, { Component, createContext } from "react";
import { saveProductsToCache } from "../helpers/helpers";

const CartContext = createContext();

export class CartProvider extends Component {
  state = {
    cartProducts: [],
  };

  setCachedProducts = (products) => {
    if (products) {
      this.setState({
        cartProducts: [...products],
      });
    }
  };

  setCartProducts = (product) => {
    this.setState((prevState) => {
      const productObj = { ...product };
      const prev = { ...prevState };

      const index = prev.cartProducts.findIndex((product) => {
        return product.attrId === JSON.stringify(productObj.selectedAttributes);
      });

      const sameProduct = prev.cartProducts[index];

      if (index >= 0) {
        prev.cartProducts[index] = {
          ...sameProduct,
          ...productObj,
          quantity: sameProduct.quantity + 1,
        };
        return {
          cartProducts: [...prev.cartProducts],
        };
      } else if (
        !productObj.attributes.length &&
        prev.cartProducts.find((item) => item.attrId === productObj.id)
      ) {
        const index = prev.cartProducts.findIndex(
          (item) => item.attrId === productObj.id
        );
        const prevCount = prev.cartProducts[index].quantity;
        prev.cartProducts[index] = {
          ...prev.cartProducts[index],
          quantity: prevCount + 1,
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
            attrId: !!productObj.attributes.length
              ? JSON.stringify(productObj.selectedAttributes)
              : productObj.id,
          },
        ],
      };
    });
    setTimeout(() => {
      saveProductsToCache(this.state.cartProducts);
    }, 0);
  };

  removeCartProduct = (product) => {
    this.setState((prevState) => {
      const productObj = { ...product };
      const prev = { ...prevState };
      const qtyBeforeRemoving = productObj.quantity;
      const index = prev.cartProducts.findIndex((product) => {
        return product.attrId === productObj.attrId;
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
              return product.attrId !== productObj.attrId;
            }),
          ],
        };
      }
    });
    setTimeout(() => {
      saveProductsToCache(this.state.cartProducts);
    }, 0);
  };

  getSelectedAttributes = (productId) => {
    const selectedAttr = this.state.cartProducts.filter(
      (item) => item.attrId === productId
    )[0]?.selectedAttributes;

    return selectedAttr;
  };

  render() {
    const { children } = this.props;
    const { cartProducts } = this.state;
    const {
      setCartProducts,
      removeCartProduct,
      getSelectedAttributes,
      setCachedProducts,
    } = this;

    return (
      <CartContext.Provider
        value={{
          cartProducts,
          removeCartProduct,
          setCartProducts,
          getSelectedAttributes,
          setCachedProducts,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  }
}

export default CartContext;
