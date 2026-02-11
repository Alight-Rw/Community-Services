
import React, { useState } from "react";

const DashboardSection = () => {
  const dataSets = {
    Week: [40, 70, 20, 75, 80, 90, 65, 55, 35, 15, 60, 35, 95, 45, 55],
    Monthly: [45, 30, 90, 60, 20, 85, 40, 70, 25, 50, 80, 65],
    Yearly: [70, 85, 60, 95, 40, 30, 55, 75, 90, 65, 40, 80]
  };

  const [activeFilter, setActiveFilter] = useState("Week");

  return (
    <div className=" min-h-screen p-6 md:p-10 lg:p-14">
      
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        
        <div className="lg:col-span-7 bg-primary shadow-sm p-8 rounded-3xl flex flex-col justify-between  h-full min-h-[300px]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div className="max-w-md">
              <h2 className="text-sky-blue text-2xl font-bold">Services Statics</h2>
              <p className="text-hard-gray text-sm leading-tight mt-2">
               section presents analytical insights and metrics related to community services, enabling administrators to 
               monitor usage, efficiency, and service outcomes.
              </p>
            </div>

            <div className="flex bg-universal p-1.5 rounded-2xl">
              {["Week", "Monthly", "Yearly"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeFilter === filter
                      ? "bg-primary shadow-md text-hard-gray"
                      : "text-hard-gray hover:text-hard-gray"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

        
          <div className="flex items-end justify-between h-56 gap-2 px-2">
            {dataSets[activeFilter].map((height, index) => (
              <div
                key={index}
                style={{ height: `${height}%` }}
                className="flex-1 bg-sky-blue/60 rounded-t-lg hover:bg-sky-blue transition-all duration-300 cursor-pointer"
              ></div>
            ))}
          </div>
        </div>

      
        <div className="hidden lg:block lg:col-span-2"></div>

        
        <div className="lg:col-span-3 relative overflow-hidden bg-sky-blue text-white p-10  rounded-3xl flex flex-col justify-between shadow-xl min-h-[400px]">
          
          <div className="absolute top-[-5%] right-[-10%] w-32 h-24 bg-primary/10 rounded-full " />
          <div className="absolute bottom-[-5%] left-[-10%] w-34 h-24 bg-primary/10 rounded-full " />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/20 p-2 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Urgent Request</h3>
            </div>
            
            <p className="text-1xl leading-relaxed opacity-100 mb-4 font-medium">
               section helps you alert authorities or service providers about critical situations that need quick action,
                ensuring the community gets timely help when it matters most.
            </p>
          </div>

          <button className="relative z-10 w-full bg-primary text-sky-blue font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-universal transition-all group shadow-lg">
            Make Request Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
};

export default DashboardSection;


