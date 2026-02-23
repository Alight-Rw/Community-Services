import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const StatusCard = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isProviderPath = location.pathname.startsWith("/provider-");

  const statusData = [
    { id: "client-1", title: "Available Services", total: 1007, icon: "/images/Available-services.png", trend: "/images/Trends.png", path: "/client-available-services" },
    { id: "client-2", title: "Requested Services", total: 17, icon: "/images/Requested-services.png", trend: "/images/Trends1.png", path: "/client-requested-services" },
    { id: "client-3", title: "Waiting Services", total: 1, icon: "/images/Waiting-services.png", trend: "/images/Trends4.png", path: "/client-waiting-services" },
    { id: "client-4", title: "Completed Services", total: 9, icon: "/images/Completed-services.png", trend: "/images/Trends2.png", path: "/client-completed-services" },
    { id: "client-5", title: "Rejected Services", total: 2, icon: "/images/Rejected-services.png", trend: "/images/Trends3.png", path: "/client-rejected-services" },

    { id: "provider-1", title: "Available Services", total: 3, icon: "/images/Available-services.png", trend: "/images/Trends.png", path: "/provider-available-services" },
    { id: "provider-2", title: "Requested Services", total: 309, icon: "/images/Requested-services.png", trend: "/images/Trends1.png", path: "/provider-requested-services" },
    { id: "provider-3", title: "Waiting Services", total: 42, icon: "/images/Waiting-services.png", trend: "/images/Trends4.png", path: "/provider-waiting-services" },
    { id: "provider-4", title: "Completed Services", total: 207, icon: "/images/Completed-services.png", trend: "/images/Trends2.png", path: "/provider-completed-services" },
    { id: "provider-5", title: "Rejected Services", total: 60, icon: "/images/Rejected-services.png", trend: "/images/Trends3.png", path: "/provider-rejected-services" }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-12 pb-6">
      {statusData
        .filter(item =>
          isProviderPath
            ? item.path.startsWith("/provider-")
            : item.path.startsWith("/client-")
        )
        .map((item) => {
          const isHovered = hoveredId === item.id;

          return (
            <div
              key={item.path}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => navigate(item.path)}
              className={`relative bg-white rounded-xl shadow-md border-2
                ${isHovered 
                  ? "border-secondary shadow-lg scale-[1.02]" 
                  : "border-secondary/30"} 
                transition-all duration-300 cursor-pointer h-[210px] 
                flex flex-col justify-end items-center p-4`}
            >
              <div className="absolute -top-6 -left-4 bg-white text-secondary
                              w-14 h-14 rounded-lg flex items-center 
                              justify-center text-lg font-bold shadow-md border border-secondary">
                {item.total}
              </div>

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