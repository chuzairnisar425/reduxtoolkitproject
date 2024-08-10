import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {items.length === 0 ? (
          <p>No items in the cart.</p>
        ) : (
          items.map((product) => (
            <div className="cartCard" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <h5>{product.price}</h5>
              <button className="btn" onClick={() => handleRemove(product.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
