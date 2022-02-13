import React, { Component } from "react";

import * as S from "./components";

export default class MiniCartButton extends Component {
  render() {
    const { isGreen, children } = this.props;

    return <S.Wrapper isGreen={this.props.isGreen}>{children}</S.Wrapper>;
  }
}
