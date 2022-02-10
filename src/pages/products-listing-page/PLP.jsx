import React, { Component } from "react";

import { getCategories } from "../../API/API";
import ProductCard from "../../components/product-card/ProductCard";
import * as S from "./components";

export default class PLP extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    getCategories
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.category.products);
        this.setState({ categories: res.data.category.products });
      });
  }

  render() {
    return (
      <S.Wrapper>
        <S.Heading>Category name</S.Heading>
        <S.ProductsWrapper>
          {this.state.categories?.map(({ name, prices, gallery, id }) => {
            return (
              <ProductCard
                key={id}
                name={name}
                prices={prices}
                gallery={gallery}
              />
            );
          })}
        </S.ProductsWrapper>
      </S.Wrapper>
    );
  }
}
