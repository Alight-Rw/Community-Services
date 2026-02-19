import React, { useState } from "react";
import Paragraphy from "../../Shared/Title";
import DashboardSearch from "../../Shared/DashboardSearch"
import DashboardNav from "../../Shared/DashboardNav";
import Sidebar from "../../Shared/Sidebar";

export function RequestedSevices() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-universal overflow-hidden">

      <DashboardNav />

      <div className="flex flex-1 overflow-hidden relative">


        {isExpanded && (
          <div
            className="fixed inset-0 bg-black/50 z-20 xl:hidden transition-opacity"
            onClick={() => setIsExpanded(false)}
          />
        )}


        <div className="fixed inset-y-0 left-0 z-50 xl:relative">
          <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        </div>


        <main
  className={`
    flex-1 overflow-y-auto  
    transition-all duration-300 ease-in-out
    ${!isExpanded ? "ml-25 sm:33 md:ml-35 lg:ml-30 w-full xl:ml-11" : "ml-0"}
  `}
>
  <div className="max-w-[1600px] mx-auto pt-10 space-y-6">
    
    <Paragraphy
      highlight={"Requested Services"}
      description={"Quick summary of services that have been requested by the client"}
    />

    <div className="w-full">
      <DashboardSearch
        onSearch={(val) => console.log(val)}
      />
    </div>

  </div>
</main>

      </div>
    </div>
  );
}
