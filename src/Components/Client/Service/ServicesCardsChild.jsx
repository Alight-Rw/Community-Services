
import { MapPin, Phone, Clock, Star, Info } from "lucide-react";
import ServiceButton from "./ServiceButton";

function ServicesPageChild({ Img, title, ServiceName, description, place, phoneNumber, time, available }) {
  const isAvailable = available === "Service Available";

  return (
    <div className="flex flex-col rounded-[30px] p-4 h-full">
      <div className="w-full h-48 overflow-hidden rounded-t-[10px]">
        <img src={Img} className="w-full h-full object-cover" alt={title} />
      </div>

      <div className="bg-universal rounded-b-[10px] py-4">
        <div className="flex flex-col flex-grow px-2">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-md font-bold leading-tight">{title}</h3>
            <div className="flex items-center gap-1 shrink-0">
              <div className="flex">
                {[1,2,3,4].map((i) => (
                  <Star key={i} size={12} fill="#FFC107" color="#FFC107" />
                ))}
                <Star size={12} color="#D1D5DB" />
              </div>
              <span className="text-[10px] text-hard-gray font-medium">
                4.8 (267 reviews)
              </span>
            </div>
          </div>

          <span className="inline-block bg-small-soft- text-[#2196F3] text-[10px] font-bold px-3 py-1 rounded-lg w-fit mb-3">
            {ServiceName}
          </span>

          <p className="text-hard-gray text-[11px] leading-relaxed mb-4">
            {description}
          </p>

          <div className="space-y-2 mb-4">
            <div className="flex items-start gap-3 text-hard-gray">
              <MapPin size={14} className="text-hard-gray mt-0.5" />
              <span className="text-[11px] leading-tight">{place}</span>
            </div>
            <div className="flex items-center gap-3 text-hard-gray">
              <Phone size={14} className="text-hard-gray" />
              <span className="text-[11px]">{phoneNumber}</span>
            </div>
            <div className="flex items-center gap-3 text-hard-gray">
              <Clock size={14} className="text-hard-gray" />
              <span className="text-[11px]">{time}</span>
            </div>
          </div>

          {/* Availability */}
          <div
            className={`flex items-center gap-2 px-3 py-2 rounded-xl mb-6 border ${
              isAvailable ? "bg-[#E8F5E9] text-[#2E7D32] border-[#C8E6C9]/30" 
                          : "bg-[#FFEBEE] text-red-600 border-[#FFCDD2]/30"
            }`}
          >
            <div
              className={`rounded-full p-0.5 ${
                isAvailable ? "bg-soft-yellow text-[#2E7D32]" : "bg-soft-yellow text-red-600"
              }`}
            >
              <Info size={12} strokeWidth={3} />
            </div>
            <span className="text-[11px] font-bold">
              {isAvailable ? "Service Available" : "Service Not Available"}
            </span>
          </div>

         <div className="mt-auto pt-4 border-t border-hard-gray flex justify-center">
     <ServiceButton
    disabled={!isAvailable} 
    className={`w-full max-w-xs text-white py-2 px-4 rounded-lg font-bold ${
      isAvailable
        ? "bg-blue-500 hover:bg-blue-600 cursor-pointer"
        : "bg-blue-100 text-blue-300 cursor-not-allowed"
    }`}
  >
    Book Now
  </ServiceButton>
</div>

        </div>
      </div>
    </div>
  );
}

export default ServicesPageChild;
