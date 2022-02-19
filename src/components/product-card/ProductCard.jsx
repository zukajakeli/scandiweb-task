import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import CartContext from "../../context/CartContext";
import AddToCartButton from "../add-to-cart-button/AddToCartButton";
import { getPriceBySelectedCurrency } from "../../helpers/helpers";

import * as S from "./components";
import "swiper/css";
import "./swiper-custom.css";
import "swiper/css/pagination";

export class ProductCard extends Component {
  static contextType = CartContext;

  render() {
    const { gallery, name, id, selectedCurrency, inStock } = this.props;
    const { setCartProducts } = this.context;

    return (
      <S.Wrapper
        inStock={inStock}
        onClick={() => {
          this.props.history.push(`/product/${id}`);
        }}
      >
        <S.SwiperWrapper>
          <Swiper className="mySwiper" modules={[Pagination]} pagination={true}>
            {gallery?.map((imageUrl) => {
              return (
                <SwiperSlide key={imageUrl}>
                  <S.Image src={imageUrl} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </S.SwiperWrapper>

        <S.AddToCartWrapper
          onClick={(e) => {
            e.stopPropagation();
            setCartProducts(this.props);
          }}
        >
          {inStock ? (
            <AddToCartButton />
          ) : (
            <S.OutOfStockText
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              OUT OF STOCK
            </S.OutOfStockText>
          )}
        </S.AddToCartWrapper>
        <S.Title>{name}</S.Title>
        <S.Price>
          {getPriceBySelectedCurrency(selectedCurrency, this.props.prices)}
        </S.Price>
      </S.Wrapper>
    );
  }
}

export default ProductCard;
