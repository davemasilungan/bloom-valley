import React from "react";
import data from "@data/galleryData.json";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  type: string;
}

const products: Product[] = data;

const productCard = () => {
  return (
    <>
      {products.map((product: Product) => (
        <div
          key={product.id}
          className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <img
            src={product.image}
            alt={product.name + " Image"}
            className="h-80 w-72 object-cover rounded-t-xl"
          />
          <div className="px-4 py-3 w-72">
            <span className="text-gray-400 mr-3 uppercase text-xs">
              {product.type.toUpperCase()}
            </span>
            <p className="text-lg font-bold text-black truncate block capitalize">
              {product.name}
            </p>
            <p className="text-md text-gray-500 ">{product.description}</p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                {"$" + product.price}
              </p>
            </div>
          </div>
          <button className="btn btn-block btn-neutral">Add to Cart</button>
        </div>
      ))}
    </>
  );
};

const Gallery: React.FC = () => {
  return (
    <div className="bg-[#96BAA0] pb-8">
      <div className="text-center p-10">
        <h1 className="text-[#00231C] font-bold text-2xl sm:text-6xl sm:mb-4">
          Shop Bloom Valley Nursery.
        </h1>
      </div>

      <section
        id="Products"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-10"
      >
        {productCard()}
      </section>
    </div>
  );
};

export default Gallery;
