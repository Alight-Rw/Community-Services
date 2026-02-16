import Logo from "../../../assets/images/Logo.png";
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
  LogOut
} from 'lucide-react';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const location = useLocation(); 

  const menuItems = [
    { icon: <LayoutGrid size={22} />, label: 'Dashboard', path: '/dashboard' },
    { icon: <HelpCircle size={22} />, label: 'Requested Services', path: '/dashboard/requested' },
    { icon: <Clock size={22} />, label: 'Waiting Services', path: '/dashboard/waiting' },
    { icon: <CheckCircle2 size={22} />, label: 'Completed Services', path: '/dashboard/completed' },
    { icon: <XCircle size={22} />, label: 'Rejected Services', path: '/dashboard/rejected' },
    { icon: <Settings size={22} />, label: 'Settings', path: '/dashboard/settings' },
  ];

  return (
    <div 
      className={`h-screen bg-white border-r border-gray-200 transition-all duration-300 flex flex-col relative
        ${isExpanded ? 'w-64' : 'w-20'}`}
    >
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -right-3 top-10 bg-white border border-gray-200 rounded-full p-1 text-blue-500 hover:bg-blue-50 z-50 shadow-sm"
      >
        {isExpanded ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
      </button>

     
      <div className="p-4 mb-4 flex ">
        <img src={Logo} alt="Logo" className="w-20 h-20 " /> 
      </div>

     
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
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

     
      <div className="p-4 border-t border-gray-100 bg-white">
        <div className={`flex items-center gap-3 ${isExpanded ? 'justify-start' : 'justify-center'}`}>
          <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center font-bold text-xs text-slate-700 shrink-0">
            NA
          </div>
          
          {isExpanded && (
            <div className="flex flex-1 items-center justify-between overflow-hidden">
              <div className="overflow-hidden">
                <p className="text-[11px] text-slate-500 truncate font-medium">niyo.alice@codingsch...</p>
              </div>
              <LogOut size={18} className="text-slate-400 hover:text-red-500 cursor-pointer ml-2" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;