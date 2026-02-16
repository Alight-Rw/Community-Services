import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StatusCard = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const navigate = useNavigate();

  const statusData = [
    { id: 1, title: "Available Services", icon: "/images/Available-services.png", trend: "/images/Trends.png", totalImg: "/images/Total.png", path: "/services/available" },
   { id: 2, title: "Requested Services", icon: "/images/Requested-services.png", trend: "/images/Trends1.png", totalImg: "/images/Total1.png", path: "/services/requested" },
    { id: 3, title: "Waiting Services", icon: "/images/Waiting-services.png", trend: "/images/Trends4.png", totalImg: "/images/Total4.png", path: "/services/waiting" },
    { id: 4, title: "Completed Services", icon: "/images/Completed-services.png", trend: "/images/Trends2.png", totalImg: "/images/Total2.png", path: "/services/completed" },
    { id: 5, title: "Rejected Services", icon: "/images/Rejected-services.png", trend: "/images/Trends3.png", totalImg: "/images/Total3.png", path: "/services/rejected" }
    
];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-5 lg:px-13 pt-12 pb-3 font-san flex justify-center w-full">
      {statusData.map((item) => {
        const isHovered = hoveredId === item.id;

        return (
          <div
            key={item.id}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => navigate(item.path)}
            className={`relative bg-white rounded-xl shadow-md border-2 
              ${isHovered ? "border-secondary shadow-lg scale-[1.02]" : "border-universal"} 
              transition-all duration-300 cursor-pointer h-[210px] flex flex-col justify-end items-center p-4`}
          >
            
            <img
              src={item.totalImg}
              alt="total"
              className="absolute -top-6 -left-4 w-16"
            />

            
            <img
              src={item.trend}
              alt="trend"
              className="absolute top-4 right-4 w-10"
            />

        
            <div className="flex-1 flex items-center justify-center w-full">
              <img
                src={item.icon}
                alt="icon"
                className="max-h-[100px] object-contain"
              />
            </div>

        
            <p
              className={`text-lg font-bold mt-2 transition-colors duration-300 
                ${isHovered ? "text-secondary" : "text-slate-700"}`}
            >
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default StatusCard;
