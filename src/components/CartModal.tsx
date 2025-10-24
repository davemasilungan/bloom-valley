"use client";

import { useCart } from "@lib/context/CartContext";
import React from "react";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  const { cartItems, clearCart } = useCart();

  // Calculates total price of cart items
  const total = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  if (!isOpen) return null;
  const totalItems = cartItems.length;

  const handleProcessOrder = () => {
    alert(
      "Thank you! You have purchased " +
        totalItems +
        " items. Your Total is $" +
        total +
        "."
    );
    clearCart();
    onClose();
  };

  const handleClearCart = () => {
    alert(
      "Your Cart has been cleared, " + totalItems + " items have been removed."
    );
    clearCart();
  };

  return (
    <div className="fixed inset-0 bg-[#96BAA0] bg-opacity-50 z-40 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md z-50">
        <div className="flex justify-between items-center border-b border-[#00231C] pb-3">
          <h2 className="text-2xl font-bold text-[#00231C]">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-lg btn btn-alert hover:bg-red-600 text-gray-200 hover:text-white"
          >
            Close Cart
          </button>
        </div>
        <div className="mt-4 max-h-80 overflow-y-scroll">
          {/* If no items in cart then show empty cart message else show all cart items */}
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
              className={
                cartItems.length === 0
                  ? "btn btn-outline text-gray-500 bg-black hover:bg-[#96BAA0] w-full text-xl"
                  : "btn btn-outline text-white bg-black hover:bg-[#96BAA0] w-full text-xl"
              }
            >
              Process Order
            </button>
            <button
              onClick={handleClearCart}
              disabled={cartItems.length === 0}
              className={
                cartItems.length === 0
                  ? "btn btn-outline text-gray-500 bg-black hover:bg-[#96BAA0] w-full text-xl"
                  : "btn btn-outline text-white bg-black hover:bg-[#96BAA0] w-full text-xl"
              }
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
