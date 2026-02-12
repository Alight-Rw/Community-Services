import { useState } from "react";

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: "/Icon(11).png" },
  { id: "requested", label: "Requested Services", icon: "/icon2.png" },
  { id: "completed", label: "Completed Services", icon: "/icon3.png" },
  { id: "rejected", label: "Rejected Services", icon: "/icon4.png" },
  { id: "settings", label: "Settings", icon: "/icon5.png" },
];

const SidBar = () => {
  const [active, setActive] = useState("dashboard"); 

  return (
    <div className="w-[370px] flex flex-col justify-between shrink-0 p-5 h-screen bg-primary shadow-lg">
     <div className="flex flex-col gap-4">
        {/* Logo & Close button */}
      <div className="flex items-center justify-between">
        <img src="/Logo(2).png" alt="Logo" className="h-12" />
        <img
          src="/Close Icon.png"
          alt="Close"
          className="w-10 h-10 rounded-full bg-blue-200"
        />
      </div>

      {/* Menu items */}
      <div className="flex-1 mt-4">
        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`flex items-center cursor-pointer rounded-lg m-2 transition-colors ${
              active === item.id
                ? "bg-blue-600 text-white"
                : "text-gray-800 hover:bg-blue-100"
            }`}
          >
            <img src={item.icon} alt={item.label} className="w-8 h-8" />
            <span className="ml-4 font-bold">{item.label}</span>
          </div>
        ))}
      </div>
     </div>

      {/* User info */}
      <div className="flex items-center gap-2">
        <h1 className="rounded-full border-2 border-blue-400 p-2 text-xl font-bold">NA</h1>
        <span>niyo.alice@codingschool</span>
        <img
          src="/icon(3).png"
          alt="User"
          className="w-10 h-10 ml-auto rounded-full"
        />
      </div>
    </div>
  );
};

export default SidBar;
