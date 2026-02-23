import React, { useState } from "react";
import Paragraphy from "../../Shared/Title";
import DashboardNav from "../../Shared/DashboardNav";
import Sidebar from "../../Shared/Sidebar";
import { RejectionServicesTable } from "./RejectionServiceTable";
import DashboardSearch from "../../Shared/DashboardSearch";

export function RejectedSevices() {
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
              
            transition-all duration-300 ease-in-out
            ${!isExpanded ? "ml-25 sm:33 md:ml-35 lg:ml-30 w-full xl:ml-11" : "ml-0"}
          `}
        >
          <div className="max-w-[1600px] mx-auto py-16 md:py-20 space-y-8 md:space-y-10 px-4 sm:px-6 md:px-8">
            <Paragraphy
              highlight={"Rejected Services"}
              description={
                "Overview of services requested by the client that were not approved or denied."
              }
            />
            <div className="px-8 md:px-0 md:pr-14 py-10 w-[350px] md:w-full">
              <DashboardSearch />
            </div>


            <div className="mt-8 flex-1 overflow-y-auto">
              <RejectionServicesTable />

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
