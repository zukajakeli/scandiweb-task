import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CartContext from "./context/CartContext";

import Header from "./components/header/Header";
import PLP from "./pages/products-listing-page/PLP";
import PDP from "./pages/product-description-page/PDP";
import CartPage from "./pages/cart-page/CartPage";

import GlobalStyles from "./styles/global-styles";

class App extends React.Component {
  static contextType = CartContext;

  componentDidMount() {
    const cache = JSON.parse(localStorage.getItem("cache"));
    this.context.setCachedProducts(cache);
  }

  render() {
    return (
      <Router>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route path="/cart" component={CartPage} />
          <Route path="/product/:productId" component={PDP} />
          <Route path="/" component={PLP} />
        </Switch>
      </Router>
    );
  }
}

export default App;
