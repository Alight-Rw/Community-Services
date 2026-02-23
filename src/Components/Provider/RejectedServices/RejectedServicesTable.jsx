

import { Calendar } from 'lucide-react';
import Table from '../../Shared/Table';
import Pagination from '../../Shared/Pagination';
import StatusButton from '../Dashboard/StatusesButtons';

export function RejectedServicesTable({ width }) {

    const allServicesData = [
        {
            id: 6,
            image: "/images/dec.png",
            name: "K.C Decorators Group",
            location: "KG 8 St Remera-Kabeza",
            contact: "+250788888888",
            hours: "08:00AM - 17:00PM",
            status: "Rejected",
            requestnotes: "Please schedule the servicefor Friday morning and call before arrival.",
            rejection: "N/A"

        },
        {
            id: 7,
            image: "/images/car-wash.png",
            name: "Sparkle Auto Wash",
            location: "KK 25 Rd, Gisozi",
            contact: "+250788333333",
            hours: "06:00AM - 20:00PM",
            status: "Rejected",
            requestnotes: "Please schedule the servicefor Friday morning and call before arrival.",
            rejection: "N/A"
        },
        {
            id: 8,
            image: "/images/sewer.png",
            name: "Quality Sewing Services",
            location: "NY 8 Rd, Nyamirambo",
            contact: "+250788222222",
            hours: "09:00AM - 18:00PM",
            status: "Rejected",
            requestnotes: "Please schedule the servicefor Friday morning and call before arrival.",
            rejection: "N/A"
        },

        {
            id: 9,
            image: "/ServicesImage/ServiceImg1.png",
            name: "Car Auto Repair LTD",
            location: "KG 9 Avenue, Kigali",
            contact: "+250788888888",
            hours: "08:00AM - 18:00PM",
            status: "Rejected",
            requestnotes: "Please schedule the servicefor Friday morning and call before arrival.",
            rejection: "N/A"
        },
    ]

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
            <div className="grid grid-cols-2 gap-x-15 gap-y-3 w-fit">
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
            accessor: "image",
            render: (value, row) => (
                <img
                    src={value}
                    alt={row.name}
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
            accessor: "contact",
        },
        {
            header: "Service Hours",
            accessor: "hours",
        },
        {
            header: "Rejected Status",
            accessor: "status",
            render: (row) => (
                <div className='px-3 py-1 rounded-full text-red-900 text-xs bg-red-50 text-center'>
                    <p>{row}</p>
                </div>
            )
        },
        {
            header: "Request Notes",
            accessor: "requestnotes"
        },
        {
            header: "Rejection Notes",
            accessor: "rejection"
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


            <Table columns={columns} data={allServicesData} width={width} />
            <div className='px-1'>
                <Pagination />
            </div>

        </>

    )
}


