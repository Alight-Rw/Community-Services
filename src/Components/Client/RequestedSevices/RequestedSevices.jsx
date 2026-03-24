import React from "react";

import { Calendar } from "lucide-react";
import Pagination from "../../Shared/Pagination";
import Table from "../../Shared/Table";
import { useGetClientRequestedServices } from "../../../Hooks/useGetClientRequestedHooks";

export function RequestedSevicesTable({width}) {
 
 const{data,loading}=useGetClientRequestedServices({status:"all"})
  const requestedServices=data.data
  console.log(data)

  const canBook = (status) => ["Completed", "Rejected"].includes(status);

  const statusClasses = {
    Available: "bg-hard-gray text-xs",
    Completed: "bg-small-soft-blue text-sky-blue text-xm ",
    Rejected: "bg-red-200/50 text-red-300 text-sm",
    Waiting: "bg-hard-gray/50 text-xs",
    Approved: "bg-soft-green text-hard-green text-xs",
  };

  const columns = [
    {
      header: "Service Avatar",
      accessor: "serviceId",
      render: (value) => (
        <div className="w-[100px]"> 
          <img
            src={value.avatar}
            alt="service"
            className="w-16 h-16 rounded-xl object-cover shadow-sm border border-slate-100"
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
      providerId:"phone",
      render: (value) => (
      <span className="font-bold text-slate-500 block ${phone}">{value || "078xxxxxxxxx"}</span>
    ),
    },
    {
      header: "Service Hours",
      accessor: "serviceId",
      render: (value) => (
      <span className="font-bold text-slate-500 block ${hour}">{value.timeFrom&&value.timeTo
       ?`${value.timeFrom}-${value.timeTo}`
        :"N/A"}</span>
    ),
    },
    {
      header: "Request Status",
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
      header: "Request Notes",
      accessor: "requestedNotes",
      render: (value) => (
        <p className="font-medium text-slate-500 text-xs leading-relaxed ">
          {value || "7hoo,19hoo" }
        </p>
      ),
    },
    {
      header: "Rejection Notes",
      accessor: "rejectedNotes",
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
     {loading?(
        <p>Loading.....</p>
     ):(
      <Table columns={columns} data={requestedServices || []} width={width}/>
     )
     }
     
      <Pagination />
    </>
  )


  
}