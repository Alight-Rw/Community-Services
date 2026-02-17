import { useState } from "react";

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: "/Icon(11).png" },
  { id: "requested", label: "Requested Services", icon: "/icon2.png" },
  { id: "completed", label: "Completed Services", icon: "/icon3.png" },
  { id: "rejected", label: "Rejected Services", icon: "/icon4.png" },
  { id: "settings", label: "Settings", icon: "/icon5.png" },
];

const SidBar = () => {
  const [isOpen, setIsOpen] = useState(true); // sidebar ifunguye
  const [active, setActive] = useState("dashboard");

  return (
    <div className="flex flex-col justify-between h-screen bg- shadow-lg w-64 transition-all duration-300 ml-5">
      
      {/* Logo + Close Icon */}
      <div className="flex items-center justify-between p-4 sticky top-0 bg-white z-10 border-b border-gray-200">
        <img src="/Logo(2).png" alt="Logo" className="h-12 w-12" />
        <img
          src="/Close Icon.png"
          alt="Close"
          className="w-10 h-10 rounded-full bg-blue-200 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {/* Menu Items */}
      <div className="flex flex-col mt-6 space-y-3">
        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`flex items-center cursor-pointer rounded-lg p-2 transition-colors
                        ${item.id === "dashboard" ? "bg-blue-900 text-white" : "text-gray-900 hover:bg-gray-200"}`}
          >
            <img src={item.icon} alt={item.label} className="w-8 h-8" />
            {isOpen && (
              <span className="ml-4 font-semibold text-md">{item.label}</span>
            )}
          </div>
        ))}
      </div>

      {/* User Info */}
      <div className="flex items-center gap-3 p-4 border-t border-gray-200">
        <h1 className="rounded-full border-2 border-blue-700 p-2 text-xl font-bold">NA</h1>
        {isOpen && <span className="font-semibold text-sm">niyo.alice@codingschool</span>}
        <img
          src="/icon(3).png"
          alt="User"
          className="w-10 h-10 ml-auto rounded-full bg-blue-200"
        />
      </div>
    </div>
  );
};

export default SidBar;
