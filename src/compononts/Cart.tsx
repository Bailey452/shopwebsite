"use client";
import React from "react";
import { PRODUCT } from "@/types/productType";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

interface CartProps {
  cart: PRODUCT[];
   setCart: React.Dispatch<React.SetStateAction<PRODUCT[]>>;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart: React.FC<CartProps> = ({ cart, setShowCart }) => {
  const {setCart} = useCart()
  const handleIncrease = (id: number) => {
    setCart((prev: PRODUCT[]) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity! + 1 } : item
      )
    );
  };

  const handleDecrease = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, item.quantity! - 1) } : item
        )
    );
  };

  const handleRemove = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (acc, item) => acc + parseFloat(item.price.replace(/[^0-9.]/g, "")) * item.quantity!,
    0
  );

  return (
    <div className="fixed z-50 right-0 top-0 h-full w-[400px] sm:w-[540px] bg-white shadow-lg p-6 overflow-y-auto">
      <button
        onClick={() => setShowCart(false)}
        className="absolute right-4 top-4 text-gray-600 hover:text-gray-900"
      >
        ✕
      </button>

      <h2 className="text-lg font-semibold mb-6">Shopping Cart</h2>

      {cart.length === 0 && <p>No item in your cart</p>}

      {cart.map((item) => (
        <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-4">
          <Image
            src={item.imageUrl.startsWith("http") ? item.imageUrl : `https://${item.imageUrl}`}
            alt={item.name}
            width={80}
            height={80}
            className="w-16 h-16 object-contain rounded border"
          />
          <div className="flex-1 ml-4">
            <h3 className="font-medium text-sm line-clamp-2">{item.name}</h3>
            <p className="text-purple-600 font-semibold">{item.price}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleDecrease(item.id)}
              className="border px-2 py-1 rounded"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => handleIncrease(item.id)}
              className="border px-2 py-1 rounded"
            >
              +
            </button>
            <button
              onClick={() => handleRemove(item.id)}
              className="text-red-500 hover:text-red-700 ml-2"
            >
              ✕
            </button>
          </div>
        </div>
      ))}

      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between mb-4">
          <span className="font-semibold text-lg">Total:</span>
          <span className="text-purple-600 font-bold text-xl">${total.toFixed(2)}</span>
        </div>

        <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded mb-2">
          Proceed to Checkout
        </button>
        <button
          onClick={() => setCart([])}
          className="w-full border border-gray-300 py-2 rounded"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
