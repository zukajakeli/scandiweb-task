import React, { Component } from "react";

import { getCategories } from "../../API/API";
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
    return <div></div>;
  }
}
