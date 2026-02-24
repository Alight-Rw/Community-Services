import React, { useState } from "react";
import StatusCard from "./StatusCard";
import Paragraphy from "../../Shared/Title";
import ServicesStatics from "../../Shared/ServicesStatics";
import UrgentRequest from "./UrgentRequest";
import { ProfileSection } from "./ProfilSection";
import DashboardNav from "../../Shared/DashboardNav";
import Sidebar from "../../Shared/Sidebar";
import { ServiceTable } from "./ServiceTable";


export function Dashboard() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="flex flex-col h-screen bg-universal overflow-hidden">

      <DashboardNav notificationNumber="8" className="py-[2px] px-[6px] "/>

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
            ${!isExpanded ? "ml-25 sm:33 md:ml-35 lg:ml-30 w-full xl:ml-11" : "ml-0"} /* Avoid going behind sidebar when collapsed */
          `}
        >
          <div className="max-w-[1600px] mx-auto py-20 md:space-y-10">

            <div className="px-14">
              <Paragraphy
                highlight={"Dashboard"}
                title={"Overview"}
                description={"Quick summary of key metrics and activities"}
              />
            </div>

            <div className="container">
              <section>
                <StatusCard />
              </section>

              <div className="xl:col-span-2">
                <div className="w-full p-4 sm:p-4 md:p-5 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <ServicesStatics />
                    <UrgentRequest />
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 justify-between px-[20px] lg:px-12 items-center pb-10">
                <div className="w-full lg:w-3/4">
                  <ServiceTable role={"client"} />
                </div>
                <div className="w-full lg:w-[24%]">
                  <ProfileSection />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
