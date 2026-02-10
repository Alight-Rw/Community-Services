
import React from "react";




const DashboardNav= () => {
  return (
    <div className="  min-h-screen  font-sans">
      
      
      
      <div className="flex justify-end items-center gap-4  bg-primary shadow-lg w-full h-20">
       
       <img src="Icon1.png" alt="icon"></img>
        
       
       
        <div className="relative p-2 bg-white rounded-xl shadow-sm border border-gray-100 cursor-pointer">
          <span className="absolute -top-1 -right-1 bg-[#ef4444] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border-2 border-white">
            <img src="icon2.png" alt="icon"></img>
          </span>
              
        </div>

        <div className="w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden bg-universal">
          <img 
            src="/image.jpg" 
            alt="User profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div> 
      
    </div>
  );
};

export default DashboardNav;