import React, { PureComponent, createRef } from "react";

export default class OutsideClickDetector extends PureComponent {
  constructor(props) {
    super(props);

    this.ref = createRef(null);
  }

  handleClickOutside = (event) => {
    if (this.ref?.current && !this.ref?.current.contains(event.target)) {
      this.props.onClickOutside();
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    return <div ref={this.ref}>{this.props.children}</div>;
  }
}
