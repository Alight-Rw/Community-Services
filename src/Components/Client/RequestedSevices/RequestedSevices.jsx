
import { Calendar } from "lucide-react";
import Pagination from "../../Shared/Pagination";
import Table from "../../Shared/Table";
import { useProfile } from "../../../Hooks/useProfileHooks";

export function RequestedSevicesTable({ width }) {
  const { dat, loading, error } = useProfile();

  const canBook = (status) => ["Completed", "Rejected"].includes(status);

  const statusClasses = {
    Available: "bg-hard-gray text-xs",
    Completed: "bg-small-soft-blue text-sky-blue text-xm",
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
            src={value || "/default-service.png"}
            alt="service"
            className="w-16 h-16 rounded-xl object-cover shadow-sm border border-slate-100"
          />
        </div>
      ),
    },
    {
      header: "Service Name",
      accessor: "name",
      render: (value) => <span className="font-bold text-slate-600 block whitespace-nowrap">{value}</span>,
    },
    {
      header: "Service Location",
      accessor: "location",
      render: (value) => <span className="font-medium text-slate-400 leading-tight block w-24">{value}</span>,
    },
    {
      header: "Service Contacts",
      accessor: "contact",
      render: (value) => <span className="font-bold text-slate-500 block">{value}</span>,
    },
    {
      header: "Service Hours",
      accessor: "hours",
      render: (value) => <span className="font-bold text-slate-500 block">{value}</span>,
    },
    {
      header: "Request Status",
      accessor: "status",
      render: (value) => (
        <div className="flex justify-center w-[100px]">
          <span className={`px-4 py-1 rounded-full font-black tracking-tight whitespace-nowrap ${statusClasses[value] || "bg-gray-100"}`}>
            {value}
          </span>
        </div>
      ),
    },
    {
      header: "Request Notes",
      accessor: "requestedNotes",
      render: (value) => <p className="font-medium text-slate-500 text-xs leading-relaxed">{value || "No notes"}</p>,
    },
    {
      header: "Rejection Notes",
      accessor: "rejectedNotes",
      render: (value) => <p className="font-medium text-slate-400 text-xs leading-relaxed">{value === "N/A" || !value ? "N/A" : value}</p>,
    },
    {
      header: "Action",
      accessor: "status",
      render: (status) => (
        <div className="w-[120px]">
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

  
  const allServicesData = dat?.data?.requestedServices || [];

  if (loading) return <div className="p-10 text-center font-bold">...</div>;
  if (error) return <p className="text-red-500 p-10 text-center">: {error}</p>;

  return (
    <>
      <Table columns={columns} data={allServicesData} width={width} />
      <Pagination />
    </>
  );
}