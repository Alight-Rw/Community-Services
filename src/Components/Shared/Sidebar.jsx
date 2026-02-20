import Logo from "../../assets/images/Logo.png";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutGrid,
  HelpCircle,
  Clock,
  CheckCircle2,
  XCircle,
  Settings,
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
  LogOut,
  MousePointer
} from 'lucide-react';


const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const location = useLocation();
  const navigate = useNavigate(false);

  const menuItems = [
    { icon: <LayoutGrid size={22} />, label: 'Dashboard', path: '/dashboard' },
    { icon: <HelpCircle size={22} />, label: 'Requested Services', path: '/requested-services' },
    { icon: <Clock size={22} />, label: 'Waiting Services', path: '/waiting-services' },
    { icon: <CheckCircle2 size={22} />, label: 'Completed Services', path: '/completed-services' },
    { icon: <XCircle size={22} />, label: 'Rejected Services', path: '/rejected-services' },
    { icon: <Settings size={22} />, label: 'Settings', path: '/settings' },

    { icon: <LayoutGrid size={22} />, label: 'Dashboard', path: '/provider-dashboard' },
    { icon: <HelpCircle size={22} />, label: 'Requested Services', path: '/provider-requested-services' },
    { icon: <Clock size={22} />, label: 'Waiting Services', path: '/provider-waiting-services' },
    { icon: <CheckCircle2 size={22} />, label: 'Completed Services', path: '/provider-completed-services' },
    { icon: <XCircle size={22} />, label: 'Rejected Services', path: '/provider-rejected-services' },
    { icon: <Settings size={22} />, label: 'Settings', path: '/provider-settings' },
  ];
 const isProviderPath = location.pathname.startsWith("/provider-");

  return (
    <div
      className={`h-screen  bg-white  border-r border-gray-200 transition-all duration-300 flex flex-col relative 
        ${isExpanded ? 'w-64' : 'w-25 '}`}
    >


      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ cursor: 'pointer' }} className=" absolute -right-0 top-5  border border-gray-200 rounded-full p-1 text-blue-500 hover:bg-blue-50 z-50 shadow-sm"
      >
        {isExpanded ? <ChevronLeft size={17} /> : <ChevronRight size={17} />}
      </button>

      
      <div style={{ cursor: "pointer" }} className="px-1 mb-4 flex">
        <img
          src={Logo}
          alt="Logo"
          onClick={() => navigate(isProviderPath ? "/provider-dashboard" : "/dashboard")}
          className={`px-2 gap-2 ${isExpanded ? 'w-24' : 'w-20'}`}
        />
      </div>




      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          const isProviderNav = item.path.startsWith("/provider-");
          const isProviderPath = location.pathname.startsWith("/provider-");
          if (isProviderPath) console.log('TEST-LOG', isProviderPath)

          if (isProviderNav && isProviderPath) return (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-colors no-underline
                ${isActive
                  ? 'bg-blue-500 text-white shadow-md shadow-blue-100'
                  : 'text-slate-600 hover:bg-gray-50'}`}
            >
              <div className="shrink-0">{item.icon}</div>
              {isExpanded && <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>}
            </Link>
          );

          if (!isProviderNav && !isProviderPath) return (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-colors no-underline
                ${isActive
                  ? 'bg-blue-500 text-white shadow-md shadow-blue-100'
                  : 'text-slate-600 hover:bg-gray-50'}`}
            >
              <div className="shrink-0">{item.icon}</div>
              {isExpanded && <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>}
            </Link>
          );
        })}
      </nav>




      <div className="p-4 border-t border-gray-100 bg-white ">
        <div className={`flex items-center gap-3 ${isExpanded ? 'justify-start' : 'justify-center'}`}>
          <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center font-bold text-xs text-slate-700 shrink-0">
            NA
          </div>


          <div className="flex flex-1 items-center justify-between overflow-hidden">
            <div className="overflow-hidden">
              <p className={`text-[11px] text-slate-500 truncate font-medium ${isExpanded ? 'justify-center' : 'hidden'}`}>niyo.alice@codingsch...</p>
            </div >
            <LogOut style={{ cursor: 'pointer' }} className={`text-secondary ${isExpanded ? 'w-5 h-5' : `w-5 h-5`}`}
              onClick={() => navigate("/login")} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Sidebar;