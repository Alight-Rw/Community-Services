import React, { useEffect, useState } from "react";
import Table from '../../Shared/Table';
import Pagination from '../../Shared/Pagination';
import StatusButton from '../Dashboard/StatusesButtons';
import StatusNoteModal from "../../Shared/StatusNotesPopUp";
import { handleUpdateStatuses } from "../../../Hooks/UpdateStatusHooks";
import { useGetProviderRequestedServices } from "../../../Hooks/useGetProviderRequestedHooks";

export function CompletedServicesTable({ width, search = "" }) {
  const [page, setPage] = useState(1);
  const limit = 4;
 
  const { data, loading, error, refetch } = useGetProviderRequestedServices({
    status: 'Completed',
    page,
    limit,
    search,
  });

  const CompletedServices = data?.data || [];
  const pagination = data?.pagination;

  
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);

  useEffect(() => {
    setPage(1);
  }, [search]);


  const ActionGrid = ({ currentStatus, row }) => {
    const statusList = ["waiting", "approve", "complete", "reject"];

    const isButtonActive = (btnType) => {
      const normalizedStatus = currentStatus?.toLowerCase();
      
      if (normalizedStatus === "approved" && btnType === "approve") return true;
      if (normalizedStatus === "completed" && btnType === "complete") return true;
      if (normalizedStatus === "rejected" && btnType === "reject") return true;
      if (normalizedStatus === "waitting" && btnType === "waiting") return true;
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


  const columns = [
    {
      header: "Service Avatar",
      accessor: "serviceId",
      render: (value) => (
        <img
          src={value?.avatar}
          alt="service"
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg object-cover"
        />
      ),
    },
    {
      header: 'Service Name',
      accessor: 'serviceId',
      render: (serviceId) => serviceId?.name || '-',
    },
    {
      header: 'Service Location',
      accessor: 'location',
    },
    {
      header: 'Service Contacts',
      accessor: 'providerId',
      render: (value) => (
        <span className="font-bold text-slate-500 block">
          {value?.phone || 'N/A'}
        </span>
      ),
    },
    {
      header: 'Service Hours',
      accessor: 'serviceId',
      render: (value) => `${value?.timeFrom || ''} - ${value?.timeTo || ''}`,
    },
    {
      header: "Completed Status",
      accessor: "status",
      render: (status) => (
        <div className='bg-small-soft-blue px-4 py-1 rounded-full text-center text-sky-blue font-bold whitespace-nowrap'>
          <p>{status}</p>
        </div>
      )
    },
    {
      header: 'Request Notes',
      accessor: 'requestNote',
      render: (value) => (
        <div className='w-[150px] truncate'>
          <p title={value} className="text-sm text-slate-600">
            {value || 'N/A'}
          </p>
        </div>
      ),
    },
    {
      header: 'Rejection Notes',
      accessor: 'rejectionNote',
      render: (value) => (
        <div className='w-[150px] truncate'>
          <p title={value} className='text-sm text-red-400 italic'>
            {value || 'N/A'}
          </p>
        </div>
      ),
    },
    {
      header: "Action",
      accessor: "status",
      render: (status, row) => <ActionGrid currentStatus={status} row={row} />,
    },
  ];

  return (
    <>
   
      <Table 
        columns={columns} 
        data={CompletedServices} 
        width={width} 
        loading={loading}
        error={error}
      />
      
      <div className='px-1'>
        <Pagination
          currentPage={pagination?.currentPage || page}
          totalPages={pagination?.totalPages || 1}
          totalRecords={pagination?.totalRecords}
          onPageChange={setPage}
          loading={loading}
        />
      </div>

     
      <StatusNoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        statusLabel={selectedStatus}
        onSubmit={(note) => {
        
          handleUpdateStatuses(null, selectedRow._id, selectedStatus, refetch, note);
          setModalOpen(false);
        }}
      />
    </>
  );
}
