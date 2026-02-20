import React, { useState } from "react";
import Paragraphy from "../../Shared/Title";
import DashboardNav from "../../Shared/DashboardNav";
import Sidebar from "../../Shared/Sidebar";
import DashboardSearch from "../../Shared/DashboardSearch";
import { CompletedServicesTable } from "./CompletedServicesTable";

export function CompletedSevices() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-universal overflow-hidden ">

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
            flex-1  
            transition-all duration-300 ease-in-out
            ${!isExpanded ? "ml-25 sm:33 md:ml-35 lg:ml-30 w-full xl:ml-11" : "ml-10"} /* Avoid going behind sidebar when collapsed */
          `}

        >


          <div className="px-8 md:px-0 pt-20 md:space-y-1 ">
            <Paragraphy
              highlight={"Completed Services"}
              description={"Quick summary of services that have been successfully delivered and finalized."}
            />
          </div>
           
          <div className="px-8 md:px-0 md:pr-14 py-10 w-[350px] md:w-full">
           <DashboardSearch />
          </div>
          <div className="ml-8 md:ml-0 overflow-y-auto">
             < CompletedServicesTable/>
          </div>
          
        </main>
      </div>
    </div>
  );
}
