
import { Calendar } from 'lucide-react';
import Table from '../../Shared/Table';
import Pagination from '../../Shared/Pagination';
import StatusButton from '../Dashboard/StatusesButtons';
import { useGetProviderRequestedServices } from '../../../Hooks/useGetProviderRequestedHooks';

export function WaitingServicesTable({ width }) {

    const { data, loading } = useGetProviderRequestedServices({
       status: 'Waitting',
     });
const waitingRequestedServices =data?.data || []

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
            <div className="grid grid-cols-2 overflow-hidden gap-2  w-40">
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
      render: (value) => <span className="font-bold text-slate-600 block      whitespace-nowrap ">{value.name}</span>,
    },
        {
            header: "Service Location",
            accessor: "location",
        },
       {
      header: "Service Contacts",
      accessor: "providerId",
      render: (value) => <span className="font-bold text-slate-500 block ">{value.phone || "07XXXXXXX"}</span>,
    },
         {
      header: 'Service Hours',
      accessor: 'serviceId',
      render: (value, row) => (
        <span>
          {row.serviceId?.timeFrom} - {row.serviceId?.timeTo}
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
          <p>{value || 'N/A'}</p>
        </div>
      )
    },
    {
      header: 'Rejection Notes',
      accessor: 'rejection',
      render: (value) => value?.rejection || 'N/A',
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
            <Table columns={columns} data={waitingRequestedServices} width={width} />

            <div className='px-1'>
                <Pagination />
            </div>

        </>

    )
}


