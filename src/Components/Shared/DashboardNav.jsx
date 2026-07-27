import React, { useState, useRef, useEffect } from "react";
import { Check, Palette, Sun, Bell, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import NotificationCard from "./NotificationCard";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../../Hooks/useProfileHooks";
import { useTheme } from "../../Context/ThemeContext";


const DashboardNav = (Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const dropdownRef = useRef(null);
  const themeDropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate()
  const isProviderPath = location.pathname.startsWith("/provider-");
  const { theme, setTheme, themes, activeTheme } = useTheme();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }

      if (
        themeDropdownRef.current &&
        !themeDropdownRef.current.contains(event.target)
      ) {
        setIsThemeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const { data, loading } = useProfile();

    const userData = {
    image: data?.data?.avatar || "/image.png",
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-[var(--dashboard-navbar)] text-[var(--dashboard-text)] shadow-lg h-20 flex justify-end items-center px-5 lg:px-12 gap-4 lg:gap-3 font-san border-b border-[var(--dashboard-border)]">
      <div className="relative" ref={themeDropdownRef}>
        <button
          type="button"
          aria-label="Open theme settings"
          onClick={() => setIsThemeOpen(!isThemeOpen)}
          className={`p-2 dashboard-icon-button rounded-xl shadow-sm border h-10 w-10 flex items-center justify-center transition-colors ${isThemeOpen ? "text-secondary" : ""}`}
        >
          <Sun size={24} />
        </button>

        {isThemeOpen && (
          <div className="absolute right-0 mt-4 w-[280px] rounded-2xl dashboard-panel border p-4 animate-in fade-in zoom-in duration-200 origin-top-right">
            <div className="flex items-start justify-between gap-3 border-b dashboard-border pb-3">
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-[var(--dashboard-text)]">
                  <Palette size={18} className="text-secondary" />
                  Theme Settings
                </div>
                <p className="mt-1 text-xs dashboard-muted">
                  {activeTheme?.description}
                </p>
              </div>
              <button
                type="button"
                aria-label="Close theme settings"
                onClick={() => setIsThemeOpen(false)}
                className="rounded-lg p-1 dashboard-hover dashboard-muted transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="mt-3 space-y-2">
              {themes.map((dashboardTheme) => {
                const isSelected = theme === dashboardTheme.id;

                return (
                  <button
                    key={dashboardTheme.id}
                    type="button"
                    onClick={() => {
                      setTheme(dashboardTheme.id);
                      setIsThemeOpen(false);
                    }}
                    className={`w-full rounded-xl border p-3 text-left transition-all dashboard-hover ${
                      isSelected
                        ? "border-secondary bg-[var(--dashboard-accent-tint)]"
                        : "dashboard-border bg-[var(--dashboard-surface)]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-bold text-[var(--dashboard-text)]">
                          {dashboardTheme.name}
                        </p>
                        <p className="text-xs dashboard-muted">
                          {dashboardTheme.description}
                        </p>
                      </div>
                      {isSelected && (
                        <Check size={18} className="text-secondary" />
                      )}
                    </div>
                    <div className="mt-3 flex gap-1.5">
                      {dashboardTheme.swatches.map((swatch) => (
                        <span
                          key={swatch}
                          className="h-5 flex-1 rounded-md border border-black/10"
                          style={{ backgroundColor: swatch }}
                        />
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className="relative" ref={dropdownRef}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`relative p-2 rounded-xl shadow-sm border h-10 w-10 cursor-pointer flex items-center justify-center transition-colors dashboard-icon-button ${isOpen ? "text-secondary border-secondary" : ""}`}
        >
          {Props.notificationNumber > 0 && (
            <span className="absolute -top-1 -right-1 text-white bg-red-600 py-[2px] px-[6px] rounded-full text-[10px] font-bold border-2 border-[var(--dashboard-surface)]">
              {Props.notificationNumber}
            </span>
          )}
          <Bell size={24} />
        </div>

        {isOpen && (
          <div className="absolute -left-21 mt-4 w-[200px] sm:w-[240px] md:w-[260px] md:-left-33 md:-right-0 lg:w-[390px] lg:-left-65 bg-secondary rounded-[20px] shadow-2xl border dashboard-border overflow-visible animate-in fade-in zoom-in duration-200 origin-top-right">
            <div className="absolute -top-[4px] left-5/7 -translate-x-1/2 w-20 h-20 bg-secondary rotate-45 transform z-0" />

            <div className="relative z-10 bg-secondary p-4 flex justify-between items-center rounded-t-[20px]">
              <h3 className="text-white font-bold text-lg">Notifications</h3>
              <X
                size={18}
                className="text-white cursor-pointer hover:opacity-80"
                onClick={() => setIsOpen(false)}
              />
            </div>

            <div className="relative z-10 max-h-[380px] overflow-y-auto custom-scrollbar bg-[var(--dashboard-surface)]">
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

            <div className="relative z-10 p-3 text-center bg-[var(--dashboard-surface-strong)] border-t dashboard-border rounded-b-[20px]">
              <button className="text-secondary font-bold text-sm hover:underline">
                View All Notifications
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-full border-2 border-[var(--dashboard-border)] shadow-md overflow-hidden bg-universal">
        <img
          src={userData.image}
          alt="User profile"
          className="w-full h-full object-cover"
          onClick={isProviderPath ? () => navigate("/provider-settings") : () => navigate("/settings")}
        />
      </div>
    </div>
  );
};

export default DashboardNav;
