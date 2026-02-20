import { Calendar } from "lucide-react";
import Table from "../../Shared/Table";
import Pagination from "../../Shared/Pagination";


export  function RequestedSevicesTable() {
  const allServicesData = [
    {
      id: 13,
      image: "/images/dec.png",
      name: "K.C Decorators Group",
      location: "KG 9 Avenue, Kigali",
      contact: "+250788888888",
      hours: "08:00AM - 18:00PM",
      status:"Waiting",
      requestedNotes:"Please schedule the servicefor Friday morning and callbefore arrival.",
       rejectedNotes:"N/A"
    },
    {
      id: 14,
      image: "/images/sewer.png",
      name: "Jany Sewing  Solutions",
      location: "KK 3 Rd, Kimihurura",
      contact: "+250788333333",
      hours: "08:00AM - 20:00PM",
      status:"Approved",
       requestedNotes:"Request declined due to unavailable time slot on the selected date.",
        rejectedNotes:"Request declined due to unavailable time slot on the selected date."
    
    },
    {
      id: 15,
      image: "/images/car-wash.png",
      name: "Car Wash Enterprise",
      location: "NY 12 Rd, Rebero",
      contact: "+250788222222",
      hours: "06:00AM - 00:00AM",
      status:"Completed",
       requestedNotes:"Request declined due to unavailable time slot on the selected date.",
        rejectedNotes:"Request declined due to unavailable time slot on the selected date."

    },
     {
      id: 15,
      image: "/images/dec.png",
      name: "K.C Decorators Group",
      location: "KG 8 St Remera-Kabeza",
      contact: "+250788222222",
      hours: "08:00AM - 17:00PM",
      status:"Rejected",
       requestedNotes:"Request declined due to unavailable time slot on the selected date.",
        rejectedNotes:"Request declined due to unavailable time slot on the selected date."
       
    }
  ];

  const canBook = (service) => {
    if (service.status === "Available") return true;
    if (service.status === "Completed") return true;
    if (service.status === "Rejected") return true;
    if (service.status === "Waiting") return false;
    if (service.status === "Approved") return false;
    return false;
  };

  const statusClasses = {
    Available: "bg-hard-gray ",
    Completed: "bg-small-soft-blue text-sky-blue ",
    Rejected: "bg-red-200/50 text-red-300",
    Waiting: "bg-universal ",
    Approved: "bg-soft-green text-hard-green",
  };

  const columns = [
    {
      header: "Service Avatar",
      accessor: "image",
      render: (value, row) => (
       
        <img
          src={value}
          alt={row.name}
          className="w-16 h-16 min-w-max rounded-lg object-cover border border-hard-gray"
        />
      ),
    },
    {
      header: "Service Name",
      accessor: "name",
    },
    {
      header: "Service Location",
      accessor: "location",
    },
    {
      header: "Service Contacts",
      accessor: "contact",
    },
    {
      header: "Service Hours",
      accessor: "hours",
    },
    {
      header: "Request Status",
      accessor: "status",
      render: (value) => (
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            statusClasses[value] || "bg-gray-300 text-black"
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      header: "Request Notes",
      accessor: "requestedNotes",
    },
    {
      header: "Rejection Notes",
      accessor: "rejectedNotes",
    },
    {
      header: "Action",
      accessor: "id",
      render: (value, row) => {
        const isBookable = canBook(row);
        return (
          <button
            disabled={!isBookable}
            className={`flex items-center gap-2 px-4 text-nowrap py-2 rounded-full text-sm font-medium transition-all ${
              isBookable
                ? "bg-primary border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary cursor-pointer"
                : "bg-gray-100 border-2 border-gray-300 text-gray-400 cursor-not-allowed"
            }`}
          >
            <Calendar className="w-4 h-4" />
            Book Now
          </button>
        );
      },
    },
  ];

  return (
    
          <div className='  pr-12'>

                <Table
                    columns={columns}
                    data={allServicesData}
                    width='1550px'
                />
            </div>
        
  );
}