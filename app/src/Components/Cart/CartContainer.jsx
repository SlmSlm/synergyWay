import React, { useState } from "react";
import Cart from "./Cart";

const CartContainer = () => {
  let [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  let [totalPrice, setTotalPrice] = useState(0);

  const deleteSingleProduct = (i) => {
    cart = cart.filter((item) => item !== i);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(JSON.parse(localStorage.getItem("cart")));
    return cart;
  };

  return (
    <Cart
      cart={cart}
      setCart={setCart}
      total={totalPrice}
      setTotal={setTotalPrice}
      delete={deleteSingleProduct}
    />
  );
};

export default CartContainer;
