
const ServicesProcess = () => {
  const steps = [
    { title: 'Available Services', icon: '/images/availableSevices.png' },
    { title: 'Book Service', icon: '/images/bookservice.png' },
    { title: 'Booking Confirmation', icon: '/images/bookingconfirmation.png' },
    { title: 'Service Execution', icon: '/images/serviceexecution.png' },
    { title: 'Client Served', icon: '/images/clientserved.png' },
    { title: 'Happy Client', icon: '/images/happyclient.png' },
  ];

  const lozengePath = "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)";

  return (
    <div className="w-full -mt-50 mb-10  sm:mb-20 md:-mt-40 t-px-7.5 md:px-15 md:-mt-20 lg:-mt-20 p-9">
      <div className="">
        <div className="relative w-full">
          <div className="absolute top-4 sm:top-14 md:top-16 left-0 right-0 h-[1.5px] bg-gray-300 z-0"></div>
          <div className="flex items-start justify-between px-5 relative z-10">
            {steps.map((step, index) => {
              return (
                <div key={index} className="flex flex-col items-center text-center ">

                  <div className="relative w-8 h-8 sm:w-20 sm:h-28 md:w-24 md:h-32 flex items-center justify-center mb-2 sm:mb-4">
                    <div
                      className="absolute inset-0 bg-gray-400 group-hover:bg-black transition-colors duration-300"
                      style={{ clipPath: lozengePath }}
                    />
                    <div
                      className="absolute inset-[1.5px] bg-white"
                      style={{ clipPath: lozengePath }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <img 
                        src={step.icon}
                        alt={step.title}
                        className="h-3 w-3 sm:h-7 sm:w-7 md:h-8 md:w-8 "
                      />
                    </div>
                  </div>
                  <h3 className="font-semibold text-[8px] md:text-sm  text-gray-700  ">
                    {step.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesProcess