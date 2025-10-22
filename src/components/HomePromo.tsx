import Link from "next/link";

const HomePromo = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
      <div className="text-center mb-10">
        <h2 className="text-6xl tracking-tight font-bold text-[#F0C06D] sm:text-800 mt-6">
          October Promotions!
        </h2>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="mr-0 md:mr-8 mb-6 md:mb-0">
          <img
            className="rounded-4xl h-full object-cover sm:w-full mx-auto"
            src="/images/Client1_SpiderPlant.png"
            alt="Potting Soil Image"
          />
        </div>

        <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
          <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <div className="h-full py-4 px-6 border border-[#F0C06D] border-t-0 border-l-0 rounded-br-xl">
              <h3 className="text-3xl font-bold text-md mb-6">
                15% OFF Classes
              </h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
              <Link href="/gallery">
                <button className="btn btn-block btn-success mt-4 mb-4">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <div className="h-full py-4 px-6 border border-[#F0C06D] border-t-0 border-l-0 rounded-br-xl mb-3">
              <h3 className="text-3xl font-bold text-md mb-6">
                FREE Planting!
              </h3>
              <p className="text-sm">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt
              </p>
              <Link href="/gallery">
                <button className="btn btn-block btn-success mt-4 mb-4">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <div className="h-full py-4 px-6 border border-[#F0C06D] border-t-0 border-l-0 rounded-br-xl">
              <h3 className="text-3xl font-bold text-md mb-6">20% OFF Soil</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
              <Link href="/gallery">
                <button className="btn btn-block btn-success mt-4 mb-4">
                  Book Now
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <div className="h-full py-4 px-6 border border-[#F0C06D] border-t-0 border-l-0 rounded-br-xl">
              <h3 className="text-3xl font-bold text-md mb-6">
                10% OFF Suculents!
              </h3>
              <p className="text-sm">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt
              </p>
              <Link href="/gallery">
                <button className="btn btn-block btn-success mt-4 mb-4">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePromo;
