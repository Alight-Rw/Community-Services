import { Calendar } from "lucide-react";
import Table from "../../Shared/Table";
import Pagination from "../../Shared/Pagination";
import { useGetClientRequestedServices } from "../../../Hooks/useGetClientRequestedHooks";

export function RejectedServices({ width }) {

    const {data,loading}= useGetClientRequestedServices({status:"Rejected"})
    const requestedServices = data.data

   
    const canBook = (service) => {
        return service.status === "Rejected";
    };

    
    const handleBook = (service) => {
       

        alert(`Booking ${service.name}`);
    };

    const columns = [
        {
            header: "Service Avatar",
            accessor: "serviceId",
            render: (value, row) => (
                <img
                    src={value.avatar}
                    alt={row.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg object-cover"
                />
            ),
        },
        {
            header: "Service Name",
            accessor:"serviceId",
            render:(serviceId)=>serviceId?.name || "-",
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
            header: "Rejection Status",
            accessor: "status",
            render: (value) => (
                <div className="bg-red-50 text-red-900 text-xs p-2 text-center rounded-full w-full">
                    {value}
                </div>
            ),
        },
        {
            header: "Request Notes",
            accessor: "RequestNotes",
          render:(value)=>value?.RequestNotes || "N/A",
        },
        {
            header: "Rejection Notes",
            accessor: "RejectionNotes",
             render:(value)=>value?.RejectionNotes || "N/A",
        },
        {
            header: "Action",
            accessor: "id",
            render: (value, row) => {
                const isBookable = canBook(row);

                return (
                    <button
                        disabled={!isBookable}
                        onClick={() => handleBook(row)}
                        className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 text-nowrap py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all${
                            isBookable
                            ? "bg-primary border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary cursor-pointer"
                            : "bg-gray-100 border-2 border-gray-300 text-gray-400 cursor-not-allowed"
                        }`}
                    >
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        Book Now
                    </button>
                );
            },
        },
    ];

    return (
        <>
        <div className="pr-12">
            {loading ? (
                <p>Loading.....</p>
            ):(
                 <Table
                columns={columns}
                data={requestedServices}
                width={width}
            />
           
            )

            }
             <Pagination />
           
        </div>
        </>
    );
}