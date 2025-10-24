"use client";

import EventsHero from "@components/EventsHero";
import EventsCarousel from "@components/EventsCarousel";
import TestimonialAccordion from "@components/TestimonialsAccordion";

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
