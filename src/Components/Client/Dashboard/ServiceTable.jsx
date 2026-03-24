import { Calendar } from "lucide-react";
import Table from "../../Shared/Table";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import { APIsRequestService } from "../../../Services/APIsRequestService";
import { toast } from "react-toastify";


export function ServiceTable({ role }) {

  const [allServicesData, setAllServicesData] = useState([])

  useEffect(() => {
    const featchLastService = async () => {
      try {
        const response = await APIsRequestService.GetLastServicesAPI()
        const data = await response.json()
        if (!response.ok) {
          return toast.error(data.message)
        }
        setAllServicesData(data?.data)
      } catch (error) {
        return toast.error(error)
      }

    }
    featchLastService()
  }, [])

  const canBook = (service) => {
    if (service.isActive === true) return true;
    return false;
  };


  const columns = [
    {
      header: "Service Avatar",
      accessor: "avatar",
      render: (value, row) => (
        <img
          src={value}
          alt={row.avatar}
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
      accessor: "providerId",
      render: (value) => (
        <span>{value?.phone || "+2507XXXXXXXXX"}</span>
      ),
    },
   {
  header: "Service Hours",
  accessor: "timeFrom", 
  render: (value, row) => (
    <span>{row.timeFrom} - {row.timeTo}</span>
  ),
},

    {
      header: "Action",
      accessor: "_id",
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
          );}
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