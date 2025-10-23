"use client";

import EventsHero from "@components/EventsHero";
import EventsCarousel from "@components/EventsCarousel";
import TestimonialAccordion from "@components/TestimonialsAccordian";

const Events = () => {
  return (
    <div>
      <EventsHero />
      <EventsCarousel />
      <TestimonialAccordion />
    </div>
  );
};

export default Events;
