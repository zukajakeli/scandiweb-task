import React from "react";

import PLP from "./pages/products-listing-page/PLP";

class App extends React.Component {
  render() {
    console.log(this.state);
    return (
      <>
        <PLP />
        <h1>Hello, {this.props.name}</h1>
        {this?.state?.categories?.map((category, index) => (
          <div key={index}>{category.id}</div>
        ))}
      </>
    );
  }
}

export default App;
