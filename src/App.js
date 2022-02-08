import React from "react";

import GlobalStyles from "./styles/global-styles";
import Header from "./components/header/Header";
import PLP from "./pages/products-listing-page/PLP";

class App extends React.Component {
  render() {
    console.log(this.state);
    return (
      <>
        <GlobalStyles />
        <Header />
        appjs
        <PLP />
      </>
    );
  }
}

export default App;
