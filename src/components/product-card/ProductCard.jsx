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
    const { gallery, name, id, selectedCurrency, inStock, prices, product } =
      this.props;
    const { setCartProducts } = this.context;

    const openPDP = () => {
      this.props.history.push(`/product/${id}`);
    };

    return (
      <S.Wrapper inStock={inStock} onClick={openPDP}>
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
          onClick={
            !!product.attributes.length
              ? openPDP
              : (e) => {
                  e.stopPropagation();
                  setCartProducts(product);
                }
          }
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
          {getPriceBySelectedCurrency(selectedCurrency, prices)}
        </S.Price>
      </S.Wrapper>
    );
  }
}

export default ProductCard;
