// components/CartModal.tsx
"use client";

import { useCart } from "@lib/context/CartContext";
import React from "react";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  const { cartItems, clearCart } = useCart();

  // Calculate the total price
  const total = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  if (!isOpen) return null;

  const handleProcessOrder = () => {
    alert("Thank you for your purchase.");
    clearCart();
    onClose();
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="fixed inset-0 bg-[#96BAA0] bg-opacity-50 z-40 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md z-50">
        <div className="flex justify-between items-center border-b border-[#00231C] pb-3">
          <h2 className="text-2xl font-bold text-[#00231C]">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-2xl"
          >
            &times;
          </button>
        </div>
        <div className="mt-4 max-h-80 overflow-y-scroll">
          {cartItems.length === 0 ? (
            <p className="text-[#00231C]">Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex justify-between items-center mb-4"
              >
                <div className="flex items-center text-[#00231C]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <div>
                    <p className="text-[#00231C] font-semibold">{item.name}</p>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="border-t mt-4 pt-4 border-[#00231C]">
          <div className="flex justify-between items-center font-bold text-xl text-[#00231C]">
            <span>Total:</span>
            <span>${total}</span>
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={handleProcessOrder}
              disabled={cartItems.length === 0}
              className="btn btn-primary w-full"
            >
              Process Order
            </button>
            <button
              onClick={handleClearCart}
              className="btn btn-outline btn-error w-full"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
