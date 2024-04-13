import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = (props) => {
  const cart = useContext(CartContext);

  const handleSubmitChange = () => {
    cart.setItems([...cart.items, { name: props.name, price: props.price }]);
  };

  /*if (cart.length > 0) {
    console.log("Cart", cart);
  }*/

  console.log("Cart", cart);

  return (
    <div className="flex justify-center flex-wrap items-center">
      <div className="border-2 p-5 m-2 rounded-sm transform border-gray-500">
        <h3>{props.name}</h3>
        <p>Price: ${props.price}</p>
        <button
          onClick={() => handleSubmitChange()}
          className="bg-green-600 mt-3 p-2 rounded-md"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
