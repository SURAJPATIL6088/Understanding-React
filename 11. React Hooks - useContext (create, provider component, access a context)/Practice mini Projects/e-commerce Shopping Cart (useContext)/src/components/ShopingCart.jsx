import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ShopingCart = () => {
  const cart = useContext(CartContext);

  const handleRemoveChange = () => {
    console.log("Item Removed!");
  };

  return (
    <div className="text-center mt-5">
      <h1 className="text-2xl">🛒 Shopping Cart 🛒</h1>
      <p>Total Price : 1234</p>
      <div className="flex justify-center flex-row flex-wrap items-center">
        {cart &&
          cart.items.map((item) => (
            <div
              key={item.id} // Make sure to add a unique key prop
              className="border-2 p-5 m-2 rounded-sm transform border-gray-500"
            >
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <button
                onClick={() => handleRemoveChange()}
                className="bg-red-400 mt-3 p-2 rounded-md"
              >
                Remove
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShopingCart;
