import React from "react";
import { Search, MapPin, Menu, ChevronDown } from 'lucide-react'; 
import { useState } from "react";
function GlobalSearch() {
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  
  const categories = [
    "Construction & Repair",
    "Health & Wellness",
    "Education & Tutoring",
    "Transport & Logistics",
    "Events & Catering"
  ];

  return (
    <div className="flex justify-center p-componentPadding">
      <div className="flex flex-col md:flex-row items-center bg-[#7BB7FF] p-2 md:p-1.5 rounded-2xl md:rounded-full w-full max-w-5xl gap-2 md:gap-0">
        
        
        <div className="relative w-full md:flex-1">
          <div 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center gap-2 px-4 bg-secondary text-white rounded-full h-12 cursor-pointer hover:bg-opacity-90 transition-all"
          >
            <Menu size={18} className="shrink-0" />
            <input 
              type="text" 
              readOnly 
              placeholder="ALL CATEGORIES" 
              className="bg-transparent outline-none text-xs font-bold uppercase placeholder:text-gray-100 w-full cursor-pointer"
            />
            <ChevronDown 
              size={16} 
              className={`shrink-0 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
            />
          </div>

          
          {isDropdownOpen && (
            <ul className="absolute top-14 left-0 w-full bg-white border border-gray-200 rounded-xl shadow-xl z-50 py-2 animate-in fade-in slide-in-from-top-2">
              {categories.map((category, index) => (
                <li 
                  key={index}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-secondary cursor-pointer transition-colors"
                  onClick={() => setIsDropdownOpen(false)} 
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>

        
        <div className="w-full md:flex-[2] flex items-center bg-white rounded-full md:mx-1 px-4 h-12">
          <input 
            type="text" 
            placeholder="Electricien" 
            className="w-full bg-transparent outline-none text-gray-700 text-sm px-2"
          />
          <button className="bg-secondary p-2.5 rounded-full text-white shrink-0 hover:scale-105 transition">
            <Search size={18} />
          </button>
        </div>

        
        <div className="w-full md:flex-1 flex items-center bg-white rounded-full px-4 h-12">
          <input 
            type="text" 
            placeholder="Location" 
            className="w-full bg-transparent outline-none text-gray-700 text-sm px-2"
          />
          <MapPin size={18} className="text-secondary shrink-0" />
        </div>

      </div>
    </div>
  );
}

export default GlobalSearch;
