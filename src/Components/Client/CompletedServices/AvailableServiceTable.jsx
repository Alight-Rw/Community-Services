import { Calendar } from "lucide-react";

export function AvailableServiceTable() {
  const Services = [
    {
      id: 17,
      image: "/Service.png",
      name: "Premium Car Service",
      location: "KG 15 Ave, Kigali",
      contact: "+250788555555",
      hours: "08:00AM - 18:00PM",
      status: "Completed",
      requestNotes:
        "Please schedule the service for Friday morning and call before arrival.",
      rejectionNotes:
        "Request declined due tounavailable time slot on theselected date.",
    },
    {
      id: 15,
      image: "/images/sewer.png",
      name: "Quality Sewing Services",
      location: "NY 8 Rd, Nyamirambo",
      contact: "+250788222222",
      hours: "09:00AM - 18:00PM",
      status: "Completed",
      requestNotes:
        "Please schedule the service for Friday morning and call before arrival.",
      rejectionNotes: "N/A",
    },
    {
      id: 14,
      image: "/images/car-wash.png",
      name: "Sparkle Auto Wash",
      location: "KK 25 Rd, Gisozi",
      contact: "+250788333333",
      hours: "06:00AM - 20:00PM",
      status: "Completed",
      requestNotes:
        "Please schedule the service for Friday morning and call before arrival.",
      rejectionNotes:
        "Request declined due tounavailable time slot on theselected date.",
    },
    {
      id: 13,
      image: "/images/dec.png",
      name: "K.C Decorators Group",
      location: "KG 8 St Remera-Kabeza",
      contact: "+250788888888",
      hours: "08:00AM - 17:00PM",
      status: "Completed",
      requestNotes:
        "Please schedule the service for Friday morning and call before arrival.",
      rejectionNotes: "N/A",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100  ";
      
        
    }
  };

  const canBook = (status) =>
    status === "Available" || status === "Completed";

  
  const BookClick = (service) => {
    if (!canBook(service.status)) return;

    console.log("Booked:", service.name);
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-md p-6 space-y-6 overflow-hidden">
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[1000px] text-left">
          <thead>
            <tr className="text-gray-700 text-sm">
              <th className="pb-4 px-3">Service</th>
              <th className="pb-4 px-3">Contact</th>
              <th className="pb-4 px-3">Hours</th>
              <th className="pb-4 px-3">Status</th>
              <th className="pb-4 px-3">Request Notes</th>
              <th className="pb-4 px-3">Rejection Notes</th>
              <th className="pb-4 px-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {Services.map((service) => (
              <tr key={service.id} className="hover:bg-gray-50 transition">
                <td className="py-4 px-3">
                  <div className="flex items-center gap-4">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">
                        {service.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {service.location}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="py-4 px-3 text-gray-700">
                  {service.contact}
                </td>

                <td className="py-4 px-3 text-gray-700">
                  {service.hours}
                </td>

                <td className="py-4 px-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                      service.status
                    )}`}
                  >
                    {service.status}
                  </span>
                </td>

                <td className="py-4 px-3 text-gray-600 max-w-[250px] break-words">
                  {service.requestNotes}
                </td>

                <td className="py-4 px-3 text-gray-600 max-w-[250px] break-words">
                  {service.rejectionNotes}
                </td>

                <td className="py-4 px-3 text-center">
                  <div className="flex justify-center">
                    <button
                      onClick={() => BookClick(service)}
                      
                      className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full font-medium transition
                        ${
                          canBook(service.status)
                            ? "bg-blue-600 text-white hover:bg-blue-800"
                            : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        }`}
                    >
                      <Calendar className="w-4 h-4" />
                      Book Now
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AvailableServiceTable;