import React, { Component } from "react";

import { getProductsByCategory } from "../../API/API";
import CurrencyContext from "../../context/CurrencyContext";
import ProductCard from "../../components/product-card/ProductCard";
import * as S from "./components";

export default class PLP extends Component {
  static contextType = CurrencyContext;

  state = {
    productsList: [],
  };

  componentDidMount() {
    getProductsByCategory("")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.category.products);
        this.setState({ productsList: res.data.category.products });
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      getProductsByCategory(this.props.location.pathname.split("=")[1])
        .then((res) => res.json())
        .then((res) => {
          console.log(res.data.category.products);
          this.setState({ productsList: res.data.category.products });
        });
    }
  }

  render() {
    const categoryName = this.props.location.pathname.split("=")[1];
    const { selectedCurrency } = this.context;

    return (
      <S.Wrapper>
        <S.Heading>{categoryName}</S.Heading>
        <S.ProductsWrapper>
          {this.state.productsList?.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                prices={product.prices}
                gallery={product.gallery}
                selectedCurrency={selectedCurrency}
                inStock={product.inStock}
                product={product}
                history={this.props.history}
              />
            );
          })}
        </S.ProductsWrapper>
      </S.Wrapper>
    );
  }
}
