"use client";

import React from "react";
import { Product } from "@lib/definitions";
import data from "@data/galleryData.json";
import { useCart } from "@lib/context/CartContext"; // Import the useCart hook

const GalleryProductCards = () => {
  const products: Product[] = data;
  const { addToCart } = useCart(); // Get the addToCart function

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <>
      {products.map((product: Product) => (
        <div
          key={product.id}
          className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl flex flex-col" // Added flex flex-col
        >
          <img
            src={product.image}
            alt={product.name + " Image"}
            className="h-80 w-72 object-cover rounded-t-xl"
          />
          <div className="px-4 py-3 w-72 flex-grow">
            {" "}
            {/* Added flex-grow */}
            <span className="text-gray-600 mr-3 uppercase text-xs">
              {product.type.toUpperCase()}
            </span>
            <p className="text-lg font-bold text-black truncate block capitalize">
              {product.name}
            </p>
            <p className="text-md text-gray-600 ">{product.description}</p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                {"$" + product.price.toString()}
              </p>
            </div>
          </div>
          <div className="px-4 pb-4">
            {" "}
            {/* Wrapper for button */}
            <button
              id={`addProductButton-${product.id}`}
              className="btn btn-block btn-neutral"
              onClick={() => handleAddToCart(product)} // Updated onClick handler
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default GalleryProductCards;
