import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ContextProvider from "./context/ContextProvider";

import Header from "./components/header/Header";
import PLP from "./pages/products-listing-page/PLP";
import PDP from "./pages/product-description-page/PDP";
import CartPage from "./pages/cart-page/CartPage";

import GlobalStyles from "./styles/global-styles";

class App extends React.Component {
  render() {
    return (
      <Router>
        <ContextProvider>
          <GlobalStyles />
          <Header />
          <Switch>
            <Route path="/cart" component={CartPage} />
            <Route path="/product/:productId" component={PDP} />
            <Route path="/" component={PLP} />
          </Switch>
        </ContextProvider>
      </Router>
    );
  }
}

export default App;
