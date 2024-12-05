import React, { createContext, useState, useEffect } from "react";

// Create the CartContext
const CartContext = createContext();

// CartProvider component to manage cart state and provide it to children
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [promoCode, setPromoCode] = useState(""); // State for promo code
  const [discountPercentage, setDiscountPercentage] = useState(0); // State for discount percentage

  // Load and save cart data from/to localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add an item to the cart or update the quantity if it already exists
  const addToCart = (item) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (itemIndex !== -1) {
        return prevCart.map((cartItem, index) =>
          index === itemIndex
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }

      return [...prevCart, item];
    });
  };

  // Remove an item from the cart
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  // Increase the quantity of an item in the cart
  const increaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease the quantity of an item in the cart
  const decreaseQuantity = (itemId) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === itemId
              ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
              : item
          )
          .filter((item) => item.quantity > 0) // Ensure no items with 0 quantity remain
    );
  };

  // Clear the entire cart
  const clearCart = () => setCart([]);

  // Set the promo code and discount
  const applyPromoCodeContext = (code, discount) => {
    setPromoCode(code);
    setDiscountPercentage(discount); // Set discount percentage based on promo code
  };

  // Reset promo code and discount
  const removePromoCode = () => {
    setPromoCode("");
    setDiscountPercentage(0); // Reset discount if promo code is removed
  };

  // Provide cart-related values and actions to the context
  return (
    <CartContext.Provider
      value={{
        cart,
        promoCode,
        discountPercentage,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        applyPromoCodeContext,
        removePromoCode,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
