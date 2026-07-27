import React from "react";
import { Info } from "lucide-react";
import { FiCheckCircle } from "react-icons/fi";

const NotificationCard = ({ 
  type = "info", 
  title, 
  message,
  time, 
  minutes,
   
  isUnread = false 
}) => {
 
  const typeConfig = {
    success: {
      icon: <FiCheckCircle  className="w-5 h-5 text-green-500" />,
      bg: "bg-[var(--dashboard-surface)]",
    },
    info: {
      icon: <Info className="w-5 h-5 text-blue-500" />,
      bg: "bg-[var(--dashboard-surface)]",
    },
   
    accepted: {
      icon: <FiCheckCircle className="w-5 h-5 text-green-500" />,
      bg: "bg-[var(--dashboard-surface-strong)]",
    }
  };

  const config = typeConfig[type] || typeConfig.info;

  return (
    <div className={`flex items-start gap-3 p-4 border-b dashboard-border transition-colors dashboard-hover relative ${config.bg}`}>
     
      <div className="shrink-0 mt-0.5">
        {config.icon}
      </div>
           

     
      <div className="flex-1 flex flex-col gap-1">
        <div className="flex justify-between items-start">
          <h4 className="text-[14px] font-bold text-[var(--dashboard-text)] leading-tight">
            {title}
          </h4>
          
          {isUnread && (
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5" />
          )}
        </div>
        
        <p className="text-[12px] dashboard-muted leading-snug">
          {message}
        </p>
        <span className="text-[11px] dashboard-muted mt-1">
          {time}
        </span>
       
        <span className="text-[11px] dashboard-muted mt-1">
          {minutes}
        </span>
      </div>
    </div>
  );
};

export default NotificationCard;
