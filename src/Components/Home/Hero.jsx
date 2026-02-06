

const Hero = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center p-6">
        <div className="border border-secondary rounded-2xl p-6 md:p-8 max-w-md">
          <h2 className="text-2xl font-semibold">We are community</h2>
          <h1 className="text-secondary text-3xl my-3 font-bold">Services</h1>
          <p className="md:pr-12">
            Here we are helping you in different services and give you Those
            services on time you want
          </p>
          <button className="bg-secondary py-2 px-4 mt-3 rounded-md text-universal">
            Request Service
          </button>
        </div>
      </div>

      <div className="relative h-[320px]  md:h-[520px] overflow-hidden">
        <img
          src="/images/plumber.jpg"
          alt="plumber"
          className="absolute w-20 h-20 sm:w-28 sm:h-28 md:w-34 md:h-34 lg:w-44 lg:h-44 rounded-full object-cover shadow-lg"
          style={{ top: "10%", left: "14%" }}
        />

        <img
          src="/images/constuctor.jpeg"
          alt="constructor"
          className="absolute w-16 h-16 sm:w-24 sm:h-24 md:w-26 md:h-26 lg:w-36 lg:h-36 rounded-full object-cover shadow-lg"
          style={{ top: "5%", left: "50%", transform: "translateX(-50%)" }}
        />

        <img
          src="/images/developer.avif"
          alt="developer"
          className="absolute w-16 h-16 sm:w-24 sm:h-24 md:w-26 md:h-26 lg:w-36 lg:h-36 rounded-full object-cover shadow-lg"
          style={{ top: "30%", right: "14%" }}
        />

        <img
          src="/images/painter.avif"
          alt="painter"
          className="absolute w-28 h-28 sm:w-36 sm:h-36 md:w-46 md:h-46 lg:w-56 lg:h-56 rounded-full object-cover shadow-lg"
          style={{ bottom: "8%", left: "50%", transform: "translateX(-50%)" }}
        />
      </div>
    </div>
  );
};

export default Hero;
