import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ContextProvider from "./context/ContextProvider";

import GlobalStyles from "./styles/global-styles";
import Header from "./components/header/Header";
import PLP from "./pages/products-listing-page/PLP";

class App extends React.Component {
  render() {
    console.log(this.state);
    return (
      <Router>
        <ContextProvider>
          <GlobalStyles />
          <Header />
          <Switch>
            <Route path="/" component={PLP} />
          </Switch>
        </ContextProvider>
      </Router>
    );
  }
}

export default App;
