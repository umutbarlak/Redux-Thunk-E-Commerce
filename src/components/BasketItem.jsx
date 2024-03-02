import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseItem,
  deleteItem,
  updateItem,
} from "../redux/actions/basketActions";

const BasketItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (product.amount > 1) {
      dispatch(decreaseItem(product));
    } else {
      dispatch(deleteItem(product.id));
    }
  };

  return (
    <div className="d-flex align-items-center gap-3 my-4 rounded-2 justify-content-between bg-white text-black p-3">
      <div className="d-flex align-items-center gap-4">
        <img
          className="  rounded-circle"
          width={50}
          height={50}
          src={product.image}
        />
        <h4 className="d-flex align-items-center gap-4 ">
          <span>{product.make}</span>
          <span>{product.model}</span>
        </h4>
      </div>

      <h4 className="text-success text-nowrap">{product.price} TL</h4>

      <div className="d-flex align-items-center gap-2">
        <span className="text-nowrap">Miktar: {product.amount}</span>
        <button
          onClick={() => dispatch(updateItem(product))}
          className="btn btn-sm btn-success"
        >
          +
        </button>

        <button onClick={handleClick} className="btn btn-sm btn-danger">
          -
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
