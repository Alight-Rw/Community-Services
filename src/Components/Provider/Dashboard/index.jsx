import React, { useState } from "react";
import Paragraphy from "../../Shared/Title";
import DashboardNav from "../../Shared/DashboardNav";
import Sidebar from "../../Shared/Sidebar";
import StatusCard from "../../Client/Dashboard/StatusCard";
import ServicesStatistics from "../../Shared/ServicesStatics";

import RecentServicesTab from "../../../Pages/Provider/RecentServicesTab";
import AddNewServiceButton from "./AddNewServiceButton";
import AddNewService from "./AddNewService";
import { AvailableServicesTable } from "../AvailableServices/AvailableServicesTable";
import NotificationCard from "../../Shared/NotificationCard";

export function DashboardProvider() {
  const [visible, setVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleVIsible = () => setVisible(!visible);

  


  return (
    <div className="flex flex-col h-screen bg-universal overflow-hidden">
      <DashboardNav
        notificationNumber={2}
        notifications={[
          { id: 1,type: "success", title: "Booking Creacted", message: "Two clients booked services at",
            time: "10:00 AM", minutes:"1m ago", isUnread: true },
          { id: 2, type: "accepted", title: " Completed Services", message: "50 service are completed at", time: "3h ago", isUnread: true },
          
          
        ]}
      />
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
          className={` flex-1 overflow-y-auto transition-all duration-300 ease-in-out ${!isExpanded ? "ml-25 sm:33 md:ml-35 lg:ml-30 w-full xl:ml-11" : "ml-0"} /* Avoid going behind sidebar when collapsed */ `}
        >
          <div className="max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 py-20 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-4">
              <Paragraphy
                highlight={"Dashboard Overview"}
                description={
                  "Quick summary of key matrix, recent activities and service performance"
                }
              />
              <AddNewServiceButton onClick={handleVIsible} />
            </div>

            <div className="">
              <StatusCard />
            </div>

            <div className="">
              <ServicesStatistics />
            </div>
            <div>
              <RecentServicesTab />
            </div>
            <div className="">
              <AvailableServicesTable role={"provider"} />
            </div>
          </div>
        </main>
      </div>

      {visible === true && <AddNewService onClick={handleVIsible} />}
      <NotificationCard />
    
    </div>
  );
}