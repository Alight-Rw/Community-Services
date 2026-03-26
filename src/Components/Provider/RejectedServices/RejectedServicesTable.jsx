

import { Calendar } from 'lucide-react';
import Table from '../../Shared/Table';
import Pagination from '../../Shared/Pagination';
import StatusButton from '../Dashboard/StatusesButtons';
import { useGetProviderRequestedServices } from '../../../Hooks/useGetClientRequestedHooks';


export function RejectedServicesTable({ width }) {

    // const allServicesData = [
    //     {
    //         id: 6,
    //         image: "/images/dec.png",
    //         name: "K.C Decorators Group",
    //         location: "KG 8 St Remera-Kabeza",
    //         contact: "+250788888888",
    //         hours: "08:00AM - 17:00PM",
    //         status: "Rejected",
    //         requestnotes: "Please schedule the servicefor Friday morning and call before arrival.",
    //         rejection: "N/A"

    //     },
    //     {
    //         id: 7,
    //         image: "/images/car-wash.png",
    //         name: "Sparkle Auto Wash",
    //         location: "KK 25 Rd, Gisozi",
    //         contact: "+250788333333",
    //         hours: "06:00AM - 20:00PM",
    //         status: "Rejected",
    //         requestnotes: "Please schedule the servicefor Friday morning and call before arrival.",
    //         rejection: "N/A"
    //     },
    //     {
    //         id: 8,
    //         image: "/images/sewer.png",
    //         name: "Quality Sewing Services",
    //         location: "NY 8 Rd, Nyamirambo",
    //         contact: "+250788222222",
    //         hours: "09:00AM - 18:00PM",
    //         status: "Rejected",
    //         requestnotes: "Please schedule the servicefor Friday morning and call before arrival.",
    //         rejection: "N/A"
    //     },

    //     {
    //         id: 9,
    //         image: "/ServicesImage/ServiceImg1.png",
    //         name: "Car Auto Repair LTD",
    //         location: "KG 9 Avenue, Kigali",
    //         contact: "+250788888888",
    //         hours: "08:00AM - 18:00PM",
    //         status: "Rejected",
    //         requestnotes: "Please schedule the servicefor Friday morning and call before arrival.",
    //         rejection: "N/A"
    //     },
    // ]
    const { data, loading } = useGetProviderRequestedServices({ status: "rejected" });
    const rejectedServices = data?.data || []

    console.log("FULL RESPONSE:", data);

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
            <div className="grid grid-cols-2  overflow-hidden gap-2  w-40">
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
            render: (value) => (
                <span className="font-bold text-slate-500">
                    {value?.phone || "07XXXXXXXX"}
                </span>
            ),
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
      header: 'Rejection Status',
      accessor: 'status',
      render: (value) => (
        <div className='bg-red-50 text-red-900 text-xs p-2 text-center rounded-full w-full'>
          {value}
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
            {loading ? (
                <p>Loading....</p>
            ) : (
                <Table columns={columns} data={rejectedServices || {}} width={width}
                    loading={loading} />
            )

            }


            <div className='px-1'>
                <Pagination />
            </div>

        </>

    )
}