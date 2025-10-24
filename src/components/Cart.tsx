"use client";

import { useCart } from "@lib/context/CartContext";
import { useState } from "react";
import CartModal from "@components/CartModal";

const Cart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cartItems } = useCart();

  // Dynamic label for button
  const cartLabel =
    cartItems.length > 0
      ? `View shopping cart, ${cartItems.length} item${
          cartItems.length > 1 ? "s" : ""
        }`
      : "View shopping cart, 0 items";

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="btn btn-ghost btn-circle"
        aria-label={cartLabel}
      >
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {cartItems.length > 0 && (
            <span
              aria-hidden="true"
              className="badge badge-sm badge-primary indicator-item"
            >
              {cartItems.length}
            </span>
          )}
        </div>
      </button>
      <CartModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Cart;
