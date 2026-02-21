import { Calendar } from "lucide-react";
import Table from "../../Shared/Table";
import { FaEdit } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";


export function ServiceTable({ role }) {
  const allServicesData = [


    {
      id: 13,
      image: "/images/dec.png",
      name: "K.C Decorators Group",
      location: "KG 8 St Remera-Kabeza",
      contact: "+250788888888",
      hours: "08:00AM - 17:00PM",
      status: "Available"
    },
    {
      id: 14,
      image: "/images/car-wash.png",
      name: "Sparkle Auto Wash",
      location: "KK 25 Rd, Gisozi",
      contact: "+250788333333",
      hours: "06:00AM - 20:00PM",
      status: "Completed"
    },
    {
      id: 15,
      image: "/images/sewer.png",
      name: "Quality Sewing Services",
      location: "NY 8 Rd, Nyamirambo",
      contact: "+250788222222",
      hours: "09:00AM - 18:00PM",
      status: "Waiting"
    },
  ];





  const canBook = (service) => {
    if (service.status === "Available") return true;
    if (service.status === "Completed") return true;
    if (service.status === "Rejected") return true;
    if (service.status === "Waiting") return false;
    if (service.status === "Approved") return false;
    return false;
  };


  const columns = [
    {
      header: "Service Avatar",
      accessor: "image",
      render: (value, row) => (
        <img
          src={value}
          alt={row.name}
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg object-cover"
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
      header: "Action",
      accessor: "id",
      render: (value, row) => {
        const isBookable = canBook(row);
        if (role === "client")
          return (
            <button
              disabled={!isBookable}
              className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 text-nowrap py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${isBookable
                  ? "bg-primary border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary cursor-pointer"
                  : "bg-gray-100 border-2 border-gray-300 text-gray-400 cursor-not-allowed"
                }`}
            >
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
              Book Now
            </button>
          );
        if (role === "provider")
          return (
            <>
         <div className="grid grid-cols-2 gap-3">
  <button className="flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 text-nowrap py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all bg-primary border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary cursor-pointer">
    <MdEdit className="w-3 h-3 sm:w-4 sm:h-4" />
    Edit
  </button>

  <button className="flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 text-nowrap py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all bg-primary border-4 border-red-800 text-red-800 hover:bg-secondary hover:text-white cursor-pointer">
    <RiDeleteBin6Line className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
    Delete
  </button>
</div>
</>
          );
      },
    },
  ];

  return (
    <div>

      <Table
        columns={columns}
        data={allServicesData}

      />
    </div>
  );
}