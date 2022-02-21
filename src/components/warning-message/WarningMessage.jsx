import React, { Component } from "react";

import * as S from "./components";

export default class WarningMessage extends Component {
  state = {
    isActive: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isActive: true,
      });
    }, 100);

    setTimeout(() => {
      this.setState({
        isActive: false,
      });
    }, 2000);

    setTimeout(() => {
      this.props.closeWarningMessage();
    }, 2600);
  }

  render() {
    return (
      <S.Wrapper isActive={this.state.isActive}>
        Please, select every attribute !
      </S.Wrapper>
    );
  }
}
