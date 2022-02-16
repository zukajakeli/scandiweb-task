import React, { Component } from "react";

import CurrencyContext from "../../context/CurrencyContext";
import { getSingleProduct } from "../../API/API";
import { getPriceBySelectedCurrency } from "../../helpers/helpers";

import * as S from "./components";

export default class PDP extends Component {
  static contextType = CurrencyContext;

  state = {
    singleProduct: {},
    selectedImage: "",
  };

  componentDidMount() {
    const { productId } = this.props.match.params;
    console.log("productId", productId);
    getSingleProduct(productId)
      .then((res) => res.json())
      .then((res) => {
        console.log("resoo", res.data.product);
        this.setState({
          singleProduct: res.data.product,
          selectedImage: res.data.product.gallery[0],
        });
      });
  }

  render() {
    console.log("this.state", this.state);
    const { selectedCurrency } = this.context;
    const { name, gallery, prices, description } = this.state.singleProduct;

    return (
      <S.Wrapper>
        <S.ImagesWrapper>
          <S.SmallImagesWrapper>
            {gallery?.map((imageUrl) => {
              return (
                <S.SmallImage
                  onClick={() => {
                    this.setState({
                      selectedImage: imageUrl,
                    });
                  }}
                  key={imageUrl}
                  src={imageUrl}
                  alt="small-photo"
                />
              );
            })}
          </S.SmallImagesWrapper>
          <S.MainImageWrapper>
            <S.MainImage src={this.state.selectedImage} alt="main-image" />
          </S.MainImageWrapper>
        </S.ImagesWrapper>
        <S.Details>
          <S.Title>{name}</S.Title>
          <S.PriceWrapper>
            <S.PriceText>PRICE:</S.PriceText>
            {prices && (
              <S.PriceAmount>
                {getPriceBySelectedCurrency(selectedCurrency, prices)}
              </S.PriceAmount>
            )}
          </S.PriceWrapper>

          <S.AddToCartButton>ADD TO CART</S.AddToCartButton>
          <S.Description>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </S.Description>
        </S.Details>
      </S.Wrapper>
    );
  }
}
