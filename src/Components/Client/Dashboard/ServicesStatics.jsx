

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, AlertCircle } from "lucide-react";

const DashboardSection = () => {
  const dataSets = {
    Week: [40, 70, 20, 75, 80, 90, 65, 55, 35, 15, 60, 35, 95, 45, 55],
    Monthly: [45, 30, 90, 60, 20, 85, 40, 70, 25, 50, 80, 65],
    Yearly: [70, 85, 60, 95, 40, 30, 55, 75, 90, 65, 40, 80],
  };

  const [activeFilter, setActiveFilter] = useState("Week");
  const navigate = useNavigate();

  return (
    <div className="w-full p-4 sm:p-4 md:p-5 lg:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

       
        <div className="lg:col-span-9 bg-primary shadow-sm p-5 sm:p-6 md:p-6 rounded-[28px] md:rounded-[32px] flex flex-col justify-between border border-gray-100 min-h-[350px] md:min-h-[400px]">

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 md:mb-10 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-sky-blue text-xl sm:text-2xl md:text-4xl font-bold tracking-tight">
                Services Statics
              </h2>
              <p className="text-hard-gray text-xs sm:text-sm md:text-base leading-snug mt-3 opacity-80">
                section presents analytical insights and metrics related to community services,
                enabling administrators to monitor usage, efficiency, and service outcomes.
              </p>
            </div>

            <div className="flex flex-wrap bg-universal p-1.5 rounded-2xl gap-1">
              {["Week", "Monthly", "Yearly"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 sm:px-4 md:px-2 py-1.5 lg:px-2 md:py-2 rounded-xl text-[10px] sm:text-xs md:text-sm font-bold transition-all ${
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

          <div className="flex items-end h-48 sm:h-56 md:h-72 gap-1 sm:gap-2 md:gap-4 px-1 sm:px-2 overflow-x-auto">
            {dataSets[activeFilter].map((height, index) => (
              <div
                key={index}
                style={{ height: `${height}%` }}
                className="min-w-[8px] sm:min-w-[12px] flex-1 bg-sky-blue/60 rounded-t-xl hover:bg-sky-blue transition-all duration-300 cursor-pointer group relative"
              >
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-[9px] sm:text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {height}%
                </span>
              </div>
            ))}
          </div>
        </div>

       
        <div className="lg:col-span-3 relative z-0 overflow-hidden bg-sky-blue text-white p-5 sm:p-6 md:p-8 rounded-[28px] md:rounded-[32px] flex flex-col justify-between shadow-xl min-h-[340px] sm:min-h-[380px] md:min-h-[420px]">

          <div className="absolute top-[-5%] right-[-10%] w-28 sm:w-32 h-28 sm:h-32 bg-primary/10 rounded-full z-0" />
          <div className="absolute bottom-[-5%] left-[-10%] w-28 sm:w-32 h-28 sm:h-32 bg-primary/10 rounded-full z-0" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="bg-primary/20 p-2 rounded-2xl backdrop-blur-sm">
                <AlertCircle size={22} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                Urgent Request
              </h3>
            </div>

            <p className="text-xs sm:text-sm md:text-base leading-relaxed mb-5 md:mb-6 font-medium">
              section helps you alert authorities or service providers about
              critical situations that need quick action, ensuring the community
              gets timely help when it matters most.
            </p>
          </div>

          <button
            className="relative z-10 rounded-sm bg-primary text-sky-blue font-bold py-2.5 sm:py-3 flex items-center justify-center gap-2 hover:bg-universal transition-all transform active:scale-95 group shadow-lg"
            onClick={() => navigate("/available-services")}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm sm:text-base md:text-lg">
                Book Available Services
              </span>
              <ArrowRight size={22} />
            </div>
          </button>
        </div>

      </div>
    </div>
  );
};

export default DashboardSection;