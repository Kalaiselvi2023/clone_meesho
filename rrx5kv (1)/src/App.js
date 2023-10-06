import React from "react-dom";
import "./styles.css";
import Nav from "./Component/Component1/Nav";
import Subnav from "./Component/Component2/Subnav";
import Body from "./Component/Component3/Body";
import Product from "./Component/Component4/Product";
import Carts from "./Component/Component5/Carts";
import Footer from "./Component/Component6/Footer";
function App() {
  return (
    <div className="App">
      <Nav />
      <Subnav />
      <Body />
      <Product />
      <Carts />
      <Footer />
    </div>
  );
}
export default App;
