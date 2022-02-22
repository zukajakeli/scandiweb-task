import React, { Component, createContext } from "react";
import { saveProductsToCache } from "../helpers/helpers";

const CartContext = createContext();

export class CartProvider extends Component {
  state = {
    cartProducts: [],
  };

  setCachedProducts = (products) => {
    this.setState({
      cartProducts: [...products],
    });
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
          ...sameProduct,
          ...productObj,
          quantity: sameProduct.quantity + 1,
        };
        return {
          cartProducts: [...prev.cartProducts],
        };
      } else if (!productObj.selectedAttributes) {
        return {
          cartProducts: [
            ...prev.cartProducts,
            {
              ...productObj,
              quantity: 1,
              selectedAttributes: productObj.attributes?.map((item) => {
                return { name: item.name, value: item.items[0].id };
              }),
            },
          ],
        };
      }
      return {
        cartProducts: [
          ...prev.cartProducts,
          {
            ...productObj,
            quantity: 1,
          },
        ],
      };
    });
    setTimeout(() => {
      saveProductsToCache(this.state.cartProducts);
    }, 500);
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
    setTimeout(() => {
      saveProductsToCache(this.state.cartProducts);
    }, 500);
  };

  setAttributes = (productId, attributes) => {
    console.log("yeeee", { attributes });
    const index = this.state.cartProducts?.findIndex(
      (item) => item.id === productId
    );
    const cartProducts = [...this.state.cartProducts];
    console.log("indexeee", this.state.cartProducts[index]);
    if (index >= 0) {
      cartProducts[index].selectedAttributes = [
        ...cartProducts[index].selectedAttributes.filter(
          (item) => item.name !== attributes.name
        ),
        attributes,
      ];
      console.log("cartProds", cartProducts);
      this.setState({ cartProducts: cartProducts });
    }
    setTimeout(() => {
      saveProductsToCache(this.state.cartProducts);
    }, 500);
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
      setCachedProducts,
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
          setCachedProducts,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  }
}

export default CartContext;
