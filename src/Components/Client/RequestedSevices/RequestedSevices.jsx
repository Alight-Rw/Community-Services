/** @format */

import React, { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import Pagination from "../../Shared/Pagination";
import Table from "../../Shared/Table";
import { useGetClientRequestedServices } from "../../../Hooks/useGetClientRequestedHooks";

export function RequestedSevicesTable({ width, search = "" }) {
  const [page, setPage] = useState(1);
  const limit = 4;
  const { data, loading, error } = useGetClientRequestedServices({
    status: "all",
    page,
    limit,
    search,
  });
  const requestedServices = data?.data || [];
  const pagination = data?.pagination;

  useEffect(() => {
    setPage(1);
  }, [search]);


  const normalizeStatus = (status) => {
    if (!status) return "";
    if (status === "Waitting") return "Waiting"; 
    return status;
  };

  const isDisabled = (status) =>
    ["approved", "Waiting"].includes(normalizeStatus(status));

  const statusClasses = {
    Waiting: "bg-gray-300 text-gray-500 text-xs",
    Approved: "bg-green-100 text-green-600 text-xs",
    completed: "bg-small-soft-blue  text-sky-blue",
    Rejected: "bg-red-100 text-red-500 text-xs",
  };

  const columns = [
    {
      header: "Service Avatar",
      accessor: "serviceId",
      render: (value) => (
        <div className="w-[100px]">
          <img
            src={value?.avatar}
            alt="service"
            className="w-16 h-16 rounded-xl object-cover shadow-sm border border-slate-100"
          />
        </div>
      ),
    },
    {
      header: "Service Name",
      accessor: "serviceId",
      render: (value) => (
        <span className="font-bold text-slate-600 whitespace-nowrap">
          {value?.name}
        </span>
      ),
    },
    {
      header: "Service Location",
      accessor: "location",
      render: (value) => (
        <span className="font-medium text-slate-400 w-24 block">
          {value}
        </span>
      ),
    },
    {
      header: "Service Contacts",
      accessor: "providerId",
      render: (value) => (
        <span className="font-bold text-slate-500">
          {value?.phone || "07XXXXXXXX"}
        </span>
      ),
    },
    {
      header: "Service Hours",
      accessor: "serviceId",
      render: (value) => (
        <span>
          {value?.timeFrom} - {value?.timeTo}
        </span>
      ),
    },
    {
      header: "Request Status",
      accessor: "status",
      render: (value) => {
        const status = normalizeStatus(value);

        return (
          <div className="flex justify-center w-[100px]">
            <span
              className={`px-4 py-1 rounded-full font-semibold whitespace-nowrap ${
                statusClasses[status] 
              }`}
            >
              {status}
            </span>
          </div>
        );
      },
    },
    {
      header: "Request Notes",
      accessor: "requestNote",
      render: (value) => (
        <div className="w-[200px]">
          <p>{value || "N/A"}</p>
        </div>
      ),
    },
    {
      header: "Rejection Notes",
      accessor: "rejectionNote", 
      render: (value) => (
        <p className="text-xs text-slate-400">
          {value || "N/A"}
        </p>
      ),
    },
    {
      header: "Action",
      accessor: "status",
      render: (status) => {
        const disabled = isDisabled(status);

        return (
          <div className="w-[120px]">
            <button
              disabled={disabled}
              className={`flex items-center justify-center gap-2 mx-auto px-4 py-1.5 rounded-full border-2 transition-all duration-200 ${
                !disabled
                  ? "border-blue-400 text-blue-500 hover:bg-blue-500 hover:text-white"
                  : "border-gray-200 text-gray-300 cursor-not-allowed"
              }`}
            >
              <Calendar size={12} strokeWidth={3} />
              <span className="text-[10px] font-bold whitespace-nowrap">
                Book Now
              </span>
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        data={requestedServices}
        width={width}
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
    </>
  );
}
