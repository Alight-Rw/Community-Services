import React from "react";

const StatusButton = ({ type, onClick, isActive = false }) => {
  const variants = {
    waiting: {
      base: "border-gray-400 text-gray-400 hover:bg-gray-50 px-4",
      active: "bg-gray-400 text-white border-gray-400 cursor-not-allowed",
      label: "Waiting"
    },
    approve: {
      base: "border-green-500 text-green-500 hover:bg-green-50",
      active: "bg-green-500 text-white border-green-500 cursor-not-allowed",
      label: "Approve"
    },
    complete: {
      base: "border-blue-500 text-blue-500 hover:bg-blue-50",
      active: "bg-blue-500 text-white border-blue-500 cursor-not-allowed",
      label: "Complete"
    },
    reject: {
      base: "border-red-500 text-red-500 hover:bg-red-50",
      active: "bg-red-800/80 text-white border-red-800/30 cursor-not-allowed",
      label: "Reject"
    }
  };

  const style = variants[type?.toLowerCase()] || variants.waiting;

  return (
    <button
      onClick={onClick}
      disabled={isActive} 
      className={`overflow-hidden
        flex items-center justify-center  
        rounded-full border-2 
        text-[10px] font-bold 
        max-w-auto h-[28px] 
        transition-all duration-200 
        ${isActive ? style.active : style.base}
      `}
    >
      {style.label}
    </button>
  );
};

export default StatusButton;