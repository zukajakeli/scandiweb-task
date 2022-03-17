import React, { PureComponent } from "react";

import * as S from "./components";

export default class MiniCartButton extends PureComponent {
  render() {
    const { isGreen, children, onClick } = this.props;

    return (
      <S.Wrapper onClick={onClick} isGreen={isGreen}>
        {children}
      </S.Wrapper>
    );
  }
}
