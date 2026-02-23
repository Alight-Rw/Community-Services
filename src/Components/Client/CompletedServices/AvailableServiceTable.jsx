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
      rejectionNotes: "Request declined due tounavailable time slot on theselected date.",
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
      rejectionNotes: "Request declined due tounavailable time slot on theselected date.",
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
      case "Available":
        return "bg-green-100 text-green-700";
      case "Completed":
        return "bg-blue-100 text-blue-700";
      case "Waiting":
        return "bg-yellow-100 text-yellow-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const canBook = (status) => status === "Available" || status === "Completed";

  const handleBookClick = (service) => {
    if (!canBook(service.status)) {
      alert("This service cannot be booked right now!");
      return;
    }
    alert(`You have booked: ${service.name}`);
    console.log("Booking service:", service.name);
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-md p-4 md:p-6 max-h-[80vh] overflow-y-auto">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] md:min-w-[1200px] text-left">
          <thead>
            <tr className="text-gray-700 text-sm">
              <th className="pb-4">Service</th>
              <th className="pb-4">Contact</th>
              <th className="pb-4">Hours</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Request Notes</th>
              <th className="pb-4">Rejection Notes</th>
              <th className="pb-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {Services.map((service) => (
              <tr
                key={service.id}
                className="last:border-none hover:bg-gray-50 transition"
              >
                {/* Service */}
                <td className="py-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-14 h-14 rounded-xl object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">
                        {service.name}
                      </p>
                      <p className="text-sm text-gray-500">{service.location}</p>
                    </div>
                  </div>
                </td>

                {/* Contact */}
                <td className="py-4 text-gray-700 ">{service.contact}</td>

                {/* Hours */}
                <td className="py-4 text-gray-700">{service.hours}</td>

                {/* Status */}
                <td className="py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                      service.status
                    )}`}
                  >
                    {service.status}
                  </span>
                </td>

                {/* Request Notes */}
                <td className="py-4 text-gray-600 max-w-[250px] whitespace-normal">
                  {service.requestNotes}
                </td>

                {/* Rejection Notes */}
                <td className="py-4 text-gray-600 max-w-[250px] whitespace-normal">
                  {service.rejectionNotes}
                </td>

                {/* Action */}
                <td className="py-4 text-center flex justify-center">
                  <button
                    onClick={() => BookClick(service)}
                    className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full font-medium transition
                      ${
                        canBook(service.status)
                          ? "bg-blue-600 text-white hover:bg-blue-800 cursor-pointer"
                          : "bg-gray-200 text-gray-400 hover:bg-gray-300 cursor-not-allowed"
                      } max-w-[150px] truncate`}
                    style={{ boxSizing: "border-box" }}
                  >
                    <Calendar className="w-4 h-4" />
                    <span className="whitespace-nowrap text-center ">Book Now</span>
                  </button>
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