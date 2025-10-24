"use client";

import { ChevronDown, MapPin } from "lucide-react";
import React, { useState } from "react";
import { testimonials } from "@data/data";
import RatingStars from "./ui/ratingStars";

const TestimonialsAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#BDD4DA] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          What Our Visitors Say
        </h2>
        <div className="space-y-4 bg-[#F7F7F7]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full p-6 text-left"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={`https://placehold.co/100x100/EBF8FF/3182CE?text=${testimonial.name.charAt(
                        0
                      )}`}
                      alt={testimonial.name}
                    />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-green-700 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-6 bg-gray-50">
                  <RatingStars />
                  <p className="text-lg text-gray-700 italic">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsAccordion;
