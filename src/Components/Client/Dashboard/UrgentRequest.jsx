

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, AlertCircle } from "lucide-react";

const UrgentRequest = () => {
  const dataSets = {
    Week: [40, 70, 20, 75, 80, 90, 65, 55, 35, 15, 60, 35, 95, 45, 55],
    Monthly: [45, 30, 90, 60, 20, 85, 40, 70, 25, 50, 80, 65],
    Yearly: [70, 85, 60, 95, 40, 30, 55, 75, 90, 65, 40, 80],
  };

  const [activeFilter, setActiveFilter] = useState("Week");
  const navigate = useNavigate();

  return (
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
  );
};

export default UrgentRequest;