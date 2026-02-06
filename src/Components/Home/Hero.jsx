

const Hero = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 p-componentPadding">
      <div className="w-full flex items-center justify-center ">
        <div className="border border-secondary rounded-2xl p-2 md:p-8 max-w-xl">
          <h2 className="text-2xl font-semibold">We are community</h2>
          <h1 className="text-secondary text-3xl my-3 font-bold underline">Services</h1>
          <p className="md:pr-12">
            Here we are helping you in different services and give you Those
            services on time you want
          </p>
          <button className="bg-secondary hover:bg-blue-700 px-2 py-2 sm:px-4 mt-3 rounded-md text-primary">
            Request Service
          </button>
        </div>
      </div>

      <div className="w-full relative h-[320px] sm:h-[380px]  md:h-[520px] flex flex-col items-center justify-center">
        <img
          src="/images/plumber.jpg"
          alt="plumber"
          className="absolute w-20 h-20  md:w-26 md:h-26 xl:w-44 xl:h-44 rounded-full object-cover shadow-lg"
          style={{ top: "20%", left: "10%" }}
        />

        <img
          src="/images/constuctor.jpeg"
          alt="constructor"
          className="absolute w-19 h-19 sm:w-24 sm:h-24 md:w-20 md:h-20  xl:w-36 xl:h-36 rounded-full object-cover shadow-lg"
          style={{ top: "5%", left: "50%", transform: "translateX(-50%)" }}
        />

        <img
          src="/images/developer.avif"
          alt="developer"
          className="absolute w-19 h-19 sm:w-24 sm:h-24 md:w-26 md:h-26 xl:w-36 xl:h-36 rounded-full object-cover shadow-lg"
          style={{ top: "30%", right: "18%" }}
        />

        <img
          src="/images/painter.avif"
          alt="painter"
          className="absolute w-28 h-28  md:w-36 md:h-36  xl:w-56 xl:h-56 rounded-full object-cover shadow-lg"
          style={{ bottom: "8%", left: "46%", transform: "translateX(-50%)" }}
        />
      </div>
    </div>
  );
};

export default Hero;
