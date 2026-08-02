import React, { useState } from "react";

const ServicesStatics = () => {
  const dataSets = {
    Week: [40, 70, 20, 75, 80, 90, 65, 55, 35, 15, 60, 35, 95, 45, 55],
    Monthly: [45, 30, 90, 60, 20, 85, 40, 70, 25, 50, 80, 65],
    Yearly: [70, 85, 60, 95, 40, 30, 55, 75, 90, 65, 40, 80],
  };

  const [activeFilter, setActiveFilter] = useState("Week");

  return (
    <div className="lg:col-span-9 dashboard-panel p-5 sm:p-6 md:p-6 rounded-[28px] md:rounded-[32px] flex flex-col justify-between border min-h-[350px] md:min-h-[400px] ">

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 md:mb-10 gap-4">
        <div className="max-w-2xl">
          <h2 className="text-sky-blue text-xl sm:text-2xl md:text-4xl font-bold tracking-tight">
            Services Statics
          </h2>
          <p className="dashboard-muted text-xs sm:text-sm md:text-base leading-snug mt-3 opacity-80">
            section presents analytical insights and metrics related to community services,
            enabling administrators to monitor usage, efficiency, and service outcomes.
          </p>
        </div>

        <div className="flex flex-wrap bg-[var(--dashboard-surface-strong)] p-1.5 rounded-2xl gap-1">
          {["Week", "Monthly", "Yearly"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 sm:px-4 md:px-2 py-1.5 lg:px-2 md:py-2 rounded-xl text-[10px] sm:text-xs md:text-sm font-bold transition-all ${activeFilter === filter
                ? "bg-[var(--dashboard-surface)] shadow-md text-[var(--dashboard-text)]"
                : "dashboard-muted hover:text-[var(--dashboard-text)]"
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
  );
};

export default ServicesStatics;
