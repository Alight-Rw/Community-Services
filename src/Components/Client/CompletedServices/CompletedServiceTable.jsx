import React, { useState } from "react";

import { Calendar } from "lucide-react";
import Pagination from "../../Shared/Pagination";
import Table from "../../Shared/Table";
import { useGetClientRequestedServices } from "../../../Hooks/useGetClientRequestedHooks";

const CompletedSevicesTable=({width}) =>{


   const{data,loading}=useGetClientRequestedServices({status:"Completed"});
   const completedServices = data?.data || []

    const canBook = (status) => {
        if (status === "Completed") return true;
        return false;
    };
    
    const statusClasses={
          Completed: "bg-small-soft-blue text-sky-blue text-xm "
    }
 
  const columns = [
    {
      header: "Service Avatar",
      accessor: "serviceId",
      render: (value) => (
        <div className="w-[100px]"> 
          <img
            src={value.avatar}
            alt="service"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg object-cover"
          />
        </div>
      ),
    },
    {
      header: "Service Name" ,
      accessor: "serviceId",
      render: (value) => <span className="font-bold text-slate-600 block      whitespace-nowrap ">{value.name}</span>,
    },
    {
      header: "Service Location",
      accessor: "location",
      render: (value) => <span className="font-medium text-slate-400 leading-tight block w-24">{value}</span>,
    },
    {
      header: "Service Contacts",
      accessor: "contact",
      render: (value) => <span className="font-bold text-slate-500 block ">{value}</span>,
    },
    {
      header: "Service Hours",
      accessor: "serviceId",
      render: (value) => <span className="font-bold text-slate-500 block ">{value.timeFrom && value.timeTo
      ?`${value.timeFrom}-${value.timeTo}`
       :"N/A"}</span>,
    },
    {
      header: "service Status",
      accessor: "status",
      render: (value) => (
        <div className="flex justify-center w-[100px]">
          <span className={`px-4 py-1 rounded-full font-black tracking-tight whitespace-nowrap ${statusClasses[value]}`}>
            {value}
          </span>
        </div>
      ),
    },
    {
      header: "Completed Notes",
      accessor: "completedNotes",
      render: (value) => (
        <p className="font-medium text-slate-500 text-xs leading-relaxed ">
          {value}
        </p>
      ),
    },
    {
      header: "Completed Notes",
      accessor: "completedNotes",
      render: (value) => (
        <p className="font-medium text-slate-400 text-xs leading-relaxed ">
          {value || "N/A"}
        </p>
      ),
    },
    {
      header: "Action",
      accessor: "status",
      render: (status) => (
        <div className="w-[120px] ">
          <button
            disabled={!canBook(status)}
            className={`flex items-center justify-center gap-2 mx-auto px-4 py-1.5 rounded-full border-2 transition-all duration-200 ${
              canBook(status)
                ? "border-blue-400 text-secondary hover:bg-secondary hover:text-white"
                : "border-slate-100 text-slate-200 cursor-not-allowed"
            }`}
          >
            <Calendar size={12} strokeWidth={3} />
            <span className="text-[9px] font-black tracking-tighter text-nowrap">Book Now</span>
          </button>
        </div>
      ),
    },
  ];

  return (
  <>
   
      <Table columns={columns} data={completedServices} width={width} loading={loading}/>
    
    <Pagination />
  </>
);
}
export default CompletedSevicesTable