const EventsHero = () => {
  return (
    <div className="relative bg-[#96BAA0] text-white py-32 px-4 sm:px-6 lg:px-8 text-center">
      <div
        className="absolute inset-0 bg-black opacity-30"
        style={{
          backgroundImage:
            "url(https://placehold.co/1200x400/228B22/FFFFFF?text=Garden+Workshop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
      ></div>
      <div className="relative max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Upcoming Events
        </h1>
        <p className="mt-6 text-xl text-green-100 max-w-2xl mx-auto">
          Join us for workshops, sales, and community gatherings at Bloom Valley
          Nursery. There's always something growing on!
        </p>
      </div>
    </div>
  );
};

export default EventsHero;
