import React, { useState } from "react";
import { AvailableServicesTable } from "../../Components/Provider/AvailableServices/AvailableServicesTable";
import { RequestedSevicesTable } from "../../Components/Provider/RequestedSevices/RequestedSevices";
import { RejectedServicesTable } from "../../Components/Provider/RejectedServices/RejectedServicesTable";
import { CompletedServicesTable } from "../../Components/Provider/CompletedServices/CompletedServicesTable";
import { WaitingServicesTable } from "../../Components/Provider/WaitingServices/WaitingServices";


export default function RecentServicesTab() {
  const [active, setActive] = useState("available");

  return (
    <div className="p-4">
                  <h2 className="text-sky-blue text-xl py-0 pb-2 sm:text-2xl md:text-4xl font-bold tracking-tight">
                Recent Activities
              </h2>
      <div className="flex justify-between gap-4">
        <button
          onClick={() => setActive("available")}
          className={`px-4 py-2 rounded ${
            active === "available"
              ? " text-secondary font-bold border-b-4 border-secondary "
              : " text-secondary hover:cursor-pointer "
          }`}
        >
          Available Services
        </button>

        <button
          onClick={() => setActive("requested")}
          className={`px-4 py-2 rounded ${
            active === "requested"
              ? "text-secondary font-bold border-b-4 border-secondary "
              : " text-secondary hover:cursor-pointer "
          }`}
        >
          Requested Services
        </button>
         <button
          onClick={() => setActive("Waiting")}
          className={`px-4 py-2 rounded ${
            active === "Waiting"
              ? " text-secondary font-bold border-b-4 border-secondary "
              : " text-secondary hover:cursor-pointer "
          }`}
        >
          Waiting Services
        </button>
                 <button
          onClick={() => setActive("Completed")}
          className={`px-4 py-2 rounded ${
            active === "Completed"
              ? " text-secondary font-bold border-b-4 border-secondary "
              : " text-secondary hover:cursor-pointer "
          }`}
        >
          Completed Services
        </button>
         <button
          onClick={() => setActive("Rejected")}
          className={`px-4 py-2 rounded ${
            active === "Rejected"
              ? " text-secondary font-bold border-b-4 border-secondary "
              : " text-secondary hover:cursor-pointer "
          }`}
        >
          Rejected Services
        </button>

      </div>

     
      <div className="mt-6">
        {active === "available" && <AvailableServicesTable />}
        {active === "requested" && <RequestedSevicesTable />}
         {active === "Rejected" && <RejectedServicesTable />}
        {active === "Completed" && <CompletedServicesTable/>}
         {active === "Waiting" && <WaitingServicesTable />}
      
      </div>
    </div>
  );
}