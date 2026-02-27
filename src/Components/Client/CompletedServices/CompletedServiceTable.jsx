import React from "react";

import { Calendar } from "lucide-react";
import Pagination from "../../Shared/Pagination";
import Table from "../../Shared/Table";

const CompletedSevicesTable=({width}) =>{
    const ServicesData = [
    {
      id: 17,
      image: "/Service.png",
      name: "Premium Car Service",
      location: "KG 15 Ave, Kigali",
      contact: "+250788555555",
      hours: "08:00AM - 18:00PM",
      status: "Completed",
      requestNotes:
        "Please schedule the service for Friday morning and call before arrival.",
      rejectionNotes:"N/A"
        
    },
    {
      id: 15,
      image: "/images/sewer.png",
      name: "Quality Sewing Services",
      location: "NY 8 Rd, Nyamirambo",
      contact: "+250788222222",
      hours: "09:00AM - 18:00PM",
      status: "Completed",
      requestNotes:
        "Please schedule the service for Friday morning and call before arrival.",
      rejectionNotes: "N/A",
    },
    {
      id: 14,
      image: "/images/car-wash.png",
      name: "Sparkle Auto Wash",
      location: "KK 25 Rd, Gisozi",
      contact: "+250788333333",
      hours: "06:00AM - 20:00PM",
      status: "Completed",
      requestNotes:
        "Please schedule the service for Friday morning and call before arrival.",
      rejectionNotes:"N/A"
        
    },
    {
      id: 13,
      image: "/images/dec.png",
      name: "K.C Decorators Group",
      location: "KG 8 St Remera-Kabeza",
      contact: "+250788888888",
      hours: "08:00AM - 17:00PM",
      status: "Completed",
      requestNotes:
        "Please schedule the service for Friday morning and call before arrival.",
      rejectionNotes: "N/A",
    },
  ];
     
  const statusClasses = {
    Available: "bg-hard-gray text-xs",
    Completed: "bg-small-soft-blue text-sky-blue text-xm ",
    Rejected: "bg-red-200/50 text-red-300 text-sm",
    Waiting: "bg-hard-gray/50 text-xs",
    Approved: "bg-soft-green text-hard-green text-xs",
  };

    const canBook = (service) => {
        if (service.status === "Completed") return false;
        return false;
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
            className="w-15 h-15 rounded-xl object-cover shadow-sm border border-slate-100"
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
      accessor: "requestNotes",
      render: (value) => (
        <p className="font-medium text-slate-500 text-xs leading-relaxed ">
          {value}
        </p>
      ),
    },
    {
      header: "Rejection Notes",
      accessor: "rejectionNotes",
      render: (value) => (
        <p className="font-medium text-slate-400 text-xs leading-relaxed ">
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
    <>
      <Table columns={columns} data={ServicesData} width={width}/>
      <Pagination />
    </>
  ) 
}
export default CompletedSevicesTable