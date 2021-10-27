import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Catalog from "./Components/Catalog/Catalog";
import Header from "./Components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          <Route path="/catalog" component={Catalog} />
          <Route path="/cart" component={Cart} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
