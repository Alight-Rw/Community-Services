
import React, { useState } from "react";

const DashboardSection = () => {
  const dataSets = {
    Week: [40, 70, 20, 75, 80, 90, 65, 55, 35, 15, 60, 35, 95, 45, 55],
    Monthly: [45, 30, 90, 60, 20, 85, 40, 70, 25, 50, 80, 65],
    Yearly: [70, 85, 60, 95, 40, 30, 55, 75, 90, 65, 40, 80]
  };

  const [activeFilter, setActiveFilter] = useState("Week");

  return (
    
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-6 md:p-10 lg:p-14 ">
      
      
      <div className="lg:col-span-8 bg-primary shadow-sm p-6 rounded-2xl  flex flex-col justify-between">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
          <div className="max-w-md">
            <h2 className="text-sky-blue text-xl font-bold">Services Statics</h2>
            <p className="text-hard-gray text-xs leading-tight mt-1">
              Analytical insights and metrics related to community services.
            </p>
          </div>

          <div className="flex bg-universal p-1 rounded-lg">
            {["Week", "Monthly", "Yearly"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                  activeFilter === filter
                    ? "bg-primary shadow-sm text-hard-gray"
                    : "text-hard-gray"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-end justify-between h-40 gap-1 px-1">
          {dataSets[activeFilter].map((height, index) => (
            <div
              key={index}
              style={{ height: `${height}%` }}
              className="flex-1 bg-sky-blue/50  rounded-t-sm transition-all duration-500 cursor-pointer"
            ></div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-4 relative overflow-hidden bg-sky-blue text-primary p-6 rounded-2xl flex flex-col justify-between shadow-lg">
        
        <div className="absolute top-[-10%] right-[-10%] w-24 h-24 bg-/10 " />
        <div className="absolute bottom-[-5%] left-[-5%] w-16 h-16 " />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-primary/20 p-1.5 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">Urgent Request</h3>
          </div>
          
          <p className="text-1xl leading-relaxed opacity-90 mb-6 font-bold">
           <span className="space-x-4">Section</span> helps
             <span className="px-4">you</span> alert authorities or service providers about critical situations that need quick 
             <span className="px-4">action,</span>
             ensuring the community gets timely help when it matters most.
          </p>
        </div>

        <button className="relative z-10 w-full bg-primary text-sky-blue font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-secondary-50 transition-colors group text-sm">
          Make Request Now
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

    </div>
  );
};

export default DashboardSection;