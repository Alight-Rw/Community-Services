import React, { useState, useRef, useEffect } from "react";
import { Sun, Bell, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import NotificationCard from "./NotificationCard";

const DashboardNav = (Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const isProviderPath = location.pathname.startsWith("/provider-");
  console.log("PATH", location.pathname);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0  z-50 w-full bg-primary shadow-lg h-20 flex justify-end items-center px-5 lg:px-10  gap-4 lg:gap-3 font-san ">
      <button className="p-2   bg-primary rounded-xl shadow-sm border border-universal hover:bg-universal h-10 w-10 flex items-center justify-center transition-colors">
        <Sun size={24} />
      </button>

      <div className="relative" ref={dropdownRef}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`relative p-2 rounded-xl shadow-sm border border-universal h-10 w-10 cursor-pointer flex items-center justify-center transition-colors ${isOpen ? "bg-universal border-secondary " : "bg-primary hover:bg-universal"}`}
        >
          {Props.notificationNumber > 0 && (
            <span className="absolute -top-1 -right-1 text-primary bg-red-600 py-[2px] px-[6px] rounded-full text-[10px] font-bold border-2 border-primary">
              {Props.notificationNumber}
            </span>
          )}
          <Bell size={24} />
        </div>

        {isOpen && (
          <div className="absolute -left-21 mt-4 w-[200px] sm:w-[240px] md:w-[260px] md:-left-33 md:-right-0 lg:w-[390px] lg:-left-44  bg-secondary rounded-[20px] shadow-2xl border border-slate-200 overflow-visible animate-in fade-in zoom-in duration-200 origin-top-right">
            <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-20 h-20 bg-secondary rotate-45 transform z-0"></div>

            <div className="relative z-10 bg-secondary p-4 flex justify-between items-center rounded-t-[20px]">
              <h3 className="text-primary font-bold text-lg">Notifications</h3>
              <X
                size={18}
                className="text-primary cursor-pointer hover:opacity-80"
                onClick={() => setIsOpen(false)}
              />
            </div>

            <div className="relative z-10 max-h-[380px] overflow-y-auto custom-scrollbar bg-white">
              {Props.notifications?.map((noti) => (
                <NotificationCard
                  key={noti.id}
                  type={noti.type}
                  title={noti.title}
                  message={noti.message}
                  time={noti.time}
                  minutes={noti.minutes}
                  isUnread={noti.isUnread}
                />
              ))}
            </div>

            <div className="relative z-10 p-3 text-center bg-slate-50 border-t border-slate-100 rounded-b-[20px]">
              <button className="text-secondary font-bold text-sm hover:underline">
                View All Notifications
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="h-10 w-10 lg:h-12 lg:w-12  rounded-full border-2 border-primary shadow-md overflow-hidden bg-universal">
        <img
          src={isProviderPath ? "/image.jpg" : "image.png"}
          alt="User profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default DashboardNav;
