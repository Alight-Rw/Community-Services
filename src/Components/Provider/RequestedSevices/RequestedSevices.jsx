import React, { useState } from "react";
import Pagination from "../../Shared/Pagination";
import Table from "../../Shared/Table";
import StatusButton from "../Dashboard/StatusesButtons";
import StatusNoteModal from "../../Shared/StatusNotesPopUp";
import { handleUpdateStatuses } from "../../../Hooks/UpdateStatusHooks";
import { useGetProviderRequestedServices } from "../../../Hooks/useGetClientRequestedHooks";

export function RequestedSevicesTable({ width }) {
  const { data, loading, refetch } = useGetProviderRequestedServices({
    status: "all",
  });

  const RequestedServices = data?.data || [];

  
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);

 
  const ActionGrid = ({ currentStatus, row }) => {
    const statusList = ["waiting", "approve", "complete", "reject"];

    const isButtonActive = (btnType) => {
      const normalizedStatus = currentStatus?.toLowerCase();
      if (normalizedStatus === "approved" && btnType === "approve") return true;
      if (normalizedStatus === "completed" && btnType === "complete") return true;
      if (normalizedStatus === "rejected" && btnType === "reject") return true;
      return normalizedStatus === btnType;
    };

    const handleButtonClick = (status) => {
      setSelectedRow(row);
      setSelectedStatus(status);
      setModalOpen(true); 
    };

    return (
      <div className="grid grid-cols-2 overflow-hidden gap-2 w-40">
        {statusList.map((status) => (
          <StatusButton
            key={status}
            type={status}
            isActive={isButtonActive(status)}
            onClick={() => handleButtonClick(status)}
          />
        ))}
      </div>
    );
  };

  const statusClasses = {
    Available: "bg-hard-gray text-xs",
    completed: "bg-small-soft-blue text-sky-blue text-xm ",
    Rejected: "bg-red-200/50 text-red-300 text-sm",
    Waitting: "bg-hard-gray/50 text-xs",
    Approved: "bg-soft-green text-hard-green text-xs",
  };

  // 🔹 Table columns
  const columns = [
    {
      header: "Service Avatar",
      accessor: "serviceId",
      render: (value) => (
        <div className="w-[100px]">
          <img
            src={value.avatar}
            alt="service"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg object-cover"
          />
        </div>
      ),
    },
    {
      header: "Service Name",
      accessor: "serviceId",
      render: (value) => (
        <span className="font-bold text-slate-600 block whitespace-nowrap">{value.name}</span>
      ),
    },
    {
      header: "Service Location",
      accessor: "location",
      render: (value) => <span className="font-medium text-slate-400 leading-tight block w-24">{value}</span>,
    },
    {
      header: "Service Contacts",
      accessor: "providerId",
      render: (value) => <span className="font-bold text-slate-500 block">{value.phone || "07XXXXXXX"}</span>,
    },
    {
      header: "Service Hours",
      accessor: "serviceId",
      render: (value, row) => <span>{row.serviceId?.timeFrom} - {row.serviceId?.timeTo}</span>,
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
      accessor: "requestNote",
      render: (value) => (
        <div className="w-[200px]">
          <p>{value || "N/A"}</p>
        </div>
      ),
    },
    {
      header: "Rejection Notes",
      accessor: "rejection",
      render: (value) => value?.rejection || "N/A",
    },
    {
      header: "Action",
      accessor: "status",
      render: (status, row) => <ActionGrid currentStatus={status} row={row} />,
    },
  ];

  return (
    <>
      <Table columns={columns} data={RequestedServices} width={width} loading={loading} />
      <div className="px-1">
        <Pagination />
      </div>

      
      <StatusNoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        statusLabel={selectedStatus}
        onSubmit={(note) => {
          
          handleUpdateStatuses(null, selectedRow._id, selectedStatus, refetch);
          setModalOpen(false);
        }}
      />
    </>
  );
}