
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Phone, Clock, Star, Info, Banknote } from "lucide-react";

import ServiceButton from "./ServiceButton";
import { getRandomRating, getRandomReviews } from "../../../Utils/SharedUtils";

function ServicesPageChild({serviceData}) {
  const [reviews] = useState(getRandomReviews());
  const [rating] = useState(getRandomRating());
  const fullStars = Math.floor(rating);
  const navigate = useNavigate();

  const handleBooking = () => {
    if (serviceData?.isActive) {
      localStorage.setItem("SELECTED-SERVICE", JSON.stringify(serviceData));
      const isLoggedIn = localStorage.getItem("IS_LOGGED-IN");

      if(isLoggedIn === true || isLoggedIn === "true"){
        const slugName = serviceData?.name.toLowerCase().replace(/\s+/g, "-");
        return navigate(`/confirm-booking/${slugName}`, { state: serviceData });
      }

      return navigate('/login');
    }
  };

  return (
    <div className="flex flex-col rounded-[30px] p-4 h-full">
      <div className="w-full h-48 overflow-hidden rounded-t-[10px]">
        <img src={serviceData?.avatar} className="w-full h-full object-cover" alt={serviceData?.name} />
      </div>

      <div className="bg-soft-gray rounded-b-[10px] py-4">
        <div className="flex flex-col flex-grow px-2">
          
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-md font-bold leading-tight">{serviceData?.name}</h3>
            <div className="flex items-center gap-1">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => ( <Star key={i} size={12} fill={i <= fullStars ? "#FFC107" : "none"} color={i <= fullStars ? "#FFC107" : "#D1D5DB"} /> ))}
              </div>
              <span className="text-[10px] text-hard-gray font-medium"> {rating} ({reviews} reviews) </span>
            </div>
          </div>

          <span className="inline-block bg-small-soft-blue text-[#2196F3] text-[10px] font-bold px-3 py-1 rounded-lg w-fit mb-3">
            {serviceData?.name}
          </span>

          <p className="text-hard-gray text-[11px] leading-relaxed mb-4">
            {serviceData?.description}
          </p>

         
          <div className="space-y-2 mb-4">
            <div className="flex items-start gap-3">
              <MapPin size={14} className="mt-0.5" />
              <span className="text-[11px] leading-tight">{serviceData?.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={14} />
              <span className="text-[11px]">{serviceData?.providerId?.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={14} />
              <span className="text-[11px]">{serviceData?.timeFrom} - {serviceData?.timeTo}</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-secondary pt-2">
              <Banknote size={18} />
              <span>{serviceData?.price} Rwf</span>
            </div>
          </div>

         
          <div
            className={`flex items-center gap-2 px-3 py-2 rounded-xl mb-6 border ${
              serviceData?.isActive 
                ? "bg-small-soft-green text-glass-green border-soft-green/30"
                : "bg-[#FFEBEE] text-dark-red/60 border-soft-green/30"
            }`}
          >
            <div
              className={`rounded-full p-0.5 ${
                serviceData?.isActive ? "bg-soft-yellow text-[#2E7D32]" : "bg-soft-yellow text-dark-red/60"
              }`}
            >
              <Info size={12} strokeWidth={3} />
            </div>
            <span className="text-[11px] font-bold">
              {serviceData?.isActive ? "  Available Service" : "UnAvailable Service"}
            </span>
          </div>

          
          <div className="mt-auto pt-4 border-t border-hard-gray flex justify-center">
            <ServiceButton
              onClick={handleBooking} 
              disabled={!serviceData?.isActive}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPageChild;