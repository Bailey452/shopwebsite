"use client";
import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { PRODUCT } from "@/types/productType";

type CartContextType = {
  cart: PRODUCT[];
  addToCart: (product: PRODUCT) => void;
  setCart: React.Dispatch<React.SetStateAction<PRODUCT[]>>;
  cartNumber: number; // <-- should be a number, not an array
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCartState] = useState<PRODUCT[]>([]);

  const addToCart = (product: PRODUCT) => {
    setCartState((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity! + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const cartNumber = useMemo(
    () => cart.reduce((acc, item) => acc + item.quantity!, 0),
    [cart]
  );

  return (
    <CartContext.Provider value={{ cart, addToCart, setCart: setCartState, cartNumber }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};