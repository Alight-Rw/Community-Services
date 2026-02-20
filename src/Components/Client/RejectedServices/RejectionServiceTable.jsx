
import { Calendar } from 'lucide-react';
import Table from '../../Shared/Table';

export function RejectionServicesTable() {

    const allServicesData = [
        {
            id: 13,
            image: "/images/repair.png",
            name: "Car Auto Repair LTD",
            location: "KG 9 Avenue, Kigali",
            contact: "+250788888888",
            hours: "08:00AM - 18:00PM",
            status: "Rejected",
            RequestNotes: "Please schedule the service for Friday morning and call before arrival.",
            RejectionNotes: "Request declined due to unavailable time slot on the selected date."
        },

        {
            id: 14,
            image: "/images/sewer.png",
            name: "Quality Sewing Services",
            location: "NY 8 Rd, Nyamirambo",
            contact: "+250788222222",
            hours: "09:00AM - 18:00PM",
            status: "Rejected",
            RequestNotes: "Please schedule the service for Friday morning and call before arrival.",
            RejectionNotes: "Request declined due to unavailable time slot on the selected date."
        },
        {
            id: 15,
            image: "/images/car-wash.png",
            name: "Sparkle Auto Wash",
            location: "KK 25 Rd, Gisozi",
            contact: "+250788333333",
            hours: "06:00AM - 20:00PM",
            status: "Rejected",
            RequestNotes: "Please schedule the service for Friday morning and call before arrival.",
            RejectionNotes: "Request declined due to unavailable time slot on the selected date."
        },

        {
            id: 16,
            image: "/images/dec.png",
            name: "K.C Decorators Group",
            location: "KG 8 St Remera-Kabeza",
            contact: "+250788866666",
            hours: "08:00AM - 17:00PM",
            status: "Rejected",
            RequestNotes: "Please schedule the service for Friday morning and call before arrival.",
            RejectionNotes: "Request declined due to unavailable time slot on the selected date."
        },
    ]

    const canBook = (service) => {
        if (service.status === "Waiting") return false;
        if (service.status === "Waiting") return false;
        if (service.status === "Waiting") return false;
        if (service.status === "Waiting") return false;
        if (service.status === "Waiting") return false;
        return false;
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
            header: "Rejection Status",
            accessor: "status",
            render:(row)=>(
                <div className='bg-red-50 text-red-900 text-xs p-2 justify-items-center rounded-full w-full'>
                    <p>{row}</p>
                </div>
            )
        },
        {
            header: "Request Notes",
            accessor: "RequestNotes"
        },
        {
            header: "Rejection Notes",
            accessor: "RejectionNotes"
        },

         {
            header: "Action",
            accessor: "id",
            render: (value, row) => {
                const isBookable = canBook(row);
                return (
                    <button
                        disabled={!isBookable}
                        className={`flex items-center gap-1 px-3 py-2 text-xs text-nowrap duration-200 border rounded-full font-medium transition-all${isBookable
                            ? "bg-primary border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary cursor-pointer"
                            : "bg-gray-100 border-2 border-blue-300 text-blue-400 cursor-not-allowed"
                            }`}
                    >
                        <Calendar className="w-4 h-4 " />
                        Book Now
                    </button>
                );
            },
        },
    ];

    return (
        
            <div className='  pr-12'>

                <Table
                    columns={columns}
                    data={allServicesData}
                    width='1550px'
                />
                
            </div>
        
    )
}


