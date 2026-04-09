import React, { useState } from "react";
import Table from '../../Shared/Table';
import Pagination from '../../Shared/Pagination';
import StatusButton from '../Dashboard/StatusesButtons';
import StatusNoteModal from "../../Shared/StatusNotesPopUp";
import { handleUpdateStatuses } from "../../../Hooks/UpdateStatusHooks";
import { useGetProviderRequestedServices } from "../../../Hooks/useGetProviderRequestedHooks";

export function WaitingServicesTable({ width }) {

    const { data, loading, refetch } = useGetProviderRequestedServices({
        status: 'Waitting',
    });
    
    const waitingRequestedServices = data?.data || [];

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);

    const ActionGrid = ({ currentStatus, row }) => {
        const statusList = ["waiting", "approve", "complete", "reject"];

        const isButtonActive = (btnType) => {
            const normalizedStatus = currentStatus?.toLowerCase();
          
            if (normalizedStatus === "waitting" && btnType === "waiting") return true;
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
        Waitting: "bg-hard-gray/50 text-xs",
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
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg object-cover"
                    />
                </div>
            ),
        },
        {
            header: "Service Name",
            accessor: "serviceId",
            render: (value) => (
                <span className="font-bold text-slate-600 block whitespace-nowrap">
                    {value?.name}
                </span>
            ),
        },
        {
            header: "Service Location",
            accessor: "location",
        },
        {
            header: "Service Contacts",
            accessor: "providerId",
            render: (value) => (
                <span className="font-bold text-slate-500 block">
                    {value?.phone || "07XXXXXXX"}
                </span>
            ),
        },
        {
            header: 'Service Hours',
            accessor: 'serviceId',
            render: (value) => (
                <span>
                    {value?.timeFrom} - {value?.timeTo}
                </span>
            ),
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
            header: 'Request Notes',
            accessor: 'requestNote',
            render: (value) => (
                <div className='w-[200px]'>
                    <p className="text-sm">{value || 'N/A'}</p>
                </div>
            )
        },
        {
            header: 'Rejection Notes',
            accessor: 'rejectionNote',
            render: (value) => (
                <div className="w-[150px] text-red-400 italic">
                    <p className="text-sm">{value || 'N/A'}</p>
                </div>
            ),
        },
        {
            header: "Action",
            accessor: "status",
            render: (status, row) => (
                <ActionGrid currentStatus={status} row={row} />
            ),
        },
    ];

    return (
        <>
            <Table 
                columns={columns} 
                data={waitingRequestedServices} 
                width={width} 
                loading={loading}
            />

            <div className='px-1'>
                <Pagination />
            </div>

            <StatusNoteModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                statusLabel={selectedStatus}
                onSubmit={(note) => {
                    handleUpdateStatuses(null, selectedRow._id, selectedStatus, refetch, note);
                }}
            />
        </>
    );
}