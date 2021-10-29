import { useState } from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import CartContainer from "./Components/Cart/CartContainer";
import Catalog from "./Components/Catalog/Catalog";
import Header from "./Components/Header/Header";

function App() {
  let [productsSum, setProductsSum] = useState(
    !JSON.parse(localStorage.getItem("cart"))
      ? 0
      : JSON.parse(localStorage.getItem("cart")).length
  );
  return (
    <HashRouter>
      <div className="App">
        <Header productsSum={productsSum} />
        <div className="content">
          <Route
            path="/catalog"
            render={() => <Catalog setProductsSum={setProductsSum} />}
          />
          <Route
            path="/cart"
            render={() => <CartContainer setProductsSum={setProductsSum} />}
          />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
