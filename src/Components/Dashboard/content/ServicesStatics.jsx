
import React, { useState } from "react";

const DashboardSection = () => {
  const dataSets = {
    Week: [40, 70, 20, 75, 80, 90, 65, 55, 35, 15, 60, 35, 95, 45, 55],
    Monthly: [45, 30, 90, 60, 20, 85, 40, 70, 25, 50, 80, 65],
    Yearly: [70, 85, 60, 95, 40, 30, 55, 75, 90, 65, 40, 80]
  };

  const [activeFilter, setActiveFilter] = useState("Week");

  return (
    <div className="w-full min-h-screen p-4 md:p-8 lg:p-14 ">
      
     
     
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        
        
        <div className="lg:col-span-8 bg-primary shadow-sm p-6 md:p-8 rounded-[32px] flex flex-col justify-between border border-gray-100 min-h-[400px]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
            <div className="max-w-xl">
              <h2 className="text-sky-blue text-2xl md:text-3xl font-bold">Services Statics</h2>
              <p className="text-hard-gray text-sm md:text-base leading-tight mt-2 opacity-80">
               This section presents analytical insights and metrics related to community services, enabling administrators to 
               monitor usage, efficiency, and service outcomes.
              </p>
            </div>

            <div className="flex bg-universal p-1.5 rounded-2xl self-end sm:self-auto">
              {["Week", "Monthly", "Yearly"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 md:px-6 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
                    activeFilter === filter
                      ? "bg-primary shadow-md text-hard-gray"
                      : "text-hard-gray/60 hover:text-hard-gray"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

         
         
          <div className="flex items-end justify-between h-56 md:h-64 gap-1.5 md:gap-3 px-2">
            {dataSets[activeFilter].map((height, index) => (
              <div
                key={index}
                style={{ height: `${height}%` }}
                className="flex-1 bg-sky-blue/60 rounded-t-lg hover:bg-sky-blue transition-all duration-300 cursor-pointer group relative"
              >
                
                
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {height}%
                </span>
              </div>
            ))}
          </div>
        </div>

        
        <div className="hidden lg:block lg:col-span-1"></div>

        
        <div className="lg:col-span-3 relative overflow-hidden bg-sky-blue text-white p-8 md:p-10 rounded-[32px] flex flex-col justify-between shadow-xl min-h-[450px]">
          
         
          <div className="absolute top-[-5%] right-[-10%] w-32 h-32 bg-primary/10 rounded-full " />
          <div className="absolute bottom-[-5%] left-[-10%] w-32 h-32 bg-primary/10 rounded-full " />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary/20 p-2.5 rounded-2xl backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Urgent Request</h3>
            </div>
            
            <p className="text-base md:text-lg leading-relaxed opacity-100 mb-6 font-medium">
               This section helps you alert authorities or service providers about critical situations that need quick action,
                ensuring the community gets timely help when it matters most.
            </p>
          </div>

          <button className="relative z-10 w-full bg-primary text-sky-blue font-black py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-universal transition-all transform active:scale-95 group shadow-lg">
            <span className="text-sm uppercase tracking-wider">Make Request Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
};

export default DashboardSection;