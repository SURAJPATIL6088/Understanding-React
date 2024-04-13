import React, {createContext, useState} from 'react'

export const CartContext = createContext(null);

export const CartContextProvider = (props) => {
    const [items, setItems] = useState([]);

  return (
    <CartContext.Provider value={{items, setItems, name:"Suraj Patil"}}>
        {props.children}
    </CartContext.Provider>
  )
}

