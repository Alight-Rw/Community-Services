
import { Calendar } from 'lucide-react';
import Table from '../../Shared/Table';
import Pagination from '../../Shared/Pagination';
import StatusButton from '../Dashboard/StatusesButtons';
import { useGetProviderRequestedServices } from '../../../Hooks/useGetProviderRequestedHooks';

export function CompletedServicesTable({ width }) {

    const { data, loading } = useGetProviderRequestedServices({
        status: 'completed',
    });
    const CompletedServices = data?.data || []
    const ActionGrid = ({ currentStatus, onStatusChange }) => {
        const statusList = ["waiting", "approve", "complete", "reject"];

        const isButtonActive = (btnType) => {
            const normalizedStatus = currentStatus?.toLowerCase();

            if (normalizedStatus === "approved" && btnType === "approve") return true;
            if (normalizedStatus === "completed" && btnType === "complete") return true;
            if (normalizedStatus === "rejected" && btnType === "reject") return true;
            return normalizedStatus === btnType;
        };

        return (
            <div className="grid grid-cols-2    overflow-hidden gap-2  w-40">
                {statusList.map((status) => (
                    <StatusButton
                        key={status}
                        type={status}
                        isActive={isButtonActive(status)}
                        onClick={() => onStatusChange(status)}
                    />
                ))}
            </div>
        );
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
            render: (value) => value.phone || '0787684171',
        },
        {
            header: 'Service Hours',
            accessor: 'serviceId',
            render: (value) => {
                return `${value.timeFrom} - ${value.timeTo}`;
            },
        },
        {
            header: "Completed Status",
            accessor: "status",
            render: (row) => (
                <div className='bg-small-soft-blue p-2 rounded-[20px] text-center text-sky-blue'>
                    <p>{row}</p>
                </div>
            )
        },
        {
            header: 'Completed Notes',
            accessor: 'requestNote',
            render: (value) => (
                <div className='w-[200px]'>
                    <p>{value || 'N/A'}</p>
                </div>
            ),
        },
        {
            header: 'Completed Notes',
            accessor: 'CompletedNotes',
            render: (value) => value?.CompletedNotes || 'N/A',
        },

        {
            header: "Action",
            accessor: "status",
            render: (status, row) => (
                <ActionGrid
                    currentStatus={status}
                    onStatusChange={(newStatus) => console.log(`Updating ID ${row.id} to ${newStatus}`)}
                />
            ),
        },
    ];

    return (

        <>
          
                <Table columns={columns} data={CompletedServices} width={width} loading={loading}/>
          
            <div className='px-1'>
                <Pagination />
            </div>


        </>


    )
}