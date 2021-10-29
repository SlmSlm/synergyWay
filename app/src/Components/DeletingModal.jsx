import React from "react";

const DelitingModal = (props) => {
  const clear = () => {
    props.setCart(localStorage.removeItem("cart"));
    props.setProductsSum(0);
  };
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Clear the cart?
            </h5>
          </div>
          <div className="modal-body">Are u sure?</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={() => clear()}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DelitingModal;
