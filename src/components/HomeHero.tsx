import RatingStars from "./ui/ratingStars";
import Link from "next/link";

const HomeHero = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-[#F7F7F7] relative py-12 sm:py-16 lg:pb-40"
    >
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
          <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
            <h1
              id="hero-heading"
              className="text-4xl font-extrabold leading-tight text-[#00231C] sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj"
            >
              Your Local & Family-Owned Nursery.
            </h1>
            <p className="mt-2 text-lg text-gray-600 sm:mt-6 font-inter">
              Specializing in the sale of a wide variety of plants, trees, and
              gardening supplies.
            </p>

            <Link
              href="/gallery"
              onClick={(e) => e.preventDefault()}
              className="inline-flex px-8 py-4 mt-8 text-lg font-bold text-white transition-all duration-200 bg-[#014038] border border-transparent rounded sm:mt-10 font-pj hover:bg-[#96BAA0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              View Our Selection
            </Link>

            <div className="mt-8 sm:mt-16">
              <div className="flex items-center justify-center lg:justify-start">
                <RatingStars />
              </div>

              <blockquote className="mt-3">
                <p className="text-lg font-bold text-gray-900 font-pj">
                  Best staff, and plant selection in town!
                </p>
                <p className="mt-2 text-base leading-7 text-gray-600 font-inter">
                  A true community gem. From the Pumpkin Patch Day to just
                  stopping by for advice, the team at Bloom Valley always makes
                  you feel welcome!
                </p>
              </blockquote>

              <div className="flex items-center justify-center mt-2 lg:justify-start">
                <img
                  className="flex-shrink-0 object-cover w-6 h-6 overflow-hidden rounded-full"
                  src="/images/Client1_AloePlant.png"
                  alt="John Deer"
                />
                <p className="ml-2 text-base font-bold text-gray-900 font-pj">
                  John Deer
                </p>
              </div>
            </div>
          </div>

          <div className="xl:col-span-1 ">
            <img
              className="w-full mx-auto rounded-2xl shadow-2xl overflow-hidden"
              src="/images/Client1_AloePlant_vert.png"
              alt="Hero image showing a large aloe plant in a white pot"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeHero;
