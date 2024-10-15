import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

function StateContext({ children }) {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  let foundProduct;

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems?.find(
      (item) => item._id === product._id
    );
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    if (checkProductInCart) {
      const upDateCartItem = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          return { ...cartProduct, quantity: cartProduct.quantity + quantity };
        }
      });
      setCartItems(upDateCartItem);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} was added to the cart!`);
  };

  // const toggleCartItemQuantity = (id, value) => {
  //   foundProduct = cartItems?.find((item) => item._id === id);
  //   const newCartItems = cartItems.filter((item) => item._id !== id); //remove that item

  //   if (value === "inc") {
  //     setCartItems([
  //       ...newCartItems,
  //       { ...foundProduct, quantity: foundProduct.quantity + 1 },
  //     ]);
  //     setTotalPrice((prev) => prev + foundProduct.price);
  //     setTotalQuantities((prev) => prev + 1);
  //   } else {
  //     if (foundProduct.quantity > 1) {
  //       setCartItems([
  //         ...newCartItems,
  //         { ...foundProduct, quantity: foundProduct.quantity - 1 },
  //       ]);
  //       setTotalPrice((prev) => prev - foundProduct.price);
  //       setTotalQuantities((prev) => prev - 1);
  //     }
  //   }
  // };
  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems?.find((item) => item._id === id);
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) => {
        if (item._id === id) {
          if (value === "inc") {
            return { ...item, quantity: item.quantity + 1 };
          } else if (value === "dec" && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      })
    );

    if (value === "inc") {
      setTotalPrice((prev) => prev + foundProduct.price);
      setTotalQuantities((prev) => prev + 1);
    } else if (value === "dec" && foundProduct.quantity > 1) {
      setTotalPrice((prev) => prev - foundProduct.price);
      setTotalQuantities((prev) => prev - 1);
    }
  };

  const onRemove = (product) => {
    foundProduct = cartItems?.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);
    setTotalPrice((prev) => prev - foundProduct.price * foundProduct.quantity);
    setTotalQuantities((prev) => prev - foundProduct.quantity);
    setCartItems(newCartItems);
  };
  const incQty = () => {
    setQty((prev) => prev + 1);
  };

  const decQty = () => {
    setQty((prev) => {
      if (prev - 1 < 1) return 1;
      return prev - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        setShowCart,
        toggleCartItemQuantity,
        onRemove,
      }}
    >
      {children}
    </Context.Provider>
  );
}

function useStateContext() {
  const stateContext = useContext(Context);
  if (stateContext === undefined) {
    throw new Error(
      "useStateContext must be used within a StateContext Provider"
    );
  }
  return stateContext;
}

export { StateContext, useStateContext };
