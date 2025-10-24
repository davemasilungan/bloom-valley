const EventsHero = () => {
  return (
    <section
      aria-labelledby="events-heading"
      className="relative bg-[#96BAA0] text-white py-32 px-4 sm:px-6 lg:px-8 text-center"
    >
      <div className="relative max-w-3xl mx-auto">
        <h1
          aria-label="events-heading"
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Upcoming Events
        </h1>
        <p className="mt-6 text-xl text-black max-w-2xl mx-auto">
          Join us for workshops, sales, and community gatherings at Bloom Valley
          Nursery. There's always something growing on!
        </p>
      </div>
    </section>
  );
};

export default EventsHero;
