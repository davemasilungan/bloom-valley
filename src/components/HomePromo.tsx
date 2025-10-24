const HomePromo = () => {
  return (
    <div className="bg-[#014038] w-full">
      <section
        aria-labelledby="promo-heading"
        className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6"
      >
        <div className="text-center mb-10">
          <h2
            id="promo-heading"
            className="text-6xl text-[#F7F7F7] tracking-tight font-bold sm:text-800 mt-6"
          >
            October Promotions!
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="mr-0 md:mr-8 mb-6 md:mb-0">
            <img
              className="rounded-2xl shadow-2xl overflow-hidden h-full object-cover mx-auto"
              src="/images/Client1_SpiderPlant.png"
              alt="A vibrant spider plant with striped leaves in a white pot."
            />
          </div>

          <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-[#F0C06D] border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-3xl font-bold text-md mb-6 text-[#F0C06D] ">
                  15% OFF Classes
                </h3>
                <p className="text-sm text-gray-100">
                  Don't miss out on savings! Get 15% off any of our classes for
                  a limited time.
                </p>
                <a href="/gallery">
                  <button className="btn btn-block mt-4 mb-4 hover:bg-[#F0C06D] text-[#00231C] bg-[#BDD4DA]">
                    Book Now
                  </button>
                </a>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-[#F0C06D] border-t-0 border-l-0 rounded-br-xl mb-3">
                <h3 className="text-3xl font-bold text-md mb-6 text-[#F0C06D] ">
                  FREE Planting!
                </h3>
                <p className="text-sm text-gray-100">
                  Transform your yard with our expert planting service. A
                  greener home is just a call away.
                </p>
                <a href="/gallery">
                  <button className="btn btn-block mt-4 mb-4 hover:bg-[#F0C06D] text-[#00231C] bg-[#BDD4DA]">
                    Learn More
                  </button>
                </a>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-[#F0C06D] border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-3xl font-bold text-md mb-6 text-[#F0C06D]">
                  20% OFF Soil
                </h3>
                <p className="text-sm text-gray-100">
                  Superior soil for superior gardens. Enrich your garden beds
                  with our nutrient-rich soil.
                </p>
                <a href="/gallery">
                  <button className="btn btn-block mt-4 mb-4 hover:bg-[#F0C06D] text-[#00231C] bg-[#BDD4DA]">
                    Book Now
                  </button>
                </a>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-[#F0C06D] border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-3xl font-bold text-md mb-6 text-[#F0C06D] ">
                  10% OFF Succulents!
                </h3>
                <p className="text-sm text-gray-100">
                  Bring a touch of modern elegance into your space with these
                  resilient beauties.
                </p>
                <a href="/gallery">
                  <button className="btn btn-block mt-4 mb-4 hover:bg-[#F0C06D] text-[#00231C] bg-[#BDD4DA]">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomePromo;
