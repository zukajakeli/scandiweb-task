import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import CartContext from "../../context/CartContext";
import { getPriceBySelectedCurrency } from "../../helpers/helpers";
import { ReactComponent as MinusIcon } from "../../assets/icons/minus.svg";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";
import SingleAttribute from "../single-attribute/SingleAttribute";

import * as S from "./components";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

export default class CartItem extends Component {
  static contextType = CartContext;

  state = {
    selectedAttributes: [],
  };

  render() {
    const { product, selectedCurrency, isForCartPage } = this.props;
    const { gallery, name, prices, quantity, attributes } = product;
    const { setCartProducts, removeCartProduct } = this.context;

    console.log("itemDetails", product);
    return (
      <S.Wrapper isForCartPage={isForCartPage}>
        <S.Description isForCartPage={isForCartPage}>
          <S.Title>{name}</S.Title>
          <S.Price>
            {getPriceBySelectedCurrency(selectedCurrency, prices, quantity)}
          </S.Price>

          <S.Attributes>
            {attributes?.map((attribute) => {
              return (
                <SingleAttribute
                  key={attribute.id}
                  attribute={attribute}
                  selectedAttributes={this.state.selectedAttributes}
                  attributeHandler={this.attributeHandler}
                />
              );
            })}
          </S.Attributes>
        </S.Description>

        <S.PhotoAndCounter isForCartPage={isForCartPage}>
          <S.Counter>
            <S.CounterButton
              onClick={() => {
                setCartProducts(product);
              }}
            >
              +
            </S.CounterButton>
            {quantity}
            <S.CounterButton
              onClick={() => {
                removeCartProduct(product);
              }}
            >
              {quantity === 1 ? <TrashIcon /> : <MinusIcon />}
            </S.CounterButton>
          </S.Counter>
          {isForCartPage ? (
            <div>
              <S.ImageWrapper isForCartPage={isForCartPage}>
                <Swiper
                  className="mySwiper"
                  modules={[Navigation]}
                  navigation={true}
                >
                  {gallery?.map((imageUrl) => {
                    return (
                      <SwiperSlide className="cart-page-swiper" key={imageUrl}>
                        <S.Image src={imageUrl} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </S.ImageWrapper>
            </div>
          ) : (
            <S.ImageWrapper>
              <S.Image src={gallery[0]} />
            </S.ImageWrapper>
          )}
        </S.PhotoAndCounter>
      </S.Wrapper>
    );
  }
}
