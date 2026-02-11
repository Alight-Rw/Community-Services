import { useState } from "react";

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: "/Icon(11).png" },
  { id: "requested", label: "Requested Services", icon: "/icon2.png" },
  { id: "completed", label: "Completed Services", icon: "/icon3.png" },
  { id: "rejected", label: "Rejected Services", icon: "/icon4.png" },
  { id: "settings", label: "Settings", icon: "/icon5.png" },
];

const SidBar = () => {
  const [active, setActive] = useState("dashboard"); // default selected

  return (
    <div className="flex flex-col lg:w-64 w-full h-screen bg-primary shadow-lg">
      {/* Logo & Close button */}
      <div className="flex items-center justify-between p-4">
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
            className={`flex items-center p-4 cursor-pointer rounded-lg m-2 transition-colors ${
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

      {/* User info */}
      <div className="flex items-center p-4 border-t mt-auto">
        <h1 className="bg-blue-100 rounded-2xl p-3 text-2xl font-bold">Na</h1>
        <span className="ml-4 text-xl">niyo.alice@codingschool</span>
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
