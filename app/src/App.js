import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import CartContainer from "./Components/Cart/CartContainer";
import Catalog from "./Components/Catalog/Catalog";
import Header from "./Components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          <Route path="/catalog" component={Catalog} />
          <Route path="/cart" component={CartContainer} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
