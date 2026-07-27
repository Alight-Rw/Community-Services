import { Calendar } from "lucide-react";
import Table from "../../Shared/Table";
import Pagination from "../../Shared/Pagination";
import { useEffect, useState } from "react";
import { APIsRequestService } from "../../../Services/APIsRequestService";
import { toast } from "react-toastify";
import { normalizeCollectionResponse } from "../../../Utils/collectionUtils";


export function ServiceTable({ role }) {

  const [allServicesData, setAllServicesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const limit = 4;
  const [pagination, setPagination] = useState(null);

  useEffect(() => {
    const featchLastService = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await APIsRequestService.GetLastServicesAPI({
          page,
          limit,
        });
        const data = await response.json();
        if (!response.ok) {
          setError(data.message || "Failed to fetch services");
          return toast.error(data.message)
        }
        const normalized = normalizeCollectionResponse(data);
        setAllServicesData(normalized.items);
        setPagination(normalized.pagination);
      } catch (error) {
        setError(error.message);
        return toast.error(error)
      } finally {
        setLoading(false);
      }

    }
    featchLastService()
  }, [page, limit])

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
        loading={loading}
        error={error}

      />
      <Pagination
        currentPage={pagination?.currentPage || page}
        totalPages={pagination?.totalPages || 1}
        totalRecords={pagination?.totalRecords}
        onPageChange={setPage}
        loading={loading}
      />
    </div>
  );
}
