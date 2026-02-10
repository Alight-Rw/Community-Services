
import React, { useState } from "react";

const ServicesDashboard = () => {
  const dataSets = {
    Week: [40, 70, 20, 75, 80, 90, 65, 55, 35, 15, 60, 35, 95, 45, 55],
    Monthly: [45, 30, 90, 60, 20, 85, 40, 70, 25, 50, 80, 65],
    Yearly: [70, 85, 60, 95, 40, 30, 55, 75, 90, 65, 40, 80]
  };

  const [activeFilter, setActiveFilter] = useState("Week");

  return (
    <>
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-60 p-6 md:p-10 lg:p-14  ">
      
      
      <div className="lg:col-span-2 bg-primary shadow-sm p-5 md:p-8 rounded-xl   flex flex-col justify-between">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="max-w-md">
            <h2 className="text-sky-blue text-3xl font-bold">Services Statics</h2>
            <p className="text-hard-gray text-xs leading-relaxed mt-2">
              Analytical insights and metrics related to community services, 
              enabling administrators to monitor usage and efficiency.
            </p>
          </div>

    
          <div className="flex bg-universal p-1 rounded-xl">
            {["Week", "Monthly", "Yearly"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-primary shadow-sm text-hard-gray"
                    : "text-hard-gray hover:text-hard-gray"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        
        <div className="flex items-end justify-between h-40 md:h-48 gap-1.5 lg:gap-5.5 px-1">
          {dataSets[activeFilter].map((height, index) => (
            <div
              key={index}
              style={{ height: `${height}%` }}
              className="flex-1 bg-sky-blue/50 hover:bg-sky-blue rounded-t-md transition-all duration-500 cursor-pointer"
            ></div>
          ))}
        </div>
      </div>

      
     <div className="relative overflow-hidden bg-sky-blue text-primary p-8 rounded-[2rem] w-full max-w-sm shadow-xl">
      
      
      <div className="absolute top-[-10%] right-[-10%] w-32 h-32 " />
      <div className="absolute bottom-[-5%] left-[-5%] w-24 h-24 " />

      
      
      <div className="flex items-center gap-3 mb-6">
        <div className=" p-2 rounded-lg">
         
         
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold tracking-tight">Urgent Request</h2>
      </div>

      <p className="text-sm font-bold leading-relaxed mb-10 opacity-90">
       <span className="px-3"> section</span> helps <span className="px-3"> you</span>  <span className="px-3"> alert</span> authorities or service providers about 
        critical situations that need <span className="px-3"> quick</span> <span className="px-3"> action,</span> ensuring the 
        community gets timely help when it matters most.
      </p>

      
      <button className="w-full bg-primary text-sky-blue font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors group">
        Make Request Now
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 transform transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </div>
    </div>
    
    </>
  );
};

export default ServicesDashboard;