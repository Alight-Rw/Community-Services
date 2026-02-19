import React from "react";
import Table from "../../Shared/Table"; 
import { Calendar } from "lucide-react";
import Pagination from "../../Shared/Pagination";

export function RequestedSevicesTable() {
  const allServicesData = [
    {
      id: 13,
      image: "ServicesImage/ServiceImg1.png",
      name: "Car Auto Repair LTD",
      location: "KG 9 Avenue, Kigali",
      contact: "+250788888888",
      hours: "08:00AM - 18:00PM",
      status: "Waiting",
      requestedNotes: "Please schedule the service for Friday morning and call before arrival.",
      rejectedNotes: "N/A",
    },
    {
      id: 14,
      image: "/images/sewer.png",
      name: "Jany Sewing Solutions",
      location: "KK 3 Rd, Kimihurura",
      contact: "+250788888888",
      hours: "08:00AM - 20:00PM",
      status: "Approved",
      requestedNotes: "Please schedule the service for Friday morning and call before arrival.",
      rejectedNotes: "Request declined due to unavailable time slot on the selected date.",
    },
    {
      id: 15,
      image: "/images/car-wash.png",
      name: "Car Wash Enterprise",
      location: "NY 12 Rd, Rebero",
      contact: "+250788888888",
      hours: "06:00AM - 00:00AM",
      status: "Completed",
      requestedNotes: "Please schedule the service for Friday morning and call before arrival.",
      rejectedNotes: "Request declined due to unavailable time slot on the selected date.",
    },
    {
      id: 16,
      image: "/images/dec.png",
      name: "K.C Decorators Group",
      location: "KG 8 St Remera-Kabeza",
      contact: "+250788888888",
      hours: "08:00AM - 17:00PM",
      status: "Rejected",
      requestedNotes: "Please schedule the service for Friday morning and call before arrival.",
      rejectedNotes: "Request declined due to unavailable time slot on the selected date.",
    },
  ];

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
      accessor: "image",
      render: (value) => (
        <div className="w-[100px]"> 
          <img
            src={value}
            alt="service"
            className="w-30 h-24 rounded-xl object-cover shadow-sm border border-slate-100"
          />
        </div>
      ),
    },
    {
      header: "Service Name" ,
      accessor: "name",
      render: (value) => <span className="font-bold text-slate-600 block  w-[150px]    whitespace-nowrap overflow-hidden text-ellipsis">{value}</span>,
    },
    {
      header: "Service Location",
      accessor: "location",
      render: (value) => <span className="font-medium text-slate-400 leading-tight block w-24">{value}</span>,
    },
    {
      header: "Service Contacts",
      accessor: "contact",
      render: (value) => <span className="font-bold text-slate-500 block w-[120px]">{value}</span>,
    },
    {
      header: "Service Hours",
      accessor: "hours",
      render: (value) => <span className="font-bold text-slate-500 block w-[130px]">{value}</span>,
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
        <p className="font-medium text-slate-500 text-xs leading-relaxed w-[180px]">
          {value}
        </p>
      ),
    },
    {
      header: "Rejection Notes",
      accessor: "rejectedNotes",
      render: (value) => (
        <p className="font-medium text-slate-400 text-xs leading-relaxed w-[180px]">
          {value === "N/A" ? "N/A" : value}
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
   
     
      <div className="min-w-max border h-200 rounded-[10px] "> 
        <Table 
          columns={columns} 
          data={allServicesData} 
          alternatingRows={true} 
        />
         <div className="  py-37 px-2  ">
         <Pagination />
      </div>
       
    </div>
  );
}