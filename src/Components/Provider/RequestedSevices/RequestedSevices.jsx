import React, { useState } from "react";
import { Calendar } from "lucide-react";
import Pagination from "../../Shared/Pagination";
import Table from "../../Shared/Table";
import StatusButton from "../Dashboard/StatusesButtons";

import { useGetProviderRequestedServices } from "../../../Hooks/useGetClientRequestedHooks";


export function RequestedSevicesTable({width}) {
  // 
const { data, loading } = useGetProviderRequestedServices({
    status: 'all',
  });
  const RequestedServices = data?.data?.map((item) => ({
  id: item._id,
  image: item.serviceId?.avatar,
  name: item.serviceId?.name,
  location: item.location,
  contact: item.phone||"078XXXXXXXX",
  hours: item.hours||"19:00h-10:00h",
  status: item.status==="Waitting"?"Waitting": item.status,
  requestedNotes: item.requestNote,
  rejectedNotes: item.rejectionNote || "N/A",
})) || [];
  console.log(data)

const ActionGrid = ({ currentStatus, onStatusChange }) => {
  const statusList = ["waiting", "approve", "complete", "reject"];

  const isButtonActive = (btnType) => {
    const normalizedStatus = currentStatus?.toLowerCase();
    
    if (normalizedStatus === "approved" && btnType === "approve") return true;
    if (normalizedStatus === "completed" && btnType === "complete") return true;
    if (normalizedStatus === "rejected" && btnType === "reject") return true;
    return normalizedStatus === btnType;
  };

  return (
    <div className="grid grid-cols-2 overflow-hidden gap-2  w-40">
      {statusList.map((status) => (
        <StatusButton
          key={status}
          type={status}
          isActive={isButtonActive(status)}
          onClick={() => onStatusChange(status)}
        />
      ))}
    </div>
  );
};
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
      accessor: "image",
      render: (value) => (
        <div className="w-[100px]"> 
          <img
            src={value}
            alt="service"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg object-cover"
          />
        </div>
      ),
    },
    {
      header: "Service Name" ,
      accessor: "name",
      render: (value) => <span className="font-bold text-slate-600 block      whitespace-nowrap ">{value}</span>,
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
      accessor: "hours",
      render: (value) => <span className="font-bold text-slate-500 block ">{value}</span>,
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
          {value}
        </p>
      ),
    },
    {
      header: "Rejection Notes",
      accessor: "rejectedNotes",
      render: (value) => (
        <p className="font-medium text-slate-400 text-xs leading-relaxed ">
          {value === "N/A" ? "N/A" : value}
        </p>
      ),
    },
   {
  header: "Action",
  accessor: "status",
  render: (status, row) => (
    <ActionGrid 
      currentStatus={status} 
      onStatusChange={(newStatus) => console.log(`Updating ID ${row.id} to ${newStatus}`)} 
    />
  ),
},
  ];

  return (
    <>
      <Table columns={columns} data={RequestedServices} width={width}
      loading={loading}/>
       <div className='px-1'>
      <Pagination />
      </div>
    </>
  )


  
}