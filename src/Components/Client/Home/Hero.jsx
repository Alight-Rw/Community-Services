const Hero = () => {
  return (
    <div className=" w-full grid grid-cols-1 justify-between md:grid-cols-2 px-mobilePadding md:px-componentPadding">
      <div className=" flex items-center justify-center p-6">
        <div className="border border-secondary rounded-2xl p-6 md:p-8 max-w-xl">
          <h2 className="text-2xl font-semibold">We are community</h2>
          <h1 className="text-secondary text-3xl my-3 font-bold">Services</h1>
          <p className="md:pr-12">
            Here we are helping you in different services and give you Those
            services on time you want
            
          </p>
          <button className="bg-secondary py-2 px-2.5 md:px-4 mt-3 rounded-md text-universal">
            Request Service
          </button>
        </div>
      </div>
      <div className="relative  min-h-[420px] flex items-center justify-center p-8  ">
        <div className="relative w-full max-w-[500px] aspect-square">
          <div
            className="absolute"
            style={{ top: "23%", left: "2%", width: "28%" }}
          >
            <img
              src="/images/plumber.jpg"
              alt="plumber"
              className="w-full aspect-square rounded-full object-cover shadow-lg"
            />
          </div>
          <div
            className="absolute"
            style={{
              top: "5%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "23%",
            }}
          >
            <img
              src="/images/constuctor.jpeg"
              alt="constructor"
              className="w-full aspect-square rounded-full object-cover shadow-lg"
            />
          </div>
          <div
            className="absolute"
            style={{ top: "30%", right: "10%", width: "25%" }}
          >
            <img
              src="/images/developer.avif"
              alt="developer"
              className="w-full aspect-square rounded-full object-cover shadow-lg"
            />
          </div>
          <div
            className="absolute"
            style={{
              bottom: "5%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "42%",
            }}
          >
            <img
              src="/images/painter.avif"
              alt="painter"
              className="w-full aspect-square rounded-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

