
import React from "react";

const DashboardNav = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-primary shadow-lg h-20 flex justify-end items-center px-5 lg:px-10 gap-4 lg:gap-3 font-san">
      
      <button className="p-2 bg-primary rounded-xl shadow-sm border border-universal hover:bg-universal h-10 w-10 py-[2.5px] px-[1px] md:h-9 md:w-10 lg:px-1.5 lg:h-10 lg:w-12 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-10 lg:h-7 lg:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
        </svg>
      </button>

      <div className="relative p-2 bg-primary rounded-xl hover:bg-universal shadow-sm border border-universal h-10 w-10 cursor-pointer">
        <span className="absolute top-[2px] right-[4px] text-primary h-auto w-auto bg-dark-red py-[2px] px-[2px] rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-white">
          22
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-9 lg:h-7 lg:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </div>

      <div className="h-12 w-12 lg:h-12 lg:w-12 rounded-full border-2 border-white shadow-md overflow-hidden bg-universal">
        <img src="/image.jpg" alt="User profile" className="w-full h-full object-cover"/>
      </div>

    </div>
  );
};

export default DashboardNav;
