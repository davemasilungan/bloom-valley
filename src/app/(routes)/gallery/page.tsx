"use client";

import React from "react";
import GalleryProductCards from "@components/GalleryProductCards";

const Gallery: React.FC = () => {
  return (
    <div className="bg-[#BDD4DA] pb-8">
      <div className="text-center p-10">
        <h1 className="text-[#00231C] font-bold text-2xl sm:text-6xl sm:mb-4">
          Shop Bloom Valley Nursery
        </h1>
      </div>
      <section
        id="Products"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-10"
      >
        <GalleryProductCards />
      </section>
    </div>
  );
};

export default Gallery;
