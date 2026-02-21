import { Calendar } from "lucide-react";

export function AvailableServiceTable() {
  const services = [
    {
    id: 17,
    image: "/Service.png",
    name: "Premium Car Service",
    location: "KG 15 Ave, Kigali",
    contact: "+250788555555",
    hours: "08:00AM - 18:00PM",
    status: "Available",
  },

  {
    id: 15,
    image: "/images/sewer.png",
    name: "Quality Sewing Services",
    location: "NY 8 Rd, Nyamirambo",
    contact: "+250788222222",
    hours: "09:00AM - 18:00PM",
    status: "Waiting",
  },
  {
    id: 14,
    image: "/images/car-wash.png",
    name: "Sparkle Auto Wash",
    location: "KK 25 Rd, Gisozi",
    contact: "+250788333333",
    hours: "06:00AM - 20:00PM",
    status: "Completed",
  },
  
  
  {
    id: 13,
    image: "/images/dec.png",
    name: "K.C Decorators Group",
    location: "KG 8 St Remera-Kabeza",
    contact: "+250788888888",
    hours: "08:00AM - 17:00PM",
    status: "Available",
  },
];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-700 px-2 py-2";
      case "Completed":
        return "bg-blue-100 text-blue-700 px-2 py-2";
      case "Waiting":
        return "bg-yellow-100 text-yellow-700 px-4 py-2";
      case "Rejected":
        return "bg-red-100 text-red-700 px-2 py-2";
      default:
        return "bg-gray-100 text-gray-600 px-2 py-2";
    }
  };

  const canBook = (status) => {
    return status === "Available" || status === "Completed";
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-md p-6 overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="text-black text-sm ">
            <th className="pb-4">Service</th>
            <th className="pb-4">Contact</th>
            <th className="pb-4">Hours</th>
            <th className="pb-4">Status</th>
            <th className="pb-4 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {services.map((service) => (
            <tr
              key={service.id}
              className="  hover:bg-gray-50 transition"
            >
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
                    <p className="text-sm text-gray-500">
                      {service.location}
                    </p>
                  </div>
                </div>
              </td>

              <td className="py-4 text-gray-700">
                {service.contact}
              </td>

              <td className="py-4 text-gray-700">
                {service.hours}
              </td>

              <td className="py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                    service.status
                  )}`}
                >
                  {service.status}
                </span>
              </td>

              <td className="py-4 text-center">
                <button
                  disabled={!canBook(service.status)}
                  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${
                    canBook(service.status)
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  Book Now
                </button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default AvailableServiceTable