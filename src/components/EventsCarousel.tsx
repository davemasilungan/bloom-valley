"use client";

import { events } from "@data/data";
import { Calendar } from "lucide-react";

const EventsCarousel = () => {
  return (
    <section
      aria-labelledby="events-heading"
      className="bg-[#F7F7F7] py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="events-heading"
          className="text-3xl font-extrabold text-gray-900 text-center mb-12"
        >
          What's Going On In October
        </h2>
        <div
          className="flex overflow-x-auto space-x-8 pb-8 snap-x snap-mandatory"
          role="region"
          aria-label="Upcoming events carousel"
          tabIndex={0}
        >
          {/* Takes events (data) and creates a card for each event */}
          {events.map((event, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg snap-center"
            >
              <div className="flex items-center p-6 border-b border-gray-200">
                <div className="text-center mr-5">
                  <div className="text-3xl font-bold text-green-700">
                    {event.day}
                  </div>
                  <div className="text-sm uppercase text-gray-500">
                    {event.month}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {event.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{event.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsCarousel;
