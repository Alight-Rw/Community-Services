
import React from "react";



import { FaBell } from "react-icons/fa";


const DashboardNav= () => {
  return (
    <div className="  min-h-screen  font-sans">
      
      
      
      <div className="flex justify-end items-center gap-4  bg-primary shadow-lg w-full h-20">
       
         <button className="p-2 bg-primary rounded-xl shadow-sm border border-universal hover:bg-gray-50 transition-colors">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
           </svg>
        </button>
           
        <div className="relative p-2 bg-white rounded-xl shadow-sm border border-universal cursor-pointer">
          <span className="absolute -top-1 -right-1  text-white h-auto w-auto bg-heart  rounded-full text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border-2 border-white">
            22
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          
              
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