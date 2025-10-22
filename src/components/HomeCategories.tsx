const HomeCategories = () => {
  return (
    <>
      <section className="mb-14 mt-14 bg-[#F7F7F7] pt-20 pb-20">
        <div className="text-center mb-10">
          <h2 className="text-6xl tracking-tight font-bold text-[#00231C] sm:text-800 mt-6">
            Products and Services
          </h2>
        </div>
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
              <a
                href="/gallery"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="/images/Client1_MapleTree.png"
                  alt="Maple Tree Image"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl text-shadow-lg/60 font-bold">
                  TREE SERVICES
                </h3>
              </a>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
              <a
                href="/gallery"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <img
                  src="/images/Client1_WateringCan.png"
                  alt="Watering Can Image"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-bold text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl text-shadow-lg/60">
                  GARDEN SUPPLIES
                </h3>
              </a>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  href="/gallery"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="/images/Client1_AppleTree.png"
                    alt="Apple Tree Image"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-bold text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl text-shadow-lg/60">
                    PLANTS
                  </h3>
                </a>
                <a
                  href="/gallery"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="/images/Client1_PottingSoil.png"
                    alt="Potting Soil Image"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-bold text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl text-shadow-lg/60">
                    SOILS
                  </h3>
                </a>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
              <a
                href="/gallery"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="/images/Client1_BirdHouse.png"
                  alt="Bird House Image"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-bold text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl text-shadow-lg/60">
                  CLASSES
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCategories;
