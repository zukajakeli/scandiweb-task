import React, { Component } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

import CurrencyContext from "../../context/CurrencyContext";
import CartContext from "../../context/CartContext";
import { getSingleProduct } from "../../API/API";
import { getPriceBySelectedCurrency } from "../../helpers/helpers";

import SingleAttribute from "../../components/single-attribute/SingleAttribute";

import * as S from "./components";

export default class PDP extends Component {
  constructor(props) {
    super(props);

    this.attributeHandler = this.attributeHandler.bind(this);
  }

  static contextType = CurrencyContext;

  state = {
    singleProduct: {},
    selectedImage: "",
    selectedAttributes: [],
  };

  componentDidMount() {
    const { productId } = this.props.match.params;
    getSingleProduct(productId)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          singleProduct: res.data.product,
          selectedImage: res.data.product.gallery[0],
        });
      });
  }

  attributeHandler(newAttribute) {
    this.setState({
      selectedAttributes: [
        ...this.state.selectedAttributes.filter((item) => {
          return item.name !== newAttribute.name;
        }),
        { ...newAttribute },
      ],
    });
  }

  render() {
    const { selectedCurrency } = this.context;
    const {
      singleProduct: {
        name,
        gallery,
        prices,
        description,
        inStock,
        attributes,
      },
      selectedImage,
    } = this.state;

    return (
      <CartContext.Consumer>
        {(cartContext) => {
          const { setCartProducts } = cartContext;
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
                  <InnerImageZoom src={selectedImage} />
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

                <S.AddToCartButton
                  disabled={!inStock}
                  onClick={() => {
                    inStock &&
                      setCartProducts({
                        ...this.state.singleProduct,
                        selectedAttributes: {
                          ...this.state.selectedAttributes,
                        },
                      });
                  }}
                >
                  ADD TO CART
                </S.AddToCartButton>
                <S.Description>
                  <div dangerouslySetInnerHTML={{ __html: description }} />
                </S.Description>
              </S.Details>
            </S.Wrapper>
          );
        }}
      </CartContext.Consumer>
    );
  }
}
