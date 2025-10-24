"use client";

import React from "react";
import { Leaf, Truck, Users, Award } from "lucide-react";

const AboutHero = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="pr-0 lg:pr-12">
            <h1 className="text-4xl font-extrabold text-[#00231C] sm:text-5xl mb-6">
              About Bloom Valley Nursery
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Welcome to Bloom Valley Nursery, your oasis for the finest plants
              and gardening supplies. Founded on a passion for horticulture, we
              are dedicated to helping our community grow.
            </p>
            <p className="text-lg text-gray-600">
              Our mission is to provide the highest quality plants, from rare
              succulents to vibrant perennials, all nurtured with expert care.
              Whether you're a seasoned gardener or just starting, our
              knowledgeable team is here to inspire and support your green
              journey.
            </p>
          </div>

          <div className="w-full h-80 lg:h-96 rounded-2xl shadow-2xl overflow-hidden">
            <img
              src="/images/Client1_MapleTree.png"
              alt="Bloom Valley Nursery Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-[#00231C] sm:text-4xl">
            Why Choose Us?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center flex flex-col items-center">
            <div className="shrink-0">
              <Leaf className="h-12 w-12 text-[#96BAA0] mb-4" />
            </div>
            <h3 className="text-xl font-bold text-[#00231C] mb-2">
              Quality Plants
            </h3>
            <p className="text-gray-600">
              We source and grow only the healthiest, most vibrant plants,
              ensuring your garden starts strong.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center flex flex-col items-center">
            <div className="shrink-0">
              <Users className="h-12 w-12 text-[#96BAA0] mb-4" />
            </div>
            <h3 className="text-xl font-bold text-[#00231C] mb-2">
              Expert Advice
            </h3>
            <p className="text-gray-600">
              Our passionate team of horticulturalists is always ready to share
              their knowledge and help you succeed.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center flex flex-col items-center">
            <div className="shrink-0">
              <Truck className="h-12 w-12 text-[#96BAA0] mb-4" />
            </div>
            <h3 className="text-xl font-bold text-[#00231C] mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              Get your new green friends delivered safely and quickly right to
              your doorstep, ready to plant.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center flex flex-col items-center">
            <div className="shrink-0">
              <Award className="h-12 w-12 text-[#96BAA0] mb-4" />
            </div>
            <h3 className="text-xl font-bold text-[#00231C] mb-2">
              Eco-Friendly
            </h3>
            <p className="text-gray-600">
              We are committed to sustainable practices, from our water
              conservation to our biodegradable pots.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
