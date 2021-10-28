import React from "react";
import Button from "react-bootstrap/Button";
import DeletingModal from "../DeletingModal";

const Cart = (props) => {
  let total = 0;
  return (
    <div>
      {!props.cart || props.cart.length === 0 ? (
        "Cart is empty"
      ) : (
        <div>
          {props.cart.map((i, index) => {
            total += i.price;
            props.setTotal(total);
            return (
              <div key={index}>
                Name: {i.name}, Price: {i.price}
                <Button
                  variant="outline-danger"
                  onClick={() => props.delete(i)}
                >
                  Delete this product
                </Button>
              </div>
            );
          })}
          Total to pay: {props.total}
          <Button
            variant="danger"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Clear the cart
          </Button>
        </div>
      )}
      <DeletingModal setCart={props.setCart} />
    </div>
  );
};

export default Cart;
